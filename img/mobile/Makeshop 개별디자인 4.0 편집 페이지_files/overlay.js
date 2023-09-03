(function ($) {
    $(function () {
        var _t = $('#wrap') && $('#wrap').length > 0 ?  $('#wrap') : $('body');
        var _overlay = $('<span id="overlay"></span>').css({
                           'z-index': '3',
                           'position': 'absolute',
                           'left': '0px',
                           'top': '0px',
                           'background': '#000',
                           'opacity': '0.4',
                           'display': 'none'
                        }).appendTo(_t.css('position', 'relative'));

        $.extend({
            overlay_show: function () {
                _overlay_w = $(document).width();
                _overlay_h  = $(document).height();
                _overlay.css('width', _overlay_w).css('height', _overlay_h).show();
            },
            overlay_hide: function () {
                _overlay.hide();
            }
        });
    });
})(jQuery);
