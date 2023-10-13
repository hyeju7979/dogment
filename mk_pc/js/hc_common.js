jQuery(document).ready(function(){
    //풀페이지
    //fullPageEvent();
    aosInit();
    randowMainImageEvent();
    sideMenuEvent();
    searchEvent();
    upDownArrowEvent();
    newProductEvent();
    timeLimitEvent();         
    detailMoreBtnEvent();    
    windowEventRelease();
    
    
});
function aosInit() {
    if(jQuery('#hc_mainWrap').length > 0){
        AOS.init();
    }
}
function windowEventRelease() {
    var action_invalidity = function(){
        return true;
    }
    document.oncontextmenu = action_invalidity;
    document.ondragstart = action_invalidity;
    document.onselectstart = action_invalidity;
}

function detailMoreBtnEvent() {
    if(jQuery('div.hcMoreBtn').length < 1) return;
    var openButton = makeButton('상품설명 더보기',true);
    var closeButton = makeButton('상품설명 접기',false);
    
    jQuery('div.hcMoreBtn').append(openButton);
    jQuery('div.hcHiddenPart').append(closeButton)
   
    jQuery('summary.hc_md_more_description.open').on('click',function(){
        jQuery(this).hide();
        jQuery('div.hcHiddenPart').toggle();
    });
    
    jQuery('summary.hc_md_more_description.close').on('click',function(){
        jQuery('summary.hc_md_more_description.open').show();
        jQuery('div.hcHiddenPart').toggle();
    });
    
}
function makeButton(title,isOpen) {
    var type = 'open';
    var arrow = ''
    if(!isOpen) {
       type = 'close';
       arrow = 'active';
    }
    return '<summary class="hc_md_more_description '+type+'">'+title+'<div>' +
                 '<span class="hc_md_arrow '+arrow+'"><span></span><span></span></span></div>'+
                 '</summary>';
}
function getRemainSecTargetHour(targetHour) {
	// 현재 시간을 가져옵니다.
	const currentTime = new Date();

	// 다음 오전 10시의 시간을 설정합니다.
	const targetTime = new Date(currentTime);
	targetTime.setHours(targetHour, 0, 0, 0);

	// 만약 현재 시간이 이미 오전 10시를 지났다면 다음 날 오전 10시로 설정합니다.
	if (currentTime.getHours() >= targetHour) {
	  targetTime.setDate(targetTime.getDate() + 1);
	}

	// 현재 시간부터 다음 오전 10시까지 남은 시간을 계산합니다.
	const timeDifference = targetTime - currentTime;
	const secondsRemaining = Math.floor(timeDifference / 1000);
	return secondsRemaining;
}

function timeLimitEvent() {


    
     $('#hcTimeSaleWrap').slick({
       centerMode: true,
       centerPadding: '370px',
       slidesToShow: 1,
       responsive: [{
            breakpoint: 1919,
            settings: {
                centerPadding: '545px'
            }
        }, {
            breakpoint: 1500,
            settings: {
                centerPadding: '545px'
            }
        }]
  
    });
    
    


    if(jQuery(".hc_period").length < 1) return;
    
    var remainSec = getRemainSecTargetHour(10);
    jQuery('div[data-remain-sec]').attr('data-remain-sec',remainSec);
    jQuery('#hcTimeSaleWrap').hcTimeLimit({
        remainAttr: 'data-remain-sec',
        targetClass: 'hc_period',
        updateTime: function ($wrap, result) {
            var remainTime = result.hours + ':' +result.minutes + ':' +result.seconds;                    
            $wrap.find('.hc_period').text(remainTime);                                
        },
        onTimeout: function ($wrap) {
            $wrap.css('opacity', 0.5);
            $wrap.find('.hc_period').text('이벤트가 종료되었습니다.');
        },
    });
    
    /*var swiper = new Swiper('#hcTimeSaleWrap', {       
        slidesPerView: 4,        
        spaceBetween: 10,
        centeredSlides: true,
        loop:true,                
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            afterInit: function () {
                    var remainSec = getRemainSecTargetHour(10);
                    jQuery('div[data-remain-sec]').attr('data-remain-sec',remainSec);
                    jQuery('div.timesaleItem:first').addClass('timeSaleItemRep');
                    jQuery('div.timesaleItem').hcTimeLimit({
                        remainAttr: 'data-remain-sec',
                        targetClass: 'hc_period',
                        updateTime: function ($wrap, result) {
                            var remainTime = result.hours + ':' +result.minutes + ':' +result.seconds;                    
                            $wrap.find('.hc_period').text(remainTime);                    
                            if($wrap.hasClass('timeSaleItemRep')) {                        
                                $('#firstItemTime').text(remainTime);
                            }                            
                        },
                        onTimeout: function ($wrap) {
                            $wrap.css('opacity', 0.5);
                            $wrap.find('.hc_period').text('이벤트가 종료되었습니다.');
                        },
                    });
            },
       }
    })*/
    
    /*jQuery("#hcTimeSaleWrap").bxSlider({
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 470,
        slideMargin: 10,
        pager : false,
        adaptiveHeight: true,
        onSliderLoad : function() {        
        
			var remainSec = getRemainSecTargetHour(10);
			jQuery('div[data-remain-sec]').attr('data-remain-sec',remainSec);
            jQuery('div.timesaleItem:first').addClass('timeSaleItemRep');
            jQuery('div.timesaleItem').hcTimeLimit({
                remainAttr: 'data-remain-sec',
                targetClass: 'hc_period',
                updateTime: function ($wrap, result) {
                    var remainTime = result.hours + ':' +result.minutes + ':' +result.seconds;                    
                    $wrap.find('.hc_period').text(remainTime);                    
                    if($wrap.hasClass('timeSaleItemRep')) {                        
                        $('#firstItemTime').text(remainTime);
                    }                            
                },
                onTimeout: function ($wrap) {
                    $wrap.css('opacity', 0.5);
                    $wrap.find('.hc_period').text('이벤트가 종료되었습니다.');
                },
            });
        }
    });*/

}

