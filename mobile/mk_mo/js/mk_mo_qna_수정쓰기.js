(function($){
    $(function(){
        // 주문번호 삭제
	var $ipt = $('#ordernuminput'),
	$clearIpt = $('#ordernumclear');
	$ipt.keyup(function(){
	    $("#ordernumclear").toggle(Boolean($(this).val()));
	});
	$clearIpt.toggle(Boolean($ipt.val()));
	$clearIpt.click(function(){
	    $("#ordernuminput").val('').focus();
	    $(this).hide();
	});
        // 주문조회 레이어 열기
	$('.layer-open').on('click', function(e){
	    e.preventDefault();
	    $(this.hash).show();
	});
	// 주문조회 레이어 닫기
	$('.layer-close').on('click', function(e){
	    e.preventDefault();
	    $(this.hash).hide();
	});
        // 주문조회 레이어 탭
	$('#myorderlayer .tab li a').on('click', function(e) {
	    e.preventDefault();
	    $(this).parent().addClass('now').siblings().removeClass('now');
	});
    });
})(jQuery);