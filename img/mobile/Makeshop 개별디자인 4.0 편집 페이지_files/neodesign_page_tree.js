
$(function(){
	// file tree
	var _tree = $('.file-tree');
	var _toggle_plus = "<button type='button' class='toggle plus'>+</button>";
	var _toggle_minus = "<button type='button' class='toggle minus'>-</button>";
		
    // defalt
    _tree.find('li>ul').css('display','none');
    _tree.find('ul>li:last-child').addClass('last');
    _tree.find('li>ul:hidden').parent('li').prepend(_toggle_plus);
    _tree.find('li>ul:visible').parent('li').prepend(_toggle_minus);
    
    // active
    _tree.find('li.active').parents('li').addClass('open');
    _tree.find('li.open').parents('li').addClass('open');
    _tree.find('li.open>.toggle').text('-').removeClass('plus').addClass('minus');
    _tree.find('li.open>ul').slideDown(100);
    
    // click toggle
    $('.file-tree .toggle').on('click', function() {
        t = $(this);
        t.parent('li').toggleClass('open');
        if(t.parent('li').hasClass('open')){
            t.text('-').removeClass('plus').addClass('minus');
            t.parent('li').find('>ul').slideDown(100);
        } else {
            t.text('+').removeClass('minus').addClass('plus');
            t.parent('li').find('>ul').slideUp(100);
        }
    });
    $('.file-tree li.group_page span').click(function() {
        $('button:first', $(this).parent()).trigger('click');
    });

    // ÁÂÃø¸Ş´º ¿­±â
	$('#designCtrlBtn .t-open').on('click', function() {
        $('#fileTreeWrap li.group_page').addClass('open');
        $('#fileTreeWrap button.toggle').removeClass('plus');
        $('#fileTreeWrap button.toggle').addClass('minus');

		_tree.find('li>ul').css('display','block');
         return false;
	});

    // ÁÂÃø¸Ş´º ´İÈû
	$('#designCtrlBtn .t-close').on('click', function() {
        $('#fileTreeWrap li.group_page').removeClass('open');
        $('#fileTreeWrap button.toggle').removeClass('minus');
        $('#fileTreeWrap button.toggle').addClass('plus');
		_tree.find('li>ul').css('display','none');
         return false;
	});

    if (typeof(page_count) != 'undefined' && page_count == '0') {
        $('.center_list li.group_page:last').prev().append(_toggle_plus);
        $('.center_list li.group_page:last').prev().append("<ul><li></li></ul>");
    }
    if (typeof(event_count) != 'undefined' && event_count == '0') {
        $('.center_list li.group_page:last').append(_toggle_plus);
        $('.center_list li.group_page:last').append("<ul><li></li></ul>");
    }
});
