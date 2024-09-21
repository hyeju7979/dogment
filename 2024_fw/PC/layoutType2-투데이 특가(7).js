jQuery(document).ready(function(){
    //베스트
    jQuery('.prd_week_best .item-cont').bxSlider({                                        
        auto: true,
        pager: true,
        controls: true,
        speed : 1000,                                        
        pause : 5000,
        minSlides : 3,
        maxSlides : 3,
        slideWidth : 317
        ,onSliderLoad: function(){
			$(".prd_week_best .item-cont").css("visibility", "visible").animate({opacity:1});
		}
    });
    
    //AOS.init();
});