function upDownArrowEvent() {
    jQuery('div.hc_badge_up a').on('click',function(e){
        e.preventDefault();
        if(jQuery('#fullpage').length > 0 ) {
             $.fn.fullpage.moveTo('1');
        } else {
            jQuery("html, body").animate({ scrollTop: 0 }, 1000);
        }
    });
    jQuery('div.hc_badge_down a').on('click',function(e){
        e.preventDefault();
        if(jQuery('#fullpage').length > 0 ) {
             $.fn.fullpage.moveTo('8');
             animatedEvent(7,'animated-fadeInUp','animate__fadeInUp');
             animatedEvent(7,'animated-fadeInDown','animate__fadeInDown');                     
        } else {
             jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, 1000);
        }
    })
}

function newProductEvent() {
    if(jQuery('#pigmentCalendar').length < 1) return;
    jQuery('#pigmentCalendar').newProductCalendar({
        data: NEW_PRODUCT_LIST,
        drawWrapId: 'selectItem',
        dateFormat: 'YYYY-MM-DD',
        lockDays: [],
        prevButtonText: '<span> < </span>',
        nextButtonText: '<span> > </span>',
        noItemText: '상품이 없습니다.',
        itemMarkup: function (data) {
            if (!data.link) data.link = '#';            
            return '<div class="hc_prd_list_information">' +
                     '<div>' +
                     '<a href="'+data.link+'"><img style="width:430px" src="'+data.image+'"/></a>' +
                     '</div>' +
                     '<span class="hc_prd_name">'+data.name+'</span>' +
                     '<span class="hc_discount_price hc_prd_element">'+data.price+'</span>' +
                     '</div> &nbsp;';
        },
    });

}

function randowMainImageEvent() {
    if(jQuery('#hcMainImage').length < 1) return;
    setTimeout(function() {
        var $mainImage = jQuery('#hcMainImage div.mainImage');                 
        var showOrder = getRandomMainImageOrder(1,$mainImage.length);                
        var menuColor = jQuery('#hcMainImage div.mainImage[data-order="'+showOrder+'"]').attr('menu-color') || 'black';
        var logoColor = jQuery('#hcMainImage div.mainImage[data-order="'+showOrder+'"]').attr('logo-color') || 'black';
        var searchColor = jQuery('#hcMainImage div.mainImage[data-order="'+showOrder+'"]').attr('search-color') || 'black';
        var cartColor = jQuery('#hcMainImage div.mainImage[data-order="'+showOrder+'"]').attr('cart-color') || 'black';
        var myPageColor = jQuery('#hcMainImage div.mainImage[data-order="'+showOrder+'"]').attr('mypage-color') || 'black';
        
        jQuery('#hcHamburger path').attr('stroke',menuColor);
        jQuery('#mainLogo a').css('color',logoColor);
        jQuery('#hcSearch path').attr('stroke',searchColor);
        jQuery('#hcCart path').attr('stroke',cartColor);
        jQuery('#hcMypage path').attr('stroke',myPageColor);
        
        jQuery('#hcMainImage .loadingImage').fadeOut(1500);
        setTimeout(function(){
            jQuery('#hcMainImage div.mainImage[data-order="'+showOrder+'"]').fadeIn(1500);
        },1500);
        
    },2500);
}


function sideMenuEvent() {
    resizeSideScroll();
    //햄버거 버튼 in
    jQuery('#hcHamburger').hover(function(e) {
        slideSideMenu(0);    
        if(jQuery('#fullpage').length){
            jQuery.fn.fullpage.setMouseWheelScrolling(false);
        }
    },function(){});
    
    //사이드메뉴 out
    jQuery('#hcSideWarp').hover(function(){},
    function(){
        slideSideMenu(-400);    
        if(jQuery('#fullpage').length){
            jQuery.fn.fullpage.setMouseWheelScrolling(true);
        }
    })
    
    //윈도우리사이즈
    jQuery( window ).resize( function() {
      resizeSideScroll();
    });
    
    //메뉴 hover
    jQuery('.hcHoverMenu').hover(function(e){
        var currentTarget = jQuery(e.currentTarget);
        currentTarget.find('a').addClass('hcHoverMenuColor');
    },function(e){
        var currentTarget = jQuery(e.currentTarget);
        currentTarget.find('a').removeClass('hcHoverMenuColor')
    });
    
    jQuery('.hcHoverMenu').on('click',function(e) {
         var currentTarget = jQuery(e.currentTarget);
         location.href = currentTarget.find('a').attr('href');
    });
    
    jQuery('.hc_menu_state').on('click',function() {
        jQuery('.hc_menu_state').not(jQuery(this)).prop('checked',false);
    })
}

function resizeSideScroll() {
    var documentHeight = jQuery(window).height();
    console.log('height::'+jQuery(window).height());
    var membersDayHeight = jQuery('.hc_notice_top').height();
    var bufferHeight = 85;
    var tabHeight = jQuery('.tab_item').outerHeight(true);
    var cal = documentHeight - (membersDayHeight + tabHeight + bufferHeight);
    jQuery('.nano').css('height',cal)    
}

function slideSideMenu(leftVal) {
    jQuery('#hcSideWarp').stop().animate({"left": leftVal+"px"}, 300);
    //jQuery('.nano').nanoScroller();
}

