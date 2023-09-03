/**
 * select menu library
 * @auther 김남곤(duellist)
 * @email duellist@cocen.com
 * @since 2011-03-03
 */
(function($){
    $.select_menu = function(el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        base.code = Array();

        // Add a reverse reference to the DOM object
        base.$el.data('select_menu', base);

        base.init = function() {
            base.options = $.extend({}, $.select_menu.defaultOptions, options);
            // Put your initialization code here

            if (base.$el.children().length == 0) {
                base.$el.empty();
                base.add_select();
            }

            if (base.options.code.length > 0) {
                $.each(base.options.code, function(i, v) {
                    base.code.push(v);
                });
                base.$el.empty();
                base.add_select();
            }

            $('select[name="' + base.options.element + '"]', base.$el).live('change', function() {
                var _select = $(this);
                var _option = $(this).find('option:selected').metadata();
                var _index = _select.index();

                // Run Function before
                base.options.before(_select);

                if ($.trim(_select.val()) != '') {
                    $('select[name="' + base.options.element + '"]', base.$el).each(function(idx) {
                        if (_index < idx) {
                            $(this).remove();
                        }
                    });

                    // Run Function change
                    base.options.change(_select);

                    if (base.options.mode == 'pop' && _option.chk_add !== undefined && _option.chk_add === true) {
                        // Run Function finish
                        base.options.finish(_select);
                        return false;
                    }

                    if (_option.chk_add !== true && _option.chk_child !== true) {
                        // Run Function finish
                        base.options.finish(_select);
                        return false;
                    }

                    base.make_code(_index);
                    base.add_select();
                }

                // Run Function after
                base.options.after(_select);
            });
        };

        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters) {
        //
        // };

        base.add_select = function() {
            if (base.options.max_depth > $('select[name="' + base.options.element + '"]', base.$el).length) {
                base.get_menu($('<select name="' + base.options.element + '" style="display: none;"></select>').appendTo(base.$el));
            }
            return false;
        };

        base.get_menu = function(el) {
            $.ajax({
                url: 'neodesign_select_menu.action.html',
                type: 'POST',
                data: {
                    get_mode: base.options.mode,
                    code: base.code,
                    dgnset_id: base.options.dgnset_id,
                    page_type: base.options.page_type,
                    design_id: base.options.design_id
                },
                dataType: 'json',
                async: false,
                success: function(res) {
                    if (res.success) {
                        $(el).show().append('<option value="">선택하세요</option>');

                        // 메뉴가 있다면..
                        if (res.data.menu !== undefined) {
                            $.each(res.data.menu, function(i, v) {
                                _design_id = (v.option_check == false && v.option_child == false) ? "design_id: '1', " : '' ;
                                $(el).append('<option value="' + v.option_value + '" class="{' + _design_id + 'chk_add: ' + v.option_check + ', chk_child: ' + v.option_child + '}">' + v.option_title + '</option>');
                            });
                        }

                        // 페이지가 있다면..
                        if (res.data.page !== undefined) {
                            $.each(res.data.page, function(i, v) {
                                $(el).append('<option value="' + v.option_value + '" class="{design_id: \'' + v.option_id + '\'}">' + v.option_title + '</option>');
                            });
                        }
                    } else {
                        $(el).remove();
                    }
                } // success
            }); // ajax
            return false;
        };

        base.make_code = function(idx) {
            base.code = Array();
            $.each($('select[name="' + base.options.element + '"]', base.$el), function(i, obj) {
                if (i > idx) {
                    $(obj).remove();
                } else {
                    base.code[i] = $(obj).val();
                }
            });
            return false;
        };

        // Run initializer
        base.init();
    };

    $.select_menu.defaultOptions = {
        mode: 'list', // list or pop
        code: {},
        dgnset_id: 0,
        design_id: 0,
        max_depth: 4,
        page_type: '',
        element: 'select_menu[]',
        finish: function() {},
        change: function() {},
        before: function() {},
        after: function() {}
    };

    $.fn.select_menu = function(options) {
        return this.each(function(){
            (new $.select_menu(this, options));
        });
    };
})(jQuery);
