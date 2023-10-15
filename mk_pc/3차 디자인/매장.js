$(document).ready(function(){    
    HCStoreInfo.init();
});
var HCStoreInfo = (function() {
    var nameStyle = 'font-size:12px;padding-left:5px;';
    var setting =  {
        store : PIGMENT_STORE_INFOS
    };

    var init = function() {
        action.templateInit(setting.store);
        bind();
        action.kakaoMapInit();
        action.slideInit();
        action.hideAll();        
    }
    
    var bind = function() {
        $('.storeWrap .toggleMap').on('click', e => {      
            var target = $(e.currentTarget);
            var id = target.attr('data-id');
            action.showMap(id);
        });

        $('.storeWrap .togglePhoto').on('click', e => {
            var target = $(e.currentTarget);
            var id = target.attr('data-id');
            action.showPhoto(id);
        });

        $('.hcStoreLink li').on('click', e => {
            e.preventDefault();
            var target = $(e.currentTarget);
            var id = target.attr('data-id');            
            action.scrollIntoView(id);
        });
        
        $('#hcMallMoreBtn').on('click', function() {
                        
            $('.hcDepartMentStoreUl li[data-id]').not(":visible").filter(function(index){
                return index < 8
            }).show().animate({opacity:"1"}, 1000);
            
            $('.hcMallStoreUl li[data-id]').not(":visible").filter(function(index){
                return index < 8
            }).show().animate({opacity:"1"}, 1000);
            
            if($('li[data-id]').not(":visible").length == 0 ) {
                $('#hcMallMoreBtn').hide();
            }
        });
    };

    var template = {
        generateLinkTemplate : function(data) {
            var department = data.filter(item => item.type == 'department');
            var mall = data.filter(item => item.type == 'mall');
            $('#hcDepartment').after(template.makeUlTemplate(department,'hcDepartMentStoreUl'));
            $('#hcMall').after(template.makeUlTemplate(mall,'hcMallStoreUl'));
        },
        makeUlTemplate : function(data,className) {
            var ul = [];
            data.forEach(function(item,index,array) {
                var display = 'inline-block';
                var opacity = 1;
                if(index%4 == 0) ul.push('<ul class="'+className+'">');
                if(!item.initShow) {
                    display = 'none';
                    opacity = 0;
                }
                ul.push('<li data-id="hcStoreWrap'+item.id+'" style="display:'+display+';opacity:'+opacity+'">'+item.name+'</li>');
                if(index%4 == 3 || array.length == index+1) ul.push('</ul>');
            });          
            return ul.join(''); 
        },
        generateStoreWrapList: function(list) {
            var data =  list.map(function(item){
                return template.makeStoreWrapTemplate(item);
            }).join('');
            $('#storeInfo').after(data);
        },
        makeStoreWrapTemplate: function(data) {
            var html = ['<div class="storeWrap hcStoreWrap'+data.id+'">'];
            html.push(template.makeInfoTemplate(data));
            html.push(template.makeMapTemplate(data.id));
            html.push(template.makeSlideTemplate(data.shopPhotos));
            html.push('</div>');
            return html.join('');
        },
        makeInfoTemplate : function(data) {
            return '<div class="info">' +
                        '<span>'+data.name+'</span>'+
                        '<span>'+data.address+'</span>'+
                        '<span>'+data.tel+'</span>'+
                        '<span>'+data.businessHours+'</span>'+
                        template.makeButton(data) +                        
                    '</div>';
        },
        makeButton : function(data) {
            var button = '';
            if(data.shopPhotos.length >0) {
                button = '<button type="button" class="togglePhoto" data-id="hcStoreWrap'+data.id+'">'+                    
                            '<img src="http://kcompony7.jpg3.kr/web/hncok/img/icon/icon_camera.svg" alt="매장사진" />'+
                        '</button>';
            }
            
            button += '<button type="button" class="toggleMap" data-id="hcStoreWrap'+data.id+'">'+
                            '<img src="http://kcompony7.jpg3.kr/web/hncok/img/icon/icon_map.svg" alt="매장지도" />'+
                        '</button>';
                            
            return button;
            
        },
        makeMapTemplate : function(id) {
            return '<div id="shop'+id+'" class="map"></div>';

        },
        makeSlideTemplate : function(data) {
            if(data.length == 0) return '';
            var html = ['<div class="swiper slide">','<div class="swiper-wrapper">'];
            data.forEach(function(item,index,array) {                
                html.push('<div class="swiper-slide">');
                html.push('<img src="'+item+'" />')
                html.push('</div>');                
            }); 
            html.push('</div>');
            html.push('</div>');
            return html.join('');
        }
    }
    
    var action = {    
        templateInit : function(data) {            
            template.generateLinkTemplate(data);
            template.generateStoreWrapList(data);
        },
        hideAll: function() {
			$('.map').slideUp();
			$('.slide').slideUp();
		},
        hideMap: function() {
			$('.map').slideUp();
		},
        showMap : function(target) {
            var targetClass = $('.'+target);
			var isVisible = targetClass.find('.map').is(':visible');
			if (isVisible) {
				targetClass.find('.map').slideUp();
				return;
			} else {
				action.hideAll();
				targetClass.find('.map').slideDown();
			}
		},
        showMapNoSlide : function(target) {
            var targetClass = $('.'+target);
			var isVisible = targetClass.find('.map').is(':visible');
			if (isVisible) {
				targetClass.find('.map').hide();
				return;
			} else {
				action.hideAll();
				targetClass.find('.map').show();
			}
        },
		showPhoto : function(target) {
            var targetClass = $('.'+target);
			var isVisible = targetClass.find('.slide').is(':visible');
			if (isVisible) {
				targetClass.find('.slide').slideUp();
				return;
			} else {
				action.hideAll();
				targetClass.find('.slide').slideDown();
			}
		},
        scrollIntoView: function(target) {
            action.showMapNoSlide(target);
            setTimeout(function(){                
                $('html, body').animate({
                    scrollTop: jQuery('.'+target).offset().top - 100
                }, 500);
            },500);            
		},
        kakaoMapInit : function() {
            $('#storeInfo').hcKakaoMap({
                prefix : 'shop',
                data : setting.store
            });
        },
        slideInit : function() {
			new Swiper('.swiper', {
				slidesPerView: 1,
			});
        }
    }
    return {
        init: init
    }
})();