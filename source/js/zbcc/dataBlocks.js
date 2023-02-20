class zbccDataBlock_InitialData extends zbccDataBlock {
    constructor(params) {
        super(params)

        this.inputsSelectors = params.inputsSelectors
        this.inputsParams = params.inputsParams
        this.inputs = {}

        ok(this.inputsSelectors).forEach(inputName => {
            let input

            let inputParams = { elementSelector: this.inputsSelectors[inputName], type: this.inputsParams[inputName].type, dataType: this.inputsParams[inputName].dataType, allowedValues: this.inputsParams[inputName].allowedValues }

            if (this.inputsParams[inputName].type === 'text')
                input = new TextInput(inputParams)
            else if (this.inputsParams[inputName].type === 'number')
                input = new NumberInput(inputParams)
            else if (this.inputsParams[inputName].type === 'select')
                input = new SelectInput(inputParams)
            else
                input = new TextInput(inputParams)

            this.inputs[inputName] = input
        })
    }

    getValues() {
        let values = {}

        ok(this.inputs).forEach(key => {
            values[key] = this.inputs[key].value
        })

        return values
    }
}



class zbccDataBlock_InvestmentRounds extends zbccNumerableDataBlock {
    constructor(params) {
        super(params)
    }
}



class zbccDataBlock_Agents extends zbccNumerableDataBlock {
    constructor(params) {
        super(params)
    }
}



class zbccDataBlock_Pools extends zbccCalcableDataBlock {
    constructor(params) {
        super(params)
    }
}



class zbccDataBlock_VestingAndUnlocking extends zbccUnhideableDataBlock {
    constructor(params) {
        super(params)
    }
}



class zbccDataBlock_ProjectServices extends zbccDataBlock {
    constructor(params) {
        super(params)

        this.tablesDataBlockSelector = params.tablesDataBlockSelector
        this.htmlServiceTableTemplate = params.htmlServiceTableTemplate
        this.htmlCurvesTableTemplate = params.htmlCurvesTableTemplate

        this.unhideableActiveCssClass = params.unhideableActiveCssClass
        this.unhideableCssClass = params.unhideableCssClass
        this.unhiders = params.unhiders
        this.choosableActiveCssClass = params.choosableActiveCssClass
        this.choosableCssClass = params.choosableCssClass
        this.choosableTableSelector = params.choosableTableSelector

        this.activeTableId = undefined
        this.activeTableType = undefined

        this.choosers = {
            serviceNameInput: params.choosers.serviceNameInput,
            servicesSelectBox: params.choosers.servicesSelectBox,
            addServiceBtn: params.choosers.addServiceBtn,
            serviceNameOptionSelector: params.choosers.serviceNameOptionSelector,
            serviceNameOptionTemplate: params.choosers.serviceNameOptionTemplate,
        }

        this.curveableActiveCssClass = params.curveableActiveCssClass
        this.curveableTablesSelector = params.curveableTablesSelector

        this.serviceTables = Object.assign({}, params.serviceTables)
        this.curveTables = Object.assign({}, params.curveTables)
        this.servicesNames = Object.assign({}, params.servicesNames)

        this.serviceTablePreset = params.serviceTablePreset
        this.curvesTablePreset = params.curvesTablePreset
        this.curvesTablePreset = params.curvesTablePreset

        this.addListeners()
    }

