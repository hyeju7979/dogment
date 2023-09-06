$(document).ready(function(){
    tabInit();
    $('article.hcTabWrap [data-id="companyContent"]').show();
});

function tabInit() {
    $('.hcAboutTab').on('click',function() {
        var targetId = $(this).attr('data-id');
        $('div.hcAboutTab').removeClass('hc_on');        
        $('article.hcTabWrap [data-id]').hide();
        $(this).addClass('hc_on');
        $('article.hcTabWrap [data-id="'+targetId+'"]').show();
        
    });
}