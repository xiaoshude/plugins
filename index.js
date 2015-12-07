/**
 * Created by fjywan on 15/12/6.
 */


// keep semi-colon for safety purpose when concatenated
;
(function($) {

    /**
     * construct a extensible sidebar
     * @param elem {string} - The selector of the root sidebar element.
     * @param options {object} - the init status of sidebar and the seletor of toggle btn
     * @constructor
     */

    var ExtensibleSideBar = function(elem, options) {
        this.$elem = $(elem);
        // for supporting customization of options form HTML5 data attributes
        var metadata = this.$elem.data("sidebar-options");
        this.config = $.extend({}, this.defaults, options,
            metadata);
        this.state = this.config.state;
        this.$toggleBtn = this.$elem.find(this.config.toggleBtn);

        this.init();
    };

    ExtensibleSideBar.prototype = {
        defaults: {
            state: "opened",
            toggleBtn: '.toggle-sidebar'
        },

        init: function() {
            this.$elem.addClass('sidebar-' + this.state);
            this.$toggleBtn.bind('click', function() {
                this.toggle();
            });
        },

        open: function() {
            this.$elem.removeClass('sidebar-closed');
            this.$elem.addClass('sidebar-opened');
            return this;
        },

        close: function() {
            this.$elem.removeClass('sidebar-opened');
            this.$elem.addClass('sidebar-closed');
            return this;
        },

        toggle: function() {
            if (this.state === 'opened') {
                this.close();
                this.state = 'closed';
            } else {
                this.open();
                this.state = 'opened';
            }
            return this;
        }

    };

    ExtensibleSideBar.defaults = ExtensibleSideBar.prototype.defaults;

})(jQuery);