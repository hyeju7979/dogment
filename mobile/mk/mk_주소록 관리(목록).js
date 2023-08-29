$('.addrbook-list tbody').sortable({
    items: '> tr',
    opacity: .5,
    axis: 'y',
    handle: '.moving-grap',
    helper: function(e, ui) {
        ui.css({ borderTop: '1px solid #e0e0e0' }).children().each(function() {
            $(this).width($(this).width());
        });
        return ui;
    },
    start: function(e, ui) {
        ui.placeholder.css({ height: $(ui.item).height(), borderBottom: '1px solid #e0e0e0' });
    },
    sort: function(e, ui) {},
    update: function(e, ui) {
        //table_re_batch();
        //addLastLine();
    },
    stop: function(e, ui) {}
});