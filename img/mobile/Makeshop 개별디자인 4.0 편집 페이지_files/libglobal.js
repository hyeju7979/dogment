/**
 *
 * ��  �� : ��ü �������� ���Ǿ������� ������ ���������� �������� ���Ǵ� class, function �� �� ���Ϸ� �մϴ�.
 * �ۼ��� : 2009.02.06
 * ������ : 2009.03.25
 * @author kimjt <rander39@koreacenter.com>
 * @version 1.1
 *
 * ��뿹 : <script type="text/javascript" src="./js/libglobal.js"></script>
 * ����α� : 2009.03.25 - DTD������ �Ǿ� �ִ� �������� ���� ������ ������
 *                         Ptototype ������� �Ǿ� �ִ� �κ��� �ܰ����� ó�� �ǵ��� ����
 */

/**
 * mset (Manager Setting) Class
 * ��  �� : newmanager ���� ���� input box�� ���� ���� �� �����ϴ� Class
 * @author kimjt
 */
var mset = {
    /**
     * getElementById �� ã�Ƽ� return ��
     * Log : Ptototype ������� �Ǿ� �ִ� �κ��� ��ü ���������� ����Ҽ� �ֵ��� �ϱ� ���ؼ� �߰��� - 2009.03.25 (kimjt)
     */
    ById: function (ObjName) {
        return document.getElementById(ObjName);
    },

    /** ����ǥ ȣ�� : return ����ǥ�� */
    dialog: function (SetColor) {
        var agent = window.navigator.userAgent;
        var w = 260;
        var h = 400;

        // navigator.userAgent �� Height �� ó��
        if(agent.indexOf("MSIE 8.0") != -1 || agent.indexOf("MSIE 7.0") != -1 || agent.indexOf("Chrome") != -1) h = 400;
        else if (agent.indexOf("SV1") != -1 || agent.indexOf("Firefox") != -1) h = 440;
        else h = 460;

        return window.showModalDialog("/makeshop/newmanager/select_color.html?color=" + SetColor, "oldcolor", "resizable: no; help: no; status: no; scroll: no; center: yes; dialogWidth: " + w + "px; dialogHeight: " + h + "px;");
    },

    // ����ǥ Old Style
    selcolor: function (ObjName) {
        this.color(ObjName);
    },
    selcolor: function (ObjName, Exp1Color, Exp2Color) {
        this.color(ObjName, Exp1Color, Exp2Color);
    },
    selcolor_text: function (ObjName, Exp1Color) {
        this.color2(ObjName, Exp1Color);
    },
    selcolortrans: function (trans, ObjName, Exp1Color) {
        this.colortrans(trans, ObjName, Exp1Color)
    },
    selcolormobile: function (checks, ObjName, Exp1Color) {
        this.colormobile(checks, ObjName, Exp1Color)
    },
    selcolorcall: function (ObjName, CallBack) {
        this.colorcallback(ObjName, CallBack);
    },

    // ����ǥ new Style
    /** ���õ� ����ǥ ���� ObjName�� ��� */
    color: function (ObjName) {
        var Obj = this.ById(ObjName);
        if (Obj.disabled === true) return;
        if ( !ObjName || !Obj ) { alert("ElementById no setting"); return; }
        SetColor = Obj.value;
        var NewColor = this.dialog(SetColor);
        if ( NewColor ) {
            Obj.value = NewColor;
        }
        else return;
    },
    /** ���õ� ����ǥ ���� �������� Exp1Color, Exp2Color�� ��� */
    color: function (ObjName, Exp1Color, Exp2Color) {
        var Obj = this.ById(ObjName);
        var Exp1 = this.ById(Exp1Color);
        var Exp2 = this.ById(Exp2Color);
        var SetColor = Obj.value;
        var NewColor = this.dialog(SetColor);
        if (NewColor) {
            Obj.value = NewColor;
            if ( typeof(Exp1Color) != 'undefined' && typeof(Exp1) != 'undefined') {
                Exp1.style.backgroundColor = NewColor;
            }
            if ( typeof(Exp2Color) != 'undefined' && typeof(Exp2) != 'undefined') {
                Exp2.style.backgroundColor = NewColor;
            }
            if (typeof(marker_color) === 'function') {
                marker_color(Obj, NewColor);
            }
        }
        else return;
    },
    color2: function (ObjName, Exp1Color, Exp2Color) {
        var Obj = this.ById(ObjName);
        var Exp1 = this.ById(Exp1Color);
        var Exp2 = this.ById(Exp2Color);
        var SetColor = Obj.value;
        var NewColor = this.dialog(SetColor);
        if (NewColor) {
            Obj.value = NewColor;
            if ( typeof(Exp1Color) != 'undefined' && typeof(Exp1) != 'undefined') {
                Exp1.style.Color = NewColor;
            }
            if (typeof(marker_color) === 'function') {
                marker_color(Obj, NewColor);
            }
        }
        else return;
    },


    /** trans üũ�� ���� ó�� */
    colortrans: function (trans, ObjName, Exp1Color) {
        var bit = this.ById(trans);
        if (bit.disabled == true)  return;
        this.color(ObjName, Exp1Color);
    },
    /** ����� ī�װ�, ���δ��� ���� ó�� */
    colormobile: function (checks, ObjName, Exp1Color) {
        var checksObj = this.ById(checks);
        if (checksObj.value.length == 0) {
            alert('���� ī�װ� ���� �Է����ּ���.');
            checksObj.focus();
            return false;
        }
        this.color(ObjName, Exp1Color);
    },
    /** ���õ� ����ǥ ���� callback �Լ��� ���� */
    colorcallback: function(ObjName, CallBack) {
        var Obj = this.ById(ObjName);
        if (Obj.disabled === true) return;
        if ( !ObjName || !Obj ) { alert("ElementById no setting"); return; }
        SetColor = Obj.value;
        var NewColor = this.dialog(SetColor);
        if ( NewColor ) {
            CallBack(NewColor);
        }
        else return;
    },

    /**
     * ��ũ �����
     * ������ : ���� popup_linkwizard.html �������� �ٿ�� �Ǿ� ������ popup_linkwizard.html ������ ��ü���� ���� 'form1' ���� ���� �ϰ� ����.
     *          ���� ���� �ؾ���(�Ѥ�)
     * ���� :
     * <input type='text' name='input_target_name' id='input_target_name' value=''>
     * <img src='./images/tagcloud_linkwizard.gif' align="absmiddle" border="0" class="img_button" onclick="mset.linkwizard('input_target_name')">
     *
     * <form name=linkwizard action="popup_linkwizard.html" method=post target=linkwizard>
     * <input type=hidden name=id value="<?=$admin_id?>">
     * <input type=hidden name=textname>
     * <input type=hidden name=type value="display">
     * </form>
     * ���� : id, textname, type ���� �� POST�� ������ �Ǿ�߸� �մϴ�.
     *
     */
    linkwizard: function(tmp) {
        var obj = document.linkwizard;
        window.open("about:blank","linkwizard","width=245,height=140,scrollbars=no");
        obj.textname.value = tmp;
        obj.submit();
    }
}