    addListeners() {
        // staking & farming unhide
        ok(this.unhiders).forEach(unhiderName => {
            $(this.unhiders[unhiderName]).on('click', e => {
                if ( af(e.currentTarget.classList).includes(this.unhideableActiveCssClass)) {
                    this.activeTableId = undefined
                    this.activeTableType = undefined

                    $(this.serviceTables[unhiderName].element).parent().removeClass(this.unhideableActiveCssClass)

                    this.serviceTables[unhiderName].clearData()
                    if (this.curveTables[unhiderName] !== undefined) {

                        this.curveTables[unhiderName].clearData()
                        $(this.curveTables[unhiderName].element).parent().removeClass(this.curveableActiveCssClass)
                    }

                    $(this.unhiders[unhiderName]).removeClass(this.unhideableActiveCssClass)
                    $(this.unhiders[unhiderName]).html('+')

                } else {
                    this.activeTableId = unhiderName
                    this.activeTableType = 'service'
                    $(this.unhiders[unhiderName]).addClass(this.unhideableActiveCssClass)
                    $(this.unhiders[unhiderName]).html('-')

                    $(this.serviceTables[unhiderName].element).parent().addClass(this.unhideableActiveCssClass)

                    ok(this.unhiders).forEach(unhiderName2 => {
                        if (unhiderName2 !== unhiderName) {
                            $(this.serviceTables[unhiderName2].element).parent().removeClass(this.unhideableActiveCssClass)
                            $(this.unhiders[unhiderName2]).removeClass(this.unhideableActiveCssClass)
                            $(this.unhiders[unhiderName2]).html('+')
                        }
                    })

                    ok(this.serviceTables).forEach(serviceTableKey => {
                        $(this.serviceTables[serviceTableKey].element).parent().removeClass(this.choosableActiveCssClass)
                    })

                    ok(this.curveTables).forEach(serviceTableKey => {
                        console.log(serviceTableKey)
                        console.log(this.curveTables[serviceTableKey])
                        $(this.curveTables[serviceTableKey].element).parent().removeClass(this.curveableActiveCssClass)
                    })
                }
            })
        })

        // add service
        $(this.choosers.addServiceBtn).on('click', e => {
            let newServiceId = ov(this.serviceTables).length - 2
            let serviceName = $(this.choosers.serviceNameInput).val()
            $(this.choosers.serviceNameInput).val('')

            $(this.tablesDataBlockSelector).append(this.htmlServiceTableTemplate
                .replace('{table-id}', newServiceId)
                .replace('{table-title}', serviceName)
            )

            this.servicesNames[newServiceId] = serviceName
            this.serviceTables[newServiceId] = new CalcableTable(Object.assign(this.serviceTablePreset, { tableId: newServiceId }))

            console.log(this.serviceTables[newServiceId])

            this.serviceTables[newServiceId].addActionBtnsListener('addCurves', (e, f) => {
                this.onAddCurves(e)
            })

            ok(this.unhiders).forEach(unhiderName => {
                $(this.serviceTables[unhiderName].element).parent().removeClass(this.unhideableActiveCssClass)
                $(this.unhiders[unhiderName]).removeClass(this.unhideableActiveCssClass)
                $(this.unhiders[unhiderName]).html('+')
            })

            ok(this.serviceTables).forEach(serviceTableKey => {
                if (serviceTableKey != newServiceId)
                    $(this.serviceTables[serviceTableKey].element).parent().removeClass(this.choosableActiveCssClass).removeClass(this.unhideableActiveCssClass)
            })

            ok(this.curveTables).forEach(serviceTableKey => {
                $(this.curveTables[serviceTableKey].element).parent().removeClass(this.curveableActiveCssClass)
            })

            $(this.choosers.servicesSelectBox).append(this.choosers.serviceNameOptionTemplate
                .replaceAll('{id}', newServiceId)
                .replaceAll('{value}', serviceName)
                .replaceAll('{text}', serviceName)
            )

            $(this.choosers.servicesSelectBox).val(serviceName)
        })

        // select another service
        $(this.choosers.servicesSelectBox).on('click', e => {
            if (Array.from($(this.choosers.servicesSelectBox).children()).length === 0)
                return

            ok(this.unhiders).forEach(unhiderName => {
                $(this.serviceTables[unhiderName].element).parent().removeClass(this.unhideableActiveCssClass)
                $(this.unhiders[unhiderName]).removeClass(this.unhideableActiveCssClass)
                $(this.unhiders[unhiderName]).html('+')
            })

            ok(this.serviceTables).forEach(serviceTableKey => {
                $(this.serviceTables[serviceTableKey].element).parent().removeClass(this.choosableActiveCssClass)
            })

            ok(this.curveTables).forEach(serviceTableKey => {
                $(this.curveTables[serviceTableKey].element).parent().removeClass(this.curveableActiveCssClass)
            })

            $(this.serviceTables[
                Number( $(this.choosers.servicesSelectBox).find(':selected').attr('data-id'))
            ].element).parent().addClass(this.choosableActiveCssClass)
        })

        // select another service
        $(this.choosers.servicesSelectBox).on('change', e => {
            if (Array.from($(this.choosers.servicesSelectBox).children()).length === 0)
                return

            ok(this.unhiders).forEach(unhiderName => {
                $(this.serviceTables[unhiderName].element).parent().removeClass(this.unhideableActiveCssClass)
                $(this.unhiders[unhiderName]).removeClass(this.unhideableActiveCssClass)
                $(this.unhiders[unhiderName]).html('+')
            })

            ok(this.serviceTables).forEach(serviceTableKey => {
                $(this.serviceTables[serviceTableKey].element).parent().removeClass(this.choosableActiveCssClass)
            })

            ok(this.curveTables).forEach(serviceTableKey => {
                $(this.curveTables[serviceTableKey].element).parent().removeClass(this.choosableActiveCssClass)
            })

            $(this.serviceTables[
                Number(
                    $(this.choosers.servicesSelectBox).find(':selected').attr('data-id')
                    )
                ].element).parent().addClass(this.choosableActiveCssClass)
        })

        //
        ok(this.serviceTables).forEach(initialServiceKey => {
            this.serviceTables[initialServiceKey].addActionBtnsListener('addCurves', (e, f) => {
                this.onAddCurves(e)
            })
        })
    }

