jQuery(document).ready(function() {
    hambergerEvent();
});

function hambergerEvent(){
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

}