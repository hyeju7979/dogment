/**
 * ChildNode.append() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
 (function (elem) {
    // Check if element is a node
    var isNode = function (object) {
        // DOM, Level2
        if (typeof Node === 'function') {
            return object instanceof Node;
        }
        // Older browsers, check if it looks like a Node instance)
        return object &&
            typeof object === "object" &&
            object.nodeName &&
            object.nodeType >= 1 &&
            object.nodeType <= 12;
    };
    // Add append() method to prototype
    for (var i = 0; i < elem.length; i++) {
        if (!window[elem[i]] || 'append' in window[elem[i]].prototype) continue;
        window[elem[i]].prototype.append = function () {
            var argArr = Array.prototype.slice.call(arguments);
            var docFrag = document.createDocumentFragment();
    
            for (var n = 0; n < argArr.length; n++) {
                docFrag.appendChild(isNode(argArr[n]) ? argArr[n] : document.createTextNode(String(argArr[n])));
            }
    
            this.appendChild(docFrag);
        };
    }
})(['Element', 'CharacterData', 'DocumentType']);

if (self.document && !("insertAdjacentHTML" in document.createElementNS("http://www.w3.org/1999/xhtml", "_"))) {
    HTMLElement.prototype.insertAdjacentHTML = function(position, html) {
        "use strict";
        var ref = this
            , container = ref.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml", "_")
            , ref_parent = ref.parentNode
            , node, first_child, next_sibling;
        container.innerHTML = html;
        switch (position.toLowerCase()) {
            case "beforebegin":
                while ((node = container.firstChild)) {
                    ref_parent.insertBefore(node, ref);
                }
                break;
            case "afterbegin":
                first_child = ref.firstChild;
                while ((node = container.lastChild)) {
                    first_child = ref.insertBefore(node, first_child);
                }
                break;
            case "beforeend":
                while ((node = container.firstChild)) {
                    ref.appendChild(node);
                }
                break;
            case "afterend":
                next_sibling = ref.nextSibling;
                while ((node = container.lastChild)) {
                    next_sibling = ref_parent.insertBefore(node, next_sibling);
                }
                break;
        }
    };
}

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

(function () {
    var js = document.createElement('script');
    js.src = "/makeshop/newmanager/js/create_fuzzy_matcher.js";
    document.body.append(js);
})();

function DropDown(element) {
    this.element = element;
    this.dropdown_element;
    this.options = [];
    this.search_options = [];
    this.toggle = false;
    this.is_optgroup = false;
    this.index = -1;
    this.cursor_top = 0;
}

DropDown.prototype.init = function () {
    if (this.element.nodeName === "SELECT") {

        var add_class = "";
        if (this.element.disabled) {
            add_class = "dropdown-origin-disabled";
        }

        this.element.insertAdjacentHTML('afterend', '<div class="dropdown-content '+ add_class +'"></div>');
        this.dropdown_element = this.element.nextElementSibling;
        this.is_optgroup = (this.element.querySelector('optgroup')) ? true : false;
        this.options = this.items();
        this.dropdown_element.innerHTML = this.selectHtml();
        this.search_options = this.searchOptions();
        this.event();
        this.dropdown_element.style.display = "inline-block";
        this.element.style.display = "none";

        this.observer();
    }
}

DropDown.prototype.observer = function () {
    var mutationObserver = new MutationObserver(function() {
            this.options = this.items();
            this.dropdown_element.innerHTML = this.selectHtml();
            this.event();
            }.bind(this));
    mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
    });
}

DropDown.prototype.optionItems = function () {
    var result = [];
    for (var i = 0; i < this.element.options.length; i++) {
        result.push({
            value: this.element.options[i].value,
            text: this.element.options[i].text
        });
    }
    return result;
}

DropDown.prototype.optgroupItems = function () {
    var result = [];
    for(var i=0; i<this.element.children.length; i++) {
        if (this.element.children[i].nodeName === 'OPTION') {
            result[i] = {
                nodeName: this.element.children[i].nodeName,
                value: this.element.children[i].value,
                text: this.element.children[i].text
            };
        } else {
            result[i] = {
                nodeName: this.element.children[i].nodeName,
                label: this.element.children[i].label,
                options: [],
            };
            for (var j=0;j<this.element.children[i].children.length; j++) {
                result[i].options.push({
                    value : this.element.children[i].children[j].value,
                    text: this.element.children[i].children[j].text
                });
            }
        }
    }
    return result;
}

DropDown.prototype.selectedIndexText = function () {
    if (this.dropdown_element.querySelector('.dropdown-text')) {
        this.dropdown_element.querySelector('.dropdown-text').innerText = this.element[this.element.selectedIndex].innerText;
    }
}

DropDown.prototype.items = function () {
    return (this.is_optgroup) ? this.optgroupItems() : this.optionItems();
}

DropDown.prototype.selectHtml = function () {
    var items = this.itemHtmls();

    var style = "";
    if (this.element.dataset.dropdownStyle !== undefined) {
        style = this.element.dataset.dropdownStyle;
    }

    var html = "<span class='dropdown-select' style='"+ style +"'><span class='dropdown-text'>"+ this.element[this.element.selectedIndex].innerText +"</span> <span style='font-weight:bold'>V</span></span> \
        <div class='dropdown-box'> \
            <div><input type='text' placeholder='search' name='filter' autocomplete='off'></div>\
            <div class='dropdown-option'>"+ items.join('\n') +"</div>\
        </div>";
    return html;
}

DropDown.prototype.itemHtmls = function (keyword) {
    var atag_style = this.selectWidth();
    var items = (this.is_optgroup) ? this.optgroupItemHtmls(keyword) : this.optionItemHtmls(keyword);
    if (items.length === 0) {
        items.push('<a href="javascript:;" style="'+ atag_style +'">검색결과 없음</a></a>');
    }
    return items;
}

DropDown.prototype.optionItemHtmls = function (keyword) {
    var options = (keyword) ? this.filter(keyword) : this.options;
    var result = options.map(function (option) {
        return this.itemHtml(option);
    }.bind(this));
    return result;
}

DropDown.prototype.itemHtml = function (option, add_class) {
    var atag_style = this.selectWidth();
    var on = (this.element.value && this.element.value === option.value) ? "on" : "";
    var enabled = (option.value) ? "dropdown-enabled" : "";
    if (add_class === undefined) {
        add_class = '';
    }
    return '<a href="javascript:;" data-value="'+ option.value +'" style="'+ atag_style +'" class="'+ on +' '+ enabled +' '+ add_class +'">'+ option.text +'</a>';
}

DropDown.prototype.optgroupItemHtmls = function (keyword) {
    var options = (keyword) ? this.filter(keyword) : this.options;
    var result = options.map(function (option) {
        if (option.nodeName === 'OPTION') {
            return this.itemHtml(option);
        } else {
            if (typeof option.options === 'object') {
                var items = option.options.map(function (option) {
                    return this.itemHtml(option, 'dropdown-optgroup-option');
                }.bind(this));
                return "<a href='javascript:;' class='dropdown-disabled dropdown-optgroup'>"+ option.label +"</a>" + items.join('\n');
            }
        }
    }.bind(this));
    return result;
}

DropDown.prototype.filter = function (keyword) {
    return (this.is_optgroup) ? this.optgroupFilter(createFuzzyMatcher(keyword)) : this.optionFilter(createFuzzyMatcher(keyword));
}

DropDown.prototype.optionFilter = function (regex) {
    return this.options.filter(function (item) {
        return regex.test(item.text);
    })
}

DropDown.prototype.optgroupFilter = function (regex) {
    var result = this.options.map(function (item) {
        if (item.nodeName === 'OPTION') {
            return (regex.test(item.text)) ? item : [];
        } else {
            var options = item.options.filter(function (option) {
                return regex.test(option.text);  
            });
            return (options.length > 0) ? {
                nodeName: item.nodeName,
                label: item.label,
                options: options
            } : [];
        }
    });
    return result;
}

DropDown.prototype.selectWidth = function() {
    return (parseInt(this.element.style.width) > 0) ? "width:" + this.element.style.width + ";max-width:" + this.element.style.width : "";
}

DropDown.prototype.event = function () {
    if (this.dropdown_element.querySelector('.dropdown-select')) {
        this.dropdown_element.querySelector('.dropdown-select').addEventListener('click', function () {
            if (typeof dropdown_hide === 'object') {
                dropdown_hide.hide();
            }
            if (!this.element.disabled) {
                this.selectElementEvent();
            }
        }.bind(this));
    }
    if (this.dropdown_element.querySelector('input[name=filter]')) {
        this.dropdown_element.querySelector('input[name=filter]').addEventListener('keyup', function (e){
            if ([38,40].indexOf(e.keyCode) > -1) {
                this.cursorMove(e);
            } else if (e.keyCode === 13) {
                if (this.index > -1 && this.search_options[this.index] !== undefined) {
                    this.element.value = this.search_options[this.index].value;
                    this.dropdown_element.querySelector('.dropdown-text').innerText = this.search_options[this.index].text;
                    this.trigger('change');
                    this.reset();
                }
            } else {
                var items = this.itemHtmls(e.target.value);
                this.dropdown_element.querySelector('.dropdown-option').innerHTML = items.join('\n');
                this.search_options = this.searchOptions();
                this.index = -1;
            }
        }.bind(this));
    }
    if (this.dropdown_element.querySelector('.dropdown-option')) {
        this.dropdown_element.querySelector('.dropdown-option').addEventListener('click', function (e) {
            if (!e.target.classList.contains('dropdown-disabled')) {
                this.select(e);
            }
        }.bind(this));
    }
}

DropDown.prototype.searchOptions = function () {
    var result = [];
    this.dropdown_element.querySelectorAll('.dropdown-option .dropdown-enabled').forEach(function (item) {
        result.push({
            text: item.innerText,
            value: item.dataset.value,
        });
    });
    return result;
}

DropDown.prototype.cursorMove = function (e) {
    e.preventDefault();
    this.dropdown_element.querySelectorAll('.dropdown-option a').forEach(function (el) {
        el.classList.remove('cursor-on');
    });
    if (e.keyCode === 40) {
        this.increase();
    }  else {
        this.decrease();
    }
    if (this.search_options[this.index] && this.search_options[this.index].value) {
        this.dropdown_element.querySelector('input[name=filter]').value = this.search_options[this.index].text;
        this.dropdown_element.querySelectorAll('.dropdown-option .dropdown-enabled')[this.index].classList.add('cursor-on');
    }
    this.scrollMove(e.keyCode);
}

DropDown.prototype.increase = function () {
    if (this.search_options.length - 1 > this.index) {
        this.index++;
    }
}

DropDown.prototype.decrease = function () {
    if (this.index >= 0) {
        this.index--;
    }
}

DropDown.prototype.scrollMove = function (param) {
    var cursor_on = this.dropdown_element.querySelector('.dropdown-option .cursor-on');
    if (cursor_on) {
        if (this.cursor_top === 0) {
            this.cursor_top = cursor_on.offsetTop;
        }
        if (cursor_on.offsetTop >= 180) {
            if (param === 40) {
                this.dropdown_element.querySelector('.dropdown-option').scrollTop = this.dropdown_element.querySelector('.dropdown-option').scrollTop + (cursor_on.offsetTop - this.cursor_top);
            } else {
                this.dropdown_element.querySelector('.dropdown-option').scrollTop = this.dropdown_element.querySelector('.dropdown-option').scrollTop - (this.cursor_top - cursor_on.offsetTop);
            }
        }
        this.cursor_top = cursor_on.offsetTop;
    }
}

DropDown.prototype.selectElementEvent = function () {
    this.toggle = !this.toggle;
    if (this.toggle) {
        this.options = this.items();
        this.search_options = this.searchOptions();
        if (this.element.selectedIndex > 0) {
            this.index = this.getIndex('.dropdown-option a.dropdown-enabled');
        } else {
            this.index = -1;
        }
    }
    this.display();
    this.scroll();
    this.element.style.visibility = "hidden";
    if (!this.toggle) {
        this.reset();
    }
}

DropDown.prototype.scroll = function () {
    // this.dropdown_element.querySelector('.dropdown-option').scrollTop = (this.getIndex('.dropdown-option a') - 1) * 28;
    if (this.dropdown_element.querySelector('.dropdown-option .on')) {
        this.dropdown_element.querySelector('.dropdown-option').scrollTop = this.dropdown_element.querySelector('.dropdown-option .on').offsetTop - 56;
    }
}

DropDown.prototype.getIndex = function (selector) {
    var result = 0;
    this.dropdown_element.querySelectorAll(selector).forEach(function (el, i) {
        if (this.dropdown_element.querySelector('.dropdown-text').innerText === el.innerText) {
            result = i;
        }
    }.bind(this));
    return result;
}

DropDown.prototype.select = function (e) {
    if (e.target.nodeName === 'A') {
        this.element.value = (e.target.dataset.value) ? e.target.dataset.value : "";
        this.dropdown_element.querySelector('.dropdown-text').innerText = this.element[this.element.selectedIndex].innerText;
    }
    this.trigger('change');
    this.reset();
}

DropDown.prototype.trigger = function (action) {
    var event;
    if(document.createEvent){
        event = document.createEvent("HTMLEvents");
        event.initEvent(action, true, true);
        event.eventName = action;
        this.element.dispatchEvent(event);
    } else {
        event = document.createEventObject();
        event.eventName = action;
        event.eventType = action;
        this.element.fireEvent("on" + event.eventType, event);
    }
}

DropDown.prototype.reset = function () {
    this.toggle = false;
    this.display();
    if (this.dropdown_element.querySelector('input[name=filter]')) {
        this.dropdown_element.querySelector('input[name=filter]').value = "";
    }
    var items = this.itemHtmls();
    this.dropdown_element.querySelector('.dropdown-option').innerHTML = items.join('\n');
}

DropDown.prototype.display = function () {
    this.dropdown_element.querySelector('.dropdown-box').style.display = (this.toggle === true) ? 'block' : 'none';
    if (this.toggle) {
        this.dropdown_element.querySelector('[name=filter]').focus();
    }
}

function DropDownHide(dropdown) {
    this.dropdown = dropdown;
    this.init();
}

DropDownHide.prototype.init = function () {
    document.querySelector('body').addEventListener('click', function (e) {
        if (!this.isParentClass(e.target)) {
            this.hide();
        }
    }.bind(this));
}

DropDownHide.prototype.hide = function () {
    this.dropdown.forEach(function (dropdown) {
        dropdown.reset();
    });
}

DropDownHide.prototype.isParentClass = function (el) {
    if (el.classList.contains('dropdown-box') || el.classList.contains('dropdown-select')) {
        return true;
    } else {
        return (el.parentElement) ? this.isParentClass(el.parentElement) : false;
    }
}
