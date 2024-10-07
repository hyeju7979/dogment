$(document).ready( function(){
    jQuery('input[name="prdlist_item"]').on('click',function(){
        var type = $(this).val();
        $('#hcPrdListWrap').removeClass('prdlist1_content prdlist2_content');
        $('#hcPrdListWrap').addClass(type);
    });
});