function getRandomMainImageOrder(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function fullPageEvent() {
    if(jQuery("#fullpage").length < 1) return;
    jQuery('#fullpage').fullpage({        
        verticalCentered: true,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6', 'anchor7', 'anchor8'],
        afterLoad : function(origin, destination) {
             if(destination == 8) return;        
             animatedEvent(destination,'animated-fadeInUp','animate__fadeInUp');
             animatedEvent(destination,'animated-fadeInDown','animate__fadeInDown');
        }
    });
}
function animatedEvent(destination,eventclass,event) {
    jQuery('#fullpage .section').find('.'+eventclass).each(function() {
        var $this = jQuery(this);                    
        $this.hide();
    });
    jQuery('#fullpage .section').eq(destination - 1).find('.'+eventclass).each(function () {
        var $this = jQuery(this);                   
        $this.show();
        $this.addClass('animate__animated '+event+' animate__faster')
    });    
}
function searchEvent() {
    jQuery('#hcSearch').on('click',function(){
        jQuery('#hcSearchWrap').show()
    });   
    jQuery('#hcSearchWrap .hcCloseSearchBtn').on('click',function(){
        jQuery('#hcSearchWrap').hide()
    });
}


/*라이브러리 모음*/

(function($) {
	$.fn.newProductCalendar = function(options) {
        const plugin = this;
        let litepicker;
        const defaultOptions = {     
            data : '',       
            drawWrapId : 'newProductCalendarList',
            dateFormat : 'YYYY-MM-DD',
            lockDays : [],
            prevButtonText : '<span> < </span>',
            nextButtonText : '<span> > </span>',
            noItem : function() { return '상품이 없습니다.' },
            itemMarkup : function(data) {
                if(!data.link) data.link = '#';
                return '<div style="float:left">'+
                        '<div>'+
                            '<a href="'+data.link+'"><img style="width:200px" src="'+data.image+'"/></a>'+
                        '</div>'+
                        '<div>'+data.name+'</div>'+
                        '<div>'+data.price+'</div>'+
                    '</div> &nbsp';                
            }
        };
		const settings = $.extend({}, defaultOptions, options);
        init();
        
        function init() {
            litepicker = new Litepicker({
                element : document.getElementById(plugin.attr('id')),
                firstDay : 0,
                inlineMode : true,
                startDate: new Date(),
                buttonText: {
                    previousMonth: settings.prevButtonText,
                    nextMonth: settings.nextButtonText,
                },
                lockDays : settings.lockDays, //[['2023-06-11', '2023-06-13'],'2022-10-03','2022-10-10'],
                onInit: function() {
                    //console.log('init')
                }
            });   
            litepicker.on('preselect', (target) => {
                gridItem(getDate(target));
            });
    
            litepicker.on('change:month', (date) => {
                var selectDate = getDate(date)
                litepicker.setDate(selectDate)
                gridItem(selectDate);
            });

            gridItem(getDate(new Date()));
        }

        function makeItem(data) {
            return settings.itemMarkup(data);
        };

        function makeItemList(list) {
			if(list.length < 1) {
				return settings.noItem();
			}else{
				var listArray = [];                
				$.each(list,function(index,item) {
					listArray.push(makeItem(item))
				});
				return listArray.join('');
			}
		};

        function getDate(date) {
			return dayjs(date.dateInstance).format(settings.dateFormat);
		};

        function gridItem(date){
			var selectDateItems = settings.data[date] ? settings.data[date] : [];
			var html = makeItemList(selectDateItems)
			$('#'+settings.drawWrapId).html(html);
		};

	};
}(jQuery));
(function($) {
    $.fn.hcTimeLimit = function(options) {
        const plugin = this;
        const defaultOptions = {
            remainAttr : 'data-remain-sec',
            targetClass : 'timeLimit',
            timeoutMsg : '이벤트가 종료되었습니다.',
            updateTime: function($wrapElement, result) {
                //$wrapElement.find(`.${settings.targetClass}`).text(`${result.days} : ${result.hours} : ${result.minutes} : ${result.seconds}`);
            },
            onTimeout : function($wrapElement) {
                //$wrapElement.find(`[${settings.remainAttr}]`).text(defaultOptions.timeoutMsg)
            }
        };
        const settings = $.extend({}, defaultOptions, options);

        function convertSeconds(seconds) {
            //var days = Math.floor(seconds / (3600 * 24));
            //seconds %= 3600 * 24;
            var hours = Math.floor(seconds / 3600);
            seconds %= 3600;
            var minutes = Math.floor(seconds / 60) < 10 ? '0'+(Math.floor(seconds / 60)) : Math.floor(seconds / 60);
            var remainingSeconds = (seconds % 60) < 10 ? '0'+(seconds % 60) : seconds % 60;
            
            return {
              //days: days,
              hours: hours,
              minutes: minutes,
              seconds: remainingSeconds
            };
        }

        function updateTimer($wrapElement, targetSeconds) {
            const result = convertSeconds(targetSeconds);            
            settings.updateTime($wrapElement, result);
        }

        return plugin.each(function(){
            const $wrapElement = $(this);
            let targetSeconds = $wrapElement.find('['+settings.remainAttr+']').attr(settings.remainAttr);

            updateTimer($wrapElement, targetSeconds); // 초기값 설정

            const timerInterval = setInterval(function() {
                targetSeconds--;
                updateTimer($wrapElement, targetSeconds);
                if (targetSeconds <= 0) {
                    clearInterval(timerInterval);
                    if(typeof settings.onTimeout == 'function') {
                        settings.onTimeout($wrapElement);
                    }
                }
            }, 1000);
        });

    };
}(jQuery));
(function($) {
    $.fn.hcKakaoMap = function(options) {        
        const defaultOptions = {
            prefix : 'store',
            data : [{
                        id : 'test',                        
                        name : '테스트1 매장',
                        lat : '',
                        lng : ''
                    }],
            level : 3            
        };
        const settings = $.extend({}, defaultOptions, options);

        settings.data.map(function(o) {
            const mapContainer = document.getElementById(settings.prefix+o.id); // 지도를 표시할 div 
            const mapOption = { 
                center: new kakao.maps.LatLng(o.lat, o.lng), // 지도의 중심좌표
                level: settings.level // 지도의 확대 레벨
            };

            const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            // 마커가 표시될 위치입니다 
            const markerPosition  = new kakao.maps.LatLng(o.lat, o.lng); 

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition,
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            const iwContent = o.nameMarkup; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            const iwPosition = new kakao.maps.LatLng(o.lat, o.lng); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            const infowindow = new kakao.maps.InfoWindow({
                position : iwPosition, 
                content : iwContent 
            });
            
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker); 
        })    
    };
}(jQuery));





