jQuery(document).ready(function() {    
    sideMenuEvent();
    searchMenuEvent();
    mypageMenuEvent();
});


function mypageMenuEvent() {
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
      /*if($sideWrap.hasClass('open')) {
          $sideWrap.removeClass('open')
      }else{
          jQuery('#hcSideWarp').addClass('open');
      }*/      
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

}