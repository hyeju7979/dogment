$(document).ready(function(){    
    HCStoreInfo.init();
});
var HCStoreInfo = (function() {
    var nameStyle = 'font-size:12px;padding-left:5px;';
    var setting = {        
        store : [
                    {
                        id: '1',
                        type: 'department',
                        initShow : true,
                        name: '현대백화점 디큐브점 피그먼트',
                        address: '서울특별시 구로구 경인로 662 현대백화점 디큐브점 지하1층',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
                        nameMarkup:'<span style="'+nameStyle+'">현대백화점 디큐브점 피그먼트</span>',
                        lng: 126.889592,
                        lat: 37.5089852,
                    },
                    {
                        id: '2',
                        type: 'department',
                        initShow : true,
                        name: '중동 현대 피그먼트',
                        address: '경기도 부천시 길주로 180 (중동, 현대백화점부천중동점) 유플렉스 2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
                        nameMarkup:'<span style="'+nameStyle+'">중동 현대 피그먼트</span>',
                        lng: 126.762559,
                        lat: 37.5042197,
                    },
                    {
                        id: '3',
                        type: 'department',
                        initShow : true,
                        name: '의정부 신세계 더컬러웨이',
                        address: '경기도 의정부시 의정부동 168-54 신세계백화점 의정부점 5층 더컬러웨이',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
                        nameMarkup:'<span style="'+nameStyle+'">의정부 신세계 더컬러웨이</span>',
                        lng: 127.045855,
                        lat: 37.7379692,
                    },
                    {
						id: '4',
                        type: 'department',
                        initShow : true,
                        name: '광주 신세계 더컬러웨이',
                        address: '광주광역시 서구 죽봉대로 61 광주신세계 이마트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">광주 신세계 더컬러웨이</span>',
                        lng:126.882025, 
                        lat:35.1588162
					},
                    {
						id: '5',
                        type: 'department',
                        initShow : true,
                        name: '천안 신세계 더컬러웨이',
                        address: '천안시 동남구 만남로 43 신세계백화점 천안아산점 B관 1층 더컬러웨이',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">천안 신세계 더컬러웨이</span>',
                        lng:127.156704, 
                        lat:36.8202718
					},
                    {
						id: '6',
                        type: 'department',
                        initShow : true,
                        name: '구리 롯데백화점 피그먼트',
                        address: '경기도 구리시 인창동677 롯데백화점 구리점 2층',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">구리 롯데백화점 피그먼트</span>',
                        lng:127.143776, 
                        lat:37.6027185
					},
                    {
						id: '7',
                        type: 'department',
                        initShow : true,
                        name: '수원 롯데백화점 피그먼트',
                        address: '경기도 수원시 세화로134 롯데몰 2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">수원 롯데백화점 피그먼트</span>',
                        lng:126.997099, 
                        lat:37.2641504
					},
                    {
						id: '8',
                        type: 'department',
                        initShow : true,
                        name: '청량리 롯데 피그먼트',
                        address: '서울특별시 동대문구 전농동 591-53 롯데청량리백화점 2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup:'<span style="'+nameStyle+'">청량리 롯데 피그먼트</span>',
						lng: 127.046486,
						lat: 37.5806135,
					},
                    {
						id: '100',
                        type: 'mall',
                        initShow : true,
                        name: 'PFS:MOF 플래그쉽스페이스',
                        address: '서울특별시  성동구 성수동 1가 660-8번지',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">PFS:MOF 플래그쉽스페이스</span>',
                        lng:127.045084, 
                        lat:37.5459078
					},
                    {
						id: '101',
                        type: 'mall',
                        initShow : true,
                        name: 'LF 스퀘어 광양 피그먼트',
                        address: '전남 광양시 광양읍 순광로 466, LF스퀘어 2층 (선샤인동)',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">LF 스퀘어 광양 피그먼트</span>',
						lng:127.566910, 
                        lat:34.9625747
					},
                    {
						id: '102',
                        type: 'mall',
                        initShow : true,
                        name: 'LF 스퀘어 양주 피그먼트',
                        address: '경기 양주시 평화로 1593, 2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">LF 스퀘어 양주 피그먼트</span>',
                        lng:127.052397, 
                        lat:37.8313328
					},
                    {
						id: '103',
                        type: 'mall',
                        initShow : true,
                        name: '경주 피그먼트 (계림로)',
                        address: '경상북도 경주시 노동동 계림로 93-2',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">경주 피그먼트 (계림로)</span>',
                        lng:129.213393, 
                        lat:35.8428326
					},
                    {
						id: '104',
                        type: 'mall',
                        initShow : true,
                        name: '광교 앨리웨이 피그먼트',
                        address: '경기도 수원시 영통구 광교호수공원로 80 (원천동, 광교아이파크) 121,122호 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">광교 앨리웨이 피그먼트</span>',
                        lng:127.061185, 
                        lat:37.2740017
					},
                    {
						id: '105',
                        type: 'mall',
                        initShow : true,
                        name: '광주 롯데 피그먼트 (수완점)',
                        address: '광주광역시 광산구 장신로 98 (장덕동, 롯데마트) 3층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">광주 롯데 피그먼트 (수완점)</span>',
                        lng:126.820987, 
                        lat:35.1902158
					},
                    {
						id: '106',
                        type: 'mall',
                        initShow : true,
                        name: '광주 황금동 피그먼트',
                        address: '광주광역시 동구 중앙로 160번길 11 (황금동)',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">광주 황금동 피그먼트</span>',
                        lng:126.914535, 
                        lat:35.1477843
					},
                    {
						id: '107',
                        type: 'mall',
                        initShow : true,
                        name: '구미 피그먼트 (원평동)',
                        address: '경상북도 구미시 문화로 26 (원평동 145-2)',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">구미 피그먼트 (원평동)</span>',
                        lng:128.333999, 
                        lat:36.1287843
					},
                    {
						id: '108',
                        type: 'mall',
                        initShow : false,
                        name: '구미 홈플러스 피그먼트',
                        address: '경상북도 구미시 구미대로 174 (광평동, 홈플러스 구미광평점) 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">구미 홈플러스 피그먼트</span>',
                        lng:128.363775, 
                        lat:36.1027760
					},
                    {
						id: '109',
                        type: 'mall',
                        initShow : false,
                        name: '김포 이마트 피그먼트 (한강점)',
                        address: '경기도 김포시 김포한강7로 71 (구래동, 이마트 김포한강점) 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">김포 이마트 피그먼트 (한강점)</span>',
                        lng:126.628205, 
                        lat:37.6444162
					},
                    {
						id: '110',
                        type: 'mall',
                        initShow : false,
                        name: '김해 홈플러스 피그먼트',
                        address: '경상남도 김해시 김해대로 2078 홈플러스 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">김해 홈플러스 피그먼트</span>',
                        lng:128.870182, 
                        lat:35.2418443
					},
                    {
						id: '111',
                        type: 'mall',
                        initShow : false,
                        name: '덕천 피그먼트',
                        address: '부산광역시 북구 금곡대로14 덕천역 지하상가 B-8 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">덕천 피그먼트</span>',
                        lng:129.005544, 
                        lat:35.2100838
					},
                    {
						id: '112',
                        type: 'mall',
                        initShow : false,
                        name: '동부산 롯데 피그먼트',
                        address: '부산광역시 기장군 기장읍 당사리 64 롯데프리미엄아울렛동부산 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">동부산 롯데 피그먼트</span>',
                        lng:129.212312, 
                        lat:35.1925159
					},
                    {
						id: '113',
                        type: 'mall',
                        initShow : false,
                        name: '대전 유성 홈플러스 피그먼트',
                        address: '대전 유성구 한밭대로 502 홈플러스 3층',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">대전 유성 홈플러스 피그먼트</span>',
                        lng:127.354446, 
                        lat:36.3585314
					},
                    {
						id: '114',
                        type: 'mall',
                        initShow : false,
                        name: '대구 피그먼트(공평동)',
                        address: '대구 중구 동성로3길 64 (공평동)',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">대구 피그먼트(공평동)</span>',
                        lng:128.598267, 
                        lat:35.8681656
					},
                    {
						id: '115',
                        type: 'mall',
                        initShow : false,
                        name: '대구 롯데 피그먼트 (율하점)',
                        address: '대구광역시 동구 안심로 80 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">대구 롯데 피그먼트 (율하점)</span>',
                        lng:128.693396, 
                        lat:35.8684852
					},
                    {
						id: '116',
                        type: 'mall',
                        initShow : false,
                        name: '동탄 피그먼트(레이크꼬모)',
                        address: '경기도 화성시 동탄대로 181 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png'
                        ],
						nameMarkup: '<span style="'+nameStyle+'">동탄 피그먼트(레이크꼬모)</span>',
                        lng:127.104061, 
                        lat:37.1720643
					},
                    {
						id: '117',
                        type: 'mall',
                        initShow : false,
                        name: '마산 피그먼트점 (합성동)',
                        address: '경상남도 창원시 마산회원구 3.15대로 지하758(합성동) 대현프리몰 H-3',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">마산 피그먼트점 (합성동)</span>',
                        lng:128.582844, 
                        lat:35.2387943
					},
                    {
						id: '118',
                        type: 'mall',
                        initShow : false,
                        name: '만촌 이마트 피그먼트',
                        address: '대구광역시 수성구 동원로 136 이마트만촌점 2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">만촌 이마트 피그먼트</span>',
                        lng:128.637187, 
                        lat:35.8711112
					},
                    {
						id: '119',
                        type: 'mall',
                        initShow : false,
                        name: '반포 엔터식스 피그먼트',
                        address: '서울특별시 서초구 신반포로 188 지하엔터식스몰',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">반포 엔터식스 피그먼트</span>',
                        lng:127.004821, 
                        lat:37.5049926
					},
                    {
						id: '120',
                        type: 'mall',
                        initShow : false,
                        name: '부산 서면점 피그먼트',
                        address: '부산광역시 부산진구 중앙대로 786 서면몰 2열37호, 3열37호',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">부산 서면점 피그먼트</span>',
                        lng:129.063263, 
                        lat:35.1617587
					},
                    {
						id: '121',
                        type: 'mall',
                        initShow : false,
                        name: '부산아시아드 홈플러스',
                        address: '부산광역시 연제구 종합운동장로 7 홈플러스 1층 피그먼트 (거제동, 부산아시아드주경기장노외주차장)',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">부산아시아드 홈플러스</span>',
                        lng:129.062122, 
                        lat:35.1909034
					},
                    {
						id: '122',
                        type: 'mall',
                        initShow : false,
                        name: '부천상동 홈플러스 더컬러웨이',
                        address: '경기도 부천시 원미구 상동 540-1 상동홈플러스 1층 더컬러웨이',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">부천상동 홈플러스 더컬러웨이</span>',
                        lng :126.755016, 
                        lat :37.5043033
					},
                    {
						id: '123',
                        type: 'mall',
                        initShow : false,
                        name: '부평 피그먼트',
                        address: '인천광역시 부평 대아지하상가 82,83호 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">부평 피그먼트</span>',                        
                        lng:126.722062, 
                        lat:37.4977067
					},
                    {
						id: '124',
                        type: 'mall',
                        initShow : false,
                        name: '성서 홈플러스 피그먼트',
                        address: '대구광역시 달서구 달구벌대로 1467 (용산동) 홈플러스 성서점 지하2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">성서 홈플러스 피그먼트</span>',
                        lng:128.527407,
                        lat:35.8494688
					},
                    {
						id: '125',
                        type: 'mall',
                        initShow : false,
                        name: '세종 홈플러스 피그먼트',
                        address: '세종특별자치시 어진동 절재로154 홈플러스 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">세종 홈플러스 피그먼트</span>',
                        lng:127.258853, 
                        lat:36.5073139
					},                   
                    {
						id: '126',
                        type: 'mall',
                        initShow : false,
                        name: '수원 애경 피그먼트',
                        address: '경기도 수원시 팔달구 덕영대로 924 수원AK & 3층',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">수원 애경 피그먼트</span>',
                        lng:126.999872, 
                        lat:37.2661507
					},
                    {
						id: '127',
                        type: 'mall',
                        initShow : false,
                        name: '아산 더컬러웨이',
                        address: '충청남도 아산시 번영로 225 아산시외버스터미널 1층 인더그레이',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">아산 더컬러웨이</span>',
                        lng:127.015812, 
                        lat:36.7847245
					},
                    {
						id: '128',
                        type: 'mall',
                        initShow : false,
                        name: '양산 이마트 피그먼트',
                        address: '경상남도 양산시 양산역6길 12 (중부동, 신세계이마트양산점) 2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">양산 이마트 피그먼트</span>',
                        lng:129.026376, 
                        lat:35.3368709
					},
                    {
						id: '129',
                        type: 'mall',
                        initShow : false,
                        name: '안성 스타필드 피그먼트',
                        address: '경기도 안성시 공도읍 서동대로 3930-39(스타필드 안성점 1층)',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">안성 스타필드 피그먼트</span>',
                        lng:127.147307, 
                        lat:36.9943473
					},
                    {
						id: '130',
                        type: 'mall',
                        initShow : false,
                        name: '안동 피그먼트점',
                        address: '경상북도 안동시 서부동 149-24번지',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">안동 피그먼트점</span>',
                        lng:128.729236, 
                        lat:36.5652953
					},
                    {
						id: '131',
                        type: 'mall',
                        initShow : false,
                        name: '영등포 타임스퀘어 피그먼트점',
                        address: '서울특별시 영등포구 영등포동4가 영중로15 타임스퀘어 B1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">영등포 타임스퀘어 피그먼트점</span>',
                        lng:126.903324, 
                        lat:37.5170614
					},
                    {
						id: '132',
                        type: 'mall',
                        initShow : false,
                        name: '울산 홈플러스 피그먼트',
                        address: '울산광역시 중구 번영로 475 2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">영등포 타임스퀘어 피그먼트점</span>',
                        lng:129.334750, 
                        lat:35.5645052
					},
                    {
						id: '133',
                        type: 'mall',
                        initShow : false,
                        name: '의정부 홈플러스 피그먼트',
                        address: '경기도 의정부시 청사로38 홈플러스 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">의정부 홈플러스 피그먼트</span>',
                        lng:127.071020, 
                        lat:37.7521202
					},
                    {
						id: '134',
                        type: 'mall',
                        initShow : false,
                        name: '이마트 월계점 피그먼트',
                        address: '서울특별시 노원구 마들로3길 15 이마트 월계점 2F 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">이마트 월계점 피그먼트</span>',
                        lng:127.061841, 
                        lat:37.6273227
					},
                    {
						id: '135',
                        type: 'mall',
                        initShow : false,
                        name: '인천 간석 홈플러스 더컬러웨이',
                        address: '인천광역시 남동구 간석동 616-3 홈플러스 간석점 1층 더컬러웨이',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">인천 간석 홈플러스 더컬러웨이</span>',
                        lng:126.689090, 
                        lat:37.4695670
					},
                    {
						id: '136',
                        type: 'mall',
                        initShow : false,
                        name: '인천 스퀘어원 피그먼트',
                        address: '인천광역시 연수구 동춘동 926 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">인천 스퀘어원 피그먼트</span>',
                        lng:126.683605, 
                        lat:37.4059774
					},
                    {
						id: '137',
                        type: 'mall',
                        initShow : false,
                        name: '인천 홈플러스 피그먼트',
                        address: '인천광역시 미추홀구 소성로 6 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup: '<span style="'+nameStyle+'">인천 홈플러스 피그먼트</span>',
                        lng:126.650758, 
                        lat:37.4476643
					},
                    {
						id: '138',
                        type: 'mall',
                        initShow : false,
                        name: '창원 롯데영플라자 피그먼트',
                        address: '경상남도 창원시 성산구 상남로 121 (롯데백화점 영플라자) 지하1층',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup:'<span style="'+nameStyle+'">창원 롯데영플라자 피그먼트</span>',
						lng: 128.683507,
						lat: 35.2249371,
					},
                    {
						id: '139',
                        type: 'mall',
                        initShow : false,
                        name: '천안 이마트 피그먼트',
                        address: '충청남도 천안시 서북구 충무로 187 (쌍용동, E 마트) 2층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup:'<span style="'+nameStyle+'">천안 이마트 피그먼트</span>',
						lng: 127.127333,
						lat: 36.7960758,
					},                    
                    {
						id: '140',
                        type: 'mall',
                        initShow : false,
                        name: '칠곡 홈플러스 피그먼트',
                        address: '대구광역시 북구 동천동 동암로 12길 8 홈플러스 3층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup:'<span style="'+nameStyle+'">칠곡 홈플러스 피그먼트</span>',
						lng: 128.555958,
						lat: 35.9448667,
					},
                    {
						id: '141',
                        type: 'mall',
                        initShow : false,
                        name: '포항 피그먼트',
                        address: '경상북도 포항시 북구 중앙상가길35 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup:'<span style="'+nameStyle+'">포항 피그먼트</span>',
						lng: 129.363974,
						lat: 36.0382745,
					},
                    {
						id: '142',
                        type: 'mall',
                        initShow : false,
                        name: '해운대 홈플러스 피그먼트',
                        address: '부산광역시 해운대구 해운대해변로 140 (우동, 해운대홈플러스) 1층 피그먼트',
                        tel: '· CALL. 02. 1234.5678',
                        businessHours : '· OPEN. 11:00 - 21:00 (일요일 휴무)',
                        shopPhotos : [
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                            'https://hncok-pigment.netlify.app/img/testslide.7e8c00b7.png',
                        ],
						nameMarkup:'<span style="'+nameStyle+'">해운대 홈플러스 피그먼트</span>',
						lng: 129.146413,
						lat: 35.1581877,
					}					
				]        
    
    }

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
            $('li[data-id]').not(":visible").filter(function(index){
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
            $('#hcDepartment').after(template.makeUlTemplate(department));
            $('#hcMall').after(template.makeUlTemplate(mall));
        },
        makeUlTemplate : function(data) {
            var ul = [];
            data.forEach(function(item,index,array) {
                var display = 'inline-block';
                var opacity = 1;
                if(index%4 == 0) ul.push('<ul>');
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
                        '<button type="button" class="togglePhoto" data-id="hcStoreWrap'+data.id+'">'+                    
                            '<img src="http://kcompony7.jpg3.kr/web/hncok/img/icon/icon_camera.svg" alt="매장사진" />'+
                        '</button>'+
                        '<button type="button" class="toggleMap" data-id="hcStoreWrap'+data.id+'">'+
                            '<img src="http://kcompony7.jpg3.kr/web/hncok/img/icon/icon_map.svg" alt="매장지도" />'+
                        '</button>'+
                    '</div>';
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
                document.querySelector('.' + target).scrollIntoView({ behavior: 'smooth' });
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