    onAddCurves(e) {
        ok(this.unhiders).forEach(unhiderName => {
            $(this.serviceTables[unhiderName].element).parent().removeClass(this.unhideableActiveCssClass)
            // $(this.unhiders[unhiderName]).removeClass(this.unhideableActiveCssClass)
            // $(this.unhiders[unhiderName]).html('+')
        })

        ok(this.serviceTables).forEach(serviceTableKey => {
            $(this.serviceTables[serviceTableKey].element).parent().removeClass(this.choosableActiveCssClass).removeClass(this.unhideableActiveCssClass)
        })

        ok(this.curveTables).forEach(serviceTableKey => {
            $(this.curveTables[serviceTableKey].element).parent().removeClass(this.curveableActiveCssClass)
        })

        let newCurvesTableId = e.target.parentNode.parentNode.dataset.id
        let newCurvesTableName = this.servicesNames[e.target.parentNode.parentNode.dataset.id]

        if (ok(this.curveTables).includes(newCurvesTableId)) {
            $(this.curveTables[newCurvesTableId].element).parent().addClass(this.curveableActiveCssClass)
        } else {
            $(this.tablesDataBlockSelector).append(this.htmlCurvesTableTemplate
                .replace('{table-id}', newCurvesTableId)
                .replace('{service-name}', this.servicesNames[e.target.parentNode.parentNode.dataset.id])
            )

            this.curveTables[newCurvesTableId] = new CalcableTable(Object.assign(this.curvesTablePreset, { tableId: newCurvesTableId }))

            this.curveTables[newCurvesTableId].addActionBtnsListener('showService', (e, f) => {
                $(this.curveTables[newCurvesTableId].element).parent().removeClass(this.curveableActiveCssClass)

                if (($(this.serviceTables[newCurvesTableId].element).parent().attr('class').split(/\s+/)).includes(this.unhideableCssClass))
                    $(this.serviceTables[newCurvesTableId].element).parent().addClass(this.unhideableActiveCssClass)
                else if (($(this.serviceTables[newCurvesTableId].element).parent().attr('class').split(/\s+/)).includes(this.choosableCssClass))
                    $(this.serviceTables[newCurvesTableId].element).parent().addClass(this.choosableActiveCssClass)

                console.log(($(this.serviceTables[newCurvesTableId].element).parent().attr('class').split(/\s+/)).includes(this.unhideableCssClass))
                console.log(($(this.serviceTables[newCurvesTableId].element).parent().attr('class').split(/\s+/)).includes(this.choosableCssClass))
                console.log($(this.serviceTables[newCurvesTableId].element).parent())
                console.log(this.unhideableActiveCssClass)
                console.log(this.choosableActiveCssClass)
            })
        }


        // console.log(this.serviceTables[newCurvesTableId])

        // this.serviceTables[newCurvesTableId].addActionBtnsListener('addCurves', (e, f) => {
        //     this.onAddCurves(e)
        // })
    }

    getValues() {

    }
}



class zbccDataBlock_TokenCirculation extends zbccUnhideableDataBlock {
    constructor(params) {
        super(params)

        this.tables.actions.addRowChangeListener((e, table) => {
            if (e.target.dataset.id === 'pre-condition' && e.target.checked == true)
                $('#zbcc .form-block[data-id="precond"]').show()
        })
    }
}
