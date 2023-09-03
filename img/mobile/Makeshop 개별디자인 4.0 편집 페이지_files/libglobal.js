/**
 *
 * 로  그 : 전체 페이지에 사용되어지지는 않지만 전반적으로 공통으로 사용되는 class, function 을 이 파일로 합니다.
 * 작성일 : 2009.02.06
 * 변경일 : 2009.03.25
 * @author kimjt <rander39@koreacenter.com>
 * @version 1.1
 *
 * 사용예 : <script type="text/javascript" src="./js/libglobal.js"></script>
 * 변경로그 : 2009.03.25 - DTD선언이 되어 있는 페이지와 없는 페이지 때문에
 *                         Ptototype 기반으로 되어 있던 부분을 단곡으로 처리 되도록 변경
 */

/**
 * mset (Manager Setting) Class
 * 로  그 : newmanager 에서 값을 input box에 값을 설정 및 선택하는 Class
 * @author kimjt
 */
var mset = {
    /**
     * getElementById 를 찾아서 return 함
     * Log : Ptototype 기반으로 되어 있던 부분을 전체 페이지에서 사용할수 있도록 하기 위해서 추가함 - 2009.03.25 (kimjt)
     */
    ById: function (ObjName) {
        return document.getElementById(ObjName);
    },

    /** 색상표 호출 : return 생상표값 */
    dialog: function (SetColor) {
        var agent = window.navigator.userAgent;
        var w = 260;
        var h = 400;

        // navigator.userAgent 별 Height 값 처리
        if(agent.indexOf("MSIE 8.0") != -1 || agent.indexOf("MSIE 7.0") != -1 || agent.indexOf("Chrome") != -1) h = 400;
        else if (agent.indexOf("SV1") != -1 || agent.indexOf("Firefox") != -1) h = 440;
        else h = 460;

        return window.showModalDialog("/makeshop/newmanager/select_color.html?color=" + SetColor, "oldcolor", "resizable: no; help: no; status: no; scroll: no; center: yes; dialogWidth: " + w + "px; dialogHeight: " + h + "px;");
    },

    // 색상표 Old Style
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

    // 색상표 new Style
    /** 선택된 색상표 값을 ObjName에 출력 */
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
    /** 선택된 색상표 값을 색상으로 Exp1Color, Exp2Color로 출력 */
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


    /** trans 체크후 색상값 처리 */
    colortrans: function (trans, ObjName, Exp1Color) {
        var bit = this.ById(trans);
        if (bit.disabled == true)  return;
        this.color(ObjName, Exp1Color);
    },
    /** 모바일 카테고리, 쇼핑뉴스 색상값 처리 */
    colormobile: function (checks, ObjName, Exp1Color) {
        var checksObj = this.ById(checks);
        if (checksObj.value.length == 0) {
            alert('먼저 카테고리 명을 입력해주세요.');
            checksObj.focus();
            return false;
        }
        this.color(ObjName, Exp1Color);
    },
    /** 선택된 색상표 값을 callback 함수로 리턴 */
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
     * 링크 도우미
     * 문제점 : 현재 popup_linkwizard.html 페이지를 뛰우게 되어 있으며 popup_linkwizard.html 페이지 자체에서 폼을 'form1' 으로 고정 하고 있음.
     *          추후 변경 해야함(ㅡㅜ)
     * 사용법 :
     * <input type='text' name='input_target_name' id='input_target_name' value=''>
     * <img src='./images/tagcloud_linkwizard.gif' align="absmiddle" border="0" class="img_button" onclick="mset.linkwizard('input_target_name')">
     *
     * <form name=linkwizard action="popup_linkwizard.html" method=post target=linkwizard>
     * <input type=hidden name=id value="<?=$admin_id?>">
     * <input type=hidden name=textname>
     * <input type=hidden name=type value="display">
     * </form>
     * 참고 : id, textname, type 값은 꼭 POST로 전달이 되어야만 합니다.
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
 * 01do 결제창 팝업 띄우기
 * @author muik
 * @date 2009-10-29
 * @param int package_id 공일디오 패키지 상품번호
 * @price int price optional 자유결제상품 가격
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
 * 날짜 유효성 체크
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

    // navigator.userAgent 별 Height 값 처리
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
