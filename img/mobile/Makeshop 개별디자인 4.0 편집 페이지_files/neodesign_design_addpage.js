var page_type = _page_type;
// 개별페이지일때 접근 제한 수정
if(page_type == 'page') {
    var mod_access = $('#layer-access-modify');
    var access = _d_separator1;
    var access_msg = _d_separator2;
    var access_msg_use = _d_separator3;
    // 수정할때 그룹정보 가져오기 
    var get_mod_group = function () {
        $.ajax({
            url: '/makeshop/newmanager/neodesign_group.list.html',
            dataType: 'json',
            type: 'POST',
            success: function(res) {
                $('select[name=group]', mod_access).empty(); //초기화
                $('select[name=group]', mod_access).append('<option value="" style="font-weight:bold;">그룹 및 등급을 선택하세요.</option>');
                $('select[name=group]', mod_access).append('<optgroup label="선택한 단일 그룹만 쓰기/읽기" style="font-weight:bold;"></optgroup>');
                if (res.RESULT && res.data.length > 0) {
                    $.each(res.data, function () {
                        $('select[name=group]', mod_access).append('<option value="' + this.code + '">' + this.name + '</option>');
                    });
                }
                $('select[name=group]', mod_access).append('<optgroup label="선택등급 이상 그룹 쓰기/읽기" style="font-weight:bold;"></optgroup>');
                for (i = 1; i <= 10; i++) {
                    $('select[name=group]', mod_access).append('<option value="' + i + '"> LV.' + i + '</option>');
                }
                $('select[name=group]', mod_access).val(access);
            }
        });
    }
    // 제한 설정된 값에 따라 체크박스 설정
    if(access == 'NONE' || access == '') {
        $('input[name=page_access]', mod_access).eq(0).attr("checked", true);
        $('.group_list', mod_access).removeClass('display_block').addClass('display_none');
        $('.page_member_access_msg', mod_access).removeClass('display_block').addClass('display_none');
        $('.page_member_access_msg_text', mod_access).removeClass('display_block').addClass('display_none');
    } else if (access == 'MEMBER') {
        $('input[name=page_access]', mod_access).eq(1).attr("checked", true);
        $('.group_list', mod_access).removeClass('display_block').addClass('display_none');
        $('.page_member_access_msg', mod_access).removeClass('display_none').addClass('display_block');
        $('.page_member_access_msg_text', mod_access).removeClass('display_none').addClass('display_block');
    } else {
        $('input[name=page_access]', mod_access).eq(2).attr("checked", true);
        get_mod_group();
        $('.group_list', mod_access).removeClass('display_none').addClass('display_block');
        $('.page_member_access_msg', mod_access).removeClass('display_none').addClass('display_block');
        $('.page_member_access_msg_text', mod_access).removeClass('display_none').addClass('display_block');
    }
    if (access_msg_use == 'N') {
        $('input[name=page_access_msg_use]', mod_access).eq(1).attr("checked", true);
        $('.page_member_access_msg_text', mod_access).removeClass('display_block').addClass('display_none'); 
    } else {
        $('input[name=page_access_msg_use]', mod_access).eq(0).attr("checked", true);
        $('.page_member_access_msg_text', mod_access).removeClass('display_none').addClass('display_block'); 
    }
    
    //클릭했을때 처리
    $('input[name=page_access]', mod_access).on('click', function(e) {
        if ($('input[name=page_access]:checked' , mod_access).val() == 'GROUP') {
            get_mod_group();
            $('.group_list', mod_access).removeClass('display_none').addClass('display_block');
        } else {
            $('.group_list', mod_access).removeClass('display_block').addClass('display_none');
        }
        if ($('input[name=page_access]:checked' , mod_access).val() == 'NONE') {
            $('.page_member_access_msg', mod_access).removeClass('display_block').addClass('display_none');
            $('.page_member_access_msg_text', mod_access).removeClass('display_block').addClass('display_none');
        } else {
            $('.page_member_access_msg', mod_access).removeClass('display_none').addClass('display_block');
            $('.page_member_access_msg_text', mod_access).removeClass('display_none').addClass('display_block');
        }
    });
    $('input[name=page_access_msg_use]', mod_access).on('click', function(e) {
        if ($(this).val() == 'Y') {
            $('.page_member_access_msg_text', mod_access).removeClass('display_none').addClass('display_block');
        } else {
            $('.page_member_access_msg_text', mod_access).removeClass('display_block').addClass('display_none');
        }
    });
    
    //접근 제한 메시지 있을경우 보여줌
    if (access_msg.length > 0) {
        $('input[name=page_access_msg]', mod_access).val(access_msg);
    }

    /* 저장하기 클릭 */
    $('.save_ok', mod_access).on('click', function(e) {
        if($('input[name=page_access]:checked' , mod_access).val() == 'GROUP') {
            var page_access = $('select[name=group]', mod_access).val();
            if (page_access == '') {
                alert('회원그룹을 선택해주세요.');
                $('select[name=group]', mod_access).focus();
                return false;
            }
        } else {
            var page_access = $('input[name=page_access]:checked' , mod_access).val();
        }
        var params = {
            dgnset_id: $('input[name="dgnset_id"]').val(),
            action_mode: 'ACCESS_MODIFY',
            page_type: $('input[name="page_type"]').val(),
            design_id: $('input[name="design_id"]').val(),
            page_access : page_access,
            page_access_msg : $('input[name=page_access_msg]', mod_access).val(),
            page_access_msg_use : $('input[name=page_access_msg_use]:checked' , mod_access).val()
        };
        
        $.ajax({
            async: false,
            url: 'neodesign_design_temp.action.html',
            type: 'post',
            dataType: 'json',
            data: params,
            success: function (res) {
                if (res.RESULT == true) {
                    alert(res.msg);
                    mod_access.hide();
                    if (typeof $.overlay_hide != 'undefined') $.overlay_hide();
                    location.href = _location_page + '?dgnset_id=' + params.dgnset_id + '&page_type=' + params.page_type + '&design_id=' + params.design_id + "";
                }
            }
        });
        return false;
    });
}
/* 카테고리 정보를 가져온다. */
var add_layer = $('#layerpageAdd');
var get_category = function(c_id, depth) {

    var cate_obj = $('.cate_list select[name=cate' + depth + ']', add_layer)[0];
    if (depth == 1 && cate_obj.options.length > 0 ) {
        //대분류 항목이 없을때만 1번 data를 가져온다.
        return false;
    } else if (depth > 1 && cate_obj.options.length > 1 && c_id.length > 0 ) {
        $(cate_obj).html("<option value='' >선택 안함</option>");
    }


    var real_c_id = '';
    if (depth > 1 ) {
    //조회 될때 마다 하위 분류 disabled = false 로 초기화 해준다.
        $('select[name^=cate]', add_layer).each(function() {
            if (parseInt(this.name.substring(4,5)) >= depth) {
                this.disabled = false;
            } else {
                real_c_id += this.value;
            }
        });

    }
    $.ajax({
        url: '/makeshop/newmanager/neoproduct_category.list.html',
        data: { action_mode: 'GetCategoryList', c_id : real_c_id},
        dataType: 'json',
        type: 'POST',
        async: false,
        success: function(response) {
            if (response.category == null) {
                //alert('분류 정보가 없습니다.');
                cate_obj.disabled = true;
                if (depth > 1) {
                    $('select[name^=cate]', add_layer).each(function() {
                        if (parseInt(this.name.substring(4,5)) > depth) {
                            this.disabled = true;
                        }
                    });
                }
            } else {
                var start = (depth - 1) * 3;
                $.each(response.category, function(i, val) {
                    if (val.virtual == 'Y') {
                        val.codename += '(가상)';
                    }
                    if(cate_obj.options.length == 0) {
                        $(cate_obj).html("<option value='" + val.c_id.substring(start , start + 3)  + "' >" + val.codename + "</option>");
                    } else {
                        $(cate_obj).append("<option value='" + val.c_id.substring(start, start + 3)  + "' >" + val.codename + "</option>");
                    }
                    
                });
            }
        }
    });

};
// 도매/사입업체 리스트 가져오기
var get_supply = function () {
    $.ajax({
        url: '/makeshop/newmanager/supply.list.html',
        dataType: 'json',
        type: 'POST',
        success: function(res) {
            // option 추가 해줘~
            $('select[name=supply_code]', add_layer).empty();       // 초기화부터하고..
            $('select[name=supply_code]', add_layer).append('<option value="">도매/사입업체 선택하세요</option>');
            if (res.RESULT && res.data.length > 0) {
                $.each(res.data, function () {
                    $('select[name=supply_code]', add_layer).append('<option value="' + this.code + '">' + this.company_name + '</option>');
                });
            }
        }
    });
}


