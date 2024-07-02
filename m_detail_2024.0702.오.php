<!--/include_header(1)/-->

<!--meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0"-->

<!-- 중앙 영역 -->
<div class="hc_entire">
    <div id="contents" class="hc_container">
        <main class="hc_contents shopdetail">
            <section class="shopdetailInfo">
                <!-- 대표 이미지 -->
                <div class="hc_detail_top">
                    <div class="shopdetailInfoTop" style="width:100%">
                        <figure>
                            <!--/if_multi_image_enlarge/-->
                            <ul>
                                <li><!--/multi_image_enlarge/--></li>
                                <ul id="hcDetailMainSlide" class="hc_detail_multis2">
                                    <!--/loop_multi_image_list/-->
                                    <li><img src="<!--/multi_image_list@img/-->" class="new_multi_image_thumbnail2" onmouseover="<!--/multi_image_list@link/-->" /></li>
                                    <!--/end_loop/-->
                                </ul>
                            </ul>
                            
                            <!--/else/-->
                                <!--/zoom_image/-->
                            <!--/end_if/-->
                        </figure>
                    </div>
                </div>

                <!-- snap review script start contact mail : support@snapvi.co.kr -->
                <span name="snapreview_thumbnail_summary" class="snap_widget" id="4"></span>
                <!-- snap review end -->
                
                <!-- 공유1 -->
                <div class="hc_detail_share">
                    <ul class="hc_count_list">
                        <li><!-- 위시리스트 카운트 --><!--/block_wish_cnt/--><img src="http://kcompony7.jpg3.kr/web/hncok/img/icon/icon_heart.svg" alt="좋아요" /> <!--/wish_cnt/--><!--/end_block/--></li>
                        <li><!-- 상품 조회수 -->view : <!--/view_count/--></li>
                    </ul>

                    <ul class="hc_social_list hc_blind">
                        <!--/if_link_scrap_fb/-->
                        <a href="<!--/link_scrap_fb/-->" class="facebook">페이스북</a>
                        <!--/end_if/-->

                        <!--/if_link_scrap_tw/-->
                        <a href="<!--/link_scrap_tw/-->" class="twitter">트위터</a>
                        <!--/end_if/-->

                        <!--/if_link_scrap_ka/-->
                        <a href="<!--/link_scrap_ka/-->" class="katalk">카카오톡</a>
                        <!--/end_if/-->

                        <!--/if_link_scrap_ks/-->
                        <a href="<!--/link_scrap_ks/-->" class="kastory">카카오스토리</a>
                        <!--/end_if/-->
                    </ul>
                </div>
                
                <div class="hc_product_name">
                    <!-- 브랜드 --><div class="hc_detail_info_brand"><!--/brand/--></div>  
                    <!-- 상품명 --><div class="hc_prd_name"><!--/name/--></div>   
                    <div>
                        <!-- 설정한 할인가격 or 할인율 -->&ndash; <!--/dc_text/-->할인
                        <!-- 소비자 가격 대비 할인율 --><!--/discount_percent/-->
                    </div>

                    <!--/if_coupon_discount_price/-->
                    <div>
                        &ndash; 쿠폰 최대 할인가 : <!--/coupon_discount_price/-->
                    </div>
                    <!--/end_if/-->  
                    
                    <div>
                        <!--/if_price_consumer(+1)/-->
                        <p>
                            <del><!--/number/price_consumer/-->원</del>
                        </p>
                        <!--/end_if/-->

                    <!--/if_price_replace/-->
                        <p>
                            <!-- 상품가 -->
                            <em><!--/price_replace/--></em>
                        </p>
                    <!--/else/-->
                        <!-- 할인가 -->
                        <!--/if_dc_price_sell/-->
                            <p>
                                <!--/if_discount_apply_type(mobile)/-->
                                    <!-- 모바일가 -->
                                <!--/else/-->
                                    <!-- 할인가 -->
                                <!--/end_if/-->

                                <!-- 할인율 --><span class="hc_discount_rate">(<!--/dc_text/-->)</span>
                                <!-- 정상가 --><span class="hc_regular_price"><!--/number/price_sell/-->원</span>
                                <span>&sol;</span>
                                <!-- 할인가 --><span class="hc_discount_price"><!--/number/dc_price_sell/-->원</span>
                            </p>
                        <!--/end_if/-->
                    <!--/end_if/-->
                    </div>
                    <!--/if_coupon/-->
                    <section class="shopdetailCoupon">
                        <div class="shopdetailCouponGet">
                            <ul>
                            <!--/loop_coupon/-->
                                <a href="<!--/coupon@link/-->">
                                    <li>
                                        <!--/if_coupon@image_src/-->
                                            <img src="<!--/coupon@image_src/-->" class="image_src">
                                        <!--/else/-->
                                            <dl class="MS_coupon">
                                                <dt class="hc_blind"><strong><!--/coupon@attr_val/--><!--/coupon@attr_unit/--></strong></dt>
                                                <dd class="hc_blind">
                                                    <h4><!--/coupon@subject/--></h4>
                                                    <p><span>기간 : <!--/date(%M/%D)/coupon@start_date/--> ~ <!--/date(%M/%D)/coupon@end_date/--></span></p>
                                                </dd>
                                            </dl>
                                        <!--/end_if/-->
                                    </li>
                                </a>
                            <!--/end_loop/-->
                            </ul>
                        </div>
                    </section>
                    <!--/end_if/-->
                </div>

                <!-- 세트상품 시작--> 
                <!--/if_package_product/-->
                    <div class="package shopdetail_purchased">
                        <h4 class="hc_blind">세트 구성 상품 </h4>
                        <ul class="package_list">                            
                            <li class="SMS_package_products">
                                <ul>
                                    <!--/loop_package_product/-->
                                    <li class="SMS_package_product">
                                        <div class="conts wrapper items-wrap" data-open="on">
                                            <ul class="items clearfix" data-open="on" data-type="vertical">
                                                <li class="hc_flex">
                                                    <span class="thumb-img"><a href="<!--/package_product@link/-->"><img src="<!--/package_product@mobile_image/-->" /></a></span>
                                                    <span class="SMS_pkgPrd_info">
                                                        <!-- 상품명 -->
                                                        <div class="pname"><a href="<!--/package_product@link/-->"><!--/package_product@name/--></a></div>
                                                        
                                                        <!-- 영문 이름 -->
                                                        <!--/if_package_product@engname/-->
                                                        <div class="pname"><a href="<!--/package_product@link/-->"><!--/package_product@engname/--></a></div>
                                                        <!--/end_if/-->
                                                        
                                                        <!-- 추가 상품명 -->
                                                        <div><!--/subname/--></div>
                                                        
                                                        <dd class="price-info">
                                                            <ul>
                                                                <li style="display:none"><span class="tit">소비자가격 : </span><span class="SMS_pkg_val"><!--/package_product@consumer_price/--></span></li>
                                                                <li><span class="tit">판매가격 : </span><span class="SMS_pkg_val"><!--/package_product@price_replace/--></span></li>
                                                                <li style="display:none"><span class="tit">적립금 : </span><span class="SMS_pkg_val"><!--/if_package_product@used_mobile_reserve/--><img src="/images/d3/m_01/icon/mobile_reserve_icon_s.png" /> <!--/end_if/--><!--/number/package_product@reserve/-->원</span></li>
                                                                <!--/if_package_product@option/-->
                                                                <li class="options package-break">
                                                                    <!--/loop_package_product@option/-->
                                                                        <div class="SMS_pkgPrd_opt">
                                                                            <!--/if_package_product@option@title/--><span class="tit"><!--/package_product@option@title/--> : </span><!--/end_if/-->
                                                                            <!--/if_package_product@option@select/--><span class="SMS_pkg_val"><!--/package_product@option@select/--></span><!--/end_if/--><br />
                                                                        </div>
                                                                    <!--/end_loop/-->

                                                                </li>
                                                                <!--/end_if/-->
                                                            </ul>
                                                        </dd>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <!--/end_loop/-->
                                </ul>
                            </li>

                            <li class="SMS_package_quantity">
                                <span class="SMS_pkg_val">
                                    <!--/input_quantity/-->
                                    <a href="<!--/link_quantity_up/-->" class="package-btn-up"><span>+</span></a>
                                    <a href="<!--/link_quantity_down/-->" class="package-btn-down"><span>-</span></a>
                                </span>
                            </li>
                            
                            <li class="shopdetailInfoValue">                                
                                <!--/if_package_reserve(+1)/-->
                                <div>
                                    적립금 : 
                                    <!--/if_used_mobile_reserve/-->
                                        <img src="/images/d3/m_01/icon/mobile_reserve_icon_s.png" />
                                    <!--/end_if/-->
                                    <em><!--/package_reserve/--></em>
                                </div>
                                <!--/end_if/-->
                                
                                <!-- 세트 구성 상품 총 적립금 -->
                                <div>
                                    적립금 : <!--/package_reserve/-->
                                </div>
                                
                                <div>
                                    상품판매가 : <!--/package_price_sell/-->
                                </div>
                                
                                <!--/if_delivery_title/-->
                                <div class="hc_blind">
                                    배송비                                   
                                    <a href="javascript:alert('<!--/delivery_detail/-->');">
                                        <span>
                                            <!--/delivery_title/-->
                                        </span>
                                        <span class="deli_info"></span> <span class="txt">배송비를 확인하세요</span>
                                    </a>
                                    <!--/if_link_delivery_country/--><a href="<!--/link_delivery_country/-->"><span class="region">지역별</span> <span class="fa fa-info-circle fa-lg"></span></a><!--/end_if/-->
                                </div>
                                <!--/end_if/-->
                                
                                <!--/if_nhn_mileage/-->
                                <div>
                                    네이버 마일리지 : <!--/nhn_mileage/-->
                                </div>
                                <!--/end_if/-->
                            </li>
                            
                            <li class="MK_optAddWrap">
                                세트할인가 : <!--/package_total_price/--> (세트할인 <!--/total_discount_money/-->)
                            </li>
                        </ul>
                    </div>
                <!--/else/-->
                <!--/end_if/-->
                <!-- 세트상품 끝--> 
                
                <div class="tb-left" style="padding-top:10px"> 
                    <!--/if_btn_scrap_fb/--><!--/btn_scrap_fb/--><!--/end_if/--> 
                    <!--/if_btn_scrap_m2/--><!--/btn_scrap_m2/--><!--/end_if/--> 
                    <!--/if_btn_scrap_tw/--><!--/btn_scrap_tw/--><!--/end_if/--> 
                    <!--/if_btn_scrap_cy/--><!--/btn_scrap_cy/--><!--/end_if/--> 
                </div> 
                                            
                <!-- 컬러칩 -->
                <div class="hc_colorchip">
                    <!--/if_product_colors/-->
                        <!--/loop_product_colors/-->
                        <font color="<!--/product_colors@code/-->"></font><span><!--/product_colors@name/--></span>
                        <!--/end_loop/-->
                    <!--/end_if/-->
                </div>
                <!-- 컬러칩 -->

                <div class="shopdetailInfoBottom">
                <!--/form_product/-->
                    <div class="shopdetailInfoValue">
                        <!--/if_price_consumer(+1)/-->
                        <p>
                            <del><!--/number/price_consumer/-->원</del>
                        </p>
                        <!--/end_if/-->

                        <!--/if_price_replace/-->
                        <p>
                            <!-- 상품가 -->
                            <em><!--/price_replace/--></em>
                        </p>
                        <!--/else/-->
                            <!-- 마일리지 -->
                            <!--/if_reserve(+1)/-->
                                <p class="hc_blind">
                                    <span class="shopdetailInfoName">마일리지</span>
                                    <span class="shopdetailInfoCont">
                                        <!--/number/reserve/--><!--/reserve_unit/-->
                                    </span>
                                </p>
                            <!--/end_if/-->

                            <!-- 포인트 -->
                            <!--/if_point(+1)/-->
                            <p>
                                <span class="shopdetailInfoName">포인트</span>
                                <span class="shopdetailInfoCont">
                                    <!--/number/point/--><!--/point_unit/-->
                                </span>
                            </p>
                            <!--/end_if/-->

                            <!-- 네이버 마일리지 -->
                            <!--/if_nhn_mileage/-->
                            <p>
                                <span class="shopdetailInfoName">네이버 마일리지</span>
                                <span class="shopdetailInfoCont">
                                    <!--/nhn_mileage/-->
                                </span>
                            </p>
                            <!--/end_if/-->
                            
                            <!-- 상품 무게 -->
                            <!--/if_weightdeli_use/-->
                            <p>
                                <span class="shopdetailInfoName">상품무게</span>
                                <span class="shopdetailInfoCont">
                                    <!--/weight/-->
                                </span>
                            </p>
                            <!--/end_if/-->	

                            <!-- 제조사 :: 할인기간체크용 -->
                            <!--/if_manufacture/-->
                                <p class="SMS_detail_manufacture hc_blind">
                                    <span class="shopdetailInfoName">제조사</span>
                                    <span class="shopdetailInfoCont SMS_manufacture"><!--/manufacture/--></span>
                                </p>
                            <!--/end_if/-->
                            <!-- //제조사 :: 할인기간체크용 -->

                            <!-- 정기배송가's -->
                            <!--/if_link_subs/-->
                            <div class="delivery">
                                <span class="shopdetailInfoName">정기배송가</span>
                                <span class="shopdetailInfoCont btn-view"><em class="bold"><!--/number/subs_price/--></em>원
                                <!--/if_subs_discount_turn/-->
                                <a href="#none" class="btn-coupon "><span>%</span> 정기배송 할인 혜택 <em>▼</em></a></span>
                                <div class="view-wrap">
                                    <div class="layer-view">
                                        <h3 class="title">정기배송 할인 혜택</h3>
                                        <div class="list">
                                            <!--/loop_subs_discount_turn_info/-->
                                            <dl>
                                                <!--/if_subs_discount_turn_info@last_turn/-->
                                                <dt><!--/subs_discount_turn_info@turn/-->회차 이상</dt>
                                                <!--/else/-->
                                                <dt><!--/subs_discount_turn_info@turn/-->회차</dt>
                                                <!--/end_if/-->
                                                <dd class="tb-center txt"><!--/subs_discount_turn_info@discount/-->% 할인</dd>
                                                <dd><!--/number/subs_discount_turn_info@discount_price/-->원</dd>
                                            </dl>
                                            <!--/end_loop/-->
                                        </div>
                                        <p>* 할인 예상가이며, 결제시점의 판매가와 할인율에<br />
                                            따라서 결제 가격은 변동될 수 있습니다.</p>
                                        <a href="#none" class="btn-close" id="view_close"><img src="/images/common/btn_layer_pop_close.png" alt="" /></a>
                                    </div>
                                </div>
                                <!--/end_if/-->
                            </div>
                            <!--/end_if/-->
                            <!-- 정기배송가'end -->

                            <!-- 미노출's -->
                            <div class="hc_blind">
                                <!-- 할인기간 -->
                                <div>
                                    <p>남은 기간 할인 <!--/dc_period_daytime/--></p>
                                    <p>할인 시작일: <!--/dc_start_date/--> - 할인 종료일 : <!--/dc_end_date/--></p>
                                </div>
                                <!-- //할인기간 -->
                            </div>
                            <!-- 미노출'end -->
                        <!--/end_if/-->

                        <!-- 쿠폰할인 -->
                        <!--/if_link_benefit/-->
                            <p>
                                <span class="shopdetailInfoName">쿠폰할인</span>
                                <span class="shopdetailInfoCont listCoupon">
                                    <em class="bold"><!--/if_coupon_discount_price(+1)/-->-<!--/end_if/--><!--/number/coupon_discount_price/--></em>원<a href="<!--/link_benefit/-->" class="btn-coupon"><span>%</span> 혜택확인 <em>▼</em></a>
                                </span>
                            </p>
                        <!--/else/-->
                            <!--/if_discount_promotion_title/-->
                                <div style="margin-bottom:8px;">
                                    <span class="shopdetailInfoName">혜택</span>
                                    <div class="shopdetailInfoCont">
                                        <div class="buy-benefit">
                                            <span class="tit-txt"><!--/discount_promotion_title/--></span>
                                            <a href="#none" class="btn-view"><span>더보기</span> <em>▼</em></a>
                                            <!-- 더보기 레이어 -->
                                            <div class="view-wrap">
                                                <div class="layer-view">
                                                    <p><!--/discount_promotion_title/--><br />동일상품 구매 시, <!--/if_discount_promotion_option_apply/-->옵션 포함<!--/else/-->옵션 제외<!--/end_if/--></p>  

                                                    <ul class="list">
                                                    <!--/loop_bulk_info/-->
                                                        <li>· <!--/bulk_info@min_stock/--> ~ <!--/bulk_info@max_stock/-->개 개당 
                                                            <span class="fc-red">
                                                            <!--/if_discount_promotion_discount_type(WON)/--><!--/number/bulk_info@price/-->원
                                                            <!--/else/--><!--/bulk_info@percent/-->%<!--/end_if/--> 할인
                                                            </span>
                                                        </li>
                                                    <!--/end_loop/-->
                                                    <li class="layer-info">* 할인적용금액은 장바구니에서<br>확인해주세요.</li>
                                                    </ul>
                                                </div>
                                                <a href="#none" class="btn-close" id="view_close"><img src="/images/common/btn_layer_close.gif" alt="" /></a>
                                            </div>
                                            <!-- // 더보기 레이어 --> 
                                        </div>
                                    </div>
                                </div>
                            <!--/end_if/-->
                        <!--/end_if/-->

                        <!-- 쿠폰's -->
                        <section class="hc_coupon_list">
                            <!-- 쿠폰 목록 반복문 (시작) -->
                            <!--/loop_coupon/-->
                            <ul>
                                <li class="hc_blind"><!-- 쿠폰 > 안내 정보 --><!--/coupon@explain/--></li>
                                <li class="hc_blind"><!-- 쿠폰 > 사용 링크 --><a href="<!--/coupon@link/-->"><!--/coupon@image/--></a></li>
                                <!--/if_coupon@subject/-->
                                <li>쿠폰명 :  <!--/coupon@subject/--></li>
                                <!--/end_if/-->
                                <!--/if_coupon_discount_price/-->
                                <li>쿠폰 최대 할인가 : <!--/number/coupon_discount_price/--></li>
                                <!--/end_if/-->
                            </ul>
                            <!--/end_loop/-->
                            <!-- 쿠폰 목록 반복문 (끝) -->

                            <!-- 다운 쿠폰 목록 -->
                            <!--/loop_down_coupon_list/-->
                            <ul>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 쿠폰타입 -->
                                    <!--/down_coupon_list@coupon_type/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 쿠폰설명 -->
                                    <!--/down_coupon_list@explain/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 다운 가능 기간 > 시작일 -->
                                    <!--/down_coupon_list@down_start_date/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 다운 가능 기간 > 종료일 -->
                                    <!--/down_coupon_list@down_end_date/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 쿠폰 할인 금액 -->
                                    <!--/down_coupon_list@discount_price/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 다운 링크 --><a href="<!--/down_coupon_list@link_down/-->"><!-- 다운 쿠폰 목록 > 쿠폰 이미지 --><img src="<!--/down_coupon_list@image/-->" alt="" /></a>
                                </li>
                                <!-- 다운 쿠폰 목록 > 모바일 전용 쿠폰 여부 -->
                                <!--/down_coupon_list@is_only_mobile/-->
                                <li>
                                    <!-- 다운 쿠폰 목록 > 모바일 쿠폰 이미지 --><img src="<!--/down_coupon_list@image_mobile/-->" alt="" />
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 쿠폰번호 -->
                                    <!--/down_coupon_list@number/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 쿠폰명 -->
                                    <!--/down_coupon_list@name/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 적립금액 -->
                                    <!--/down_coupon_list@reserve_price/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 스타일 번호 -->
                                    <!--/down_coupon_list@style_num/-->
                                </li>
                                <li>
                                    <!-- 다운 쿠폰 목록 > 사용 가능 금액 제한 -->
                                    <!--/down_coupon_list@valid_price/-->
                                </li>
                            </ul>
                            <!--/end_loop/-->

                            <!-- 엣지북 쿠폰 -->
                            <div>
                                <!--/edgebook_coupon/-->
                            </div>                            
                        </section>
                        <!-- 쿠폰'end -->

                        <!-- 최대 할인가's -->
                        <!--/if_max_discount_price(+1)/-->
                        <div class="hc_maximum_discount">
                            <details>
                                <summary>
                                    <span class="hc_bold">최대 할인가</span>
                                    <span><!--/number/max_discount_price/--><em>원</em><img src="http://kcompony7.jpg3.kr/web/hncok/img/icon/icon_arr.svg" alt="펼치기" /></span>
                                </summary>
                                <ul class="sale-list">
                                    <!--/if_dc_price_sub(+1)/--><li>기간할인 : <!--/number/dc_price_sub/--> 원	</li><!--/end_if/-->
                                    <!--/if_group_prd_discount_price(+1)/--><li>그룹할인 : <!--/number/group_prd_discount_price/--> 원</li>
                                    <!--/end_if/-->
                                    <!--/if_coupon_discount_price(+1)/--><li>쿠폰최대할인 : <!--/number/coupon_discount_price/--> 원</li>
                                    <!--/end_if/-->
                                </ul>
                            </details>
                        </div>
                        <!--/end_if/-->
                        <!-- 최대 할인가'end -->
                        
                        <!-- 아코디언 사이즈가이드, 재고현황 등-->
                        <div class="hc_new_var3_row">
                            <div class="hc_new_var3_col">
                                <div class="hc_new_var3_tabs">
                                    <div class="hc_new_var3_tab">
                                        <input type="radio" id="hc_new_var3_info1" name="hc_new_var3_info">
                                        <label class="hc_new_var3_tab-label" for="hc_new_var3_info1">DETAIL&amp;FABRIC</label>
                                        <div class="hc_new_var3_tab-content">
                                            <!-- 상품 특이사항 --><!--/addcode/-->
                                            <!-- 상품상세 공통정보 --><!--/detail_common/-->
                                            <!-- 상품상세 개별 공통정보 --><!--/product_common_info_product_html/-->
                                            <!-- 상품 유의사항 --><!--/warning_info/-->

                                            <!-- 상품 일반정보 -->
                                            <!--/loop_product_info/-->
                                                <!-- 상품 일반정보 > 제목 --><!--/product_info@title/-->
                                                <!-- 상품 일반정보 > 내용 --><!--/product_info@content/-->
                                                <!-- 상품 일반 정보 목록 --><!--/product_info_list/-->
                                                <!-- 상품 일반 정보 목록 > 상품 정보 > 제목 --><!--/product_info_list@product_info@title/-->
                                                <!-- 상품 일반 정보 목록 > 상품 정보 > 내용 --><!--/product_info_list@product_info@content/-->
                                                <!-- 상품 일반 정보 목록 > 상품 정보 --><!--/product_info_list@product_info/-->
                                            <!--/end_loop/-->

                                            <!-- 일반 공통정보 -->
                                            <!--/loop_product_common_info/-->
                                                <!-- 일반 공통정보 HTML --><!--/product_common_info@html/-->
                                                <!-- 일반 공통정보 이미지 --><!--/product_common_info@image/-->
                                                <!-- 일반 공통정보 텍스트_교환/반품/보증 조건과 절차 --><!--/product_common_info@refund/-->
                                                <!-- 일반 공통정보 텍스트_청약철회 및 계약해제 --><!--/product_common_info@revocation/-->
                                            <!--/end_loop/-->
                                        </div>
                                    </div>

                                    <div class="hc_new_var3_tab">
                                       
                                        <div class="hc_new_var3_tab-content">

                                        </div>
                                    </div>

                                    <div class="hc_new_var3_tab">
                                       
                                        <div class="hc_new_var3_tab-content">
                    
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <!-- 아코디언 사이즈가이드, 재고현황 등 end -->
                        
                        <!-- snapfit script start contact mail : support@snapvi.co.kr -->
                        <div id="sfsnapfit_main_popup_call_btn"></div>
                        <!-- snapfit end -->
						
                        <!-- 섹션 : 배송정보's -->
                        <div class="hc_shipping_information hc_blind">
                            <h4 class="hc_bold">배송정보</h4>
                            <!--/if_cate1_name(PFS:GALLERY)/-->
                            <!--/else/-->
                                <!--/if_delivery_title/-->
                                <div class="hc_column2">
                                    <span>배송비</span>
                                    <span>
                                        <p><!-- 배송비 안내 상세 --><!--/delivery_detail/--></p>
                                        <p><!-- 지역별 배송비 정보 --><!--/delivery_country_info/--></p>
                                        <p><!-- 배송비 안내 문구 --><!--/delivery_title/--></p>
                                        <p><!-- 지역별 배송비 안내 문구 --><!--/link_delivery_country/--></p>
                                        <p><!-- 금액별 차등 배송비 안내 문구 --><!--/link_delivery_different/--></p>
                                        <p><!-- 배송조회내용 --><!--/delivery_info/--></p>
                                <!--/end_if/-->
                                    </span>
                                </div>
                            <!--/end_if/-->
                        </div>
                        <!-- 섹션 : 배송정보'end -->
                    </div>
                    
                    <!-- snap review script start contact mail : support@snapvi.co.kr -->
                    <div name="snapreview_option_review" class="snap_widget" id="5"></div>
                    <!-- snap review end -->

                    <!--/if_package_product/-->
                        <!-- 세트상품 구매 버튼 시작 -->
                        <div class="new_baro_btns">
                            <a href="<!--/link_immediate/-->" class="buy hc_btn_mini_fill hc_btn_setBuy">구매하기</a>
                            <a class="hc_btn_mini hc_btn_setWish"  style="display:none" href="<!--/link_wishlist/-->">관심상품</a>
                            <a id="cartBtn" class="hc_btn_mini hc_btn_setCart" href="<!--/link_basket/-->">장바구니</a>
                       </div>
                        
                        <!-- 세트상품 구매 버튼 끝 -->
                    <!--/else/-->          
                        <article class="option_area">
                            <!-- 상품구매 고정버튼 영역 -->
                            <div class="fixed-btn fixed">
                                <!--a href="#" class="btn_Red">구매하기</a-->
                                <div class="fxb">
                                    <a href="#" class="buy btn_directBuy hc_btn_mini_fill">구매하기</a>
                                    <a href="#" class="cart btn_directBuy hc_btn_medium">장바구니</a>  
                                </div>
                                <div class="fixedMask"><span class="close-thin"></span></div>
                            </div>
                            <!-- //상품구매 고정버튼 영역 -->
                            
                            <div class="option_tk">
                                <!--/if_hybrid_option/-->
                                <div class="option-wrap">
                                    <!--/loop_hybrid_option/-->
                                        <div class="option-box"> 
                                            <p class="tit">
                                                <strong><!--/hybrid_option@title/--></strong> 
                                                <!--/if_hybrid_option@min_quantity/-->
                                                    (최소 <!--/hybrid_option@min_quantity/-->개<!--/if_not_hybrid_option@max_quantity/-->선택가능)<!--/end_if/-->
                                                <!--/end_if/--> 

                                                <!--/if_hybrid_option@max_quantity/-->
                                                    <!--/if_not_hybrid_option@min_quantity/-->(<!--/end_if/--> ~ 최대 <!--/hybrid_option@max_quantity/-->개 선택가능)
                                                <!--/end_if/-->
                                            </p>
                                            <ul class="list">        
                                                <!--/loop_hybrid_option@option/-->                                                
                                                <li class="<!--/if_step(6)/-->first<!--/end_if/--> <!--/if_hybrid_option@option@soldout/-->lst-soldout<!--/end_if/-->">
                                                    <dl>
                                                        <dd class="prdchk"><label><!--/hybrid_option@option@checkbox/--></label></dd>
                                                        <dd class="prdimg"><!--/hybrid_option@option@opt_s_img/--><!--/if_hybrid_option@option@soldout/--><span class="soldout-bg"></span><span class="soldout">품절</span><!--/end_if/--></dd>
                                                        <dd class="prdname"><!--/hybrid_option@option@title/--></dd>
                                                        <dd class="prdprice"><strong><!--/hybrid_option@option@opt_price/--></strong></dd>
                                                        <dd class="prdnote"><!--/hybrid_option@option@note/--></dd>
                                                    </dl>
                                                </li> 
                                                <!--/if_step(5)/-->
                                                    </ul>
                                                    <ul class="list">
                                                <!--/else/-->
                                                </li>
                                                <!--/end_if/-->
                                                <!--/end_loop/-->  
                                            </ul>
                                        </div>
                                    <!--/end_loop/-->  
                                </div>
                                <!--/end_if/--> 

                                <div class="shopdetailInfoSelect">
                                    <!--/if_not_multi_option/-->
                                        <!--/if_option/-->
                                            <!--/loop_option/-->
                                                <!--/if_option@oneclick_list/-->
                                                    <div class="shopdetailInfoOneclick">
                                                        <span class="shopdetailInfoName"><!--/option@title/--></span>
                                                        <div class="shopdetailInfoList"><!--/option@oneclick_value/--><!--/option@oneclick_list/--></div>
                                                    </div>
                                                <!--/else/-->
                                                    <p>
                                                        <span class="shopdetailInfoName"><!--/option@title/--></span>
                                                        <span class="shopdetailInfoCont"><!--/option@select/--></span>
                                                    </p>
                                                <!--/end_if/-->
                                            <!--/end_loop/-->
                                        <!--/end_if/-->
                                        <!--/if_not_multi_option_box/-->
                                            <p class="shopdetailInfoCount">
                                                <span class="shopdetailInfoName">수량</span>
                                                <span class="shopdetailInfoCont">
                                                    <!--/input_quantity/-->
                                                    <a href="<!--/link_quantity_up/-->"> + </a>
                                                    <a href="<!--/link_quantity_down/-->"> - </a>
                                                </span>
                                            </p>
                                        <!--/end_if/-->
                                    <!--/end_if/-->

                                    <!--/if_is_unify_option/-->
                                        <!--/if_option_add/-->
                                            <p class="add-option-sel">+ 추가 옵션 선택</p>
                                            <!--/loop_option_add/-->
                                            <p class="shopdetailInfoCount add-option">
                                                <span class="shopdetailInfoName"><!--/option_add@title/--></span>
                                                <span class="shopdetailInfoCont">
                                                    <!--/option_add@select/-->
                                                    <!--/option_add@input_quantity/-->
                                                    <a href="<!--/option_add@link_quantity_up/-->"><span class="fa fa-plus"></span></a><a href="<!--/option_add@link_quantity_down/-->"><span class="fa fa-minus"></span></a>
                                                </span>
                                            </p>
                                            <!--/end_loop/-->
                                        <!--/end_if/-->
                                    <!--/end_if/-->
                                </div>
                            
                                <!--/if_not_multi_option_box/-->
                                    <!--/if_option_price_sell/-->
                                        <div class="shopdetailTotal">
                                            <p>옵션 적용가 <em class="bold"><!--/number/option_price_sell/--></em>원</p>
                                        </div>
                                    <!--/end_if/-->
                                <!--/end_if/-->
                        
                                <div class="shopdetailInfoSelect">
                                    <!--/if_multi_option/-->
                                        <!--/loop_multi_option/-->
                                            <!--/if_multi_option@title/-->
                                                <!--/if_multi_option@oneclick_list/-->
                                                <div class="shopdetailInfoOneclick">
                                                    <div class="shopdetailInfoName"><!--/multi_option@title/--></div>
                                                    <div class="shopdetailInfoList"><!--/multi_option@oneclick_value/--><!--/multi_option@oneclick_list/--></div>
                                                </div>
                                                <!--/else/-->
                                                    <p class="hc_column2">
                                                        <div class="hc_option_tit"><!--/multi_option@title/--></div>
                                                        <div class="txt"><!--/multi_option@select/--></div>
                                                    </p>
                                                <!--/end_if/-->
                                            <!--/else/-->
                                                <p><!--/multi_option@select/--></p>
                                            <!--/end_if/-->
                                        <!--/end_loop/-->
                                        <!--/if_is_unify_option/-->
                                            <!--/if_link_option_select_complete/-->
                                                <p class="opt-com"><a href="<!--/link_option_select_complete/-->"><img src="/images/d3/modern_simple/btn/btn_h18_select_complete.gif" title="옵션 선택 완료" alt="옵션 선택 완료" /></a></p>
                                            <!--/end_if/-->
                                        <!--/end_if/-->
                                    <!--/end_if/-->

                                    <!--/if_is_unify_option/-->
                                        <!--/if_multi_option_add/-->
                                            <p class="add-option-sel">+ 추가 옵션 선택</p>
                                            <!--/loop_multi_option_add/-->
                                            <p class="hc_column2">
                                                <span><!--/multi_option_add@title/--></span>
                                                <span class="shopdetailInfoCont"><!--/multi_option_add@select/--></span>
                                            </p>
                                            <!--/end_loop/-->
                                        <!--/end_if/-->
                                    <!--/end_if/-->
                                </div>

                                <!--/if_hybrid_option/-->     
                                <div class="MK_optAddWrap_line"></div> 

                                <div class="MK_optAddWrap">    
                                    <div id="MK_innerOptWrap">
                                        <div id="MK_innerOptScroll">
                                            <ul id="MK_innerOpt_01" class="MK_inner-opt-cm">
                                            <li id="basic_0">
                                            <span class="MK_p-name"><!--/name/--></span>
                                            <div class="MK_qty-ctrl">
                                                        <!--/hybrid_input_quantity/--> 
                                                        <a href="<!--/hybrid_link_quantity_up/-->" class="btn-type-02 box-gradient-02 box-shadow-02"><span>+1</span></a>
                                                        <a href="<!--/hybrid_link_quantity_down/-->" class="btn-type-02 box-gradient-02 box-shadow-02"><span>-1</span></a>                            												
                                                    </div>
                                                    <strong class="MK_price">
                                                        <span id="MK_p_price_basic_0"> 
                                                        <!--/if_hybrid_price_replace/-->
                                                            <!--/hybrid_price_replace/-->
                                                        <!--/else/-->
                                                            <!--/number/price_sell/-->원
                                                        <!--/end_if/-->
                                                        </span>
                                                    </strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="MK_optAddWrap_div"></div>
                                
                                <div class="MK_optAddWrap">
                                <!--/hybrid_option_box/-->
                                </div>

                                <div class="MK_optAddWrap_div"></div>

                                <div class="MK_optAddWrap">
                                    <div id="MK_optAddWrapList">
                                        <!--/hybrid_option_list/-->  
                                    </div>
                                </div>    
                                <!--/end_if/-->

                                <!--/if_extra_product/-->
                                <div class="shopdetailInfoTit">추가 구성 상품</div>
                                <!--/loop_extra_product/-->
                                <div class="shopdetailInfoWrap">
                                    <div class="shopdetailInfoTop">
                                        <figure>
                                            <img src="<!--/extra_product@image_s/-->" class="response100" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="shopdetailInfoValue">
                                        <p class="shopdetailInfoprdName"><span class="shopdetailInfoCont"><!--/extra_product@name/--></span></p>
                                        <p> 
                                            <span class="shopdetailInfoCont">
                                                <!--/if_extra_product@price_replace/-->
                                                    <!--/extra_product@price_replace/-->
                                                <!--/else/-->
                                                <!--/if_extra_product@price_discount/-->
                                                    <del><!--/number/extra_product@price_consumer/-->원</del>
                                                <!--/else/-->
                                                    <em class="bold"><!--/number/extra_product@price_sell/--></em>원
                                                <!--/end_if/-->
                                                <!--/end_if/-->
                                            </span>
                                        </p>
                                        <!--/if_extra_product@price_discount/-->
                                            <p class="shopdetailInfoDiscount bold">
                                                <!--/if_extra_product@discount_apply_type(mobile)/-->
                                                    <span class="shopdetailInfoName"><span class="fa fa-mobile fa-lg"></span></span>
                                                <!--/end_if/-->
                                                <span class="shopdetailInfoCont"><em><!--/number/extra_product@price_discount/--></em>원</span>
                                            </p>
                                        <!--/end_if/-->
                                        <!--/if_extra_product@reserve_price(+1)/-->
                                            <p> 
                                                <span class="shopdetailInfoCont"><!--/extra_product@reserve_price/-->원 적립</span>
                                            </p>
                                        <!--/end_if/-->
                                        <!--/if_extra_product@reserve_percent(+1)/-->
                                            <p> 
                                                <span class="shopdetailInfoCont"><!--/extra_product@reserve_percent/-->% 적립</span>
                                            </p>
                                        <!--/end_if/-->
                                        <!--/if_extra_product@point_price(+1)/-->
                                            <p> 
                                                <span class="shopdetailInfoCont"><!--/extra_product@point_price/--><!--/extra_product@point_unit/--> 적립</span>
                                            </p>
                                        <!--/end_if/-->
                                        <!--/if_extra_product@delivery_title/-->
                                            <p> 
                                                <span class="shopdetailInfoCont"><a href="javascript:alert('<!--/extra_product@delivery_detail/-->');"><span><!--/extra_product@delivery_title/--> 배송</span> <span class="fa fa-info-circle fa-lg"></span></a>
                                                <!--/if_extra_product@delivery_country_info/-->
                                                    <a href="javascript:alert('<!--/extra_product@delivery_country_info/-->');"><span class="region">지역별</span> 
                                                    <span class="fa fa-info-circle fa-lg"></span></a>
                                                <!--/end_if/-->
                                                </span>
                                            </p>
                                        <!--/end_if/-->
                                        <!--/if_extra_product@weight/-->
                                            <p> 
                                                <span class="shopdetailInfoCont"><!--/extra_product@weight/--></span>
                                            </p>
                                        <!--/end_if/-->
                                        <div class="shopdetailInfoSelect">
                                            <!--/if_extra_product@option/-->
                                                <!--/loop_extra_product@option/-->
                                                    <p>
                                                        <span class="shopdetailInfoName"><!--/extra_product@option@title/--></span>
                                                        <span class="shopdetailInfoCont"><!--/extra_product@option@select/--></span>
                                                    </p>
                                                <!--/end_loop/-->
                                                <!--/if_extra_product@link_option_select_complete/-->
                                                    <p class="opt-com"><a href="<!--/extra_product@link_option_select_complete/-->"><img src="/images/d3/modern_simple/btn/btn_h18_select_complete.gif" title="옵션 선택 완료" alt="옵션 선택 완료" /></a></p>
                                                <!--/end_if/-->
                                            <!--/else/-->
                                                <!--/if_extra_product@link_option_select_complete/-->
                                                    <p class="opt-com"><a href="<!--/extra_product@link_option_select_complete/-->"><img src="/images/d3/modern_simple/btn/btn_h18_select_complete.gif" title="옵션 선택 완료" alt="옵션 선택 완료" /></a></p>
                                                <!--/end_if/-->
                                            <!--/end_if/-->
                                        </div>
                                    </div>
                                </div>
                                <!--/end_loop/-->
                                <!--/end_if/-->

                                <!--/if_is_unify_option/-->
                                    <div class="shopdetailInfoMultiSelect">
                                        <!-- 통합옵션 멀티옵션 수량, 가격 -->
                                        <!--/if_multi_option_box/-->
                                        <div class="MK_optAddWrap">
                                            <div id="MK_innerOptWrap">
                                                <div id="MK_innerOptScroll">
                                                    <!--/multi_option_box/-->
                                                    <!--/multi_option_add_box/-->
                                                </div>
                                                <div id="MK_innerOptWrap" class="total" style="text-align:right;">
                                                    <!--/if_hybrid_option/-->
                                                    <div id="MK_innerOptPrice">
                                                        상품금액 <span id="MK_txt-prd"></span> 원 + 기본옵션 <span id="MK_txt-opt"></span> 원
                                                    </div>
                                                    <div id="MK_innerOptAdd">
                                                        <span id="MK_opt_txt">+ 추가옵션 <span id="MK_txt-add"></span> 원</span>
                                                    </div>
                                                    <!--/end_if/-->
                                                </div>
                                                <div id="MK_innerOptTotal" class="total">
                                                    <span class="MK_txt-total">총 상품 금액</span>
                                                    <!--/if_multi_option_dc_total_price/-->
                                                    <strike><strong id="MK_p_total"><!--/multi_option_total_price/--></strong><span class="MK_txt-won">원</span></strike>
                                                        -> <!--/multi_option_dc_total_price/--><span class="MK_txt-won">원</span>
                                                    <!--/else/-->
                                                    <strong class="MK_total" id="MK_p_total"><!--/multi_option_total_price/--></strong>
                                                    <span class="MK_txt-won">원</span>
                                                    <!--/end_if/-->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //통합옵션 멀티옵션 수량, 가격 -->
                                        <!--/end_if/-->
                                    </div>
                                <!--/else/-->
                                    <div class="shopdetailInfoMultiSelect">
                                    <!-- 멀티옵션 수량, 가격 -->
                                    <!--/if_multi_option_box/-->
                                        <!--/multi_option_box/-->
                                    <!--/end_if/-->
                                    <!-- //멀티옵션 수량, 가격 -->
                                    </div>
                                <!--/end_if/-->
                            </div>

                            <div class="buy_on">
                                <div class="new_baro_btns">
                                    <a href="<!--/link_immediate/-->" class="buy hc_btn_mini_fill">구매하기</a>
                                    <a href="<!--/link_basket/-->" class="add_cart hc_btn_medium ">장바구니</a>
                                </div>

                                <!-- 네이버 페이 시작 -->
                                <!--/if_btn_nhn/-->
                                    <div class="naver-checkout">
                                    <!--/btn_nhn/-->
                                    </div>
                                <!--/end_if/-->
                                <!-- 네이버 페이 끝 -->
                            
                                <!-- 선물하기-->	
                                <!--/if_link_baro_giveapresent/-->
                                    <a href="<!--/link_baro_giveapresent/-->" class="gift"><i class="fa fa-gift"></i>선물하기</a>	
                                <!--/end_if/-->
                                
                                <!--/if_link_subs/-->
                                <a href="<!--/link_subs/-->" class="subs">정기배송 신청</a>
                                <!--/end_if/-->
                            </div>                        
                        </article>
                    <!--/end_if/-->
                <!--/end_form/-->
                </div>
            </section>

            <!--/if_product_common_info_event/-->
            <section class="shopdetailCommoninfoEvent">     
                <div class="detail-common-info-event">
                <!--/loop_product_common_info_event/-->
                    <!--/if_product_common_info_event@image/-->
                    <div>
                        <a href="<!--/product_common_info_event@link_image/-->" target="<!--/product_common_info_event@target_image/-->"> 
                            <img src="<!--/product_common_info_event@image/-->" align="absmiddle" border="0" />
                        </a>
                    </div>
                    <!--/end_if/-->
                    <!--/if_product_common_info_event@html/-->
                    <div>
                        <!--/product_common_info_event@html/-->
                    </div>
                    <!--/end_if/-->
                <!--/end_loop/-->
                </div>
            </section>      
            <!--/end_if/-->

            <!--/if_product_common_info_event_product_html/-->
            <section class="shopdetailCommoninfoEvent">
                <div class="detail-common-info-event">
                    <!--/product_common_info_event_product_html/-->
                </div>
            </section>
            <!--/end_if/-->

            <div class="ncount shopdetailBoard hc_blind">
                <!--/if_link_review_more/-->
                    <a href="<!--/link_review_more/-->">상품리뷰
                        <!--/if_review_total_count(+1)/-->(<!--/number/review_total_count/-->)<!--/end_if/-->
                    </a>
                <!--/end_if/-->

                <!--/if_link_qna_board_more/-->
                    <a href="<!--/link_qna_board_more/-->">Q&amp;A
                        <!--/if_qna_board_total_count(+1)/-->(<!--/number/qna_board_total_count/-->)<!--/end_if/-->
                    </a>
                <!--/end_if/-->

                <!--/if_link_review_board_more/-->
                    <a href="<!--/link_review_board_more/-->">리뷰보드
                        <!--/if_review_board_total_count(+1)/-->(<!--/number/review_board_total_count/-->)<!--/end_if/-->
                    </a>
                <!--/end_if/-->
            </div>

            <!-- 스마트 쿠폰 목록-->
            <!--/if_down_coupon_list/-->
            <section class="shopdetailCoupon">
                <ul class="smart-coupon-list">
                    <!--/loop_down_coupon_list/-->
                        <!--/if_down_coupon_list@image_mobile/-->
                        <li>
                            <span class="c-image">
                            <!--/if_down_coupon_list@link_down/-->
                                <a href="<!--/down_coupon_list@link_down/-->"><img src="<!--/down_coupon_list@image_mobile/-->" /></a>
                            <!--/else/-->
                                <img src="<!--/down_coupon_list@image_mobile/-->" />
                            <!--/end_if/-->
                            </span>
                        </li>
                        <!--/else/-->
                        <li class="sc-style<!--/down_coupon_list@style_num/--> <!--/if_down_coupon_list@coupon_type(RESERVE)/-->sc-reserve<!--/end_if/-->">
                            <div class="c-info">
                                <p class="c-name"><!--/down_coupon_list@name/--></p>
                                <p class="c-price">
                                    <span>
                                    <!--/if_down_coupon_list@coupon_type(FREE)/-->
                                        <!--/if_not_down_coupon_list@discount_price/-->무료배송<!--/end_if/-->
                                    <!--/end_if/-->
                                    <!--/if_down_coupon_list@coupon_type(DISCOUNT)/-->
                                        <!--/if_down_coupon_list@discount_price/--><!--/number/down_coupon_list@discount_price/-->원<!--/end_if/-->
                                        <!--/if_down_coupon_list@discount_rate/--><!--/down_coupon_list@discount_rate/-->%<!--/end_if/-->
                                        할인
                                    <!--/end_if/-->
                                    <!--/if_down_coupon_list@coupon_type(RESERVE)/-->
                                        <!--/if_down_coupon_list@reserve_price/--><!--/number/down_coupon_list@reserve_price/-->원<!--/end_if/-->
                                        <!--/if_down_coupon_list@reserve_rate/--><!--/down_coupon_list@reserve_rate/-->%<!--/end_if/-->
                                        적립
                                    <!--/end_if/--> 
                                    </span>
                                </p>
                                <p class="c-txt">
                                    <!--/if_down_coupon_list@explain/--><p class="c-txt"><!--/down_coupon_list@explain/--></p><!--/end_if/-->
                                </p>
                            </div>
                            <div class="btn-down <!--/if_down_coupon_list@is_auto_coupon/-->btn-auto<!--/end_if/-->">
                                <!--/if_down_coupon_list@link_down/-->
                                    <span><a href="<!--/down_coupon_list@link_down/-->">다운로드</a></span>
                                <!--/end_if/-->
                                <!--/if_down_coupon_list@is_auto_coupon/-->
                                    <span>자동발급</span>
                                <!--/end_if/-->
                            </div>
                        </li>
                        <!--/end_if/-->
                    <!--/end_loop/-->
                </ul>
            </section>
            <!--/end_if/-->
            <!-- 스마트 쿠폰 목록-->

            <div class="shopdetailItem">
                <div class="shopdetailItemPopup hc_blind">
                    <a href="<!--/link_product_detail/-->">상세정보 새창 열기</a>
                    <p class="shopdetailItemZoom">상세 정보를 확대해 보실 수 있습니다.</p>
                </div>
                
                <!-- snap review script start contact mail : support@snapvi.co.kr -->
                <span name = "snapreview_upper" class="snap_widget" id="1"></span>
                <!-- snap review end -->

                <div class="shopdetailImage">
                    <!--/mobile_detail/-->
                </div>

                <!-- snapfit start -->
                <div id="sfsnapfit_main"></div>
                <!-- snapfit end -->

                <!--/if_related_product/-->
                <section id="related_product_tk" class="shopdetailRelation">
                    <h4>COMPLETE THE LOOK : 함께 코디하면 좋은 제품</h4>
                    <!--/form_related_product/-->
                    <ul class="hc_column3">
                        <!--/loop_related_product(3)/-->
                        <li>
                            <div class="hc_thumbnail">
                                <!--/related_product@checkbox/-->
                                <a href="<!--/related_product@link/-->"><img src="<!--/related_product@mobile_image/-->" alt=""/></a>
                            </div>
                            <ul class="hc_prd_element">
                                <li class="hc_prd_name"><!--/notag/related_product@name/--></li>
                                <!--/if_related_product@is_soldout/-->
                                    <li>(품절)</li>
                                <!--/else/-->
                                    <!--/if_related_product@price_replace/-->
                                        <li><!--/related_product@price_replace/--></li>
                                    <!--/else/-->
                                        <!--/if_related_product@price_discount/-->
                                            <li class="hc_normal_price"><!--/number/related_product@price_sell/-->원</li>
                                            <li class="hc_discount_price">
                                                <!--/if_related_product@discount_apply_type(mobile)/-->
                                                <!--/end_if/-->
                                                <!--/number/related_product@price_discount/-->원
                                            </li>
                                        <!--/else/-->
                                            <li class=""><!--/number/related_product@price_sell/-->원</li>
                                        <!--/end_if/-->
                                    <!--/end_if/-->

                                    <!--/if_related_product@reserve_price(+1)/-->
                                        <li class="hc_blind">
                                            <!--/if_related_product@used_mobile_reserve/-->
                                            <!--/end_if/-->
                                            <!--/number/related_product@reserve_price/-->원 적립
                                        </li>
                                    <!--/end_if/-->

                                    <!--/if_related_product@point_price(+1)/-->
                                        <li class="hc_blind"><!--/number/related_product@point_price/--><!--/related_product@point_unit/--> 적립</li>
                                    <!--/end_if/-->
									
									<li class="hc_related_quantity">
										<a href="<!--/related_product@link_quantity_down/-->" class="hc_btn_mini_black_down"></a>
										<!--/related_product@input_quantity(txt-input amount-input)/-->                                             
										<a href="<!--/related_product@link_quantity_up/-->" class="hc_btn_mini_black_up"></a>
									</li>
									
									<!--/if_related_product@option/-->
									<li class="hc_related_option">
										<!--/loop_related_product@option/-->
											<!--/if_related_product@option@title/-->
											<p style="display:none"><!--/related_product@option@title/--></p>
											<!--/end_if/-->
											
											<!--/if_related_product@option@select/-->
											<p><!--/related_product@option@select(options-select)/--></p>
											<!--/end_if/-->
										<!--/end_loop/-->
									</li>
							<!--/end_if/-->
                                <!--/end_if/-->
                                <li><!--/related_product@mobile_icons/--><!--/related_product@subs_icon/--><!--/related_product@promotion_icon_mobile/--></li>
                            </ul>
                        </li>
                        <!--/end_loop/-->
                    </ul>
                    <a href="<!--/link_related_basket/-->" class="btn_Black">선택상품 장바구니 담기</a>
                    <!--/end_form/-->
                </section>
                <!--/end_if/-->

                <!-- 추가 >> 스마트 관련 구매상품 -->
                <!--/if_purchased_product/-->
                <section id="purchased_product_tk" class="shopdetail_purchased">
                    <h4>비슷한 상품</h4>
                    <!--/form_purchased_product/-->
                    <ul class="hc_column3">
                        <!--/loop_purchased_product(3)/-->
                        <li>
                            <div class="hc_thumbnail">
                                <a href="<!--/purchased_product@link/-->"><img src="<!--/purchased_product@mobile_image/-->" alt=""/></a>
                            </div>
                            <ul class="hc_prd_element">
                                <li class="hc_prd_name"><!--/notag/purchased_product@name/--></li>
                                <!--/if_purchased_product@is_soldout/-->
                                    <li>(품절)</li>
                                <!--/else/-->
                                    <!--/if_purchased_product@price_replace/-->
                                        <li><!--/purchased_product@price_replace/--></li>
                                    <!--/else/-->
                                        <!--/if_purchased_product@price_discount/-->
                                            <li class="hc_normal_price"><!--/number/purchased_product@price_sell/-->원</li>
                                            <li class="hc_discount_price">
                                                <!--/if_purchased_product@discount_apply_type(mobile)/-->
                                                <!--/end_if/-->
                                                <!--/number/purchased_product@price_discount/-->원
                                            </li>
                                        <!--/else/-->
                                            <li class=""><!--/number/purchased_product@price_sell/-->원</li>
                                        <!--/end_if/-->
                                    <!--/end_if/-->

                                    <!--/if_purchased_product@reserve_price(+1)/-->
                                        <li class="hc_blind">
                                            <!--/if_purchased_product@used_mobile_reserve/-->
                                            <!--/end_if/-->
                                            <!--/number/purchased_product@reserve_price/-->원 적립
                                        </li>
                                    <!--/end_if/-->

                                    <!--/if_purchased_product@point_price(+1)/-->
                                        <li class="hc_blind"><!--/number/purchased_product@point_price/--><!--/purchased_product@point_unit/--> 적립</li>
                                    <!--/end_if/-->
                                <!--/end_if/-->
                                <li><!--/purchased_product@mobile_icons/--><!--/purchased_product@subs_icon/--><!--/purchased_product@promotion_icon_mobile/--></li>
                            </ul>
                        </li>
                        <!--/end_loop/-->
                    </ul>
                    <!--/end_form/-->
                </section>
                <!--/end_if/-->

                <!-- 추가 >> 포토갤러리 -->
                <section>
                    <!--/loop_photo_gallery/-->
                    <div><!-- 포토 갤러리 > 이미지 --><!--/photo_gallery@image/--></div>
                    <!--/end_loop/-->
                </section>

                <!-- 추가 >> 프로모션 상품 -->
                <!--/if_promotion_product/-->
                <section id="promotion_product_tk" class="shopdetail_purchased">
                    <h4>세트 구성 상품 </h4>
                    <!--/form_promotion_product/-->
                    <ul class="hc_column3">
                        <!--/loop_promotion_product(3)/-->
                        <li>
                            <div class="hc_thumbnail">
                                <a href="<!--/promotion_product@link/-->"><img src="<!--/promotion_product@mobile_image/-->" alt=""/></a>
                            </div>
                            <ul class="hc_prd_element">
                                <li class="hc_prd_name"><!--/notag/promotion_product@name/--></li>
                                <!--/if_promotion_product@is_soldout/-->
                                    <li>(품절)</li>
                                <!--/else/-->
                                    <!--/if_promotion_product@price_replace/-->
                                        <li><!--/promotion_product@price_replace/--></li>
                                    <!--/else/-->
                                        <!--/if_promotion_product@price_discount/-->
                                            <li class="hc_normal_price"><!--/number/promotion_product@price_sell/-->원</li>
                                            <li class="hc_discount_price">
                                                <!--/if_promotion_product@discount_apply_type(mobile)/-->
                                                <!--/end_if/-->
                                                <!--/number/promotion_product@price_discount/-->원
                                            </li>
                                        <!--/else/-->
                                            <li class=""><!--/number/promotion_product@price_sell/-->원</li>
                                        <!--/end_if/-->
                                    <!--/end_if/-->

                                    <!--/if_promotion_product@reserve_price(+1)/-->
                                        <li class="hc_blind">
                                            <!--/if_promotion_product@used_mobile_reserve/-->
                                            <!--/end_if/-->
                                            <!--/number/promotion_product@reserve_price/-->원 적립
                                        </li>
                                    <!--/end_if/-->

                                    <!--/if_promotion_product@point_price(+1)/-->
                                        <li class="hc_blind"><!--/number/promotion_product@point_price/--><!--/promotion_product@point_unit/--> 적립</li>
                                    <!--/end_if/-->
                                <!--/end_if/-->
                                <li><!--/promotion_product@mobile_icons/--><!--/promotion_product@subs_icon/--><!--/promotion_product@promotion_icon_mobile/--></li>
                            </ul>
                        </li>
                        <!--/end_loop/-->
                    </ul>
                    <!--/end_form/-->
                </section>
                <!--/end_if/-->

                <!-- 최근본 상품 -->
                <section>
                    <!--/block_view_product/-->
                        <!--/loop_view_product/-->
                        <ul>
                            <li>
                                <a href="<!--/view_product@link/-->">
                                    <!--/if_view_product@image_s/-->
                                        <img src="<!--/view_product@image_s/-->" alt="" />
                                    <!--/else/-->
                                        <!--/view_product@mobile_image/-->
                                    <!--/end_if/-->
                                </a>
                            </li>
                            <li>
                                <!--/if_view_product@name/-->
                                    <!--/view_product@name/-->
                                <!--/else/-->
                                    <!--/view_product@mobile_name/-->
                                <!--/end_if/-->
                            </li>
                        </ul>
                        <!--/end_loop/-->
                    <!--/end_block/-->     
                </section>

                <div class="ncount shopdetailBoard">
                    <ul>
                        <li>
                            <!--/if_link_review_more/-->
                            <a href="<!--/link_review_more/-->">상품리뷰<!--/if_review_total_count(+1)/-->(<!--/number/review_total_count/-->)<!--/end_if/--></a>
                            <!--/end_if/-->
                        </li>
                        <li>
                            <!--/if_link_qna_board_more/-->
                            <a href="<!--/link_qna_board_more/-->">Q&amp;A<!--/if_qna_board_total_count(+1)/-->(<!--/number/qna_board_total_count/-->)<!--/end_if/--></a>
                            <!--/end_if/-->
                        </li>
                        <li>
                            <!--/if_link_review_board_more/-->
                            <a href="#">리뷰보드<button type="button" class="sf_review_rd_bRtCn"><span class="d_count snap_review_count"  snap_item_id="<!--/special_product@uid/-->">(<span class="snap_review_count noset">0</span>)</span></button></a>
                            <!--/end_if/-->
                        </li>
                    </ul>
                </div>
                
                <!-- 스냅리뷰 메인위젯 시작 -->
                <style>
                    iframe#review_widget3_0 {
                        display: none;
                        }
                    
                 </style>
                    
                 <!-- snap review script start contact mail : support@snapvi.co.kr -->
                 <div name="snapreview_main" class="snap_widget" id="3"></div>
                 <!-- snap review end -->
                 
                <!-- 스냅리뷰 메인위젯 끝 -->
                
                <!--/if_product_info_list/-->
                <section class="shopdetailNotify">
                    <!--/loop_product_info_list/-->
                    <h3 class="btn_toggle">
                        <!--/if_product_info_list@product_name/-->
                            상품 고시 정보 - <!--/notag/product_info_list@product_name/-->
                        <!--/else/-->
                            상품 고시 정보
                        <!--/end_if/-->
                    </h3>
                    <div class="shopdetailNotifyInfo" style="display:none;">
                        <dl>
                        <!--/loop_product_info_list@product_info/-->
                            <dt>ㆍ<!--/product_info_list@product_info@title/--></dt>
                            <dd><!--/product_info_list@product_info@content/--></dd>
                        <!--/end_loop/-->
                        </dl>
                    </div>
                    <!--/end_loop/-->
                </section>
                <!--/end_if/-->

                <!--/if_product_common_info/-->
                <section class="shopdetailCommoninfo">
                    <h3 class="btn_toggle">교환/반품/환불/취소</h3>
                    <div style="display:none;">
                        <div class="detail-common-info">
                            <!--/loop_product_common_info/-->
                                <!--/if_product_common_info@provider/-->
                                <dl>
                                    <dt>공급관련 정보</dt>
                                    <dd><!--/product_common_info@provider/--></dd>
                                </dl>
                                <!--/end_if/-->

                                <!--/if_product_common_info@revocation/-->
                                <dl>
                                    <dt>청약철회 및 계약해제</dt>
                                    <dd><!--/product_common_info@revocation/--></dd>
                                </dl>
                                <!--/end_if/-->

                                <!--/if_product_common_info@refund/-->  
                                <dl>
                                    <dt>교환/반품/보증 조건과 절차</dt>
                                    <dd><!--/product_common_info@refund/--></dd>
                                </dl>
                                <!--/end_if/-->

                                <!--/if_product_common_info@conflict/-->
                                <dl>
                                    <dt>분쟁처리 사항</dt>
                                    <dd><!--/product_common_info@conflict/--></dd>
                                </dl>
                                <!--/end_if/-->

                                <!--/if_product_common_info@business/-->  
                                <dl>
                                    <dt>거래약관</dt>
                                    <dd><!--/product_common_info@business/--></dd>
                                    </dl>
                                <!--/end_if/-->  

                                <!--/if_product_common_info@image/-->
                                <div>
                                    <a href="<!--/product_common_info@link_image/-->" target="<!--/product_common_info@target_image/-->">
                                        <img src="<!--/product_common_info@image/-->" align="absmiddle" border="0" />
                                    </a>
                                </div>
                                <!--/end_if/-->

                                <!--/if_product_common_info@html/-->
                                        <div>
                                    <!--/product_common_info@html/-->
                                        </div>
                                <!--/end_if/-->   
                            <!--/end_loop/-->   
                        </div>
                    </div>
                </section>
                <!--/end_if/-->

                <!--/if_product_common_info_product_html/-->
                <section class="shopdetailCommoninfo">
                    <h3 class="btn_toggle">교환/반품/환불/취소 <span class="fa fa-caret-down"></span></h3>
                    <div style="display:none;">
                        <div class="detail-common-info">
                    <!--/product_common_info_product_html/-->
                        </div>
                    </div>
                </section>
                <!--/end_if/-->

                <!--/if_mobile_shop_policy/-->
                <section class="shopdetailRelation">
                    <h3 class="btn_toggle">교환/반품/환불/취소 <span class="fa fa-caret-down"></span></h3>
                    <div style="display:none;">
                        <!--/mobile_shop_policy/-->
                    </div>
                </section>
                <!--/end_if/-->
            </div>
        </main>
    </div>
