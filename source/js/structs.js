class Input {
    constructor(params) {
        this.element = params.element
        this.type = params.type

        this.dataType = { 'text': String, 'number': Number }[params.dataType]
        this.isUnic = params.isUnic

        this.listeners = {
            change: []
        }

        this.value = this.element.value
        this.prevValue = this.value
        this.defaultValue = this.value

        this.setOptionalParams(params)
        this.listenOnChange()
    }

    setOptionalParams(params) {
        if (params.allowedValues !== undefined)
            this.allowedValues = params.allowedValues

        if (params.isUnic)
            this.linkToUnics = params.isUnic
    }

    addEventListener(event, callback) {
        if (this.listeners[event] === undefined)
            this.listeners[event] = []

        this.listeners[event].push(callback)
    }

    listenOnChange() {
        $(this.element).on('change', e => {
            this.syncValue()

            this.listeners['change'].forEach(func => {
                func(e, this)
            })
        })
    }

    syncValue() {
        if ( this.verifyValue(this.element.value) ) {
            this.prevValue = this.value
            this.value = this.dataType(this.element.value)
        } else {
            this.element.value = this.prevValue
        }
    }

    verifyValue(value) {
        if (typeof this.dataType() === typeof value || typeof this.dataType() === typeof this.dataType(value)) {
            if (this.allowedValues !== undefined) {
                if (this.allowedValues.includes(value)) {
                    if (this.isUnic) {
                        if (this.linkToUnics.includes(value)) {
                            return false
                        } else {
                            return true
                        }
                    } else {
                        return true
                    }
                } else {
                    return false
                }
            } else {
                return true
            }
        } else {
            return false
        }
    }
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

        this.rowTrsSelector = params.rowTrsSelector
        this.rowSelectors = params.rowSelectors

        this.rowUnicInputs = params.rowUnicInputs
        this.rowInputTypes = params.rowInputTypes

        this.unicValues = []
        this.rows = []


        // this.eatParams(params)
        this.initAltParams(params)

        this.initRows()
    }

    eatParams(params) {
        Object.keys(params).forEach(key => {
            this[key] = params[key]
        })
    }

    initAltParams(params) {

    }

    initRows() {
        Array.from( $(this.rowTrsSelector) ).forEach(tr => {
            this.rows[tr.id] = this.getRowBySelectors(tr.id)
        })
    }

    getRowBySelectors(id) {
        let row = { id: Number(id) }

        Object.keys(this.rowSelectors).forEach(key => {
            let input

            switch (this.rowInputTypes[key]) {
                case 'text':
                    input = new TextInput({ element: $(this.rowSelectors[key].replace('{tr-id}', id))[0], dataType: this.rowInputTypes[key] })
                    break

                case 'number':
                    input = new NumberInput({ element: $(this.rowSelectors[key].replace('{tr-id}', id))[0], dataType: this.rowInputTypes[key] })
                    break

                case 'select':
                    input = new SelectInput({ element: $(this.rowSelectors[key].replace('{tr-id}', id))[0], dataType: this.rowInputTypes[key] })
                    break

                default:
                    input = new TextInput({ element: $(this.rowSelectors[key].replace('{tr-id}', id))[0], dataType: this.rowInputTypes[key] })
                    break
            }

            if (this.rowUnicInputs !== undefined )
                input.isUnic = this.rowUnicInputs.includes(key)

            row[key] = input
        })

        console.log(row)
        return row
    }

    appendRow(id) {
        console.log('')
        console.log('———')
        console.log('id:', id)
        if (id === undefined) {
            let ids = []
            let max = 0

            this.rows.forEach(row => {
                ids.push(row.id)

                if (row.id > max)
                    max = row.id
            })

            console.log('ids:', ids)

            console.log('max:', max)

            for(let i = 0; i < max; i++) {
                if (!ids.includes(i)) {
                    id = i
                    console.log('id:', id)
                    break
                }
            }

            if (id === undefined)
                id = this.rows.length

            console.log('fid:', id)
        }

        $(this.element).append(
            this.rowHtmlTemplate
            .replaceAll('{id}', id)
            .replaceAll('{number}', id + 1)
        )

        this.rows.push( this.getRowBySelectors(id) )
    }

    removeRow(id) {

        let rowId

        this.rows.forEach((row, index) => {
            console.log('log:', id, row.id, index,)
            if (row.id === Number(id)) {
                rowId = index
                console.log('removing:', id, row.id, index)
            }
        })

        $(this.element).find('tr#' + (id)).remove()
        this.rows.splice(rowId ?? id, 1)
    }

    listenForChangesInDataRows() {
        $(this.element).on('change', e => {

        })
    }
}



class NumerableTable extends Table {
    constructor(params) {
        super(params)

        this.numerableInput = params.numerableInput

        this.listenForChangesInNumOfRows()
    }

    listenForChangesInNumOfRows() {
        this.numerableInput.addEventListener('change', (e, input) => {
            while (Number(input.prevValue) < Number(input.value)) {
                this.appendRow(Number(input.prevValue))
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
    }

    listenForChangesInNumOfRows() {
        $(this.element).on('click', this.calcAppendBtnSelector, e => {
            this.appendRow()
        })

        $(this.element).on('click', this.calcRemoveBtnSelector, e => {
            this.removeRow(Number(e.currentTarget.parentNode.parentNode.parentNode.id))
        })
    }
}



//



class UnhiddableTables {
    constructor(params) {
        this.unhidders = params.unhidders
        this.tables = params.tables

        this.cssClass = params.cssClass

        this.listenOnUnhidderClick()
    }

    listenOnUnhidderClick() {
        let unhiddersList = Object.keys(this.unhidders)

        unhiddersList.forEach(key => {
            $(this.unhidders[key]).on('click', e => {
                if ( $(e.currentTarget).hasClass(this.cssClass) ) {
                    $(this.unhidders[key]).html('+').removeClass(this.cssClass)
                    $(this.tables[key].element.parentNode).removeClass(this.cssClass)
                } else {
                    $(this.unhidders[key]).html('-').addClass(this.cssClass)
                    $(this.tables[key].element.parentNode).addClass(this.cssClass)

                    unhiddersList.forEach(key2 => {
                        if (key !== key2) {
                            $(this.unhidders[key2]).html('+').removeClass(this.cssClass)
                            $(this.tables[key2].element.parentNode).removeClass(this.cssClass)
                        }
                    })
                }
            })
        })
    }
}