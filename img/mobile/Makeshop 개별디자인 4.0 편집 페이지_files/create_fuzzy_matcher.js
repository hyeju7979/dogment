function ch2pattern(ch) {
    var offset = 44032; /* '°¡'ÀÇ ÄÚµå */
    // ÇÑ±¹¾î À½Àý
    if (/[°¡-ÆR]/.test(ch)) {
        var chCode = ch.charCodeAt(0) - offset;
        // Á¾¼ºÀÌ ÀÖÀ¸¸é ¹®ÀÚ ±×´ë·Î¸¦ Ã£´Â´Ù.
        if (chCode % 28 > 0) {
            return ch;
        }
        var begin = Math.floor(chCode / 28) * 28 + offset;
        var end = begin + 27;
        return "[\\u"+ begin.toString(16) +"-\\u"+ end.toString(16) +"]";
    }
    // ÇÑ±Û ÀÚÀ½
    if (/[¤¡-¤¾]/.test(ch)) {
      var con2syl = {
            '¤¡': '°¡'.charCodeAt(0),
            '¤¢': '±î'.charCodeAt(0),
            '¤¤': '³ª'.charCodeAt(0),
            '¤§': '´Ù'.charCodeAt(0),
            '¤¨': 'µû'.charCodeAt(0),
            '¤©': '¶ó'.charCodeAt(0),
            '¤±': '¸¶'.charCodeAt(0),
            '¤²': '¹Ù'.charCodeAt(0),
            '¤³': 'ºü'.charCodeAt(0),
            '¤µ': '»ç'.charCodeAt(0),
        };
        var begin = con2syl[ch] || ( ( ch.charCodeAt(0) - 12613 /* '¤µ'ÀÇ ÄÚµå */ ) * 588 + con2syl['¤µ'] );
        var end = begin + 587;
        return "["+ ch +"\\u"+ begin.toString(16) +"-\\u"+ end.toString(16) +"]";
    }
    // ±× ¿Ü¿£ ±×´ë·Î ³»º¸³¿
    // escapeRegExp´Â lodash¿¡¼­ °¡Á®¿È
    return escapeRegExp(ch);
}
function createFuzzyMatcher(input) {
    var pattern = input.split('').map(ch2pattern).join('.*?');
    return new RegExp(pattern);
}

function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $&´Â ÀÏÄ¡ÇÑ ÀüÃ¼ ¹®ÀÚ¿­À» ÀÇ¹ÌÇÕ´Ï´Ù.
}
