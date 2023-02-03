class Input {
    /**
     * element
     *
     * type
     * allowedValues
     * dataType
     * defaultValue
     */
    constructor(params) {
        this.element = params.element
        this.type = params.type

        this.listeners = {}

        this.syncValue()

        this.setAltParams(params)
        this.listenOnChange()
    }

    setAltParams(params) {
        if (params.allowedValues !== undefined)
            this.allowedValues = params.allowedValues

        if (params.dataType !== undefined)
            this.dataType = params.dataType
        else if (params.allowedValues === undefined && this.type !== 'select')
            this.dataType = { 'text': String, 'number': Number }[params.type]

        this.defaultValue = this.value
    }

    addEventListener(event, callback) {
        if (this.listeners[event] === undefined)
            this.listeners[event] = [callback]
        else
            this.listeners[event].push(callback)
    }

    listenOnChange() {
        $(this.element).on('change', e => {
            this.syncValue()

            if (this.listeners['change'] === undefined)
                this.listeners['change'] = []

            this.listeners['change'].forEach(func => {
                func(e, this)
            })
        })
    }

    syncValue() {
        if (this.value !== undefined)
            this.prevValue = this.value
        else
            $(this.element)[0].value

        this.value = $(this.element)[0].value
    }

    verifyDataType() {}

    // get value() {
    //     return this.value
    // }

    // set value(value) {
    //     $(this.element).val(value)
    // }
}



class TextInput extends Input {
    constructor(params) {
        super(Object.assign(params, { type: 'text' } ))
    }
}



class NumberInput extends Input {
    constructor(params) {
        super(Object.assign(params, { type: 'number' } ))
    }

    addEventListener(event, callback) {
        super.addEventListener(event, callback)
    }
}



class SelectInput extends Input {
    constructor(params) {
        super(Object.assign(params, { type: 'select' } ))
    }
}



//



class Table {
    constructor(params) {
        this.element = params.element
        this.rowHtmlTemplate = params.rowHtmlTemplate

        this.rows = params.rows

        this.setAltParams(params)
    }

    setAltParams(params) {
        this.isUnhiddable = false

        if (
            params.unhidderBtnSelector !== undefined &&
            params.simpleTablesSelector !== undefined &&
            params.unhidderTableCssClass !== undefined &&
            params.unhidderSectionSelector !== undefined) {

            this.unhidderBtnSelector = params.unhidderBtnSelector
            this.simpleTablesSelector = params.simpleTablesSelector
            this.unhidderTableCssClass = params.unhidderTableCssClass
            this.unhidderSectionSelector = params.unhidderSectionSelector

            this.isUnhiddable = true
        }
    }

    listenForUnhidderBtn() {

    }

    listenForChangesInNumOfRows() {

    }

    listenForChangesInDataRows() {
        $(this.element).on('change', e => {

        })
    }

    appendRow() {
        $(this.element).append(
            this.rowHtmlTemplate
            .replaceAll('{id}', this.rows.length)
            .replaceAll('{number}', this.rows.length + 1)
        )

        this.rows.push({})
    }

    removeRow(id) {
        $(this.element).find('tr#' + (id)).remove()
        this.rows.splice(id, 1)
    }
}



class NumerableTable extends Table {
    constructor(params) {
        super(params)

        this.numerableInput = params.numerableInput

        this.listenForChangesInNumOfRows()
        this.listenForChangesInDataRows()
    }

    listenForChangesInNumOfRows() {
        this.numerableInput.addEventListener('change', (e, input) => {
            while (Number(input.prevValue) < Number(input.value)) {
                this.appendRow()
                input.prevValue++
            }

            while (Number(input.prevValue) > Number(input.value)) {
                this.removeRow(Number(input.prevValue) - 1)
                input.prevValue--
            }
        })
    }
}



class CalcableTable extends Table {
    constructor(params) {
        super(params)

        this.calcAppendBtnSelector = params.calcAppendBtnSelector
        this.calcRemoveBtnSelector = params.calcRemoveBtnSelector

        this.listenForChangesInNumOfRows()
        this.listenForChangesInDataRows()

        if (this.isUnhiddable) {
            this.listenForUnhidderBtn()
        }
    }

    listenForUnhidderBtn() {
        $(this.unhidderSectionSelector).on('click', this.unhidderBtnSelector, e => {
            console.log(1)
            $(this.simpleTablesSelector).removeClass(this.unhidderTableCssClass)
            $(this.element).addClass(this.unhidderTableCssClass)
        })
    }

    listenForChangesInNumOfRows() {
        $(this.element).on('click', this.calcAppendBtnSelector, e => {
            this.appendRow()
        })

        $(this.element).on('click', this.calcRemoveBtnSelector, e => {
            this.removeRow(e.currentTarget.parentNode.parentNode.parentNode.id)
        })
    }
}