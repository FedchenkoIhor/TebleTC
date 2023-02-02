const htmlTemplates1 = {
    divDataBlock:
    '<div class="data-block" id="{id}">'+
        '<header>' +
            '<h1 class="title">' +
                '{title}' +
            '</h1>' +
            '<div class="description">' +
                '{description}' +
            '</div>' +
        '</header>' +
        '' +
        '<div class="inputs">' +
            '{inputs}' +
        '</div>' +
    '</div>',

    inputsRow:
    '<div>' +
    '{inputs}' +
    '</div>',

    numberInput:
    '<div class="zbcc-input">' +
        '<p>{title}</p>' +
        '<input type="{type} value">' +
    '</div>',

    numberInput:
    '<div class="zbcc-input">' +
        '<p>{title}</p>' +
        '<input type="{type} value="{value}">' +
    '</div>',

}