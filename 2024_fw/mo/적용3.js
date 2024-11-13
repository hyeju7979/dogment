function get_main_list(_t_name, _page, _element, _page_html, _row) {
  $.ajax({
      url: '/m/product_list.action.html?r=' + Math.random(),
      type: 'POST',
      dataType: 'json',
      data: {
          action_mode: 'GET_MAIN_PRODUCT_LIST',
          tag_name: _t_name,
          page: _page
      },  
      success: function(res) {

          var dom = $('<div>').html(res.html);
               if ($('ul.items:only-child', $(_element)).length == 0) {
     $(_element).append($('<ul class="items"></ul>'));
 }
          $('ul.items', _element).append($('ul.items', dom).html());

          if (res.is_page_end == true) {
             $('.' + _page_html).hide();
          } else {
              _page++;
              $('.' + _page_html + ' > a').prop('href', "javascript:get_main_list('"+_t_name+"', " + _page + ", '" + _element + "', '" + _page_html + "', '" + _row + "');");
          }   
          dom = null;    
      }
  }); 
}


// $(function() {
$(document).ready( function(){
  get_main_list('block_special_product', 1, '.MK_block_special_product', 'btn-special_product', '1'); //스페셜 상품
  get_main_list('block_recmd_product', 1, '.MK_block_recmd_product', 'btn-recmd_product', '1');  //추천 상품
  get_main_list('block_new_product', 1, '.MK_block_new_product', 'btn-new_product', '1');  //신규상품
  get_main_list('block_add1_product', 1, '.MK_block_add1_product', 'btn-add1_product', '1');  //추가 1 (위클리_베스트)
  get_main_list('block_add2_product', 1, '.MK_block_add2_product', 'btn-add2_product', '1');  //추가 2 (PC투데이특가)
  get_main_list('block_add3_product', 1, '.MK_block_add3_product', 'btn-add3_product', '1');  //추가 3 (위클리_탑)
  get_main_list('block_add4_product', 1, '.MK_block_add4_product', 'btn-add4_product', '1');  //추가 4 (위클리_팬츠)
  get_main_list('block_add5_product', 1, '.MK_block_add5_product', 'btn-add5_product', '1');  // 추가 5 (모어앤모어)
// 2021-12-14 add
  get_main_list('block_add6_product', 1, '.MK_block_add6_product', 'btn-add6_product', '1');  //추가 6 (위클리_아우터)
  get_main_list('block_add7_product', 1, '.MK_block_add7_product', 'btn-add7_product', '1');  //추가 7 (PC(기획전))
  get_main_list('block_add8_product', 1, '.MK_block_add8_product', 'btn-add8_product', '1');  //추가 8 (위클리_원피스)
  get_main_list('block_add9_product', 1, '.MK_block_add9_product', 'btn-add9_product', '1');  //추가 9 (위클리_니트)
  
  
  //가을신상 반값세일에서 안보이는 3개 노출
  setTimeout(function(){
      timeSaleItemShow();
  },1000)
  
  
  
});

function timeSaleItemShow() {

  if($('#timeSale01').length < 1) return;
  var $hideItems_1 = $('#timeSale01 ul.items').children('li.hide').eq(0);
  var $hideItems_2 = $('#timeSale01 ul.items').children('li.hide').eq(1);
  var $hideItems_3 = $('#timeSale01 ul.items').children('li.hide').eq(2);
  $hideItems_1.show();
  $hideItems_1.find('.hide').show();
  
  
  $hideItems_2.show();
  $hideItems_2.find('.hide').show();
  
  
  $hideItems_3.show();
  $hideItems_3.find('.hide').show();
  
  
}

