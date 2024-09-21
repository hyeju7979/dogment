jQuery(document).ready(function(){        
    /*jQuery('.prd_week_best .item-cont').bxSlider({                                        
        auto: true,
        pager: true,
        controls: true,
        speed : 1000,                                        
        pause : 5000,
        minSlides : 4,
        maxSlides : 4,
        slideWidth : 340,
        slideMargin : 10,
        ariaHidden : true,
        onSliderLoad: function(){
            $(".prd_week_best .item-cont").css("visibility", "visible").animate({opacity:1});
        }
    });*/
    SubPageSlide.init();
    
    //AOS.init();
});

var SubPageSlide = (function(){

    var setting = {
        slider : ''
    }
    var init = function() {
        action.configureSlider();
        bind();        
    };
    
    var bind = function() {
        $(window).on("resize", action.configureSlider)
    };
    
    var action = {
        isExist : function(){
            return jQuery('.prd_week_best').length > 0;
        },
        buildSliderConfiguration : function(){

            var deviceWidth = $(window).width();

            /* 반응형으로 설정할 옵션 정의 */
            var slideWidth = 800;  
            var slideCount = 4;
            
            
            /* 화면 사이즈별 슬라이드 갯수, 마진 설정, 기타 옵션도 설정 가능 */
            /*if (deviceWidth < 1024) {
                slideWidth = 330;
                slideCount = 3;
            } else if (deviceWidth < 1440) {
                slideWidth = 350;
                slideCount = 4;
            } else if (deviceWidth < 1920) {
                slideWidth = 470;
                slideCount = 4;
            } */

            return {
                //auto: true,
                pager: true,
                controls: true,
                speed : 1000,                                        
                pause : 5000,
                minSlides : slideCount,
                maxSlides : slideCount,
                slideWidth : slideWidth,
                slideMargin : 14,
                ariaHidden : true,
                onSliderLoad: function(){
                    $(".prd_week_best .item-cont").css("visibility", "visible").animate({opacity:1});
                }
            };
        },
        configureSlider : function(){
            if(!action.isExist()) return;
            var config = action.buildSliderConfiguration();

            if (setting.slider && setting.slider.reloadSlider) {
                setting.slider.reloadSlider(config);
            } else {
                setting.slider = jQuery('.prd_week_best .item-cont').bxSlider(config);  /* 슬라이더 클래스 또는 아이디 입력 */
            }
        }
    };
    
    return {
        init : init
    };

})();