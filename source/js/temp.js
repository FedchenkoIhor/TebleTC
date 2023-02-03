

    // editNumberOfTableRowsUsingNumberInput() {}
    // editNumberOfTableRowsUsingNumberInput() {}

    changeValueAndPreValueOfElementAndRunListeners(params) {
        $(this[params.dataBlockName][params.dataBlockElement].element).on(params.event, e => {
            this[params.dataBlockName][params.dataBlockElement].prevValue = this[params.dataBlockName][params.dataBlockElement].value
            this[params.dataBlockName][params.dataBlockElement].value = e.currentTarget.value

            this.runElementListeners({ listeners: this[params.dataBlockName][params.dataBlockElement][params.listenersProperyName ?? 'listeners'] })
        })
    }

    calcOnClick() {

    }

    runElementListeners(params) {
        console.log('run')
        $(this[params.dataBlockName][params.dataBlockElement].element).on('change', e => {
            this[params.dataBlockName][params.dataBlockElement].listeners.forEach(func => {
                console.log('runed')
                func(e)
            })
        })
    }

    changeNumOfTrUsingNumberInput(params) {
        const dataBlockName = params.dataBlockName

        const trsNumberCounter = params.trsNumberCounter
        const trsTable = params.trsTable
        const tablePreElement = params.tablePreElement

        const dataBlockHtmlId = params.dataBlockHtmlId
        const tableHtmlId = params.tableHtmlId

        const htmlTemplate = params.htmlTemplate

        if (this[dataBlockName][trsNumberCounter].value > this[dataBlockName][trsNumberCounter].prevValue) {
            while (this[dataBlockName][trsNumberCounter].value > this[dataBlockName][trsNumberCounter].prevValue) {
                $('#zbcc .data-block#' + dataBlockHtmlId + ' #' + tableHtmlId + '').append(
                    htmlTemplate
                    .replace('{id}', this[dataBlockName][trsNumberCounter].prevValue)
                    .replace('{number}', Number(this[dataBlockName][trsNumberCounter].prevValue) + 1)
                )

                let tableElement = {}

                Object.keys(tablePreElement).forEach(key => {
                    tableElement[key] = $(tablePreElement[key]
                    .replace('{data-block-html-id}', dataBlockHtmlId)
                    .replace('{table-html-id}', tableHtmlId)
                    .replace('{tr-html-id}', this[dataBlockName][trsNumberCounter].prevValue))[0].value
                })

                this[dataBlockName][trsTable].value.push(tableElement)

                this[dataBlockName][trsNumberCounter].prevValue++
            }

        } else if (this[dataBlockName][trsNumberCounter].value < this[dataBlockName][trsNumberCounter].prevValue) {
            while (this[dataBlockName][trsNumberCounter].value < this[dataBlockName][trsNumberCounter].prevValue) {
                this[dataBlockName][trsTable].value.pop()
                $('#zbcc .data-block#' + dataBlockHtmlId + ' #' + tableHtmlId + ' tr#' + (this[dataBlockName][trsNumberCounter].prevValue - 1)).remove()
                this[dataBlockName][trsNumberCounter].prevValue--
            }
        }
    }

    changeNumOfTrUsingCalcButtons(params) {

    }

    initBaseEventListeners() {
        // Initial Data //

        // On change Initial Inputs & run listeners
        Object.keys(this.initialData).forEach(key => {
            this.changeValueAndPreValueOfElementAndRunListeners({ dataBlockName: 'initialData', dataBlockElement: key })
        })


        // Investment Rounds //

        // On change number of rounds & run listeners
        this.changeValueAndPreValueOfElementAndRunListeners({ dataBlockName: 'investmentRounds', dataBlockElement: 'roundsNumber' })

        // On change in rounds table
        this.runElementListeners({ dataBlockName: 'investmentRounds', dataBlockElement: 'roundsTable', event: 'change' })


        // Agents //

        // On change number of agents
        this.changeValueAndPreValueOfElementAndRunListeners({ dataBlockName: 'agents', dataBlockElement: 'agentsNumber' })

        // On change in agents table
        this.runElementListeners({ dataBlockName: 'agents', dataBlockElement: 'agentsTable', event: 'change' })


        // Pools //

        // On change in table
        this.runElementListeners({ dataBlockName: 'pools', dataBlockElement: 'poolTypesTable', event: 'change' })

        // this.runElementListeners({ dataBlockName: 'pools', dataBlockElement: 'poolTypesTable', event: 'click' })

        // $(this.pools.poolTypesTable.appendButtonElement).on('click', e => {
        //     this.pools.poolTypesTable.appendButtonListeners.forEach(func => {
        //         func(e)
        //     })
        // })

        // $(this.pools.poolTypesTable.removeButtonElement).on('click', e => {
        //     this.pools.poolTypesTable.removeButtonListeners.forEach(func => {
        //         func(e)
        //     })
        // })

        // on change in table
        this.runElementListeners({ dataBlockName: 'pools', dataBlockElement: 'poolsTable', event: 'change' })

        // Vesting And Unlocking //

        // vesting

        // unlocking

        // vesting table
        this.runElementListeners({ dataBlockName: 'vestingAndUnlocking', dataBlockElement: 'vestingTable', event: 'change' })

        // unlocking table
        this.runElementListeners({ dataBlockName: 'vestingAndUnlocking', dataBlockElement: 'unlockingTable', event: 'change' })


        // Project Services //

        // stacking
        // this.changeValueAndPreValueOfElementAndRunListeners({ dataBlockName: 'projectServices', dataBlockElement: 'staking' })

        // farming
        // this.changeValueAndPreValueOfElementAndRunListeners({ dataBlockName: 'projectServices', dataBlockElement: 'farming' })

        // serviceName
        // $(this.projectServices.serviceName.element).on('change', e => {
        //     this.projectServices.serviceName.prevValue = this.projectServices.serviceName.value
        //     this.projectServices.serviceName.value = e.currentTarget.value

        //     this.projectServices.serviceName.listeners.forEach(func => {
        //         func(e)
        //     })
        // })

        // project-services
        // $(this.projectServices.projectServicesTable.element).on('change', e => {
        //     this.projectServices.projectServicesTable.listeners.forEach(func => {
        //         func(e)
        //     })
        // })


        // Token Circulation

        // add action
        // $(this.tokenCirculation.actionsNumber.element).on('change', e => {
        //     this.tokenCirculation.actionsNumber.prevValue = this.tokenCirculation.actionsNumber.value
        //     this.tokenCirculation.actionsNumber.value = e.currentTarget.value

        //     this.tokenCirculation.actionsNumber.listeners.forEach(func => {
        //         func(e)
        //     })
        // })

        // table
        // $(this.tokenCirculation.actionsTable.element).on('change', e => {
        //     this.tokenCirculation.actionsTable.listeners.forEach(func => {
        //         func(e)
        //     })
        // })
    }

    initRuledEventsListeners() {
        // Initial Data //

        this.initialData.totalTokensAmount.listeners.push(e => {

            // this.investmentRounds.roundsTable.value.forEach(round => {
            //     if (this.investmentRounds.roundsTable.value[round.id].tokenPrice !== '' && this.investmentRounds.roundsTable.value[round.id].investorShare !== '%') {
            //         $('#zbcc .data-block#investment-rounds #rounds tr#' + round.id + ' #tokens-amount').value(
            //             (this.initialData.totalTokensAmount * this.investmentRounds.roundsTable.value[round.id].investorShare) / 100
            //         )
            //         $('#zbcc .data-block#investment-rounds #rounds tr#' + round.id + ' #fiat').value(
            //             (this.initialData.totalTokensAmount * this.investmentRounds.roundsTable.value[round.id].investorShare) / 100 * this.investmentRounds.roundsTable.value[round.id].tokenPrice
            //         )
            //     } else if (true) {
            //     }
            // })
        })

        this.initialData.initialTokenPrice.listeners.push(e => {
            console.log(e)
        })

        this.initialData.exchangeType.listeners.push(e => {
            console.log(e)

        })

        this.initialData.tradingFunction.listeners.push(e => {
            console.log(e)

        })

        this.initialData.duration.listeners.push(e => {
            console.log(e)

        })


        // Investment Rounds //

        this.investmentRounds.roundsNumber.listeners.push(e => {
            this.changeNumOfTrUsingNumberInput({
                dataBlockName: 'investmentRounds',
                trsNumberCounter: 'roundsNumber',
                trsTable: 'roundsTable',

                tablePreElement: {
                    roundTitle: '#zbcc .data-block#{data-clock-html-id} table#{table-html-id} tr#{tr-html-id} #round-title',
                    fiat: '#zbcc .data-block#{data-clock-html-id} table#{table-html-id} tr#{tr-html-id} #fiat',
                    tokenPrice: '#zbcc .data-block#{data-clock-html-id} table#{table-html-id} tr#{tr-html-id} #token-price',
                    tokensAmount: '#zbcc .data-block#{data-clock-html-id} table#{table-html-id} tr#{tr-html-id} #tokens-amount',
                    investorShare: '#zbcc .data-block#{data-clock-html-id} table#{table-html-id} tr#{tr-html-id} #investor-share'
                },

                dataBlockHtmlId: 'investment-rounds',
                tableHtmlId: 'rounds',

                htmlTemplate: htmlTemplates.trRound
            })
        })

        this.investmentRounds.roundsTable.listeners.push(e => {
            // console.log(e)
            console.log(e.target.parentElement.parentElement.id)
        })


        // Agents //

        this.agents.agentsNumber.listeners.push(e => {
            this.changeNumOfTrUsingNumberInput({
                dataBlockName: 'agents',
                trsNumberCounter: 'agentsNumber',
                trsTable: 'agentsTable',

                tablePreElement: {
                    agentName: '#zbcc .data-block#{data-block-html-id} table#{table-html-id} tr#tr-html-id #agent-name',
                    agenShare: '#zbcc .data-block#{data-block-html-id} table#{table-html-id} tr#tr-html-id #agent-share',
                    tokensAmount: '#zbcc .data-block#{data-block-html-id} table#{table-html-id} tr#tr-html-id #tokens-amount'
                },

                dataBlockHtmlId: 'agents',
                tableHtmlId: 'agents',

                htmlTemplate: htmlTemplates.trAgent
            })
        })

        this.agents.agentsTable.listeners.push(e => {

        })


        // Pools //

        this.pools.poolTypesTable.listeners.push(e => {
            // if ()
            console.log(e)
        })

        this.pools.poolTypesTable.appendButtonListeners.push(e => {
            this.changeNumOfTrUsingCalcButtons({
                action: 'append'
            })
        })

        this.pools.poolTypesTable.removeButtonListeners.push(e => {
            this.changeNumOfTrUsingCalcButtons({
                action: 'remove',
                id: 1
            })
        })

        this.pools.poolsTable.listeners.push(e => {

        })


        // Vesting And Unlocking //

        this.vestingAndUnlocking.vestingTable.listeners.push(e => {

        })

        this.vestingAndUnlocking.unlockingTable.listeners.push(e => {

        })


        // Project Services //

        this.projectServices.staking.listeners.push(e => {

        })

        this.projectServices.farming.listeners.push(e => {

        })

        this.projectServices.serviceName.listeners.push(e => {

        })

        this.projectServices.projectServicesTable.listeners.push(e => {

        })


        // Token Circulation //

        this.tokenCirculation.actionsNumber.listeners.push(e => {

        })

        this.tokenCirculation.actionsTable.listeners.push(e => {

        })
    }
}



