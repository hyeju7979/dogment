(function ($) {
    // 사이즈 차트 관련 js
    if ($('a.btn-size-chart')) {
        $('a.btn-size-chart').click(function () {
            var _chart = $('#sizeChart');
            if (_chart) {
                if (_chart.css('display') == 'block') {
                    _chart.hide();
                } else {
                    var _parent = $(this).parent('td');
                    var add_po = { top : 40, left: -352 };
                    var _css = { 'top': (_parent.offset().top + add_po.top) + 'px', 'left': (_parent.offset().left + add_po.left) + 'px' };
                    _chart.css(_css).show();
                }
                return false;
            }
        })
    }
    if ($('#sizeChart a.btn-close-layer')) {
        $('#sizeChart a.btn-close-layer').click(function () {
            $('#sizeChart').hide();
        });
    }
        
    //선택완료 버튼
    jQuery(".sel-btn a").html("선택완료");
    
    
    // Detail Tab Move
    //var $hdH = $(".headerTop").height()+2;
    var $gnbH = $("#JD-Header").height()+20;
    //var $headerTopH = $gnbH;
    jQuery(".detail_tab > li").click(function(){
        var $tabNum = jQuery(this).index()+1;
        //alert(jQuery("#detail"+$tabNum).offset().top);
        jQuery("html, body").animate({
            scrollTop : jQuery("#detail"+$tabNum).offset().top - $gnbH
            }, 100);
    });
    
    
    
})(jQuery);


jQuery(function(){
    jQuery(".card_opt_wrap .btn_card_opt").click(function(){
        jQuery(".card_opt_wrap .pp_card_opt").addClass("show");
    });

    jQuery(".card_opt_wrap .pp_card_opt .btn_closeX").click(function(){
        jQuery(".card_opt_wrap .pp_card_opt").removeClass("show");
    });
});

