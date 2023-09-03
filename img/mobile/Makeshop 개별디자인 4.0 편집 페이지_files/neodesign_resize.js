head(function() {
$(function() {
	// 파일트리, 태그리스트 높이 100% 지정
	var _file_tree = $('#fileTreeWrap'),
		_tree_remainder = 190,
        _unit_tag_list = $('#tabUnitTagList'),
		_unit_tag_remainder = 120,
        _custom_tag_list = $('#tabCustomTagList'),
		_custom_tag_remainder = 120,
        _user_tag_list = $('#tabUserTagList'),
		_user_tag_remainder = 150,
		_tag_bottom = $('#resize_bottom'),
		_tag_remainder = 150;
	
	// 리사이즈 태그 목록
	var _resize = $('#resize');
	_resize.resizable({
		handles: 's',
		minHeight: 100,
		maxHeight: 450,
		resize: function(e, ui) {},
		stop: function(e, ui) {
			_change_h = _tag_bottom.height() + (ui.originalSize.height - ui.size.height);
			_tag_bottom.css({ height: _change_h });
		}
	});

	var sizewait;
	$(window).resize(function() {
	    if (typeof sizewait != 'undefined') {
            clearTimeout(sizewait);
        }
        sizewait = setTimeout(function() {
            $(this).trigger('reHeight');
        }, 200);		
	}).on('reHeight', function() {
		_tree_height = $('#contentWrap').outerHeight(true) + 50 - _tree_remainder;
		if ($('#aside').is(':visible')) {
			_h = $(window).height() - _tree_remainder;
			if (_tree_height <= _h) {
				_file_tree.height(_h);
			} else {
				_file_tree.height(_tree_height);
			}
		}
		
		_unit_tag_height = $('#contentWrap').outerHeight(true) + 50 - _unit_tag_remainder;
		_custom_tag_height = $('#contentWrap').outerHeight(true) + 50 - _custom_tag_remainder;
		_user_tag_height = $('#contentWrap').outerHeight(true) + 50 - _user_tag_remainder;
		if ($('#extra').is(':visible')) {
			_unit_tag_h = $(window).height() - _unit_tag_remainder;
			_custom_tag_h = $(window).height() - _custom_tag_remainder;
			_user_tag_h = $(window).height() - _user_tag_remainder;
			if (_unit_tag_height <= _unit_tag_h) {
				_unit_tag_list.height(_unit_tag_h);
			} else {
				_unit_tag_list.height(_unit_tag_height);
			}
			if (_custom_tag_height <= _custom_tag_h) {
				_custom_tag_list.height(_custom_tag_h);
			} else {
				_custom_tag_list.height(_custom_tag_height);
			}
			if (_user_tag_height <= _user_tag_h) {
				_user_tag_list.height(_user_tag_h);
			} else {
				_user_tag_list.height(_user_tag_height);
			}
		}

		_tag_height = $('#contentWrap').outerHeight(true) + 50 - _tag_remainder - $('#resize').height() - 14;
		if ($('#extra').is(':visible')) {
			_h = $(window).height() - _tag_remainder - $('#resize').height() - 14;
			if (_tag_height <= _h) {
				_tag_bottom.height(_h);
			} else {
				_tag_bottom.height(_tag_height);
			}
		}

        if ($('#overlay').is(':visible')) {
            _overlay_w = $(window).width();
            _overlay_h  = $(window).height();
            $('#overlay').css('width', _overlay_w).css('height', _overlay_h);
        }
	});

	$(window).trigger('reHeight');
	
	// resize 영역 컨트롤 바 색성 지정
	$('.ui-resizable-handle').mouseover(function(){
		$(this).css('backgroundColor','#97a4b5');
	}).mouseleave(function(){
		$(this).css('backgroundColor','#FAFAFA');
	});
});
});
