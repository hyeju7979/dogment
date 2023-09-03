function HttpRemove(input) {
    this.input = input;
    this.items = [];
    this.reg_exp = /(http:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w_\.-]*)*\/?/g;
    this.match_urls = [];
}

HttpRemove.prototype.init = function () {
    this.event();
}

HttpRemove.prototype.matchUrl = function () {
    var result = [];
    var contents = this.input.get_content();
    var match = (typeof contents === 'object') ? this.matchContents(contents) : contents.match(this.reg_exp);
    if (match !== null) {
        result = match.reduce(function (acc, curr) {
            acc.indexOf(curr) > -1 ? acc : acc.push(curr);
            return acc;
        }, []);
    }
    return result;
}

HttpRemove.prototype.matchContents = function (contents) {
    var result = [];
    var content_matchs = contents.map(function (content) {
        return content.value.match(this.reg_exp);
    }.bind(this));
    content_matchs.forEach(function (contents) {
        if (contents !== null) {
            contents.forEach(function (content) {
                result.push(content);
            });
        }
    });
    return result;
}

HttpRemove.prototype.blockShow = function () {
    this.match_urls = this.matchUrl();
    this.createItem();
    document.querySelector('#http-remove-block').style.display = 'block';
    if (document.querySelector('.http-remove-table').clientHeight >= 470) {
        document.querySelector('.http-remove-table').style.height = '470px';
    } else {
        document.querySelector('.http-remove-table').style.height = 'auto';
    }
}

HttpRemove.prototype.blockHide = function () {
    document.querySelector('#http-remove-block').style.display = 'none';
    this.resetItem();
}

HttpRemove.prototype.resetItem = function () {
    for (var i = 0; i < this.match_urls.length; i++) {
        this.items[i] = false;
    }
}

HttpRemove.prototype.event = function () {
    document.querySelector('#http-remove-block table').addEventListener('click', function (e) {
        if (e.target.name === 'http_remove[]') {
            this.items[e.target.value] = e.target.checked;
        } else if (e.target.name === 'http_remove_all_check') {
            this.httpRemoveAllCheck(e.target);
        }
    }.bind(this));

    document.querySelector('#http-remove-block .http-remove-btn').addEventListener('click', function (e) {
        if (this.isChecked()) {
            this.replace();
            document.querySelector('[name=http_remove_all_check]').checked = false;
            if (typeof this.input.disable_design_mode === 'function') {
                this.input.disable_design_mode();
            }
        }
        this.blockHide();
    }.bind(this));

    if (document.querySelector('#http-remove-block .cont-layer-close')) {
        document.querySelector('#http-remove-block .cont-layer-close').addEventListener('click', function (e) {
            e.preventDefault();
            this.blockHide();
        }.bind(this));
    }
}

HttpRemove.prototype.isChecked = function () {
    var result = false;
    this.items.forEach(function (item) {
        if (item) {
            result = true;
        }
    });
    return result;
}

HttpRemove.prototype.httpRemoveAllCheck = function (target) {
    document.querySelectorAll("[name='http_remove[]']").forEach(function (node, idx) {
        node.checked = target.checked;
        this.items[idx] = target.checked;
    }.bind(this));
    if (!target.checked) {
        this.resetItem();
    }
}

HttpRemove.prototype.createItem = function () {
    if (this.match_urls.length > 0) {
        var item = this.match_urls.map(function (url, idx) {
            return " \
                <tr> \
                    <td style='text-align:center; padding-left: 0;'><input type='checkbox' name='http_remove[]' value='"+ idx + "'></td> \
                    <td>"+ url + "</td> \
                    <td>"+ url.replace('http://', '//') + "</td> \
                </tr>";
        });
        document.querySelector('.http-remove-table tbody').innerHTML = item.join('');
    } else {
        document.querySelector('.http-remove-table tbody').innerHTML = " \
            <tr> \
                <td colspan='3' style='height:30px; padding-left: 10px; border:1px solid #dadada; text-align:center'>변경할 링크주소가 없습니다.</td> \
            </tr>";
    }
}

HttpRemove.prototype.replace = function () {
    var contents = this.input.get_content();
    if (typeof contents === 'object') {
        if (contents !== null) {
            contents.forEach(function (content) {
                this.replaceFor(content.value, content.name);
            }.bind(this));
        }
    } else {
        this.replaceFor(contents);
    }
}

HttpRemove.prototype.replaceFor = function (value, name) {
    this.items.forEach(function (item, i) {
        if (item && this.match_urls[i] != undefined) {
            value = value.replaceAll(this.match_urls[i], this.match_urls[i].replace('http://', '//'));
        }
    }.bind(this));
    if (name) {
        this.input.set_content(value, name);
    } else {
        this.input.set_content(value);
    }
}

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (str, newStr) {
        // If a regex pattern
        if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
            return this.replace(str, newStr);
        }
        // If a string
        return this.replace(new RegExp(str, 'g'), newStr);
    };
}