/*!
 * fullPage 2.9.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,o){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(n){return o(n,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=o(require("jquery"),e,e.document,e.Math):o(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,o,n,t,i){"use strict";var a="fullpage-wrapper",l="."+a,s="fp-responsive",r="fp-notransition",c="fp-destroyed",d="fp-enabled",f="fp-viewing",u="active",h="."+u,v="fp-completely",p="."+v,g="fp-section",m="."+g,w=m+h,S=m+":first",b=m+":last",x="fp-tableCell",y="."+x,C="fp-auto-height",T="fp-normal-scroll",k="fp-nav",L="#"+k,A="fp-tooltip",O="."+A,I="fp-show-active",E="fp-slide",M="."+E,B=M+h,R="fp-slides",z="."+R,H="fp-slidesContainer",D="."+H,P="fp-table",q="fp-slidesNav",F="."+q,V=F+" a",j="fp-controlArrow",Y="."+j,N="fp-prev",X=j+" "+N,U=Y+("."+N),W="fp-next",K=j+" "+W,_=Y+".fp-next",Q=e(o),G=e(n);e.fn.fullpage=function(j){if(e("html").hasClass(d))$o();else{var W=e("html, body"),J=e("body"),Z=e.fn.fullpage;j=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fn.fp_scrolloverflow?e.fn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},j);var $,ee,oe,ne,te=!1,ie=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ae="ontouchstart"in o||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,le=e(this),se=Q.height(),re=!1,ce=!0,de=!0,fe=[],ue={m:{up:!0,down:!0,left:!0,right:!0}};ue.k=e.extend(!0,{},ue.m);var he,ve,pe,ge,me,we,Se,be=function(){var e;e=o.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"};return e}(),xe={touchmove:"ontouchmove"in o?"touchmove":be.move,touchstart:"ontouchstart"in o?"touchstart":be.down},ye='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',Ce=e.extend(!0,{},j);$o(),e.extend(e.easing,{easeInOutCubic:function(e,o,n,t,i){return(o/=i/2)<1?t/2*o*o*o+n:t/2*((o-=2)*o*o+2)+n}}),e(this).length&&(Z.version="2.9.6",Z.setAutoScrolling=ze,Z.setRecordHistory=He,Z.setScrollingSpeed=De,Z.setFitToSection=Pe,Z.setLockAnchors=function(e){j.lockAnchors=e},Z.setMouseWheelScrolling=qe,Z.setAllowScrolling=Fe,Z.setKeyboardScrolling=Ve,Z.moveSectionUp=je,Z.moveSectionDown=Ye,Z.silentMoveTo=Ne,Z.moveTo=Xe,Z.moveSlideRight=Ue,Z.moveSlideLeft=We,Z.fitToSection=Je,Z.reBuild=Ke,Z.setResponsive=_e,Z.destroy=function(o){ze(!1,"internal"),Fe(!1),Ve(!1),le.addClass(c),clearTimeout(ge),clearTimeout(pe),clearTimeout(ve),clearTimeout(me),clearTimeout(we),Q.off("scroll",Ge).off("hashchange",mo).off("resize",Mo),G.off("keydown",So).off("keyup",xo).off("click touchstart",L+" a").off("mouseenter",L+" li").off("mouseleave",L+" li").off("click touchstart",V).off("mouseover",j.normalScrollElements).off("mouseout",j.normalScrollElements),e(m).off("click touchstart",Y),clearTimeout(ge),clearTimeout(pe),o&&function(){Qo(0),le.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){co(e(this),"src")}),le.find("img[data-srcset]").each(function(){co(e(this),"srcset")}),e(L+", "+F+", "+Y).remove(),e(m).css({height:"","background-color":"",padding:""}),e(M).css({width:""}),le.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),W.css({overflow:"",height:""}),e("html").removeClass(d),J.removeClass(s),e.each(J.get(0).className.split(/\s+/),function(e,o){0===o.indexOf(f)&&J.removeClass(o)}),e(m+", "+M).each(function(){j.scrollOverflowHandler&&j.scrollOverflowHandler.remove(e(this)),e(this).removeClass(P+" "+u),e(this).attr("style",e(this).data("fp-styles"))}),zo(le),le.find(y+", "+D+", "+z).each(function(){e(this).replaceWith(this.childNodes)}),le.css({"-webkit-transition":"none",transition:"none"}),W.scrollTop(0);var o=[g,E,H];e.each(o,function(o,n){e("."+n).removeClass(n)})}()},Z.shared={afterRenderActions:Qe},function(){j.css3&&(j.css3=function(){var e,t=n.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var l in n.body.insertBefore(t,null),a)t.style[l]!==i&&(t.style[l]="translate3d(1px,1px,1px)",e=o.getComputedStyle(t).getPropertyValue(a[l]));return n.body.removeChild(t),e!==i&&e.length>0&&"none"!==e}());j.scrollBar=j.scrollBar||j.hybrid,t=le.find(j.sectionSelector),j.anchors.length||(j.anchors=t.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),j.navigationTooltips.length||(j.navigationTooltips=t.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get()),le.css({height:"100%",position:"relative"}),le.addClass(a),e("html").addClass(d),se=Q.height(),le.removeClass(c),le.find(j.sectionSelector).addClass(g),le.find(j.slideSelector).addClass(E),e(m).each(function(o){var n,t,i,a,s=e(this),r=s.find(M),c=r.length;s.data("fp-styles",s.attr("style")),i=s,(a=o)||0!==e(w).length||i.addClass(u),ne=e(w),i.css("height",se+"px"),j.paddingTop&&i.css("padding-top",j.paddingTop),j.paddingBottom&&i.css("padding-bottom",j.paddingBottom),void 0!==j.sectionsColor[a]&&i.css("background-color",j.sectionsColor[a]),void 0!==j.anchors[a]&&i.attr("data-anchor",j.anchors[a]),n=s,t=o,void 0!==j.anchors[t]&&n.hasClass(u)&&Ho(j.anchors[t],t),j.menu&&j.css3&&e(j.menu).closest(l).length&&e(j.menu).appendTo(J),c>0?function(o,n,t){var i,a=100*t,l=100/t;n.wrapAll('<div class="'+H+'" />'),n.parent().wrap('<div class="'+R+'" />'),o.find(D).css("width",a+"%"),t>1&&(j.controlArrows&&((i=o).find(z).after('<div class="'+X+'"></div><div class="'+K+'"></div>'),"#fff"!=j.controlArrowColor&&(i.find(_).css("border-color","transparent transparent transparent "+j.controlArrowColor),i.find(U).css("border-color","transparent "+j.controlArrowColor+" transparent transparent")),j.loopHorizontal||i.find(U).hide()),j.slidesNavigation&&function(e,o){e.append('<div class="'+q+'"><ul></ul></div>');var n=e.find(F);n.addClass(j.slidesNavPosition);for(var t=0;t<o;t++)n.find("ul").append('<li><a href="#"><span></span></a></li>');n.css("margin-left","-"+n.width()/2+"px"),n.find("li").first().find("a").addClass(u)}(o,t)),n.each(function(o){e(this).css("width",l+"%"),j.verticalCentered&&Po(e(this))});var s=o.find(B);s.length&&(0!==e(w).index(m)||0===e(w).index(m)&&0!==s.index())?_o(s,"internal"):n.eq(0).addClass(u)}(s,r,c):j.verticalCentered&&Po(s)}),j.fixedElements&&j.css3&&e(j.fixedElements).appendTo(J),j.navigation&&function(){J.append('<div id="'+k+'"><ul></ul></div>');var o=e(L);o.addClass(function(){return j.showActiveTooltip?I+" "+j.navigationPosition:j.navigationPosition});for(var n=0;n<e(m).length;n++){var t="";j.anchors.length&&(t=j.anchors[n]);var i='<li><a href="#'+t+'"><span></span></a>',a=j.navigationTooltips[n];void 0!==a&&""!==a&&(i+='<div class="'+A+" "+j.navigationPosition+'">'+a+"</div>"),i+="</li>",o.find("ul").append(i)}e(L).css("margin-top","-"+e(L).height()/2+"px"),e(L).find("li").eq(e(w).index(m)).find("a").addClass(u)}(),le.find('iframe[src*="youtube.com/embed/"]').each(function(){var o,n,t;o=e(this),n="enablejsapi=1",t=o.attr("src"),o.attr("src",t+(/\?/.test(t)?"&":"?")+n)}),j.scrollOverflow?he=j.scrollOverflowHandler.init(j):Qe(),Fe(!0),ze(j.autoScrolling,"internal"),Bo(),Wo(),"complete"===n.readyState&&go();var t;Q.on("load",go)}(),Q.on("scroll",Ge).on("hashchange",mo).blur(ko).resize(Mo),G.keydown(So).keyup(xo).on("click touchstart",L+" a",Lo).on("click touchstart",V,Ao).on("click",O,bo),e(m).on("click touchstart",Y,To),j.normalScrollElements&&(G.on("mouseenter touchstart",j.normalScrollElements,function(){Fe(!1)}),G.on("mouseleave touchend",j.normalScrollElements,function(){Fe(!0)})));var Te=!1,ke=0,Le=0,Ae=0,Oe=0,Ie=0,Ee=(new Date).getTime(),Me=0,Be=0,Re=se}function ze(o,n){o||Qo(0),Zo("autoScrolling",o,n);var t=e(w);j.autoScrolling&&!j.scrollBar?(W.css({overflow:"hidden",height:"100%"}),He(Ce.recordHistory,"internal"),le.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&Qo(t.position().top)):(W.css({overflow:"visible",height:"initial"}),He(!1,"internal"),le.css({"-ms-touch-action":"","touch-action":""}),t.length&&W.scrollTop(t.position().top))}function He(e,o){Zo("recordHistory",e,o)}function De(e,o){Zo("scrollingSpeed",e,o)}function Pe(e,o){Zo("fitToSection",e,o)}function qe(e){e?(!function(){var e,t="";o.addEventListener?e="addEventListener":(e="attachEvent",t="on");var a="onwheel"in n.createElement("div")?"wheel":n.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?n[e](t+"MozMousePixelScroll",io,!1):n[e](t+a,io,!1)}(),le.on("mousedown",yo).on("mouseup",Co)):(n.addEventListener?(n.removeEventListener("mousewheel",io,!1),n.removeEventListener("wheel",io,!1),n.removeEventListener("MozMousePixelScroll",io,!1)):n.detachEvent("onmousewheel",io),le.off("mousedown",yo).off("mouseup",Co))}function Fe(o,n){void 0!==n?(n=n.replace(/ /g,"").split(","),e.each(n,function(e,n){Jo(o,n,"m")})):(Jo(o,"all","m"),o?(qe(!0),(ie||ae)&&(j.autoScrolling&&J.off(xe.touchmove).on(xe.touchmove,$e),e(l).off(xe.touchstart).on(xe.touchstart,no).off(xe.touchmove).on(xe.touchmove,eo))):(qe(!1),(ie||ae)&&(j.autoScrolling&&J.off(xe.touchmove),e(l).off(xe.touchstart).off(xe.touchmove))))}function Ve(o,n){void 0!==n?(n=n.replace(/ /g,"").split(","),e.each(n,function(e,n){Jo(o,n,"k")})):(Jo(o,"all","k"),j.keyboardScrolling=o)}function je(){var o=e(w).prev(m);o.length||!j.loopTop&&!j.continuousVertical||(o=e(m).last()),o.length&&so(o,null,!0)}function Ye(){var o=e(w).next(m);o.length||!j.loopBottom&&!j.continuousVertical||(o=e(m).first()),o.length&&so(o,null,!1)}function Ne(e,o){De(0,"internal"),Xe(e,o),De(Ce.scrollingSpeed,"internal")}function Xe(e,o){var n=Vo(e);void 0!==o?jo(e,o):n.length>0&&so(n)}function Ue(e){ao("right",e)}function We(e){ao("left",e)}function Ke(o){if(!le.hasClass(c)){re=!0,se=Q.height(),e(m).each(function(){var o=e(this).find(z),n=e(this).find(M);j.verticalCentered&&e(this).find(y).css("height",qo(e(this))+"px"),e(this).css("height",se+"px"),n.length>1&&Io(o,o.find(B))}),j.scrollOverflow&&he.createScrollBarForAll();var n=e(w).index(m);n&&Ne(n+1),re=!1,e.isFunction(j.afterResize)&&o&&j.afterResize.call(le),e.isFunction(j.afterReBuild)&&!o&&j.afterReBuild.call(le)}}function _e(o){var n=J.hasClass(s);o?n||(ze(!1,"internal"),Pe(!1,"internal"),e(L).hide(),J.addClass(s),e.isFunction(j.afterResponsive)&&j.afterResponsive.call(le,o)):n&&(ze(Ce.autoScrolling,"internal"),Pe(Ce.autoScrolling,"internal"),e(L).show(),J.removeClass(s),e.isFunction(j.afterResponsive)&&j.afterResponsive.call(le,o))}function Qe(){var o,n=e(w);n.addClass(v),fo(n),uo(n),j.scrollOverflow&&j.scrollOverflowHandler.afterLoad(),(!(o=Vo(wo().section))||o.length&&o.index()===ne.index())&&e.isFunction(j.afterLoad)&&j.afterLoad.call(n,n.data("anchor"),n.index(m)+1),e.isFunction(j.afterRender)&&j.afterRender.call(le)}function Ge(){var o,t,i;if(!j.autoScrolling||j.scrollBar){var a=Q.scrollTop(),l=(i=(t=a)>ke?"down":"up",ke=t,Me=t,i),s=0,r=a+Q.height()/2,c=J.height()-Q.height()===a,d=n.querySelectorAll(m);if(c)s=d.length-1;else if(a)for(var f=0;f<d.length;++f){d[f].offsetTop<=r&&(s=f)}else s=0;if(function(o){var n=e(w).position().top,t=n+Q.height();if("up"==o)return t>=Q.scrollTop()+Q.height();return n<=Q.scrollTop()}(l)&&(e(w).hasClass(v)||e(w).addClass(v).siblings().removeClass(v)),!(o=e(d).eq(s)).hasClass(u)){Te=!0;var h,p,g=e(w),S=g.index(m)+1,b=Do(o),x=o.data("anchor"),y=o.index(m)+1,C=o.find(B);C.length&&(p=C.data("anchor"),h=C.index()),de&&(o.addClass(u).siblings().removeClass(u),e.isFunction(j.onLeave)&&j.onLeave.call(g,S,y,b),e.isFunction(j.afterLoad)&&j.afterLoad.call(o,x,y),vo(g),fo(o),uo(o),Ho(x,y-1),j.anchors.length&&($=x),No(h,p,x,y)),clearTimeout(me),me=setTimeout(function(){Te=!1},100)}j.fitToSection&&(clearTimeout(we),we=setTimeout(function(){j.fitToSection&&e(w).outerHeight()<=se&&Je()},j.fitToSectionDelay))}}function Je(){de&&(re=!0,so(e(w)),re=!1)}function Ze(o){if(ue.m[o]){var n="down"===o?Ye:je;if(j.scrollOverflow){var t=j.scrollOverflowHandler.scrollable(e(w)),i="down"===o?"bottom":"top";if(t.length>0){if(!j.scrollOverflowHandler.isScrolled(i,t))return!0;n()}else n()}else n()}}function $e(e){var o=e.originalEvent;j.autoScrolling&&oo(o)&&e.preventDefault()}function eo(o){var n=o.originalEvent,i=e(n.target).closest(m);if(oo(n)){j.autoScrolling&&o.preventDefault();var a=Ko(n);Oe=a.y,Ie=a.x,i.find(z).length&&t.abs(Ae-Ie)>t.abs(Le-Oe)?!te&&t.abs(Ae-Ie)>Q.outerWidth()/100*j.touchSensitivity&&(Ae>Ie?ue.m.right&&Ue(i):ue.m.left&&We(i)):j.autoScrolling&&de&&t.abs(Le-Oe)>Q.height()/100*j.touchSensitivity&&(Le>Oe?Ze("down"):Oe>Le&&Ze("up"))}}function oo(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function no(e){var o=e.originalEvent;if(j.fitToSection&&W.stop(),oo(o)){var n=Ko(o);Le=n.y,Ae=n.x}}function to(e,o){for(var n=0,i=e.slice(t.max(e.length-o,1)),a=0;a<i.length;a++)n+=i[a];return t.ceil(n/o)}function io(n){var i=(new Date).getTime(),a=e(p).hasClass(T);if(j.autoScrolling&&!oe&&!a){var l=(n=n||o.event).wheelDelta||-n.deltaY||-n.detail,s=t.max(-1,t.min(1,l)),r=void 0!==n.wheelDeltaX||void 0!==n.deltaX,c=t.abs(n.wheelDeltaX)<t.abs(n.wheelDelta)||t.abs(n.deltaX)<t.abs(n.deltaY)||!r;fe.length>149&&fe.shift(),fe.push(t.abs(l)),j.scrollBar&&(n.preventDefault?n.preventDefault():n.returnValue=!1);var d=i-Ee;if(Ee=i,d>200&&(fe=[]),de)to(fe,10)>=to(fe,70)&&c&&Ze(s<0?"down":"up");return!1}j.fitToSection&&W.stop()}function ao(o,n){var t=(void 0===n?e(w):n).find(z),i=t.find(M).length;if(!(!t.length||te||i<2)){var a=t.find(B),l=null;if(!(l="left"===o?a.prev(M):a.next(M)).length){if(!j.loopHorizontal)return;l="left"===o?a.siblings(":last"):a.siblings(":first")}te=!0,Io(t,l,o)}}function lo(){e(B).each(function(){_o(e(this),"internal")})}function so(o,n,i){if(void 0!==o){var a,s,r,c,d,f,h,v,p={element:o,callback:n,isMovementUp:i,dtop:(s=(a=o).position(),r=s.top,c=s.top>Me,d=r-se+a.outerHeight(),f=j.bigSectionsDestination,a.outerHeight()>se?(c||f)&&"bottom"!==f||(r=d):(c||re&&a.is(":last-child"))&&(r=d),Me=r,r),yMovement:Do(o),anchorLink:o.data("anchor"),sectionIndex:o.index(m),activeSlide:o.find(B),activeSection:e(w),leavingSection:e(w).index(m)+1,localIsResizing:re};if(!(p.activeSection.is(o)&&!re||j.scrollBar&&Q.scrollTop()===p.dtop&&!o.hasClass(C))){if(p.activeSlide.length&&(h=p.activeSlide.data("anchor"),v=p.activeSlide.index()),e.isFunction(j.onLeave)&&!p.localIsResizing){var g=p.yMovement;if(void 0!==i&&(g=i?"up":"down"),!1===j.onLeave.call(p.activeSection,p.leavingSection,p.sectionIndex+1,g))return}j.autoScrolling&&j.continuousVertical&&void 0!==p.isMovementUp&&(!p.isMovementUp&&"up"==p.yMovement||p.isMovementUp&&"down"==p.yMovement)&&(p=function(o){o.isMovementUp?e(w).before(o.activeSection.nextAll(m)):e(w).after(o.activeSection.prevAll(m).get().reverse());return Qo(e(w).position().top),lo(),o.wrapAroundElements=o.activeSection,o.dtop=o.element.position().top,o.yMovement=Do(o.element),o.leavingSection=o.activeSection.index(m)+1,o.sectionIndex=o.element.index(m),o}(p)),p.localIsResizing||vo(p.activeSection),j.scrollOverflow&&j.scrollOverflowHandler.beforeLeave(),o.addClass(u).siblings().removeClass(u),fo(o),j.scrollOverflow&&j.scrollOverflowHandler.onLeave(),de=!1,No(v,h,p.anchorLink,p.sectionIndex),function(o){if(j.css3&&j.autoScrolling&&!j.scrollBar){var n="translate3d(0px, -"+t.round(o.dtop)+"px, 0px)";Fo(n,!0),j.scrollingSpeed?(clearTimeout(pe),pe=setTimeout(function(){ro(o)},j.scrollingSpeed)):ro(o)}else{var i=function(e){var o={};j.autoScrolling&&!j.scrollBar?(o.options={top:-e.dtop},o.element=l):(o.options={scrollTop:e.dtop},o.element="html, body");return o}(o);e(i.element).animate(i.options,j.scrollingSpeed,j.easing).promise().done(function(){j.scrollBar?setTimeout(function(){ro(o)},30):ro(o)})}}(p),$=p.anchorLink,Ho(p.anchorLink,p.sectionIndex)}}}function ro(o){var n;(n=o).wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(S).before(n.wrapAroundElements):e(b).after(n.wrapAroundElements),Qo(e(w).position().top),lo()),e.isFunction(j.afterLoad)&&!o.localIsResizing&&j.afterLoad.call(o.element,o.anchorLink,o.sectionIndex+1),j.scrollOverflow&&j.scrollOverflowHandler.afterLoad(),o.localIsResizing||uo(o.element),o.element.addClass(v).siblings().removeClass(v),de=!0,e.isFunction(o.callback)&&o.callback.call(this)}function co(e,o){e.attr(o,e.data(o)).removeAttr("data-"+o)}function fo(o){var n;j.lazyLoading&&po(o).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function(){if(n=e(this),e.each(["src","srcset"],function(e,o){var t=n.attr("data-"+o);void 0!==t&&t&&co(n,o)}),n.is("source")){var o=n.closest("video").length?"video":"audio";n.closest(o).get(0).load()}})}function uo(o){var n=po(o);n.find("video, audio").each(function(){var o=e(this).get(0);o.hasAttribute("data-autoplay")&&"function"==typeof o.play&&o.play()}),n.find('iframe[src*="youtube.com/embed/"]').each(function(){var o=e(this).get(0);o.hasAttribute("data-autoplay")&&ho(o),o.onload=function(){o.hasAttribute("data-autoplay")&&ho(o)}})}function ho(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function vo(o){var n=po(o);n.find("video, audio").each(function(){var o=e(this).get(0);o.hasAttribute("data-keepplaying")||"function"!=typeof o.pause||o.pause()}),n.find('iframe[src*="youtube.com/embed/"]').each(function(){var o=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!o.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function po(o){var n=o.find(B);return n.length&&(o=e(n)),o}function go(){var e=wo(),o=e.section,n=e.slide;o&&(j.animateAnchor?jo(o,n):Ne(o,n))}function mo(){if(!Te&&!j.lockAnchors){var e=wo(),o=e.section,n=e.slide,t=void 0===$,i=void 0===$&&void 0===n&&!te;o&&o.length&&(o&&o!==$&&!t||i||!te&&ee!=n)&&jo(o,n)}}function wo(){var e,n,t=o.location.hash;if(t.length){var i=t.replace("#","").split("/"),a=t.indexOf("#/")>-1;e=a?"/"+i[1]:decodeURIComponent(i[0]);var l=a?i[2]:i[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:e,slide:n}}function So(o){clearTimeout(Se);var n=e(":focus"),t=o.which;if(9===t)!function(o){var n=o.shiftKey,t=e(":focus"),i=e(w),a=i.find(B),l=(a.length?a:i).find(ye).not('[tabindex="-1"]');function s(e){return e.preventDefault(),l.first().focus()}t.length?t.closest(w,B).length||(t=s(o)):s(o);(!n&&t.is(l.last())||n&&t.is(l.first()))&&o.preventDefault()}(o);else if(!n.is("textarea")&&!n.is("input")&&!n.is("select")&&"true"!==n.attr("contentEditable")&&""!==n.attr("contentEditable")&&j.keyboardScrolling&&j.autoScrolling){e.inArray(t,[40,38,32,33,34])>-1&&o.preventDefault(),oe=o.ctrlKey,Se=setTimeout(function(){!function(o){var n=o.shiftKey;if(!de&&[37,39].indexOf(o.which)<0)return;switch(o.which){case 38:case 33:ue.k.up&&je();break;case 32:if(n&&ue.k.up){je();break}case 40:case 34:ue.k.down&&Ye();break;case 36:ue.k.up&&Xe(1);break;case 35:ue.k.down&&Xe(e(m).length);break;case 37:ue.k.left&&We();break;case 39:ue.k.right&&Ue();break;default:;}}(o)},150)}}function bo(){e(this).prev().trigger("click")}function xo(e){ce&&(oe=e.ctrlKey)}function yo(e){2==e.which&&(Be=e.pageY,le.on("mousemove",Oo))}function Co(e){2==e.which&&le.off("mousemove")}function To(){var o=e(this).closest(m);e(this).hasClass(N)?ue.m.left&&We(o):ue.m.right&&Ue(o)}function ko(){ce=!1,oe=!1}function Lo(o){o.preventDefault();var n=e(this).parent().index();so(e(m).eq(n))}function Ao(o){o.preventDefault();var n=e(this).closest(m).find(z);Io(n,n.find(M).eq(e(this).closest("li").index()))}function Oo(e){de&&(e.pageY<Be&&ue.m.up?je():e.pageY>Be&&ue.m.down&&Ye()),Be=e.pageY}function Io(o,n,i){var a=o.closest(m),l={slides:o,destiny:n,direction:i,destinyPos:n.position(),slideIndex:n.index(),section:a,sectionIndex:a.index(m),anchorLink:a.data("anchor"),slidesNav:a.find(F),slideAnchor:Uo(n),prevSlide:a.find(B),prevSlideIndex:a.find(B).index(),localIsResizing:re};l.xMovement=function(e,o){if(e==o)return"none";if(e>o)return"left";return"right"}(l.prevSlideIndex,l.slideIndex),l.localIsResizing||(de=!1),j.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&e.isFunction(j.onSlideLeave)&&!1===j.onSlideLeave.call(l.prevSlide,l.anchorLink,l.sectionIndex+1,l.prevSlideIndex,l.direction,l.slideIndex)?te=!1:(n.addClass(u).siblings().removeClass(u),l.localIsResizing||(vo(l.prevSlide),fo(n)),!j.loopHorizontal&&j.controlArrows&&(a.find(U).toggle(0!==l.slideIndex),a.find(_).toggle(!n.is(":last-child"))),a.hasClass(u)&&!l.localIsResizing&&No(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,o,n){var i=o.destinyPos;if(j.css3){var a="translate3d(-"+t.round(i.left)+"px, 0px, 0px)";Ro(e.find(D)).css(Go(a)),ge=setTimeout(function(){n&&Eo(o)},j.scrollingSpeed,j.easing)}else e.animate({scrollLeft:t.round(i.left)},j.scrollingSpeed,j.easing,function(){n&&Eo(o)})}(o,l,!0))}function Eo(o){var n,t;n=o.slidesNav,t=o.slideIndex,n.find(h).removeClass(u),n.find("li").eq(t).find("a").addClass(u),o.localIsResizing||(e.isFunction(j.afterSlideLoad)&&j.afterSlideLoad.call(o.destiny,o.anchorLink,o.sectionIndex+1,o.slideAnchor,o.slideIndex),de=!0,uo(o.destiny)),te=!1}function Mo(){if(Bo(),ie){var o=e(n.activeElement);if(!o.is("textarea")&&!o.is("input")&&!o.is("select")){var i=Q.height();t.abs(i-Re)>20*t.max(Re,i)/100&&(Ke(!0),Re=i)}}else clearTimeout(ve),ve=setTimeout(function(){Ke(!0)},350)}function Bo(){var e=j.responsive||j.responsiveWidth,o=j.responsiveHeight,n=e&&Q.outerWidth()<e,t=o&&Q.height()<o;e&&o?_e(n||t):e?_e(n):o&&_e(t)}function Ro(e){var o="all "+j.scrollingSpeed+"ms "+j.easingcss3;return e.removeClass(r),e.css({"-webkit-transition":o,transition:o})}function zo(e){return e.addClass(r)}function Ho(o,n){var t,i,a;t=o,j.menu&&(e(j.menu).find(h).removeClass(u),e(j.menu).find('[data-menuanchor="'+t+'"]').addClass(u)),i=o,a=n,j.navigation&&(e(L).find(h).removeClass(u),i?e(L).find('a[href="#'+i+'"]').addClass(u):e(L).find("li").eq(a).find("a").addClass(u))}function Do(o){var n=e(w).index(m),t=o.index(m);return n==t?"none":n>t?"up":"down"}function Po(o){if(!o.hasClass(P)){var n=e('<div class="'+x+'" />').height(qo(o));o.addClass(P).wrapInner(n)}}function qo(e){var o=se;if(j.paddingTop||j.paddingBottom){var n=e;n.hasClass(g)||(n=e.closest(m));var t=parseInt(n.css("padding-top"))+parseInt(n.css("padding-bottom"));o=se-t}return o}function Fo(e,o){o?Ro(le):zo(le),le.css(Go(e)),setTimeout(function(){le.removeClass(r)},10)}function Vo(o){var n=le.find(m+'[data-anchor="'+o+'"]');if(!n.length){var t=void 0!==o?o-1:0;n=e(m).eq(t)}return n}function jo(e,o){var n=Vo(e);if(n.length){var t,i,a,l=(t=o,(a=(i=n).find(M+'[data-anchor="'+t+'"]')).length||(t=void 0!==t?t:0,a=i.find(M).eq(t)),a);e===$||n.hasClass(u)?Yo(l):so(n,function(){Yo(l)})}}function Yo(e){e.length&&Io(e.closest(z),e)}function No(e,o,n,t){var i="";j.anchors.length&&!j.lockAnchors&&(e?(void 0!==n&&(i=n),void 0===o&&(o=e),ee=o,Xo(i+"/"+o)):void 0!==e?(ee=o,Xo(n)):Xo(n)),Wo()}function Xo(e){if(j.recordHistory)location.hash=e;else if(ie||ae)o.history.replaceState(i,i,"#"+e);else{var n=o.location.href.split("#")[0];o.location.replace(n+"#"+e)}}function Uo(e){var o=e.data("anchor"),n=e.index();return void 0===o&&(o=n),o}function Wo(){var o=e(w),n=o.find(B),t=Uo(o),i=Uo(n),a=String(t);n.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var l=new RegExp("\\b\\s?"+f+"-[^\\s]+\\b","g");J[0].className=J[0].className.replace(l,""),J.addClass(f+"-"+a)}function Ko(e){var o=[];return o.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,o.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ae&&oo(e)&&(j.scrollBar||!j.autoScrolling)&&(o.y=e.touches[0].pageY,o.x=e.touches[0].pageX),o}function _o(e,o){De(0,"internal"),void 0!==o&&(re=!0),Io(e.closest(z),e),void 0!==o&&(re=!1),De(Ce.scrollingSpeed,"internal")}function Qo(e){var o=t.round(e);j.css3&&j.autoScrolling&&!j.scrollBar?Fo("translate3d(0px, -"+o+"px, 0px)",!1):j.autoScrolling&&!j.scrollBar?le.css("top",-o):W.scrollTop(o)}function Go(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Jo(o,n,t){"all"!==n?ue[t][n]=o:e.each(Object.keys(ue[t]),function(e,n){ue[t][n]=o})}function Zo(e,o,n){j[e]=o,"internal"!==n&&(Ce[e]=o)}function $o(){e("html").hasClass(d)?en("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(j.continuousVertical&&(j.loopTop||j.loopBottom)&&(j.continuousVertical=!1,en("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),j.scrollBar&&j.scrollOverflow&&en("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!j.continuousVertical||!j.scrollBar&&j.autoScrolling||(j.continuousVertical=!1,en("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),j.scrollOverflow&&!j.scrollOverflowHandler&&(j.scrollOverflow=!1,en("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),e.each(["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"],function(e,o){j[o]&&en("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+o)}),e.each(j.anchors,function(o,n){var t=G.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==n.toLowerCase()}),i=G.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==n.toLowerCase()});(i.length||t.length)&&(en("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&en("error",'"'+n+'" is is being used by another element `id` property'),t.length&&en("error",'"'+n+'" is is being used by another element `name` property'))}))}function en(e,o){console&&console[e]&&console[e]("fullPage: "+o)}}});
//# sourceMappingURL=jquery.fullpage.min.js.map


//slick slide
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
