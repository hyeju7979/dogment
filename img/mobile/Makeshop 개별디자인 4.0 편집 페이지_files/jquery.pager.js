//페이징처리
jQuery.pager = {
    total_page : null,
    direct_previous : null,
    direct_next : null,
    direct_first : null,
    direct_last : null,
    start : null,
    last : null,
    direct_limit : 10,
    limit : 10,

    arrow_array : {
        first : "◀◀",
        previous : "◀",
        next  : "▶",
        last  : "▶▶"
    },

    /*
     * get : function(option)
     * 파라미터 - JSON 형식 {total : 전체 rows수, page : 현재 페이지, limit : 페이지당 rows수, url : 페이지 url, params : 파라미터값(json 형식), arrow_array{first:첫페이지, last:마지막페이지, previous:direct 이전페이지, next: direct 다음페이지}
     * return 값 - 페이징 된 html 값
    */
    get : function(option) {
        var html = '';
        var data = '';
        var page, total, limit;

        if (option.page && parseInt(option.page) > 0) {
            page = option.page;
        } else {
            page = 1;
        }

        if (option.total && parseInt(option.total) > 0) {
            total = option.total;
        } else {
            total = 1;
        }

        if (option.limit && parseInt(option.limit) > 0) {
            limit = option.limit;
        } else {
            limit = this.limit;
        }

        if (option.url == undefined) {
            url = location.href;
        } else {
            url = option.url;
        }

        if (option.params) {
            parameter = option.params;

            for (i in parameter) {
                if (typeof(parameter[i]) == 'string') {
                    data += i + "=" + parameter[i] + "&";
                } else if (parameter[i].constructor == Array) {
                    for (j in parameter[i]) {
                         if (parameter[i][j].constructor != Function) {
                            data += i + "[" + j + "]=" + parameter[i][j] + "&";
                         }
                    }
                }
            }
        }

        if (option.arrow_array) {
            if (option.arrow_array.first) {
                this.arrow_array.first = option.arrow_array.first;
            }
            if (option.arrow_array.previous) {
                this.arrow_array.previous = option.arrow_array.previous;
            }
            if (option.arrow_array.next) {
                this.arrow_array.next = option.arrow_array.next;
            }
            if (option.arrow_array.last) {
                this.arrow_array.last = option.arrow_array.last;
            }
        }

        this.total_page = Math.ceil(total / limit);
        this.direct_previous = parseInt(Math.floor((page-1) / this.direct_limit) *  this.direct_limit);
        this.direct_next = parseInt((Math.ceil((page) /  this.direct_limit) *  this.direct_limit) + 1);
        this.start = this.direct_previous + 1;
        this.last =  this.direct_previous +  this.direct_limit;
        if (this.last > this.total_page) {
            this.last = this.total_page;
        }


        url += "?" + data;
        if (page > this.direct_limit) {
            html += "<a href=\"" + url + "page=" + this.direct_previous + "\" page=\"" + this.direct_previous + "\">" + this.arrow_array.previous + "</a>\n";
        }

        for (var i = this.start; i <= this.last; i++) {
            if (i != page) {
                html += "<a href=\"" + url + "page=" + i + "\" page=\"" + i + "\">[" + i + "]</a>\n";
            } else {
                html += "<span class=\"current\" page=\"" + i + "\">[" + i + "]</span>\n";
            }
        }

        if ((this.start + this.direct_limit) < this.total_page) {
            html += "<a href=\"" + url + "page=" + this.direct_next +  "\" page=\"" + this.direct_next + "\">" + this.arrow_array.next + "</a>\n";
        }

        if (this.total_page > this.direct_limit) {
            html =  "<a href=\"" + url + "page=1\" page=\"1\">" + this.arrow_array.first + "</a>\n" + html + "<a href=\"" + url + "page=" + this.total_page + "\" page=\"" + this.total_page + "\">" + this.arrow_array.last + "</a>\n" ;
        }

        return html;
    }
};
