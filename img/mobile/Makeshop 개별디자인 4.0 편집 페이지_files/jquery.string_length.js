(function($){
    $.string_length = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("string_length", base);

        base.init = function(){
            base.options = $.extend({},$.string_length.defaultOptions, options);

            // Put your initialization code here
            base.$el.bind('textchange', function() {
                var _value = $(this).val();
                var _length = base.bytes(_value);
                if (base.bytes(_value) > base.options.max_length) {
                    _length = base.options.max_length;
                    _value = base.cut(_value, base.options.max_length);
                    alert('한글 ' + (base.options.max_length / 2) + '자, 영문 ' + base.options.max_length + '자 까지 입력 가능합니다.');
                    setTimeout(function() {
                        base.$el.val(_value);
                    }, 1);
                    return false;
                }
                base.options.now_length.text(_length);
            });
        };

        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        //
        // };

        base.cut = function(str, len) {
            var l = 0;
            for (var i = 0; i < str.length; i++) {
                l += (str.charCodeAt(i) > 128) ? 2 : 1;
                if (l > len) {
                    return str.substring(0, i);
                }
            }
            return str;
        };

        base.bytes = function(str) {
            var l = 0;
            for (var i = 0; i < str.length; i++) {
                l += (str.charCodeAt(i) > 128) ? 2 : 1;
            }
            return l;
        };

        // Run initializer
        base.init();
    };

    $.string_length.defaultOptions = {
        now_length: 0,
        max_length: 30
    };

    $.fn.string_length = function(options){
        return this.each(function(){
            (new $.string_length(this, options));
        });
    };
})(jQuery);
