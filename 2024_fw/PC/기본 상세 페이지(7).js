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



function tabBarFixed() {
    const $tabBar = $('.hncok-detail-tab-bar');
    const offsetTop = $('.hncok-detail-content').offset().top;

    if ($(window).scrollTop() >= offsetTop) {
        $tabBar.addClass('detail-tab-fixed');
    } else {
        $tabBar.removeClass('detail-tab-fixed');
    }
}

// 탭 활성화 함수
function activateTab($tab) {
    const $tabs = $('.hncok-detail-tab-item');
    $tabs.removeClass('active');
    $tab.addClass('active');
}

function hcSetEvent() {

    //탭 클릭
    $('.hncok-detail-tab-item').on('click', function() {
        const $tab = $(this);
        const id = $tab.attr('data-target');
        if(!id) return;
        const $targetContent = $('#'+id);
        const tabBarHeight = $('.hncok-detail-tab-bar').outerHeight();
        
        const targetPosition = $targetContent.offset().top - tabBarHeight;
        activateTab($tab);
        $('html, body').animate({ scrollTop: targetPosition }, 500); // 애니메이션 제거
       
    });

    // 탭바 스크롤 시 상단 고정 및 컨텐츠 가리지 않도록 보정
    $(window).scroll(function() {    
        tabBarFixed();
    });
    
    //사이즈정보 클릭
    $('#hcSizeInfoTab').on('click',function(){
        $('#hcSizeInfoModalContent').html($('#sfsnapfit_main').html());    
        $('#hcSizeInfoModal').show();
        $('body').addClass('scroll_hidden');
    });
    
    $('#hcSizeInfoModalClose').on('click',function(){
        $('#hcSizeInfoModal').hide();
        $('body').removeClass('scroll_hidden');
    });
}


$(document).ready(function() {
    const $tabs = $('.hncok-detail-tab-item');
    const $contents = $('.hncok-detail-content-item');
    
    tabBarFixed();
    
     // 초기 첫 번째 탭 활성화
    activateTab($tabs.first());

    hcSetEvent();    

});
