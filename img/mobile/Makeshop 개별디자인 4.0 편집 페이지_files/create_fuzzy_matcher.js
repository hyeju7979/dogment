function ch2pattern(ch) {
    var offset = 44032; /* '��'�� �ڵ� */
    // �ѱ��� ����
    if (/[��-�R]/.test(ch)) {
        var chCode = ch.charCodeAt(0) - offset;
        // ������ ������ ���� �״�θ� ã�´�.
        if (chCode % 28 > 0) {
            return ch;
        }
        var begin = Math.floor(chCode / 28) * 28 + offset;
        var end = begin + 27;
        return "[\\u"+ begin.toString(16) +"-\\u"+ end.toString(16) +"]";
    }
    // �ѱ� ����
    if (/[��-��]/.test(ch)) {
      var con2syl = {
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
            '��': '��'.charCodeAt(0),
        };
        var begin = con2syl[ch] || ( ( ch.charCodeAt(0) - 12613 /* '��'�� �ڵ� */ ) * 588 + con2syl['��'] );
        var end = begin + 587;
        return "["+ ch +"\\u"+ begin.toString(16) +"-\\u"+ end.toString(16) +"]";
    }
    // �� �ܿ� �״�� ������
    // escapeRegExp�� lodash���� ������
    return escapeRegExp(ch);
}
function createFuzzyMatcher(input) {
    var pattern = input.split('').map(ch2pattern).join('.*?');
    return new RegExp(pattern);
}

function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $&�� ��ġ�� ��ü ���ڿ��� �ǹ��մϴ�.
}
