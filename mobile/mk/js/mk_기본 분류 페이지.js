jQuery(document).ready(function(){        
    jQuery('.prd_week_best .item-cont').bxSlider({                                        
        auto: true,
        pager: true,
        controls: true,
        speed : 1000,                                        
        pause : 5000,
        minSlides : 4,
        maxSlides : 4,
        slideWidth : 317,
        slideMargin : 10,
        onSliderLoad: function(){
			$(".prd_week_best .item-cont").css("visibility", "visible").animate({opacity:1});
		}
    });
});
							