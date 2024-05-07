igRegisterScript("WebGridRowSelectorExcelTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<span style='display: block;width:50px; text-align: center;'> ${ctx.implicit.index}</span>`;
}, false);
igRegisterScript("WebGridHeaderRowSelectorExcelTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<span style='display: block;width:50px;'></span>`;
}, false);