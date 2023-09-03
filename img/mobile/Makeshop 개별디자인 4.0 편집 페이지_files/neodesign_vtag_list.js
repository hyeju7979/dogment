// 검색용 global 변수
var _search_params = {};
(function($) {
    $.extend({
         group_scroll: function() {
            var _container = $('#tabUnitTagList');
            var _headers = _container.find('.grp-tit');
            var zIndex = 2;
            var containerTop = 116;
            var _fakeHeader = _headers.filter(':first').clone();
            
            _headers.each(function () {
                var _header = $(this), height = _header.css('height'), width = _header.css('width');
                _header.css({ position: 'absolute', zIndex: zIndex });

                zIndex += 2;

                var _spacer = _header.after('<div />').next();
                _spacer.css({ height: height, width: width });
            });

            _fakeHeader.css({ zIndex: 1, position: 'absolute', width: parseInt(_headers.filter(':first').css('width').substring(0, 3))+1+'px' });
            _container.before(_fakeHeader.html(_headers.filter(':first').html()));

            _container.scroll(function () {
                _headers.each(function () {
                    var _header = $(this);
                    var top = _header.offset().top;

                    if (top < containerTop) {
                        _fakeHeader.html(_header.html());
                        _fakeHeader.css({ zIndex: parseInt(_header.css('zIndex'))+1 });
                    }
                });
            });
        },
        list_event: function() {
            var _control_html = '';
            _control_html += '<div id="tag_control" class="btns">';
            _control_html += '<span id="tag_copy" class="btn-cm btn-h19-marine"><button type="button">태그복사</button></span>\n';
            _control_html += '<span id="tag_edit" class="btn-cm btn-h19-green"><button type="button">편 집</button></span>\n';
            _control_html += '<span id="tag_view" class="btn-cm btn-h19-orange"><button type="button">보 기</button></span>\n';
            _control_html += '<span id="tag_get" class="btn-cm btn-h19-purple"><button type="button">소스 가져오기</button></span>\n';
            _control_html += '</div>';

            var _tag_control = $(_control_html);
            $('.tag_list').unbind('hover').hover(function() {
                var _this = $(this);
                $('#tag_control').remove();
                _this.append(_tag_control);
                $(this).find('.btns').show();

                if (_this.metadata().edit == 'edit') {
                    $('#tag_view, #tag_get').hide();
                    $('#tag_edit').show();
                } else if (_this.metadata().edit == 'view') {
                    $('#tag_edit, #tag_get').hide();
                    $('#tag_view').show();
                } else if (_this.metadata().edit == 'copy') {
                    $('#tag_edit, #tag_view, #tag_get').hide();
                    $('#tag_copy').show();
                } else if (_this.metadata().edit == 'get') {
                    $('#tag_copy, #tag_edit, #tag_view').hide();
                    $('#tag_get').show();
                }
                $('#tag_copy').unbind('click').bind('click', function() {
                    if (window.clipboardData) {
                        // IE에서 태그복사
                        clipboardData.setData('Text', _this.metadata().tag);
                    } else {
                        // Crome에서 태그복사
                        if ($('[name=copyUrlText]').length == 0) $('body').append('<textarea name="copyUrlText" style="width:1px; height:0px; position:absolute; top:0; left:-2000px"></textarea>');
                        $('[name=copyUrlText').val(_this.metadata().tag).select();
                        document.execCommand('copy');
                    }
                    alert('복사되었습니다.');
                });
                $('#tag_edit').unbind('click').bind('click', function() {
                    $.get_tag('edit', _this.metadata().unit_id);
                    return false;
                });
                $('#tag_view').unbind('click').bind('click', function() {
                    $.get_tag('view', _this.metadata().unit_id);
                    return false;
                });
                $('#tag_get').unbind('click').bind('click', function() {
                    $.get_tag('get', _this.metadata().unit_id, _this.metadata().type);
                    return false;
                });
            }, function() {
                $('#tag_control').remove();
            });
        },
        // 태그 검색
        get_tag_list: function(action_type, is_layer) {
            $.ajax({
                url: 'neodesign_vtag.action.html',
                type: 'POST',
                data: {
                    action_mode: action_type,
                    search_kind: _search_params.search_kind,
                    search_word: _search_params.search_word,
                    page_type: _search_params.page_type,
                    board_code: _search_params.board_code,
                    dgnset_id: _search_params.dgnset_id
                },
                dataType: 'json',
                success: function(res) {
                    if (res.success) {
                        var _html_unit = Array();
                        var _html_custom = Array();
                        var _html_user = Array();
                        var _data = res.data;

                        var _mode = _search_params.search_word.length > 0 ? '검색' : '등록';
                        if (action_type == 'get_tag_all_list' && is_layer !== true) { // 검색 초기화
                            if ($.isEmptyObject(_data.normal) === false) {
                                $('#grp-tit').remove();
                                $.each(_data.group, function(i) {
                                    _html_unit.push('<div id="grp-tit" class="grp-tit"><p>' + _data.group[i].tg_name + '</p>');
                                    if (_data.group[i].tg_helplink != '') {
                                        _html_unit.push('<span class="btn-cm btn-h22-white"><a href="javascript:help_link(' + _data.group[i].tg_helplink + ')" class="help">도움말</a></span>');
                                    }
                                    _html_unit.push('</div>');

                                    $.each(_data.normal, function(j) {
                                        if (_data.group[i].tg_uid == _data.normal[j].tg_uid) {
                                            _html_unit.push('<div class="tag_list {edit: \'copy\', tag: \'&lt;!--/' + _data.normal[j].tag_name + '/--&gt;\'}"><dl class="info">');
                                            _html_unit.push('<dt>' + _data.normal[j].tag_description + '</dt>');
                                            _html_unit.push('<dd>&lt!--/' + _data.normal[j].tag_name + '/--&gt;</dd>');
                                            _html_unit.push('</dl></div>');
                                        }
                                    });
                                });
                                _html_unit.push('<div id="grp-tit" class="grp-tit"><p>기타</p></div>');
                                $.each(_data.normal, function(j) {
                                    if (_data.normal[j].tg_uid == null) {
                                        _html_unit.push('<div class="tag_list {edit: \'copy\', tag: \'&lt;!--/' + _data.normal[j].tag_name + '/--&gt;\'}"><dl class="info">');
                                        _html_unit.push('<dt>' + _data.normal[j].tag_description + '</dt>');
                                        _html_unit.push('<dd>&lt!--/' + _data.normal[j].tag_name + '/--&gt;</dd>');
                                        _html_unit.push('</dl></div>');
                                    }
                                });
                            } else {
                                _html_unit.push('<div style="height: 100%; border: none; padding: 0;"><table style="width: 100%; height: 100%;"><tr><td style="text-align: center; vertical-align: middle;">' + _mode + '된 가상태그가 존재 하지 않습니다.</td></tr></table></div>');
                            }

                            if ($.isEmptyObject(_data.makeshop) === false) {
                                $.each(_data.makeshop, function(i) {
                                    _html_custom.push('<div class="tag_list {unit_id: \'' + _data.makeshop[i].unit_id + '\', edit: \'view\', tag: \'&lt;!--/makeshop{' + _data.makeshop[i].tag_name + '}/--&gt;\'}"><dl class="info">');
                                    _html_custom.push('<dt>' + _data.makeshop[i].tag_description + '</dt>');
                                    _html_custom.push('<dd>&lt;!--/makeshop{' + _data.makeshop[i].tag_name + '}/--&gt;</dd>');
                                    _html_custom.push('</dl></div>');
                                });
                            } else {
                                _html_custom.push('<div style="height: 100%; border: none; padding: 0;"><table style="width: 100%; height: 100%;"><tr><td style="text-align: center; vertical-align: middle;">' + _mode + '된 편집태그가 존재 하지 않습니다.</td></tr></table></div>');
                            }

                            if ($.isEmptyObject(_data.personal) === false) {
                                $.each(_data.personal, function(i) {
                                    _html_user.push('<div class="tag_list {unit_id: \'' + _data.personal[i].unit_id  + '\', edit: \'' + _data.personal[i].edit_mode + '\', tag: \'' + _data.personal[i].unit_tag + '\'}"><dl class="info">');
                                    _html_user.push('<dt>' + _data.personal[i].unit_desc + '</dt>');
                                    _html_user.push('<dd>' + _data.personal[i].unit_tag + '</dd>');
                                    _html_user.push('</dl></div>');
                                });
                            } else {
                                _html_user.push('<div style="height: 100%; border: none; padding: 0;"><table style="width: 100%; height: 100%;"><tr><td style="text-align: center; vertical-align: middle;">' + _mode + '된 사용자태그가 존재 하지 않습니다.</td></tr></table></div>');
                            }

                            _html_unit = _html_unit.join('');
                            _html_custom = _html_custom.join('');
                            _html_user = _html_user.join('');
                            $('#tabUnitTagList').empty().append(_html_unit);
                            $('#tabCustomTagList').empty().append(_html_custom);
                            $('#tabUserTagList').empty().append(_html_user);
                            $.group_scroll();
                        } else {
                            if (is_layer === true) {
                                if ($('#tabUserTagList_layer').is(':visible') === true) {
                                    if (_data.personal != null) {
                                        $.each(_data.personal, function(i) {
                                            _html_user.push('<div class="tag_list {unit_id: \'' + _data.personal[i].unit_id  + '\', type: \'user\', edit: \'get\', tag: \'' + _data.personal[i].unit_tag + '\'}"><dl class="info">');
                                            _html_user.push('<dt>' + _data.personal[i].unit_desc + '</dt>');
                                            _html_user.push('<dd>' + _data.personal[i].unit_tag + '</dd>');
                                            _html_user.push('</dl></div>');
                                        });
                                    } else {
                                        _html_user.push('<div style="height: 100%; border: none; padding: 0;"><table style="width: 100%; height: 100%;"><tr><td style="text-align: center; vertical-align: middle;">' + _mode + '된 사용자태그가 존재 하지 않습니다.</td></tr></table></div>');
                                    }

                                    _html_user = _html_user.join('');
                                    $('#tabUserTagList_layer').empty().append(_html_user);
                                }

                                if ($('#tabCustomTagList_layer').is(':visible') === true) {
                                    if (_data.makeshop != null) {
                                        $.each(_data.makeshop, function(i) {
                                            _html_custom.push('<div class="tag_list {unit_id: \'' + _data.makeshop[i].unit_id + '\', type: \'custom\', edit: \'get\', tag: \'&lt;!--/makeshop{' + _data.makeshop[i].tag_name + '}/--&gt;\'}"><dl class="info">');
                                            _html_custom.push('<dt>' + _data.makeshop[i].tag_description + '</dt>');
                                            _html_custom.push('<dd>&lt;!--/makeshop{' + _data.makeshop[i].tag_name + '}/--&gt;</dd>');
                                            _html_custom.push('</dl></div>');
                                        });
                                    } else {
                                        _html_custom.push('<div style="height: 100%; border: none; padding: 0;"><table style="width: 100%; height: 100%;"><tr><td style="text-align: center; vertical-align: middle;">' + _mode + '된 편집태그가 존재 하지 않습니다.</td></tr></table></div>');
                                    }

                                    _html_custom = _html_custom.join('');
                                    $('#tabCustomTagList_layer').empty().append(_html_custom);
                                }
                            } else {
                                if ($.isEmptyObject(_data.normal) === false) {
                                    $('#grp-tit').remove();
                                    $.each(_data.normal, function(i) {
                                        _html_unit.push('<div class="tag_list {edit: \'copy\', tag: \'&lt;!--/' + _data.normal[i].tag_name + '/--&gt;\'}"><dl class="info">');
                                        _html_unit.push('<dt>' + _data.normal[i].tag_description + '</dt>');
                                        _html_unit.push('<dd>&lt!--/' + _data.normal[i].tag_name + '/--&gt;</dd>');
                                        _html_unit.push('</dl></div>');
                                    });
                                } else {
                                    _html_unit.push('<div style="height: 100%; border: none; padding: 0;"><table style="width: 100%; height: 100%;"><tr><td style="text-align: center; vertical-align: middle;">' + _mode + '된 가상태그가 존재 하지 않습니다.</td></tr></table></div>');
                                }

                                if ($.isEmptyObject(_data.makeshop) === false) {
                                    $.each(_data.makeshop, function(i) {
                                        _html_custom.push('<div class="tag_list {unit_id: \'' + _data.makeshop[i].unit_id + '\', edit: \'view\', tag: \'&lt;!--/makeshop{' + _data.makeshop[i].tag_name + '}/--&gt;\'}"><dl class="info">');
                                        _html_custom.push('<dt>' + _data.makeshop[i].tag_description + '</dt>');
                                        _html_custom.push('<dd>&lt;!--/makeshop{' + _data.makeshop[i].tag_name + '}/--&gt;</dd>');
                                        _html_custom.push('</dl></div>');
                                    });
                                } else {
                                    _html_custom.push('<div style="height: 100%; border: none; padding: 0;"><table style="width: 100%; height: 100%;"><tr><td style="text-align: center; vertical-align: middle;">' + _mode + '된 편집태그가 존재 하지 않습니다.</td></tr></table></div>');
                                }

                                if ($.isEmptyObject(_data.personal) === false) {
                                    $.each(_data.personal, function(i) {
                                        _html_user.push('<div class="tag_list {unit_id: \'' + _data.personal[i].unit_id  + '\', edit: \'' + _data.personal[i].edit_mode + '\', tag: \'' + _data.personal[i].unit_tag + '\'}"><dl class="info">');
                                        _html_user.push('<dt>' + _data.personal[i].unit_desc + '</dt>');
                                        _html_user.push('<dd>' + _data.personal[i].unit_tag + '</dd>');
                                        _html_user.push('</dl></div>');
                                    });
                                } else {
                                    _html_user.push('<div style="height: 100%; border: none; padding: 0;"><table style="width: 100%; height: 100%;"><tr><td style="text-align: center; vertical-align: middle;">' + _mode + '된 사용자태그가 존재 하지 않습니다.</td></tr></table></div>');
                                }

                                _html_unit = _html_unit.join('');
                                _html_custom = _html_custom.join('');
                                _html_user = _html_user.join('');
                                $('#tabUnitTagList').empty().append(_html_unit);
                                $('#tabCustomTagList').empty().append(_html_custom);
                                $('#tabUserTagList').empty().append(_html_user);
                            }
                        }
                        $.list_event();
                    } else {
                        alert(res.message);
                    }
                    return false;
                } // success
            }); // ajax
            return false;
        } // get_tag_list
    });

    $.tag_search = function(el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data('tag_search', base);

        base.init = function(){
            base.options = $.extend({},$.tag_search.defaultOptions, options);

            // Put your initialization code here

            base.$el.submit(function() {
                base.search();
            });

            $('[name="' + base.options.search_reset + '"]', base.$el).click(function() {
                base.search_reset();
            });
        };

        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        //
        // };

        base.set_search_param = function() {
            _search_params.search_kind = $('[name="' + base.options.search_kind + '"]', base.$el).val();
            _search_params.search_word = $('[name="' + base.options.search_word + '"]', base.$el).val();
            _search_params.page_type = $('[name="' + base.options.page_type + '"]', base.$el).val();
            _search_params.board_code = $('[name="' + base.options.board_code + '"]', base.$el).val();
            _search_params.dgnset_id = $('[name="' + base.options.dgnset_id + '"]', base.$el).val();
        };

        base.search = function() {
            if ($.trim($('[name="' + base.options.search_word + '"]', base.$el).val()) == '') {
                alert('검색어를 입력해주세요.');
                $('[name="' + base.options.search_word + '"]', base.$el).focus();
                return false;
            }
            base.set_search_param();
            $.get_tag_list('get_tag_list', base.options.is_layer);
            return false;
        };

        base.search_reset = function() {
            $('[name="' + base.options.search_kind + '"]').children(':first').attr('selected', true);
            $('[name="' + base.options.search_word + '"]').val('');
            base.set_search_param();
            $.get_tag_list('get_tag_all_list', base.options.is_layer);
            return false;
        };

        // Run initializer
        base.init();
    };

    $.tag_search.defaultOptions = {
        search_reset: 'search_reset',
        search_kind: 'search_kind',
        search_word: 'search_word',
        page_type: 'page_type',
        board_code: 'board_code',
        dgnset_id: 'dgnset_id',
        is_layer: false
    };

    $.fn.tag_search = function(options) {
        return this.each(function() {
            (new $.tag_search(this, options));
        });
    };

    $(function() {
        $.list_event();
        _search_params = {
            search_kind: '',
            search_word: '',
            page_type: '',
            board_code: '',
            dgnset_id: ''
        };
        $('form[name="frm_tag_search"]').tag_search();
    }); // end of ready
})(jQuery);