// $(document).ready(() => {

// })











































































        // this.vestingAndUnlocking = {
        //     vestingTable: {
        //         value: [
        //             {
        //                 id: 0,
        //                 agentName: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #agent-name')[0].value,
        //                 pool: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #pool')[0].value,
        //                 startVesting: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #start-vesting')[0].value,
        //                 endVesting: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #end-vesting')[0].value,
        //                 vestingCoefficient: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #vesting-coefficient')[0].value
        //             },
        //             {
        //                 id: 1,
        //                 agentName: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #agent-name')[0].value,
        //                 pool: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #pool')[0].value,
        //                 startVesting: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #start-vesting')[0].value,
        //                 endVesting: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #end-vesting')[0].value,
        //                 vestingCoefficient: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #vesting-coefficient')[0].value
        //             }
        //         ],
        //         element: $('#zbcc .data-block#vesting-and-unlocking table#vesting')[0],
        //         listeners: []
        //     },
        //     unlockingTable: {
        //         value: [
        //             {
        //                 id: 0,
        //                 agentName: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#0 #agent-name')[0].value,
        //                 startUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#0 #start-unlocking')[0].value,
        //                 endUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#0 #end-unlocking')[0].value,
        //                 initialUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#0 #initial-unlocking')[0].value
        //             },
        //             {
        //                 id: 1,
        //                 agentName: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#1 #agent-name')[0].value,
        //                 startUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#1 #start-unlocking')[0].value,
        //                 endUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#1 #end-unlocking')[0].value,
        //                 initialUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#1 #initial-unlocking')[0].value
        //             }
        //         ],
        //         element: $('#zbcc .data-block#vesting-and-unlocking table#unlocking')[0],
        //         listeners: []
        //     }
        // }

        // this.projectServices = {
        //     staking: {
        //         prevValue: $('#zbcc .data-block#project-services #staking')[0].value,
        //         value: $('#zbcc .data-block#project-services #staking')[0].value,
        //         element: $('#zbcc .data-block#project-services #staking')[0],
        //         listeners: []
        //     },
        //     farming: {
        //         prevValue: $('#zbcc .data-block#project-services #farming')[0].value,
        //         value: $('#zbcc .data-block#project-services #farming')[0].value,
        //         element: $('#zbcc .data-block#project-services #farming')[0],
        //         listeners: []
        //     },
        //     serviceName: {
        //         prevValue: $('#zbcc .data-block#project-services #service-name')[0].value,
        //         value: $('#zbcc .data-block#project-services #service-name')[0].value,
        //         element: $('#zbcc .data-block#project-services #service-name')[0],
        //         listeners: []
        //     },
        //     projectServicesTable: {
        //         value: [
        //             {
        //                 id: 0,
        //                 curveNumber: $('#zbcc .data-block#project-services table#project-services tr#0 #curve-number')[0].value,
        //                 salesStart: $('#zbcc .data-block#project-services table#project-services tr#0 #sales-start')[0].value,
        //                 salesEnd: $('#zbcc .data-block#project-services table#project-services tr#0 #sales-end')[0].value,
        //                 salesMin: $('#zbcc .data-block#project-services table#project-services tr#0 #sales-min')[0].value,
        //                 salesMax: $('#zbcc .data-block#project-services table#project-services tr#0 #sales-max')[0].value,
        //                 chooseAlgorithm: $('#zbcc .data-block#project-services table#project-services tr#0 #choose-algorithm')[0].value,
        //                 angularCoefficient: $('#zbcc .data-block#project-services table#project-services tr#0 #angular-coefficient')[0].value,
        //                 risingsCoefficient: $('#zbcc .data-block#project-services table#project-services tr#0 #risings-coefficient')[0].value,
        //             },
        //             {
        //                 id: 1,
        //                 curveNumber: $('#zbcc .data-block#project-services table#project-services tr#1 #curve-number')[0].value,
        //                 salesStart: $('#zbcc .data-block#project-services table#project-services tr#1 #sales-start')[0].value,
        //                 salesEnd: $('#zbcc .data-block#project-services table#project-services tr#1 #sales-end')[0].value,
        //                 salesMin: $('#zbcc .data-block#project-services table#project-services tr#1 #sales-min')[0].value,
        //                 salesMax: $('#zbcc .data-block#project-services table#project-services tr#1 #sales-max')[0].value,
        //                 chooseAlgorithm: $('#zbcc .data-block#project-services table#project-services tr#1 #choose-algorithm')[0].value,
        //                 angularCoefficient: $('#zbcc .data-block#project-services table#project-services tr#1 #angular-coefficient')[0].value,
        //                 risingsCoefficient: $('#zbcc .data-block#project-services table#project-services tr#1 #risings-coefficient')[0].value,
        //             },
        //             {
        //                 id: 2,
        //                 curveNumber: $('#zbcc .data-block#project-services table#project-services tr#2 #curve-number')[0].value,
        //                 salesStart: $('#zbcc .data-block#project-services table#project-services tr#2 #sales-start')[0].value,
        //                 salesEnd: $('#zbcc .data-block#project-services table#project-services tr#2 #sales-end')[0].value,
        //                 salesMin: $('#zbcc .data-block#project-services table#project-services tr#2 #sales-min')[0].value,
        //                 salesMax: $('#zbcc .data-block#project-services table#project-services tr#2 #sales-max')[0].value,
        //                 chooseAlgorithm: $('#zbcc .data-block#project-services table#project-services tr#2 #choose-algorithm')[0].value,
        //                 angularCoefficient: $('#zbcc .data-block#project-services table#project-services tr#2 #angular-coefficient')[0].value,
        //                 risingsCoefficient: $('#zbcc .data-block#project-services table#project-services tr#2 #risings-coefficient')[0].value,
        //             }
        //         ],
        //         element: $('#zbcc .data-block#project-services table#project-services')[0],
        //         listeners: []
        //     },
        // }

        // this.tokenCirculation = {
        //     actionsNumber: {
        //         prevValue: $('#zbcc .data-block#token-circulation #actions-number')[0].value,
        //         value: $('#zbcc .data-block#token-circulation #actions-number')[0].value,
        //         element: $('#zbcc .data-block#token-circulation #actions-number')[0],
        //         listeners: []
        //     },
        //     actionsTable: {
        //         value: [
        //             {
        //                 id: 0,
        //                 actionNumber: $('#zbcc .data-block#token-circulation table#token-circulation tr#0 #action-number')[0].value,
        //                 source: $('#zbcc .data-block#token-circulation table#token-circulation tr#0 #source')[0].value,
        //                 currencyType: $('#zbcc .data-block#token-circulation table#token-circulation tr#0 #currency-type')[0].value,
        //                 valuePercents: $('#zbcc .data-block#token-circulation table#token-circulation tr#0 #value-percents')[0].value,
        //                 destination: $('#zbcc .data-block#token-circulation table#token-circulation tr#0 #destination')[0].value,
        //                 preCondition: $('#zbcc .data-block#token-circulation table#token-circulation tr#0 #pre-condition')[0].value,
        //             },
        //             {
        //                 id: 1,
        //                 actionNumber: $('#zbcc .data-block#token-circulation table#token-circulation tr#1 #action-number')[0].value,
        //                 source: $('#zbcc .data-block#token-circulation table#token-circulation tr#1 #source')[0].value,
        //                 currencyType: $('#zbcc .data-block#token-circulation table#token-circulation tr#1 #currency-type')[0].value,
        //                 valuePercents: $('#zbcc .data-block#token-circulation table#token-circulation tr#1 #value-percents')[0].value,
        //                 destination: $('#zbcc .data-block#token-circulation table#token-circulation tr#1 #destination')[0].value,
        //                 preCondition: $('#zbcc .data-block#token-circulation table#token-circulation tr#1 #pre-condition')[0].value,
        //             },
        //             {
        //                 id: 2,
        //                 actionNumber: $('#zbcc .data-block#token-circulation table#token-circulation tr#2 #action-number')[0].value,
        //                 source: $('#zbcc .data-block#token-circulation table#token-circulation tr#2 #source')[0].value,
        //                 currencyType: $('#zbcc .data-block#token-circulation table#token-circulation tr#2 #currency-type')[0].value,
        //                 valuePercents: $('#zbcc .data-block#token-circulation table#token-circulation tr#2 #value-percents')[0].value,
        //                 destination: $('#zbcc .data-block#token-circulation table#token-circulation tr#2 #destination')[0].value,
        //                 preCondition: $('#zbcc .data-block#token-circulation table#token-circulation tr#2 #pre-condition')[0].value,
        //             }
        //         ],
        //         element: $('#zbcc .data-block#token-circulation table#token-circulation')[0],
        //         listeners: []
        //     }
        // }