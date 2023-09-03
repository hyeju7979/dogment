/*
   사용파일 - 여기저기 쓰이는 곳이 많아 임시로 모아놓음
   경로안써있으면 newmanager임
   personal.html 이건 open_crm씀...

   case '1' :
    cyworldScrap_list.ajax.html 
    oomanager/oo_detail_view.func.html 
   case '2' :
    member_usernote.html
    crm_userreserve.html
    board_commonlist.html
    board_comment.html
    board_person.html 
    board_crm_list_counsel.html
    product_review.list.html 
    order_check_list.html
    order_coupon.html
    order_gift.html
    order_prodiscount.html 
    order_userorder.html
   case '3' :
    crm_attendance_userinfo.html
    product_shortsoldout_smspop.list.html 
   case '4' :
    crm_attendance_list.html
    member_user_list.html 
    group.ajax.list.html 
    board_all_list.html 
    menu_order.html
    menu_order.new.html
    crm_search_user.new.html 
    new_left_menu_search_dynamic.html 
    crm_reserve.ajax.html 
    crm_emoney.ajax.html 
    crm_confirm_emoney.html 
    crm_confirm_reserve.html
    crm_autogroup_log_list.html 
    crm_couponlist.html 
    parcel_list002.html
    lib/find_icon_event.lib.html
    sorivu_review.html
    board_simple_reply.html  
    board_commondetail.html 
   case '5' :
*/

function view_crmcenter(id,count,type,auth) {
    count = (typeof count !== undefined) ? count : null;
    type = (typeof type !== undefined) ? type : '4';
    auth = (typeof auth !== undefined) ? auth : 'Y';

    if (auth == 'Y' || auth == '') {
        // 기본 type은 default가 4이다.(4번째가 많이 쓰였음...)
        switch(type){
            case '1' :
                var form = document.createElement("form");
                form.setAttribute("method","post");
                form.setAttribute("target","crm");
                form.setAttribute("action","/makeshop/newmanager/crmcenter.html");
                document.body.appendChild(form);
                var insert = document.createElement("input");
                insert.setAttribute("type", "hidden");
                insert.setAttribute("name", "id");
                insert.setAttribute("value", id);
                form.appendChild(insert);
                var winobj = window.open('', 'crm', 'width=1190, height=750');
                form.submit(winobj);
                winobj.focus();
                break;
            case '2' :
                window.open("","crm","width=1190, height=750, toolbar=no, menubar=no, status=yes, scrollbars=no");
                document.crm.action="crmcenter.html";
                document.crm.id.value=id;
                document.crm.submit();
                break;
            case '3' :
                window.open("","crm","width=900, height=750, toolbar=no, menubar=no, status=yes, scrollbars=no");
                document.crm.action="crmcenter.html";
                document.crm.id.value=id;
                document.crm.submit();
                break;
            case '4' :
                window.open("crmcenter.html?id=" + id,"crm","width=1190, height=750, toolbar=no, menubar=no, status=yes, scrollbars=no");
                //document.form1.reservenum.value = count;
                //document.reserve.id.value = id;
                //window.open("","crm","width=1190, height=750, toolbar=no, menubar=no, status=yes, scrollbars=no");
                //document.crm.id.value = id;
                //document.crm.submit();
                break;
            case '5' :
                window.open('', 'crmpop', 'width=1190, height=750');
                document.crm_form.id.value = id;
                document.crm_form.submit();
                break;
        }
    } else {
        alert('접근권한이 없습니다.');
    }
}
