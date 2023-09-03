var page_type = _page_type;
// �����������϶� ���� ���� ����
if(page_type == 'page') {
    var mod_access = $('#layer-access-modify');
    var access = _d_separator1;
    var access_msg = _d_separator2;
    var access_msg_use = _d_separator3;
    // �����Ҷ� �׷����� �������� 
    var get_mod_group = function () {
        $.ajax({
            url: '/makeshop/newmanager/neodesign_group.list.html',
            dataType: 'json',
            type: 'POST',
            success: function(res) {
                $('select[name=group]', mod_access).empty(); //�ʱ�ȭ
                $('select[name=group]', mod_access).append('<option value="" style="font-weight:bold;">�׷� �� ����� �����ϼ���.</option>');
                $('select[name=group]', mod_access).append('<optgroup label="������ ���� �׷츸 ����/�б�" style="font-weight:bold;"></optgroup>');
                if (res.RESULT && res.data.length > 0) {
                    $.each(res.data, function () {
                        $('select[name=group]', mod_access).append('<option value="' + this.code + '">' + this.name + '</option>');
                    });
                }
                $('select[name=group]', mod_access).append('<optgroup label="���õ�� �̻� �׷� ����/�б�" style="font-weight:bold;"></optgroup>');
                for (i = 1; i <= 10; i++) {
                    $('select[name=group]', mod_access).append('<option value="' + i + '"> LV.' + i + '</option>');
                }
                $('select[name=group]', mod_access).val(access);
            }
        });
    }
    // ���� ������ ���� ���� üũ�ڽ� ����
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
    
    //Ŭ�������� ó��
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
    
    //���� ���� �޽��� ������� ������
    if (access_msg.length > 0) {
        $('input[name=page_access_msg]', mod_access).val(access_msg);
    }

    /* �����ϱ� Ŭ�� */
    $('.save_ok', mod_access).on('click', function(e) {
        if($('input[name=page_access]:checked' , mod_access).val() == 'GROUP') {
            var page_access = $('select[name=group]', mod_access).val();
            if (page_access == '') {
                alert('ȸ���׷��� �������ּ���.');
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
/* ī�װ� ������ �����´�. */
var add_layer = $('#layerpageAdd');
var get_category = function(c_id, depth) {

    var cate_obj = $('.cate_list select[name=cate' + depth + ']', add_layer)[0];
    if (depth == 1 && cate_obj.options.length > 0 ) {
        //��з� �׸��� �������� 1�� data�� �����´�.
        return false;
    } else if (depth > 1 && cate_obj.options.length > 1 && c_id.length > 0 ) {
        $(cate_obj).html("<option value='' >���� ����</option>");
    }


    var real_c_id = '';
    if (depth > 1 ) {
    //��ȸ �ɶ� ���� ���� �з� disabled = false �� �ʱ�ȭ ���ش�.
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
                //alert('�з� ������ �����ϴ�.');
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
                        val.codename += '(����)';
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
// ����/���Ծ�ü ����Ʈ ��������
var get_supply = function () {
    $.ajax({
        url: '/makeshop/newmanager/supply.list.html',
        dataType: 'json',
        type: 'POST',
        success: function(res) {
            // option �߰� ����~
            $('select[name=supply_code]', add_layer).empty();       // �ʱ�ȭ�����ϰ�..
            $('select[name=supply_code]', add_layer).append('<option value="">����/���Ծ�ü �����ϼ���</option>');
            if (res.RESULT && res.data.length > 0) {
                $.each(res.data, function () {
                    $('select[name=supply_code]', add_layer).append('<option value="' + this.code + '">' + this.company_name + '</option>');
                });
            }
        }
    });
}


// �׷����� �������� 
var get_group = function () {
    $.ajax({
        url: '/makeshop/newmanager/neodesign_group.list.html',
        dataType: 'json',
        type: 'POST',
        success: function(res) {
            $('select[name=group]', add_layer).empty(); //�ʱ�ȭ
            $('select[name=group]', add_layer).append('<option value="" style="font-weight:bold;">�׷� �� ����� �����ϼ���.</option>');
            $('select[name=group]', add_layer).append('<optgroup label="������ ���� �׷츸 ����/�б�" style="font-weight:bold;"></optgroup>');
            if (res.RESULT && res.data.length > 0) {
                $.each(res.data, function () {
                    $('select[name=group]', add_layer).append('<option value="' + this.code + '">' + this.name + '</option>');
                });
            }
            $('select[name=group]', add_layer).append('<optgroup label="���õ�� �̻� �׷� ����/�б�" style="font-weight:bold;"></optgroup>');
            for (i = 1; i <= 10; i++) {
                $('select[name=group]', add_layer).append('<option value="' + i + '"> LV.' + i + '</option>');
            }
        }
    });
}
// PC d4, ����� d4, �Ŀ��� �Բ� ���� ���� js
var duplicate_design_id = false
  , complete_check_design_id = null;
var add_page = function() {
    var page_type = $('select[name=page_type]', add_layer).val(),
        design_title = $('input[name=design_title]', add_layer).val(),
        action_mode = $('input[name=action_mode]', add_layer).val();
    if (design_title.replace(/\s/g,"").length == 0 ) {
        alert('���������� �Է����ּ��� \n(������ �Էµ��� �ʽ��ϴ�.)');
        return false;
    }

    if (page_type == "main") {
        var ch_set_page_id = $('input[name="page_set_design_id"]', add_layer).val();
        if (ch_set_page_id == "") {
            alert("������ ��ȣ�� �Է��� �ֽñ� �ٶ��ϴ�.");
            return;
        } else if (ch_set_page_id == "1") {
            alert("1�� ������ ������ ��ȣ�� ������ ��ȣ�� �Է��� �ֽñ� �ٶ��ϴ�.");
            return;
        }
    }

    for (i=0;i<design_title.length;i++) {
        var char_ASCII = design_title.charCodeAt(i);
        if ( char_ASCII == 92 || char_ASCII == 34 || char_ASCII == 39) {
            alert('\\(��������) , "(ū����ǥ), \'(��������ǥ)�� �Է��� �Ұ����մϴ�.\n�ٽ� �Է����ּ���.');
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
        // ���� �з� ������ ���� ��������
            $('select[name^=cate]', add_layer).each(function(idx) {
                params['separator' + (idx + 1) ] = this.value;
            });
        } else {
            params['separator1'] = params['brand_type'];
        }

    }
    if (page_type == 'supply') {
        if ($.trim($('select[name=supply_code]', add_layer).val()).length == 0) {
            alert('����/���Ծ�ü�� �����ϼ���');
            $('select[name=supply_code]', add_layer).focus();
            return false;
        }
        params['separator1'] = $('select[name=supply_code]', add_layer).val();
    }
    
    if (page_type == 'page') {
        if ($('input[name=page_access]:checked').val() == 'MEMBER') { //ȸ�� �����ϰ��
            params['separator1'] = 'MEMBER'; 
            params['separator2'] = $('input[name=page_access_msg]', add_layer).val();
            params['separator3'] = $('input[name=page_access_msg_use]:checked', add_layer).val();
        } else if ($('input[name=page_access]:checked').val() == 'GROUP') { //�׷������ϰ��
            if ($.trim($('select[name=group]', add_layer).val()).length == 0) {
                alert('ȸ�� �׷��� �����ϼ���');
                $('select[name=group]', add_layer).focus();
                return false;
            }
            params['separator1'] = $('select[name=group]', add_layer).val();
            params['separator2'] = $('input[name=page_access_msg]', add_layer).val();
            params['separator3'] = $('input[name=page_access_msg_use]:checked', add_layer).val();
        } else { //��ȸ��/ȸ�� ������ ���
            params['separator1'] = 'NONE'; 
        }
    }

    if (page_type == 'page' || page_type == 'main') {
        // ������ ��ȣ ���ڸ� �Է� �ߴ��� üũ
        if ($('input[name="page_set_design_id"]', add_layer).length > 0) {
            if ($('input[name="page_set_design_id"]', add_layer).val().length > 0 && isNaN($('input[name="page_set_design_id"]', add_layer).val())) {
                alert ('������ ��ȣ�� ���ڸ� �Է��ϼ���.');
                $('input[name="page_set_design_id"]', add_layer).focus();
                return false;
            } 
            if ($('input[name="page_set_design_id"]', add_layer).val().length > 0 && duplicate_design_id !== true) {
                alert ('������ ��ȣ�� �ߺ�üũ�� �ϼž� �մϴ�.');
                return false;
            }
            params['page_design_id'] = $('input[name="page_set_design_id"]', add_layer).val();
        }
    }
    //params['separator1'] = '';    // ����� �ϱ� ���� �κ�
    //separator1 �� ���ؼ� �ٽ��ѹ� ���� ó��
    if (page_type == 'page' || page_type == 'shopbrand' || page_type == 'shopdetail' || page_type == 'shopdetail_addinfo' || page_type == 'supply' || page_type == 'shopping_tab' ) {
        if (params['separator1'].length == 0 ) {
        // ���� �ϱ� ���� ���ڰ��� �����Ͽ� ������ ���� ���� ó�� 
            alert('������ �߰��ϱ� ���� �Է� ���� ���� �Ǿ����ϴ�.\n ������ ���ΰ�ħ �Ŀ� �ٽ� �߰����ּ��� ');
            return false;
        }
    }

    // ó���� �̹��� �߰�
    add_layer.hide();
    ing_processing.show();

    // ajax ���� ó�� �κ��̹Ƿ� temp.action �� �̿���
    // edit.action.html �� submit ���� ó�� �ϹǷ�..
    $.ajax({
        url : 'neodesign_design_temp.action.html',
        type: 'post',
        dataType: 'json',
        data: params,
        success: function (res) {
            if (res.RESULT == true) {
            // �⺻ �ҽ� ���� ä���.
            // ���� �޴��� �߰� �۾� �ؾ���
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
 * ������ �߰� �ϱ� Ŭ����
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
 * ���������� ���� �з� ���ÿ� ���� ī�װ� display
 */
var category_display = function(brand_type) {
    if (brand_type == 'each_page') {
    // ���� �з� ������ ������ ���
        $('.cate_list', add_layer).removeClass('display_none').addClass('display_block');
    } else {
        $('.cate_list', add_layer).removeClass('display_block').addClass('display_none');
    }
};

$(function(){
    /* ���������� ���� �з� ���ÿ� ���� action */
    $('select[name=brand_type]', add_layer).change(function() {
        category_display(this.value);
    });
    $('select[name=page_type]', add_layer).change(function() {
        $('.page_set_design_id').removeClass('display_block');
        if (this.value == 'shopbrand' || this.value == 'shopping_tab') {
        // ��ǰ ��/�з� ȭ���� ��� 
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
        } else if (this.value == 'page') { //���������� ���ٱ��� �߰�
            $('.page_set_design_id').addClass
            $('.page_add_info_page', add_layer).removeClass('display_none').addClass('display_block');
            $('.page_add_info', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_add_info_supply', add_layer).removeClass('display_block').addClass('display_none');
            $('.page_member_access, .group_list, .page_member_access_msg').removeClass('display_none').addClass('display_block');
            //ȸ���׷��� Ŭ������ ���� �׷��� ���̵���
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
            //���ٱ��� �޽��� ���� ���� üũ�� ���� �Է� TEXT INPUT ����
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
    /* �����ϱ� Ŭ�� */
    $('.save_ok', add_layer).on('click', function(e) {
        add_page();
        return false;
    });
    /* ������ ��ȣ �ߺ�Ȯ�� */
    $('.duplicate_design_id', add_layer).on('click', function(e) {
        var page_type = $('select[name=page_type]', add_layer).val();
        if ($('input[name="page_set_design_id"]', add_layer).val().length == 0) {
            alert ('������ ��ȣ�� �Է��ϼ���.');
            $('input[name="page_set_design_id"]', add_layer).focus();
            return false;
        }
        if (isNaN($('input[name="page_set_design_id"]', add_layer).val())) {
            alert ('������ ��ȣ�� ���ڸ� �Է� �����մϴ�.');
            $('input[name="page_set_design_id"]', add_layer).focus();
            return false;
        }
        var params = {
            dgnset_id : $('input[name=dgnset_id]').val(),
            action_mode : 'DUPLICATE_DESIGN_ID',
            design_id : $('input[name="page_set_design_id"]', add_layer).val(),
            page_type : page_type 
        };
        // ajax ���� ó�� �κ��̹Ƿ� temp.action �� �̿���
        // edit.action.html �� submit ���� ó�� �ϹǷ�..
        $.ajax({
            url : 'neodesign_design_temp.action.html',
            type: 'post',
            dataType: 'json',
            data: params,
            success: function (res) {
                duplicate_design_id = false;
                if (res.RESULT == true) {
                    // �ߺ��Ǵ� ������ ��ȣ ����
                    duplicate_design_id = true;
                    complete_check_design_id = res.data;
                }
                alert(res.msg);
                return false;
            }
        });
    });
    /* ������ ��ȣ ����� ���� �ʱ�ȭ */
    $('input[name="page_set_design_id"]', add_layer).on('change', function (e) {
        if ($(this).val() != complete_check_design_id) duplicate_design_id = false;
    });
});
