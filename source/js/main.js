class formData {
    constructor() {
        this.declareStructure()
        this.initBaseEventListeners()
        this.initRuledEventsListeners()
    }

    addTr(params) {
        const dbName = params.dbName
        const trsNumber = params.trsNumber

        const dbId = params.dbId
        const tableId = params.tableId

        if (this[dbName][trsNumber].value > this[dbName][trsNumber].prevValue) {
            while (this[dbName][trsNumber].value > this[dbName][trsNumber].prevValue) {
                $('#zbcc #' + dbId + ' #' + tableId + '').append(
                    htmlTemplates.trPool
                    .replace('{id}', this[dbName][trsNumber].prevValue)
                    .replace('{number}', Number(this[dbName][trsNumber].prevValue) + 1)
                )

                this[dbName].poolsTable.value.push({
                    id: this[dbName][trsNumber].prevValue,
                    poolTitle: $('#zbcc #' + dbId + ' #' + tableId + ' tr#' + this[dbName][trsNumber].prevValue + '  #pool-title')[0].value,
                    poolType: $('#zbcc #' + dbId + ' #' + tableId + ' tr#' + this[dbName][trsNumber].prevValue + '  #pool-type')[0].value,
                    poolShare: $('#zbcc #' + dbId + ' #' + tableId + ' tr#' + this[dbName][trsNumber].prevValue + '  #pool-share')[0].value,
                    amount: $('#zbcc #' + dbId + ' #' + tableId + ' tr#' + this[dbName][trsNumber].prevValue + '  #amount')[0].value,
                })

                this[dbName][trsNumber].prevValue++
            }

        } else if (this[dbName][trsNumber].value < this[dbName][trsNumber].prevValue) {
            while (this[dbName][trsNumber].value < this[dbName][trsNumber].prevValue) {
                this[dbName].poolsTable.value.pop()
                $('#zbcc #' + dbId + ' #' + tableId + ' tr#' + (this[dbName][trsNumber].prevValue - 1)).remove()
                this[dbName][trsNumber].prevValue--
            }
        }
    }

    declareStructure() {
        this.initialData = {
            totalTokensAmount: {
                prevValue: $('#zbcc #initial-data-db #total-tokens-amount')[0].value,
                value: $('#zbcc #initial-data-db #total-tokens-amount')[0].value,
                element: $('#zbcc #initial-data-db #total-tokens-amount')[0],
                listeners: []
            },
            initialTokenPrice: {
                prevValue: $('#zbcc #initial-data-db #initial-token-price')[0].value,
                value: $('#zbcc #initial-data-db #initial-token-price')[0].value,
                element: $('#zbcc #initial-data-db #initial-token-price')[0],
                listeners: []
            },
            exchangeType: {
                prevValue: $('#zbcc #initial-data-db #exchange-type')[0].value,
                value: $('#zbcc #initial-data-db #exchange-type')[0].value,
                element: $('#zbcc #initial-data-db #exchange-type')[0],
                listeners: []
            },
            tradingFunction: {
                prevValue: $('#zbcc #initial-data-db #trading-function')[0].value,
                value: $('#zbcc #initial-data-db #trading-function')[0].value,
                element: $('#zbcc #initial-data-db #trading-function')[0],
                listeners: []
            },
            duration: {
                prevValue: $('#zbcc #initial-data-db #duration')[0].value,
                value: $('#zbcc #initial-data-db #duration')[0].value,
                element: $('#zbcc #initial-data-db #duration')[0],
                listeners: []
            }
        }

        this.investmentRounds = {
            roundsNumber: {
                prevValue: $('#zbcc #investment-rounds-db #rounds-number')[0].value,
                value: $('#zbcc #investment-rounds-db #rounds-number')[0].value,
                element: $('#zbcc #investment-rounds-db #rounds-number')[0],
                listeners: []
            },
            roundsTable: {
                value: [
                    {
                        id: 0,
                        roundTitle: $('#zbcc #investment-rounds-db #rounds-table tr#0 #round-title')[0].value,
                        fiat: $('#zbcc #investment-rounds-db #rounds-table tr#0 #fiat')[0].value,
                        tokenPrice: $('#zbcc #investment-rounds-db #rounds-table tr#0 #token-price')[0].value,
                        tokensAmount: $('#zbcc #investment-rounds-db #rounds-table tr#0 #tokens-amount')[0].value,
                        investorShare: $('#zbcc #investment-rounds-db #rounds-table tr#0 #investor-share')[0].value
                    },
                    {
                        id: 1,
                        roundTitle: $('#zbcc #investment-rounds-db #rounds-table tr#1 #round-title')[0].value,
                        fiat: $('#zbcc #investment-rounds-db #rounds-table tr#1 #fiat')[0].value,
                        tokenPrice: $('#zbcc #investment-rounds-db #rounds-table tr#1 #token-price')[0].value,
                        tokensAmount: $('#zbcc #investment-rounds-db #rounds-table tr#1 #tokens-amount')[0].value,
                        investorShare: $('#zbcc #investment-rounds-db #rounds-table tr#1 #investor-share')[0].value
                    }
                ],
                element: $('#zbcc #investment-rounds-db #rounds-table')[0],
                listeners: []
            }
        }

        this.agents = {
            agentsNumber: {
                prevValue: $('#zbcc #agents-db #agents-number')[0].value,
                value: $('#zbcc #agents-db #agents-number')[0].value,
                element: $('#zbcc #agents-db #agents-number')[0],
                listeners: []
            },
            agentsTable: {
                value: [
                    {
                        id: 0,
                        agentName: $('#zbcc #agents-db #agents-table tr#0 #agent-name')[0].value,
                        agenShare: $('#zbcc #agents-db #agents-table tr#0 #agent-share')[0].value,
                        tokensAmount: $('#zbcc #agents-db #agents-table tr#0 #tokens-amount')[0].value
                    },
                    {
                        id: 1,
                        agentName: $('#zbcc #agents-db #agents-table tr#1 #agent-name')[0].value,
                        agenShare: $('#zbcc #agents-db #agents-table tr#1 #agent-share')[0].value,
                        tokensAmount: $('#zbcc #agents-db #agents-table tr#1 #tokens-amount')[0].value
                    }
                ],
                element: $('#zbcc #agents-db #agents-table')[0],
                listeners: []
            }
        }

        this.pools = {
            poolsNumber: {
                prevValue: $('#zbcc #pools-db #pools-number')[0].value,
                value: $('#zbcc #pools-db #pools-number')[0].value,
                element: $('#zbcc #pools-db #pools-number')[0],
                listeners: []
            },
            poolType: {
                prevValue: $('#zbcc #pools-db #pool-type')[0].value,
                value: $('#zbcc #pools-db #pool-type')[0].value,
                element: $('#zbcc #pools-db #pool-type')[0],
                listeners: []
            },
            poolsTable: {
                value: [
                    {
                        id: 0,
                        poolTitle: $('#zbcc #pools-db #pools-table tr#0 #pool-title')[0].value,
                        poolType: $('#zbcc #pools-db #pools-table tr#0 #pool-type')[0].value,
                        poolShare: $('#zbcc #pools-db #pools-table tr#0 #pool-share')[0].value,
                        amount: $('#zbcc #pools-db #pools-table tr#0 #amount')[0].value,
                    },
                    {
                        id: 1,
                        poolTitle: $('#zbcc #pools-db #pools-table tr#1 #pool-title')[0].value,
                        poolType: $('#zbcc #pools-db #pools-table tr#1 #pool-type')[0].value,
                        poolShare: $('#zbcc #pools-db #pools-table tr#1 #pool-share')[0].value,
                        amount: $('#zbcc #pools-db #pools-table tr#1 #amount')[0].value,
                    }
                ],
                element: $('#zbcc #pools-db #pools-table')[0],
                listeners: []
            }
        }

        this.vestingAndUnlocking = {
            vestingsNumber: {
                prevValue: $('#zbcc #vesting-and-unlocking-db #vestings-number')[0].value,
                value: $('#zbcc #vesting-and-unlocking-db #vestings-number')[0].value,
                element: $('#zbcc #vesting-and-unlocking-db #vestings-number')[0],
                listeners: []
            },
            unlockingsNumber: {
                prevValue: $('#zbcc #vesting-and-unlocking-db #unlockings-number')[0].value,
                value: $('#zbcc #vesting-and-unlocking-db #unlockings-number')[0].value,
                element: $('#zbcc #vesting-and-unlocking-db #unlockings-number')[0],
                listeners: []
            },
            vestingTable: {
                value: [
                    {
                        id: 0,
                        agentName: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#0 #agent-name')[0].value,
                        pool: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#0 #pool')[0].value,
                        startVesting: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#0 #start-vesting')[0].value,
                        endVesting: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#0 #end-vesting')[0].value,
                        vestingCoefficient: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#0 #vesting-coefficient')[0].value
                    },
                    {
                        id: 1,
                        agentName: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#1 #agent-name')[0].value,
                        pool: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#1 #pool')[0].value,
                        startVesting: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#1 #start-vesting')[0].value,
                        endVesting: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#1 #end-vesting')[0].value,
                        vestingCoefficient: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#1 #vesting-coefficient')[0].value
                    }
                ],
                element: $('#zbcc #vesting-and-unlocking-db #vesting-table')[0],
                listeners: []
            },
            unlockingTable: {
                value: [
                    {
                        id: 0,
                        agentName: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#0 #agent-name')[0].value,
                        startUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#0 #start-unlocking')[0].value,
                        endUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#0 #end-unlocking')[0].value,
                        initialUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#0 #initial-unlocking')[0].value
                    },
                    {
                        id: 1,
                        agentName: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#1 #agent-name')[0].value,
                        startUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#1 #start-unlocking')[0].value,
                        endUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#1 #end-unlocking')[0].value,
                        initialUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#1 #initial-unlocking')[0].value
                    }
                ],
                element: $('#zbcc #vesting-and-unlocking-db #unlocking-table')[0],
                listeners: []
            }
        }

        this.projectServices = {
            staking: {
                prevValue: $('#zbcc #project-services-db #staking')[0].value,
                value: $('#zbcc #project-services-db #staking')[0].value,
                element: $('#zbcc #project-services-db #staking')[0],
                listeners: []
            },
            farming: {
                prevValue: $('#zbcc #project-services-db #farming')[0].value,
                value: $('#zbcc #project-services-db #farming')[0].value,
                element: $('#zbcc #project-services-db #farming')[0],
                listeners: []
            },
            serviceName: {
                prevValue: $('#zbcc #project-services-db #service-name')[0].value,
                value: $('#zbcc #project-services-db #service-name')[0].value,
                element: $('#zbcc #project-services-db #service-name')[0],
                listeners: []
            },
            projectServicesTable: {
                value: [
                    {
                        id: 0,
                        curveNumber: $('#zbcc #project-services-db #project-services-table tr#0 #curve-number')[0].value,
                        salesStart: $('#zbcc #project-services-db #project-services-table tr#0 #sales-start')[0].value,
                        salesEnd: $('#zbcc #project-services-db #project-services-table tr#0 #sales-end')[0].value,
                        salesMin: $('#zbcc #project-services-db #project-services-table tr#0 #sales-min')[0].value,
                        salesMax: $('#zbcc #project-services-db #project-services-table tr#0 #sales-max')[0].value,
                        chooseAlgorithm: $('#zbcc #project-services-db #project-services-table tr#0 #choose-algorithm')[0].value,
                        angularCoefficient: $('#zbcc #project-services-db #project-services-table tr#0 #angular-coefficient')[0].value,
                        risingsCoefficient: $('#zbcc #project-services-db #project-services-table tr#0 #risings-coefficient')[0].value,
                    },
                    {
                        id: 1,
                        curveNumber: $('#zbcc #project-services-db #project-services-table tr#1 #curve-number')[0].value,
                        salesStart: $('#zbcc #project-services-db #project-services-table tr#1 #sales-start')[0].value,
                        salesEnd: $('#zbcc #project-services-db #project-services-table tr#1 #sales-end')[0].value,
                        salesMin: $('#zbcc #project-services-db #project-services-table tr#1 #sales-min')[0].value,
                        salesMax: $('#zbcc #project-services-db #project-services-table tr#1 #sales-max')[0].value,
                        chooseAlgorithm: $('#zbcc #project-services-db #project-services-table tr#1 #choose-algorithm')[0].value,
                        angularCoefficient: $('#zbcc #project-services-db #project-services-table tr#1 #angular-coefficient')[0].value,
                        risingsCoefficient: $('#zbcc #project-services-db #project-services-table tr#1 #risings-coefficient')[0].value,
                    },
                    {
                        id: 2,
                        curveNumber: $('#zbcc #project-services-db #project-services-table tr#2 #curve-number')[0].value,
                        salesStart: $('#zbcc #project-services-db #project-services-table tr#2 #sales-start')[0].value,
                        salesEnd: $('#zbcc #project-services-db #project-services-table tr#2 #sales-end')[0].value,
                        salesMin: $('#zbcc #project-services-db #project-services-table tr#2 #sales-min')[0].value,
                        salesMax: $('#zbcc #project-services-db #project-services-table tr#2 #sales-max')[0].value,
                        chooseAlgorithm: $('#zbcc #project-services-db #project-services-table tr#2 #choose-algorithm')[0].value,
                        angularCoefficient: $('#zbcc #project-services-db #project-services-table tr#2 #angular-coefficient')[0].value,
                        risingsCoefficient: $('#zbcc #project-services-db #project-services-table tr#2 #risings-coefficient')[0].value,
                    }
                ],
                element: $('#zbcc #project-services-db #project-services-table')[0],
                listeners: []
            },
        }

        this.tokenCirculation = {
            actionsNumber: {
                prevValue: $('#zbcc #token-circulation-db #actions-number')[0].value,
                value: $('#zbcc #token-circulation-db #actions-number')[0].value,
                element: $('#zbcc #token-circulation-db #actions-number')[0],
                listeners: []
            },
            actionsTable: {
                value: [
                    {
                        id: 0,
                        actionNumber: $('#zbcc #token-circulation-db #token-circulation-table tr#0 #action-number')[0].value,
                        source: $('#zbcc #token-circulation-db #token-circulation-table tr#0 #source')[0].value,
                        currencyType: $('#zbcc #token-circulation-db #token-circulation-table tr#0 #currency-type')[0].value,
                        valuePercents: $('#zbcc #token-circulation-db #token-circulation-table tr#0 #value-percents')[0].value,
                        destination: $('#zbcc #token-circulation-db #token-circulation-table tr#0 #destination')[0].value,
                        preCondition: $('#zbcc #token-circulation-db #token-circulation-table tr#0 #pre-condition')[0].value,
                    },
                    {
                        id: 1,
                        actionNumber: $('#zbcc #token-circulation-db #token-circulation-table tr#1 #action-number')[0].value,
                        source: $('#zbcc #token-circulation-db #token-circulation-table tr#1 #source')[0].value,
                        currencyType: $('#zbcc #token-circulation-db #token-circulation-table tr#1 #currency-type')[0].value,
                        valuePercents: $('#zbcc #token-circulation-db #token-circulation-table tr#1 #value-percents')[0].value,
                        destination: $('#zbcc #token-circulation-db #token-circulation-table tr#1 #destination')[0].value,
                        preCondition: $('#zbcc #token-circulation-db #token-circulation-table tr#1 #pre-condition')[0].value,
                    },
                    {
                        id: 2,
                        actionNumber: $('#zbcc #token-circulation-db #token-circulation-table tr#2 #action-number')[0].value,
                        source: $('#zbcc #token-circulation-db #token-circulation-table tr#2 #source')[0].value,
                        currencyType: $('#zbcc #token-circulation-db #token-circulation-table tr#2 #currency-type')[0].value,
                        valuePercents: $('#zbcc #token-circulation-db #token-circulation-table tr#2 #value-percents')[0].value,
                        destination: $('#zbcc #token-circulation-db #token-circulation-table tr#2 #destination')[0].value,
                        preCondition: $('#zbcc #token-circulation-db #token-circulation-table tr#2 #pre-condition')[0].value,
                    }
                ],
                element: $('#zbcc #token-circulation-db #token-circulation-table')[0],
                listeners: []
            }
        }
    }

    initBaseEventListeners() {
        // Initial Data //

        // on change in inputs
        Object.keys(this.initialData).forEach(key => {
            $(this.initialData[key].element).on('change', e => {
                this.initialData[key].prevValue = this.initialData[key].value
                this.initialData[key].value = e.currentTarget.value

                this.initialData[key].listeners.forEach(func => {
                    func(e)
                })
            })
        })


        // Investment Rounds //

        // on change rounds-number
        $(this.investmentRounds.roundsNumber.element).on('change', e => {
            this.investmentRounds.roundsNumber.prevValue = this.investmentRounds.roundsNumber.value
            this.investmentRounds.roundsNumber.value = e.currentTarget.value

            this.investmentRounds.roundsNumber.listeners.forEach(func => {
                func(e)
            })
        })

        // on change in table
        $(this.investmentRounds.roundsTable.element).on('change', e => {
            this.investmentRounds.roundsTable.listeners.forEach(func => {
                func(e)
            })
        })


        // Agents //

        // on change rounds-number
        $(this.agents.agentsNumber.element).on('change', e => {
            this.agents.agentsNumber.prevValue = this.agents.agentsNumber.value
            this.agents.agentsNumber.value = e.currentTarget.value

            this.agents.agentsNumber.listeners.forEach(func => {
                func(e)
            })
        })

        // on change in table
        $(this.agents.agentsTable.element).on('change', e => {
            this.agents.agentsTable.listeners.forEach(func => {
                func(e)
            })
        })


        // Pools //

        // on change pools-number
        $(this.pools.poolsNumber.element).on('change', e => {
            this.pools.poolsNumber.prevValue = this.pools.poolsNumber.value
            this.pools.poolsNumber.value = e.currentTarget.value

            this.pools.poolsNumber.listeners.forEach(func => {
                func(e)
            })
        })

        // on change pool-type
        $(this.pools.poolType.element).on('change', e => {
            this.pools.poolType.prevValue = this.pools.poolType.value
            this.pools.poolType.value = e.currentTarget.value

            this.pools.poolType.listeners.forEach(func => {
                func(e)
            })
        })

        // on change in table
        $(this.pools.poolsTable.element).on('change', e => {
            this.pools.poolsTable.listeners.forEach(func => {
                func(e)
            })
        })


        // Vesting And Unlocking //

        // vesting
        $(this.vestingAndUnlocking.vestingsNumber.element).on('change', e => {
            this.vestingAndUnlocking.vestingsNumber.prevValue = this.vestingAndUnlocking.vestingsNumber.value
            this.vestingAndUnlocking.vestingsNumber.value = e.currentTarget.value

            this.vestingAndUnlocking.vestingsNumber.listeners.forEach(func => {
                func(e)
            })
        })

        // unlocking
        $(this.vestingAndUnlocking.unlockingsNumber.element).on('change', e => {
            this.vestingAndUnlocking.unlockingsNumber.prevValue = this.vestingAndUnlocking.unlockingsNumber.value
            this.vestingAndUnlocking.unlockingsNumber.value = e.currentTarget.value

            this.vestingAndUnlocking.unlockingsNumber.listeners.forEach(func => {
                func(e)
            })
        })

        // vesting table
        $(this.vestingAndUnlocking.vestingTable.element).on('change', e => {
            this.vestingAndUnlocking.vestingTable.listeners.forEach(func => {
                func(e)
            })
        })

        // unlocking table
        $(this.vestingAndUnlocking.unlockingTable.element).on('change', e => {
            this.vestingAndUnlocking.unlockingTable.listeners.forEach(func => {
                func(e)
            })
        })


        // Project Services //

        // stacking
        $(this.projectServices.staking.element).on('change', e => {
            this.projectServices.staking.prevValue = this.projectServices.staking.value
            this.projectServices.staking.value = e.currentTarget.value

            this.projectServices.staking.listeners.forEach(func => {
                func(e)
            })
        })

        // farming
        $(this.projectServices.farming.element).on('change', e => {
            this.projectServices.farming.prevValue = this.projectServices.farming.value
            this.projectServices.farming.value = e.currentTarget.value

            this.projectServices.farming.listeners.forEach(func => {
                func(e)
            })
        })

        // serviceName
        $(this.projectServices.serviceName.element).on('change', e => {
            this.projectServices.serviceName.prevValue = this.projectServices.serviceName.value
            this.projectServices.serviceName.value = e.currentTarget.value

            this.projectServices.serviceName.listeners.forEach(func => {
                func(e)
            })
        })

        // project-services-table
        $(this.projectServices.projectServicesTable.element).on('change', e => {
            this.projectServices.projectServicesTable.listeners.forEach(func => {
                func(e)
            })
        })


        // Token Circulation

        // add action
        $(this.tokenCirculation.actionsNumber.element).on('change', e => {
            this.tokenCirculation.actionsNumber.prevValue = this.tokenCirculation.actionsNumber.value
            this.tokenCirculation.actionsNumber.value = e.currentTarget.value

            this.tokenCirculation.actionsNumber.listeners.forEach(func => {
                func(e)
            })
        })

        // table
        $(this.tokenCirculation.actionsTable.element).on('change', e => {
            this.tokenCirculation.actionsTable.listeners.forEach(func => {
                func(e)
            })
        })
    }

    initRuledEventsListeners() {
        // Initial Data //

        this.initialData.totalTokensAmount.listeners.push(e => {
            // this.investmentRounds.roundsTable.value.forEach(round => {
            //     if (this.investmentRounds.roundsTable.value[round.id].tokenPrice !== '' && this.investmentRounds.roundsTable.value[round.id].investorShare !== '%') {
            //         $('#zbcc #investment-rounds-db #rounds-table tr#' + round.id + ' #tokens-amount').value(
            //             (this.initialData.totalTokensAmount * this.investmentRounds.roundsTable.value[round.id].investorShare) / 100
            //         )
            //         $('#zbcc #investment-rounds-db #rounds-table tr#' + round.id + ' #fiat').value(
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
            if (this.investmentRounds.roundsNumber.value > this.investmentRounds.roundsNumber.prevValue) {
                while (this.investmentRounds.roundsNumber.value > this.investmentRounds.roundsNumber.prevValue) {
                    $('#zbcc  #investment-rounds-db #rounds-table').append(
                        htmlTemplates.trRound
                        .replace('{id}', this.investmentRounds.roundsNumber.prevValue)
                        .replace('{number}', Number(this.investmentRounds.roundsNumber.prevValue) + 1)
                    )

                    this.investmentRounds.roundsTable.value.push({
                        id: this.investmentRounds.roundsNumber.prevValue,
                        roundTitle: $('#zbcc #investment-rounds-db #rounds-table tr#' + this.investmentRounds.roundsNumber.prevValue + ' #round-title')[0].value,
                        fiat: $('#zbcc #investment-rounds-db #rounds-table tr#' + this.investmentRounds.roundsNumber.prevValue + ' #fiat')[0].value,
                        tokenPrice: $('#zbcc #investment-rounds-db #rounds-table tr#' + this.investmentRounds.roundsNumber.prevValue + ' #token-price')[0].value,
                        tokensAmount: $('#zbcc #investment-rounds-db #rounds-table tr#' + this.investmentRounds.roundsNumber.prevValue + ' #tokens-amount')[0].value,
                        investorShare: $('#zbcc #investment-rounds-db #rounds-table tr#' + this.investmentRounds.roundsNumber.prevValue + ' #investor-share')[0].value
                    })

                    this.investmentRounds.roundsNumber.prevValue++
                }

            } else if (this.investmentRounds.roundsNumber.value < this.investmentRounds.roundsNumber.prevValue) {
                while (this.investmentRounds.roundsNumber.value < this.investmentRounds.roundsNumber.prevValue) {
                    this.investmentRounds.roundsTable.value.pop()
                    $('#zbcc #investment-rounds-db #rounds-table tr#' + (this.investmentRounds.roundsNumber.prevValue - 1)).remove()
                    this.investmentRounds.roundsNumber.prevValue--
                }
            }
        })

        this.investmentRounds.roundsTable.listeners.push(e => {
            // console.log(e)
            console.log(e.target.parentElement.parentElement.id)
        })


        // Agents //

        this.agents.agentsNumber.listeners.push(e => {
            if (this.agents.agentsNumber.value > this.agents.agentsNumber.prevValue) {
                while (this.agents.agentsNumber.value > this.agents.agentsNumber.prevValue) {
                    $('#zbcc #agents-db #agents-table').append(
                        htmlTemplates.trAgent
                        .replace('{id}', this.agents.agentsNumber.prevValue)
                        .replace('{number}', Number(this.agents.agentsNumber.prevValue) + 1)
                    )

                    this.agents.agentsTable.value.push({
                        id: this.agents.agentsNumber.prevValue,
                        agentName: $('#zbcc #agents-db #agents-table tr#' + this.agents.agentsNumber.prevValue + ' #agent-name')[0].value,
                        agenShare: $('#zbcc #agents-db #agents-table tr#' + this.agents.agentsNumber.prevValue + ' #agent-share')[0].value,
                        tokensAmount: $('#zbcc #agents-db #agents-table tr#' + this.agents.agentsNumber.prevValue + ' #tokens-amount')[0].value
                    })

                    this.agents.agentsNumber.prevValue++
                }

            } else if (this.agents.agentsNumber.value < this.agents.agentsNumber.prevValue) {
                while (this.agents.agentsNumber.value < this.agents.agentsNumber.prevValue) {
                    this.agents.agentsTable.value.pop()
                    $('#zbcc #agents-db #agents-table tr#' + (this.agents.agentsNumber.prevValue - 1)).remove()
                    this.agents.agentsNumber.prevValue--
                }
            }
        })

        this.agents.agentsTable.listeners.push(e => {

        })


        // Pools //

        this.pools.poolsNumber.listeners.push(e => {
            if (this.pools.poolsNumber.value > this.pools.poolsNumber.prevValue) {
                while (this.pools.poolsNumber.value > this.pools.poolsNumber.prevValue) {
                    $('#zbcc #pools-db #pools-table').append(
                        htmlTemplates.trPool
                        .replace('{id}', this.pools.poolsNumber.prevValue)
                        .replace('{number}', Number(this.pools.poolsNumber.prevValue) + 1)
                    )

                    this.pools.poolsTable.value.push({
                        id: this.pools.poolsNumber.prevValue,
                        poolTitle: $('#zbcc #pools-db #pools-table tr#' + this.pools.poolsNumber.prevValue + '  #pool-title')[0].value,
                        poolType: $('#zbcc #pools-db #pools-table tr#' + this.pools.poolsNumber.prevValue + '  #pool-type')[0].value,
                        poolShare: $('#zbcc #pools-db #pools-table tr#' + this.pools.poolsNumber.prevValue + '  #pool-share')[0].value,
                        amount: $('#zbcc #pools-db #pools-table tr#' + this.pools.poolsNumber.prevValue + '  #amount')[0].value,
                    })

                    this.pools.poolsNumber.prevValue++
                }

            } else if (this.pools.poolsNumber.value < this.pools.poolsNumber.prevValue) {
                while (this.pools.poolsNumber.value < this.pools.poolsNumber.prevValue) {
                    this.pools.poolsTable.value.pop()
                    $('#zbcc #pools-db #pools-table tr#' + (this.pools.poolsNumber.prevValue - 1)).remove()
                    this.pools.poolsNumber.prevValue--
                }
            }
        })

        this.pools.poolType.listeners.push(e => {

        })

        this.pools.poolsTable.listeners.push(e => {

        })


        // Vesting And Unlocking //

        this.vestingAndUnlocking.vestingsNumber.listeners.push(e => {
            if (this.vestingAndUnlocking.vestingsNumber.value > this.vestingAndUnlocking.vestingsNumber.prevValue) {
                while (this.vestingAndUnlocking.vestingsNumber.value > this.vestingAndUnlocking.vestingsNumber.prevValue) {
                    $('#zbcc #vesting-and-unlocking-db #vesting-table').append(
                        htmlTemplates.trVesting
                        .replace('{id}', this.vestingAndUnlocking.vestingsNumber.prevValue)
                        .replace('{number}', Number(this.vestingAndUnlocking.vestingsNumber.prevValue) + 1)
                    )

                    this.vestingAndUnlocking.vestingTable.value.push({
                        id: this.vestingAndUnlocking.vestingsNumber.prevValue,
                        agentName: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#' + this.vestingAndUnlocking.vestingsNumber.prevValue + ' #agent-name'),
                        pool: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#' + this.vestingAndUnlocking.vestingsNumber.prevValue + ' #pool'),
                        startVesting: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#' + this.vestingAndUnlocking.vestingsNumber.prevValue + ' #start-vesting'),
                        endVesting: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#' + this.vestingAndUnlocking.vestingsNumber.prevValue + ' #end-vesting'),
                        vestingCoefficient: $('#zbcc #vesting-and-unlocking-db #vesting-table tr#' + this.vestingAndUnlocking.vestingsNumber.prevValue + ' #vesting-coefficient')
                    })

                    this.vestingAndUnlocking.vestingsNumber.prevValue++
                }

            } else if (this.vestingAndUnlocking.vestingsNumber.value < this.vestingAndUnlocking.vestingsNumber.prevValue) {
                while (this.vestingAndUnlocking.vestingsNumber.value < this.vestingAndUnlocking.vestingsNumber.prevValue) {
                    this.vestingAndUnlocking.vestingTable.value.pop()
                    $('#zbcc #vesting-and-unlocking-db #vesting-table tr#' + (this.vestingAndUnlocking.vestingsNumber.prevValue - 1)).remove()
                    this.vestingAndUnlocking.vestingsNumber.prevValue--
                }
            }
        })

        this.vestingAndUnlocking.unlockingsNumber.listeners.push(e => {
            if (this.vestingAndUnlocking.unlockingsNumber.value > this.vestingAndUnlocking.unlockingsNumber.prevValue) {
                while (this.vestingAndUnlocking.unlockingsNumber.value > this.vestingAndUnlocking.unlockingsNumber.prevValue) {
                    $('#zbcc #vesting-and-unlocking-db #unlocking-table').append(
                        htmlTemplates.trUnlocking
                        .replace('{id}', this.vestingAndUnlocking.unlockingsNumber.prevValue)
                        .replace('{number}', Number(this.vestingAndUnlocking.unlockingsNumber.prevValue) + 1)
                    )

                    this.vestingAndUnlocking.unlockingTable.value.push({
                        id: this.vestingAndUnlocking.unlockingsNumber.prevValue,
                        agentName: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#' + this.vestingAndUnlocking.unlockingsNumber.prevValue + ' #agent-name'),
                        startUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#' + this.vestingAndUnlocking.unlockingsNumber.prevValue + ' #start-unlocking'),
                        endUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#' + this.vestingAndUnlocking.unlockingsNumber.prevValue + ' #end-unlocking'),
                        initialUnlocking: $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#' + this.vestingAndUnlocking.unlockingsNumber.prevValue + ' #initial-unlocking')
                    })

                    this.vestingAndUnlocking.unlockingsNumber.prevValue++
                }

            } else if (this.vestingAndUnlocking.unlockingsNumber.value < this.vestingAndUnlocking.unlockingsNumber.prevValue) {
                while (this.vestingAndUnlocking.unlockingsNumber.value < this.vestingAndUnlocking.unlockingsNumber.prevValue) {
                    this.vestingAndUnlocking.unlockingTable.value.pop()
                    $('#zbcc #vesting-and-unlocking-db #unlocking-table tr#' + (this.vestingAndUnlocking.unlockingsNumber.prevValue - 1)).remove()
                    this.vestingAndUnlocking.unlockingsNumber.prevValue--
                }
            }
        })

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
            if (this.tokenCirculation.actionsNumber.value > this.tokenCirculation.actionsNumber.prevValue) {
                while (this.tokenCirculation.actionsNumber.value > this.tokenCirculation.actionsNumber.prevValue) {
                    $('#zbcc #token-circulation-db #token-circulation-table').append(
                        htmlTemplates.trAction
                        .replace('{id}', this.tokenCirculation.actionsNumber.prevValue)
                        .replace('{number}', Number(this.tokenCirculation.actionsNumber.prevValue) + 1)
                    )

                    this.tokenCirculation.actionsTable.value.push({
                        id: this.tokenCirculation.actionsNumber.prevValue,

                        actionNumber: $('#zbcc #token-circulation-db #token-circulation-table tr#' + this.tokenCirculation.actionsNumber.prevValue + ' #action-number')[0].value,
                        source: $('#zbcc #token-circulation-db #token-circulation-table tr#' + this.tokenCirculation.actionsNumber.prevValue + ' #source')[0].value,
                        currencyType: $('#zbcc #token-circulation-db #token-circulation-table tr#' + this.tokenCirculation.actionsNumber.prevValue + ' #currency-type')[0].value,
                        valuePercents: $('#zbcc #token-circulation-db #token-circulation-table tr#' + this.tokenCirculation.actionsNumber.prevValue + ' #value-percents')[0].value,
                        destination: $('#zbcc #token-circulation-db #token-circulation-table tr#' + this.tokenCirculation.actionsNumber.prevValue + ' #destination')[0].value,
                        preCondition: $('#zbcc #token-circulation-db #token-circulation-table tr#' + this.tokenCirculation.actionsNumber.prevValue + ' #pre-condition')[0].value,
                    })

                    this.tokenCirculation.actionsNumber.prevValue++
                }

            } else if (this.tokenCirculation.actionsNumber.value < this.tokenCirculation.actionsNumber.prevValue) {
                while (this.tokenCirculation.actionsNumber.value < this.tokenCirculation.actionsNumber.prevValue) {
                    this.tokenCirculation.actionsTable.value.pop()
                    $('#zbcc #token-circulation-db #token-circulation-table tr#' + (this.tokenCirculation.actionsNumber.prevValue - 1)).remove()
                    this.tokenCirculation.actionsNumber.prevValue--
                }
            }
        })

        this.tokenCirculation.actionsTable.listeners.push(e => {

        })
    }
}


const form = new formData()
console.log(form)
// $(document).ready(() => {

// })
