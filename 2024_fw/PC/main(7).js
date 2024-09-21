function get_main_list(_t_name, _page, _element, _page_html, _row) {
	if (jQuery(_element).length > 0 ) {
		jQuery.ajax({
			url: '/shop/main_product_list.action.html?r=' + Math.random(),
			type: 'GET',
			dataType: 'json',
			data: {
				  action_mode: 'GET_MAIN_PRODUCT_LIST',
				  tag_name: _t_name,
				  page_id : get_page_id(),
				  page: _page
			},  
			success: function(res) {
                if (res != undefined) {
                    if (res.is_page_end == true) {
                        jQuery('.' + _page_html).hide();
                    } else {
                        _page++;
                        jQuery('.' + _page_html + ' > a').prop('href', "javascript:get_main_list('"+_t_name+"', " + _page + ", '" + _element + "', '" + _page_html + "', '" + _row + "');");
                    } 
                    jQuery(_element).append(res.html);
                    var makeshop_wishlist = new makeshopWishlist();
                    makeshop_wishlist.init(); 
                }
            }
		});
	}
}

$(function() {
    get_main_list('block_special_product', 1, '.block_special_product', 'special_product_more', '1'); //스페셜 상품
    get_main_list('block_recmd_product', 1, '.block_recmd_product', 'recmd_product_more', '1');  //추천 상품
    get_main_list('block_new_product', 1, '.block_new_product', 'new_product_more', '1');  //신규상품
    get_main_list('block_add1_product', 1, '.block_add1_product', 'add1_product_more', '1');  //추가상품1
    get_main_list('block_add2_product', 1, '.block_add2_product', 'add2_product_more', '1');  //추가상품2
    get_main_list('block_add3_product', 1, '.block_add3_product', 'add3_product_more', '1');  //추가상품3
    get_main_list('block_add4_product', 1, '.block_add4_product', 'add4_product_more', '1');  //추가상품4
    get_main_list('block_add5_product', 1, '.block_add5_product', 'add5_product_more', '1');  //추가상품5
    get_main_list('block_add6_product', 1, '.block_add6_product', 'add6_product_more', '1');  //추가상품6
    get_main_list('block_add7_product', 1, '.block_add7_product', 'add7_product_more', '1');  //추가상품7
});