/**
 * 01do ����â �˾� ����
 * @author muik
 * @date 2009-10-29
 * @param int package_id ���ϵ�� ��Ű�� ��ǰ��ȣ
 * @price int price optional ����������ǰ ����
 */
function popup_01do_payment (package_id, price) {
    var url = "/makeshop/newmanager/01do_redirect.html?redirect_url=";
    var redirect = "http://www.01do.com/order/form/id/"+package_id+"/type/nomenu/";
    if (arguments.length > 1) {
        redirect += 'flexible/' + price + '/';
    }
    window.open(url + encodeURIComponent(redirect), "01do_payment", "width=785px,height=800px,scrollbars=yes");
}

/**
 * ��¥ ��ȿ�� üũ
 * @author munhui
 * @date 2013-09-02
 * @param date 0000-00-00
 * @return boolean
 */
function global_checkdate(date) {
    var c_date = date.split("-");
    var last_day = (new Date(c_date[0], c_date[1], 0)).getDate();
    if (last_day < c_date[2]) {
        return false;
    }
    return true;
}

function pop_select_color(color, id, callback, group) {
    var agent = window.navigator.userAgent;
    var w = 260;
    var h = 340;

    // navigator.userAgent �� Height �� ó��
    if(agent.indexOf("MSIE") != -1 || agent.indexOf("Trident") != -1 || agent.indexOf("Chrome") != -1) {
        h = 340;
    } else if (agent.indexOf("SV1") != -1 || agent.indexOf("Firefox") != -1) {
        h = 340;
    } else {
        h = 340;
    }

    var _win =  window.open('/makeshop/newmanager/makeshop_colorpicker.html?callback=' + callback + '&color=' + color.replace("#","") +'&target=' + id, "makeshop_colorpicker", "width=" + w + ",height=" + h + "scrollbars=no");
    _win.focus();
}
