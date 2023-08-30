jQuery(document).ready(function() {    
    HeaderMenuOpen.init();
});


/*function mypageMenuEvent() {
    jQuery('#hcHeadMypage').on('click',function(){
        var $searchWrap = jQuery('#hc_mypage_menu');
        $searchWrap.toggleClass('open');
    });

}

function searchMenuEvent() {
    jQuery('#hcHeadSearch').on('click',function(){
        var $searchWrap = jQuery('#hc_modal_search');
        $searchWrap.toggleClass('open');
    });
}
  
function sideMenuEvent() {

    jQuery('#hc_hamburger').on('click',function(){
      var $sideWrap = jQuery('#hcSideWarp');
      $sideWrap.toggleClass('open');
      if($sideWrap.hasClass('open')) {
          $sideWrap.removeClass('open')
      }else{
          jQuery('#hcSideWarp').addClass('open');
      }  
    });

    $("#hc_hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
    
    jQuery('.hcHoverMenu').on('click',function(e) {
         var currentTarget = $(e.currentTarget);
         location.href = currentTarget.find('a').attr('href');
    });

    jQuery('.hc_menu_state').on('click',function() {
        jQuery('.hc_menu_state').not($(this)).prop('checked',false);
    })

}*/

var HeaderMenuOpen = (function(){

	var data = [
		{
			btnId : 'hc_hamburger',
			layerId : 'hcSideWrap',
			btnToggleClass : 'is-active',
			layerToggleClass : 'open',
            closeBtnId : '',
            isCurrent: false,
            isOpen : false,
		},
		{
			btnId : 'hcHeadSearch',
			layerId : 'hc_modal_search',
			btnToggleClass : '',
			layerToggleClass : 'open',
            closeBtnId : 'hcHeaderCloseBtn',
            isCurrent: false,
            isOpen : false,
		},
		{
			btnId : 'hcHeadMypage',
			layerId : 'hc_mypage_menu',
			btnToggleClass : '',
			layerToggleClass : 'open',
            closeBtnId : '',
            isCurrent: false,
            isOpen : false,
		}	
	];
	
	var init = function() {
		bind();
	};
	
	var bind = function() {
		data.forEach(function(item,index){
			jQuery('#'+item.btnId).on('click',function(){
				action.toggle(item);
                action.setIsOpen(index,true);
                setTimeout(function(){
                    action.anotherLayerClose();
                },1000);
                
			});
            jQuery('#'+item.closeBtnId).on('click',function(){
                action.toggle(item);
                action.setIsOpen(index,true);
                setTimeout(function(){
                    action.anotherLayerClose();
                });
            });
		});
		jQuery('.hcHoverMenu').on('click',function(e) {
			var currentTarget = $(e.currentTarget);
			location.href = currentTarget.find('a').attr('href');
		});

		jQuery('.hc_menu_state').on('click',function() {
			jQuery('.hc_menu_state').not($(this)).prop('checked',false);
		});
	};
	
	var action = {
        toggle : function(item) {
            var $wrap = jQuery('#'+item.layerId);
			action.toggleClass($wrap,item.layerToggleClass);
			action.toggleClass(jQuery('#'+item.btnId),item.btnToggleClass);
        },
		toggleClass : function($target,toggleClass) {
			$target.toggleClass(toggleClass);
		},
        setIsOpen : function(index,value) {
            data[index]['isOpen'] = value;
            data[index]['isCurrent'] = value;
        },
        anotherLayerClose() {
            data.forEach(function(item,index){
                if(!item.isCurrent && item.isOpen) {
                    action.toggle(item);
                    action.setIsOpen(index,false);
                }
            })
            /*data.filter(item => !item.isCurrent && item.isOpen)
                .map(function(item){
                    action.toggle(item);
                    action.setIsOpen(item.false)
                });*/
        }
	};
	
	return {
		init : init
	}
})();