/*
 * Equal height v1.0.1
 * http://webgadgets.net/plugins/equal-height
 *
 * Copyright 2017, WebGadgets
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2017-02-09
 */
(function ($) {
    $.fn.wgEqualHeight = function () {
        return this.each(function () {
            var this_el = this;

            if (isIE() && isIE() <= 9) {
                $(window).on("load resize", function (e) {
                    var elmtns = $(this_el).children();
                    var prevTop = null;
                    var maxHeight = 0;
                    var elements = [];

                    elmtns.height('auto').each(function () {
                        var thisTop = this.offsetTop;
                        var thisHeight = $(this).height();

                        if (prevTop !== null && prevTop != thisTop) {
                            $(elements).height(maxHeight);
                            maxHeight = thisHeight;
                            elements = [];
                        }
                        maxHeight = (maxHeight > thisHeight) ? maxHeight : thisHeight;

                        prevTop = this.offsetTop;
                        elements.push(this);
                    });

                    $(elements).height(maxHeight);
                });
            } else {
                $(this_el).css({
                    'display': 'flex',
                    'flex-wrap': 'wrap'
                });
            }
        });

        function isIE() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        }
    };
}(jQuery));