// tab
/*
$(function () { 
tab('#tab',0); 
});
function tab(e, num){
  var num = num || 0;
  var menu = $(e).children();
  var con = $(e+'Con').children();
  var select = $(menu).eq(num);
  var i = num;
  select.addClass('active');
  con.eq(num).show();
  menu.click(function(){
      if(select!==null){
          select.removeClass("active");
          con.eq(i).hide();
      }
      select = $(this); 
      i = $(this).index();
      select.addClass('active');
      con.eq(i).show();
  });
}
*/
// BEST 
$(document).ready( function(){
var menu = ['BEST','KNIT','OFFLINE BEST','TOP','SHIRTS', 'SET',]
var bestItemSwiper = new Swiper('.bestItem .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 10000,
  },
  pagination: {
    el: '.bestItem .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
  },bserver: true,
  // observeParents: true,
});
  
  
  
  console.log('메인');
  //setTimeout(groupSwiper,1000)
  
  const GROUP_COUNT = 5;
  const groupSwipers = [];

  // 메인 Swiper 인스턴스 생성
  const mainSwiper = new Swiper('.main-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    allowTouchMove: false,
    on: {
      slideChange: function () {
        //titleSwiper.slideTo(this.activeIndex);
      },
      paginationUpdate: function (swiper) {
        // 페이지네이션 업데이트 시 페이지네이션 항목 클릭 동작을 새로 정의
        const paginationBullets = document.querySelectorAll('.main-swiper-pagination .swiper-pagination-bullet');
        paginationBullets.forEach((bullet, index) => {


          bullet.onclick = () => {
            mainSwiper.slideToLoop(index); // 페이지네이션 클릭 시 해당 인덱스로 이동
            groupSwipers[0].slideTo(0, 0); // 그룹의 첫 슬라이드로 이동
            //groupSwipers[1].slideTo(0, 0);
            //groupSwipers[2].slideTo(0, 0);
            //groupSwipers[3].slideTo(0, 0);
            //groupSwipers[4].slideTo(0, 0);
          };
        });
      },
    },
    pagination: {
        el: `.main-swiper .main-swiper-pagination`,
        clickable: true,
        renderBullet: function (index, className) {
            var categoryName = ['아우터','탑','팬츠','니트','원피스/스커트']
            // 각 페이지네이션 항목에 그룹 제목을 표시
            return `<span class="${className}">${categoryName[index]}</span>`;
        },
    },

  });

  // 각 그룹 내 Swiper 인스턴스 생성
  
 setTimeout(function(){
  
  for (let i = 0; i < GROUP_COUNT; i++) {
      console.log(`.group-${i + 1}-swiper`);
    groupSwipers.push(new Swiper(`.group-${i + 1}-swiper`, {
     //groupSwipers.push(new Swiper(`.group-1-swiper`, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      nested: true,
      pagination: {
        el: `.group-${i + 1}-swiper .swiper-pagination`,
        clickable: true,
      },
      on: {
        slideChange: function () {
          const currentGroupIndex = mainSwiper.activeIndex;
          const isLastGroup = currentGroupIndex === GROUP_COUNT - 1;

          if (this.isEnd && !isLastGroup) {
            this.allowSlideNext = true;
          } else if (this.isBeginning && currentGroupIndex > 0) {
            this.allowSlidePrev = true;
          }
        },
        touchEnd: function () {
          const currentGroupIndex = mainSwiper.activeIndex;
          const isLastGroup = currentGroupIndex === GROUP_COUNT - 1;

          // 마지막 슬라이드에서 사용자가 오른쪽으로 스와이프한 경우
          if (this.isEnd && this.swipeDirection === 'next') {
            if (currentGroupIndex < GROUP_COUNT - 1) {
              mainSwiper.slideNext();
              setTimeout(() => {
                groupSwipers[currentGroupIndex + 1].slideTo(0);
              }, 0);
            } else if (isLastGroup) {
              this.allowSlideNext = false;
            }
          }

          // 첫 번째 슬라이드에서 사용자가 왼쪽으로 스와이프한 경우
          if (this.isBeginning && this.swipeDirection === 'prev') {
            if (currentGroupIndex > 0) {
              mainSwiper.slidePrev();
              setTimeout(() => {
                const prevGroupSwiper = groupSwipers[currentGroupIndex - 1];
                prevGroupSwiper.slideTo(prevGroupSwiper.slides.length - 1);
              }, 0);
            }
          }
        },
      }
    }));
  }
  
  },3000)


  // 메인 스와이퍼의 터치 이벤트 처리
  mainSwiper.el.addEventListener('touchend', function() {
    const activeGroupSwiper = groupSwipers[mainSwiper.activeIndex];
    activeGroupSwiper.allowSlideNext = true;
    activeGroupSwiper.allowSlidePrev = true;
  });
  
  
  
  
});

