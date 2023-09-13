$(function() {
    var fixedBtn = $("#contents .fixed-btn");
    $(window).scroll(function(e) {
        var fixed_target = $("#contents .shopdetailButtonTop"),
        fixed_target_top = fixed_target.offset()["top"];        
        if ($(window).scrollTop() > fixed_target_top) {
            if (!fixedBtn.hasClass('fixed')) {
                fixedBtn.addClass("fixed");
                $(".section_fixedFooter").addClass("cs-button");
            }
        } else {
            if (fixedBtn.hasClass('fixed')) {
                fixedBtn.removeClass("fixed");
                fixedBtn.parent().removeClass("fixed");
                fixedBtn.children("a").show();
                //fixedBtn.siblings(".buy_on").hide();
                $(".section_fixedFooter").removeClass("cs-button");
            }
        }
    });
    fixedBtn.click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass("fixed");
        fixedBtn.children("a").toggle();
        fixedBtn.siblings(".buy_on").show();
    });
    // 대량구매 혜택 더보기
    $('.btn-view').click(function() {
        $(this).next().addClass('active');
    });
    $('.btn-close').click(function() {
        $(this).parents().removeClass('active');
    });
});
$(".btn_toggle").click(function(){
    $(this).find(".fa").toggleClass("fa-rotate-180");
    $(this).next("div").toggle();
});
var nwid = Math.floor([100/$(".ncount").find("a").size()]*100)/100;
$(".ncount a").width(nwid+"%");