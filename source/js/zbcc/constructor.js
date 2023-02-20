class zbCryptoConstructor {
    constructor(params) {
        this.dataBlocksForm = new zbccDataBlocksForm({ elementSelector: params.dataBlocksFormSelector })
    }
}



class zbccPreConditionForm extends htmlElement {
    constructor(params) {
        super(params)

        this.inputs = {}
    }
}



class zbccBuildedSchemeForm extends htmlElement {
    constructor(params) {
        super(params)

        this.inputs = {}
    }
}



class zbccDataBlocksForm extends htmlElement {
    constructor(params) {
        super(params)

        this.dataBlocks = {}
    }

    addDataBlock(params) {
        this.dataBlocks[params.name] = params.object
    }

    getValues() {
        let values = {}

        ok(this.dataBlocks).forEach(name => {
            console.log(name)
            values[name] = this.dataBlocks[name].getValues()
        })

        console.log(values)
        return values
    }
}



//



class zbccDataBlock {
    constructor(params) {}

    getValues() { return {} }
}



class zbccNumerableDataBlock extends zbccDataBlock {
    constructor(params) {
        super(params)

        this.table = params.table
    }

    getValues() {
        let values = {}

        values.numerableInput = this.table.controls.numerableInput.value
        values.tableRows = {}

        ov(this.table.rows).forEach(row => {
            let inputs = {}

            ok(row).forEach(inputKey => {
                if (inputKey !== 'id')
                    inputs[inputKey] = row[inputKey].value
            })

            values.tableRows[row.id] = inputs
        })

        return values
    }
}



class zbccCalcableDataBlock extends zbccDataBlock {
    constructor(params) {
        super(params)

        this.tables = params.tables
    }

    getValues() {
        let values = { tables: {} }

        ok(this.tables).forEach(tableKey => {
            let tableRows = {}

            ov(this.tables[tableKey].rows).forEach(row => {
                let inputs = {}

                ok(row).forEach(inputKey => {
                    if (inputKey !== 'id') {
                        if (row[inputKey].type !== 'select')
                            inputs[inputKey] = row[inputKey].value
                        else
                            inputs[inputKey] = row[inputKey].linkId
                    }
                })

                tableRows[row.id] = inputs
            })

            values.tables[tableKey] = tableRows
        })

        return values
    }
}



class zbccUnhideableDataBlock extends zbccDataBlock {
    constructor(params) {
        super(params)

        this.activeTableId = undefined
        this.cssActiveClass = params.cssActiveClass
        this.unhiders = params.unhiders
        this.tables = params.tables

        this.listenOnUnhide()
    }

    listenOnUnhide() {
        ok(this.unhiders).forEach(unhiderName => {
            $(this.unhiders[unhiderName]).on('click', e => {
                if ( af(e.currentTarget.classList).includes(this.cssActiveClass)) {
                    this.activeTableId = unhiderName
                    $(this.tables[unhiderName].element).parent().removeClass(this.cssActiveClass)
                    this.tables[unhiderName].clearData()

                    $(this.unhiders[unhiderName]).removeClass(this.cssActiveClass)
                    $(this.unhiders[unhiderName]).html('+')

                } else {
                    this.activeTableId = unhiderName
                    $(this.unhiders[unhiderName]).addClass(this.cssActiveClass)
                    $(this.unhiders[unhiderName]).html('-')
                    $(this.tables[unhiderName].element).parent().addClass(this.cssActiveClass)

                    ok(this.unhiders).forEach(unhiderName2 => {
                        if (unhiderName2 !== unhiderName) {
                            $(this.tables[unhiderName2].element).parent().removeClass(this.cssActiveClass)
                            $(this.unhiders[unhiderName2]).removeClass(this.cssActiveClass)
                            $(this.unhiders[unhiderName2]).html('+')
                        }
                    })
                }
            })
        })
    }

    getValues() {
        let values = { activeTableId: this.activeTableId, tables: {} }

        ok(this.tables).forEach(tableKey => {
            let tableRows = {}

            ov(this.tables[tableKey].rows).forEach(row => {
                let inputs = {}

                ok(row).forEach(inputKey => {
                    if (inputKey !== 'id') {
                        if (row[inputKey].type !== 'select')
                            inputs[inputKey] = row[inputKey].value
                        else
                            inputs[inputKey] = row[inputKey].linkId
                    }
                })

                tableRows[row.id] = inputs
            })

            values.tables[tableKey] = tableRows
        })

        return values
    }
}