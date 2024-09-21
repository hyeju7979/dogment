$(document).ready(function() {
    const $tabs = $('.hncok-detail-tab-item');
    const $contents = $('.hncok-detail-content-item');
    
    
    tabBarFixed();

    // 초기 첫 번째 탭 활성화
    activateTab($tabs.first());

    hcSetEvent();
    
    

    // 기존 slick 및 기타 기능
    var fixedBtn = $("#contents .fixed-btn");
    $(window).scroll(function(e) {
        //var fixed_target = $("#contents .shopdetailButtonTop"),
        //fixed_target_top = fixed_target.offset()["top"];
    });
    
    fixedBtn.click(function(e){
        e.preventDefault();
        fixedBtn.children("a").toggle();
        fixedBtn.siblings(".buy_on").show();
    });

    $('.btn-view').click(function() {
        $(this).next().addClass('active');
    });

    $('.btn-close').click(function() {
        $(this).parents().removeClass('active');
    });

    $(".btn_toggle").click(function(){
        $(this).find(".fa").toggleClass("fa-rotate-180");
        $(this).next("div").toggle();
    });

    var nwid = Math.floor([100/$(".ncount").find("a").size()]*100)/100;
    $(".ncount a").width(nwid+"%");

    $('.btn_directBuy').click(function(e){
        e.preventDefault();
        $('body').addClass('fixed');
        $('.option_area').addClass("fixed");
        $('.hc_notice_top').css("z-index","0");
    });

    $(".btn_option, .fixedMask, #saveCart").click(function(e){
        e.preventDefault();
        $('body').removeClass('fixed');
        $('.option_area').removeClass("fixed");
        $('.hc_notice_top').css("z-index","1000");
        $('.btn_toggle_area').show();
    });

    $('#hcDetailMainSlide').slick({
        prevArrow:'<button type="button" class="hc_detail_prev"></button>',           
        nextArrow:'<button type="button" class="hc_detail_next"></button>',
        slidesToShow: 3,
        slidesToScroll:1, 
        dots:false,
        arrows: true,   
        autoplay : 4000
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