// 그룹정보 가져오기 
var get_group = function () {
    $.ajax({
        url: '/makeshop/newmanager/neodesign_group.list.html',
        dataType: 'json',
        type: 'POST',
        success: function(res) {
            $('select[name=group]', add_layer).empty(); //초기화
            $('select[name=group]', add_layer).append('<option value="" style="font-weight:bold;">그룹 및 등급을 선택하세요.</option>');
            $('select[name=group]', add_layer).append('<optgroup label="선택한 단일 그룹만 쓰기/읽기" style="font-weight:bold;"></optgroup>');
            if (res.RESULT && res.data.length > 0) {
                $.each(res.data, function () {
                    $('select[name=group]', add_layer).append('<option value="' + this.code + '">' + this.name + '</option>');
                });
            }
            $('select[name=group]', add_layer).append('<optgroup label="선택등급 이상 그룹 쓰기/읽기" style="font-weight:bold;"></optgroup>');
            for (i = 1; i <= 10; i++) {
                $('select[name=group]', add_layer).append('<option value="' + i + '"> LV.' + i + '</option>');
            }
        }
    });
}
// PC d4, 모바일 d4, 파워팩 함께 쓰는 공통 js
var duplicate_design_id = false
  , complete_check_design_id = null;
var add_page = function() {
    var page_type = $('select[name=page_type]', add_layer).val(),
        design_title = $('input[name=design_title]', add_layer).val(),
        action_mode = $('input[name=action_mode]', add_layer).val();
    if (design_title.replace(/\s/g,"").length == 0 ) {
        alert('페이지명을 입력해주세요 \n(공백은 입력되지 않습니다.)');
        return false;
    }

    if (page_type == "main") {
        var ch_set_page_id = $('input[name="page_set_design_id"]', add_layer).val();
        if (ch_set_page_id == "") {
            alert("디자인 번호를 입력해 주시기 바랍니다.");
            return;
        } else if (ch_set_page_id == "1") {
            alert("1을 제외한 나머지 번호로 디자인 번호를 입력해 주시기 바랍니다.");
            return;
        }
    }

    for (i=0;i<design_title.length;i++) {
        var char_ASCII = design_title.charCodeAt(i);
        if ( char_ASCII == 92 || char_ASCII == 34 || char_ASCII == 39) {
            alert('\\(역슬래쉬) , "(큰따옴표), \'(작은따옴표)는 입력이 불가능합니다.\n다시 입력해주세요.');
            return false;
        }
    }
    var params = {
        dgnset_id : $('input[name=dgnset_id]').val(),
        action_mode : action_mode,
        design_title : design_title,
        page_type : page_type 
    };
    if (action_mode == 'PAGE_COPY' || action_mode == 'PAGE_CONTENT_COPY') {
        params['design_id'] = $('input[name=design_id]').val();
    }

    if (page_type == 'shopbrand' || page_type == 'shopdetail' || page_type == 'shopdetail_addinfo' || page_type == 'shopping_tab') {
        params['brand_type'] = $('select[name=brand_type]', add_layer).val();
        if (params['brand_type'] == 'each_page') {
        // 개별 분류 페이지 정보 가져오기
            $('select[name^=cate]', add_layer).each(function(idx) {
                params['separator' + (idx + 1) ] = this.value;
            });
        } else {
            params['separator1'] = params['brand_type'];
        }

    }
    if (page_type == 'supply') {
        if ($.trim($('select[name=supply_code]', add_layer).val()).length == 0) {
            alert('도매/사입업체를 선택하세요');
            $('select[name=supply_code]', add_layer).focus();
            return false;
        }
        params['separator1'] = $('select[name=supply_code]', add_layer).val();
    }
    
    if (page_type == 'page') {
        if ($('input[name=page_access]:checked').val() == 'MEMBER') { //회원 제한일경우
            params['separator1'] = 'MEMBER'; 
            params['separator2'] = $('input[name=page_access_msg]', add_layer).val();
            params['separator3'] = $('input[name=page_access_msg_use]:checked', add_layer).val();
        } else if ($('input[name=page_access]:checked').val() == 'GROUP') { //그룹제한일경우
            if ($.trim($('select[name=group]', add_layer).val()).length == 0) {
                alert('회원 그룹을 선택하세요');
                $('select[name=group]', add_layer).focus();
                return false;
            }
            params['separator1'] = $('select[name=group]', add_layer).val();
            params['separator2'] = $('input[name=page_access_msg]', add_layer).val();
            params['separator3'] = $('input[name=page_access_msg_use]:checked', add_layer).val();
        } else { //비회원/회원 접근일 경우
            params['separator1'] = 'NONE'; 
        }
    }

    if (page_type == 'page' || page_type == 'main') {
        // 디자인 번호 숫자만 입력 했는지 체크
        if ($('input[name="page_set_design_id"]', add_layer).length > 0) {
            if ($('input[name="page_set_design_id"]', add_layer).val().length > 0 && isNaN($('input[name="page_set_design_id"]', add_layer).val())) {
                alert ('디자인 번호는 숫자만 입력하세요.');
                $('input[name="page_set_design_id"]', add_layer).focus();
                return false;
            } 
            if ($('input[name="page_set_design_id"]', add_layer).val().length > 0 && duplicate_design_id !== true) {
                alert ('디자인 번호는 중복체크를 하셔야 합니다.');
                return false;
            }
            params['page_design_id'] = $('input[name="page_set_design_id"]', add_layer).val();
        }
    }
    //params['separator1'] = '';    // 디버그 하기 위한 부분
    //separator1 에 대해서 다시한번 검증 처리
    if (page_type == 'page' || page_type == 'shopbrand' || page_type == 'shopdetail' || page_type == 'shopdetail_addinfo' || page_type == 'supply' || page_type == 'shopping_tab' ) {
        if (params['separator1'].length == 0 ) {
        // 생성 하기 위한 인자값이 부족하여 페이지 생성 오류 처리 
            alert('페이지 추가하기 위한 입력 값이 누락 되었습니다.\n 페이지 새로고침 후에 다시 추가해주세요 ');
            return false;
        }
    }

    // 처리중 이미지 추가
    add_layer.hide();
    ing_processing.show();

    // ajax 정보 처리 부분이므로 temp.action 을 이용함
    // edit.action.html 는 submit 으로 처리 하므로..
    $.ajax({
        url : 'neodesign_design_temp.action.html',
        type: 'post',
        dataType: 'json',
        data: params,
        success: function (res) {
            if (res.RESULT == true) {
            // 기본 소스 값을 채운다.
            // 왼쪽 메뉴에 추가 작업 해야함
                location.href = _location_page + '?dgnset_id=' + params.dgnset_id + '&page_type=' + params.page_type + '&design_id=' + res.data + "";
                return false;
            }
            ing_processing.hide();
            add_layer.show();
            alert(res.msg);
            return false;
        }
    });
}
/*
 * 페이지 추가 하기 클릭시
 */