</div>

<!--/include_footer(1)/-->

<!-- 해당 스크립트 삭제에 유의 부탁드리며, 스냅 솔루션의 스크립트입니다. -->
<!---- snappush  start contact mail: support@snapvi.co.kr --->
<div id='spm_page_type' style='display:none'>sq_detail_page</div>
<script async type="text/javascript" src="//cdn.snapfit.co.kr/js/spm_f_common.js" charset="utf-8"></script>
<div id="spm_banner_main"></div>
<!---- snappush  end -->

<!-- 해당 스크립트 삭제에 유의 부탁드리며, 스냅 솔루션의 스크립트입니다. -->
<!---- snapq start contact mail: support@snapvi.co.kr --->
<div id='sf_isdetail_page' style='display:none'>1</div>
<script async type="text/javascript" src="//snapfit.co.kr/js/sf_init_snapq_detail_m_frame.js" defer='true' charset="utf-8"></script>
<!---- snapq end --->

<!-- snapfit start -->
<script async type="text/javascript" src="//snapfit.co.kr/js/sf_init_snapfit_detail.js" defer='true' charset="utf-8"></script>
<!-- snapfit end  -->

<!-- snap review script start contact mail : support@snapvi.co.kr -->
<script>
function onloadsnapscript () { var snapInstance = new snapSolution("pigment2"); snapInstance.loadScript('review_dependent'); }
</script>
<script async type='text/javascript' src='//sfre-srcs-service.snapfit.co.kr/js/snap_combine_script.js' defer='true' charset='utf-8'
Onload = 'onloadsnapscript()'></script>
<!-- snap review end -->