var addlayer_init = function() {
    $('input[type=text]', add_layer).each(function() {
        this.value = '';
    });
    /*
    $('.page_add_info', add_layer).removeClass('display_block').addClass('display_none');
    $('select', add_layer).each(function() {
        this.selectedIndex = 0;
    });
    */
    $('select', add_layer).each(function() {
        this.disabled = false;
    });

    if ($('input[name="action_mode"]', add_layer).val() == 'PAGE_CONTENT_COPY') {
        $('.copy-tit', add_layer).show().siblings('.add-tit').hide();
        $('select[name="page_type"]', add_layer).attr('disabled', 'disabled').val(page_type).prop('selected', true).trigger('change');
    } else {
        $('.add-tit', add_layer).show().siblings('.copy-tit').hide();
    }
};
/**
 * 개별디자인 적용 분류 선택에 따른 카테고리 display
 */
var category_display = function(brand_type) {
    if (brand_type == 'each_page') {
    // 개별 분류 페이지 선택인 경우
        $('.cate_list', add_layer).removeClass('display_none').addClass('display_block');
    } else {
        $('.cate_list', add_layer).removeClass('display_block').addClass('display_none');
    }
};

$(function(){
    /* 개별디자인 적용 분류 선택에 따른 action */
    $('select[name=brand_type]', add_layer).change(function() {
        category_display(this.value);
    });
    $('select[name=page_type]', add_layer).change(function() {
        $('.page_set_design_id').removeClass('display_block');
        if (this.value == 'shopbrand' || this.value == 'shopping_tab') {
        // 상품 상세/분류 화면인 경우 
            $('.page_add_info', add_layer).removeClass('display_none').addClass('display_block');
            $('.page_add_info_supply', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_add_info_page', add_layer).removeClass('display_block').addClass('display_none');
            $('.category_type', add_layer).removeClass('display_none').addClass('display_block');
            category_display($('select[name=brand_type]', add_layer).val());
            get_category('', 1);
        } else if (this.value == 'shopdetail' || this.value == 'shopdetail_addinfo') {
            $('.page_add_info', add_layer).removeClass('display_none').addClass('display_block');
            $('.category_type', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_add_info_page', add_layer).removeClass('display_block').addClass('display_none');
            $('.cate_list', add_layer).removeClass('display_none').addClass('display_block');
            get_category('', 1);
        } else if (this.value == 'supply') {
            $('.page_add_info_supply', add_layer).removeClass('display_none').addClass('display_block');
            $('.page_add_info_page', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_add_info', add_layer).removeClass('display_block').addClass('display_none');
            get_supply();
        } else if (this.value == 'main') {
            $('.page_set_design_id').addClass
            $('.page_add_info_page', add_layer).removeClass('display_none').addClass('display_block');
            $('.page_add_info', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_add_info_supply', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_member_access, .group_list, .page_member_access_msg').removeClass('display_block').addClass('display_none');
        } else if (this.value == 'page') { //개별페이지 접근권한 추가
            $('.page_set_design_id').addClass
            $('.page_add_info_page', add_layer).removeClass('display_none').addClass('display_block');
            $('.page_add_info', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_add_info_supply', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_member_access, .group_list, .page_member_access_msg').removeClass('display_none').addClass('display_block');
            //회원그룹을 클릭했을 때만 그룹이 보이도록
            $('input[name=page_access]').on('click', function(e) {
                $('.group_list', add_layer).removeClass('display_block').addClass('display_none');
                if(this.value == 'GROUP') {
                    $('.group_list', add_layer).removeClass('display_none').addClass('display_block');
                    get_group();
                }
                if(this.value == 'NONE') {
                    $('.page_member_access_msg', add_layer).removeClass('display_block').addClass('display_none');
                } else {
                    $('.page_member_access_msg', add_layer).removeClass('display_none').addClass('display_block');
                }
            });
            //접근권한 메시지 노출 여부 체크시 문구 입력 TEXT INPUT 노출
            $('input[name=page_access_msg_use]').on('click', function(e) {
                if(this.value == 'Y') {
                    $('.page_member_access_msg_text', add_layer).removeClass('display_none').addClass('display_block');
                }
                if(this.value == 'N') {
                    $('.page_member_access_msg_text', add_layer).removeClass('display_block').addClass('display_none');
                }
            });
        } else {
            $('.page_add_info', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_add_info_supply', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_add_info_page', add_layer).removeClass('display_block').addClass('display_none');
        }
    });
    $('select[name=cate1], select[name=cate2]', add_layer).on('click', function(e) {
        if (this.value.length > 0 ) {
            var depth = parseInt(this.name.substring(4,5)) + 1;
            get_category(this.value, depth);
        }
    });
    /* 저장하기 클릭 */
    $('.save_ok', add_layer).on('click', function(e) {
        add_page();
        return false;
    });
    /* 디자인 번호 중복확인 */
    $('.duplicate_design_id', add_layer).on('click', function(e) {
        var page_type = $('select[name=page_type]', add_layer).val();
        if ($('input[name="page_set_design_id"]', add_layer).val().length == 0) {
            alert ('디자인 번호를 입력하세요.');
            $('input[name="page_set_design_id"]', add_layer).focus();
            return false;
        }
        if (isNaN($('input[name="page_set_design_id"]', add_layer).val())) {
            alert ('디자인 번호는 숫자만 입력 가능합니다.');
            $('input[name="page_set_design_id"]', add_layer).focus();
            return false;
        }
        var params = {
            dgnset_id : $('input[name=dgnset_id]').val(),
            action_mode : 'DUPLICATE_DESIGN_ID',
            design_id : $('input[name="page_set_design_id"]', add_layer).val(),
            page_type : page_type 
        };
        // ajax 정보 처리 부분이므로 temp.action 을 이용함
        // edit.action.html 는 submit 으로 처리 하므로..
        $.ajax({
            url : 'neodesign_design_temp.action.html',
            type: 'post',
            dataType: 'json',
            data: params,
            success: function (res) {
                duplicate_design_id = false;
                if (res.RESULT == true) {
                    // 중복되는 디자인 번호 없음
                    duplicate_design_id = true;
                    complete_check_design_id = res.data;
                }
                alert(res.msg);
                return false;
            }
        });
    });
    /* 디자인 번호 변경시 변수 초기화 */
    $('input[name="page_set_design_id"]', add_layer).on('change', function (e) {
        if ($(this).val() != complete_check_design_id) duplicate_design_id = false;
    });
});
