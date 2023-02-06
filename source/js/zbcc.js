class zbccForm {
    constructor(htmlTemplates) {
        this.dataBlocks = {}

        this.htmlTemplates = htmlTemplates

        this.declareDataBlocks()
    }

    declareDataBlocks() {
        this.dataBlocks['initialData'] = {
            inputs: {
                totalTokensAmount: new NumberInput({ element: $('#zbcc-inputs .data-block#initial-data #total-tokens-amount')[0], dataType: 'number', isUnic: false }),
                initialTokenPrice: new NumberInput({ element: $('#zbcc-inputs .data-block#initial-data #initial-token-price')[0], dataType: 'number', isUnic: false }),
                exchangeType: new SelectInput({ element: $('#zbcc-inputs .data-block#initial-data #exchange-type')[0], dataType: 'select', isUnic: false, allowedValues: ['decentralized', 'centralized'] }),
                tradingFunction: new SelectInput({ element: $('#zbcc-inputs .data-block#initial-data #trading-function')[0], dataType: 'select', isUnic: false, allowedValues: ['increasing', 'decreasing', 'volatility'] }),
                duration: new NumberInput({ element: $('#zbcc-inputs .data-block#initial-data #duration')[0], dataType: 'number', isUnic: false })
            }
        }

        this.dataBlocks['investmentRounds'] = {
            optionsForSelectInputs: {},
            tables: {
                rounds: new NumerableTable({
                    element: $('#zbcc-inputs .data-block#investment-rounds .inputs-table#rounds table')[0],
                    numerableInput: new NumberInput({ element: $('#zbcc-inputs .data-block#investment-rounds #rounds-number')[0], dataType: 'number', isUnic: false }),

                    row: {
                        htmlTemplate: this.htmlTemplates.trInvestmentRound,
                        trsSelector: '#zbcc-inputs .data-block#investment-rounds .inputs-table#rounds table tr[id]',
                        inputsSelectors: {
                            roundTitle: '#zbcc-inputs .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #round-title',
                            fiat: '#zbcc-inputs .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #fiat',
                            tokenPrice: '#zbcc-inputs .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #token-price',
                            tokensAmount: '#zbcc-inputs .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #tokens-amount',
                            investorShare: '#zbcc-inputs .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #investor-share',
                        },
                        inputsTypes: {
                            roundTitle: 'text',
                            fiat: 'text',
                            tokenPrice: 'text',
                            tokensAmount: 'text',
                            investorShare: 'text',
                        },
                        unicInputs: [
                            'roundTitle'
                        ],
                    }
                })
            }
        }

        this.dataBlocks['agents'] = {
            tables: {
                agents: new NumerableTable({
                    element: $('#zbcc-inputs .data-block#agents .inputs-table#agents table')[0],

                    numerableInput: new NumberInput({ element: $('#zbcc-inputs .data-block#agents #agents-number')[0], dataType: 'number', isUnic: false }),

                    row: {
                        htmlTemplate: this.htmlTemplates.trAgent,
                        trsSelector: '#zbcc-inputs .data-block#agents .inputs-table#agents table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc-inputs .data-block#agents .inputs-table#agents table tr#{tr-id} #agent-name',
                            agenShare: '#zbcc-inputs .data-block#agents .inputs-table#agents table tr#{tr-id} #agent-share',
                            tokensAmount: '#zbcc-inputs .data-block#agents .inputs-table#agents table tr#{tr-id} #tokens-amount',
                        },
                        inputsTypes: {
                            agentName: 'text',
                            agenShare: 'number',
                            tokensAmount: 'number',
                        },
                        unicInputs: [
                            'agentName'
                        ],
                        dataForSelectInputs: {
                            agentName: {
                                inputId: 'agent-name',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                optionPrevSelector: 'option[value="{value}"][id={id}]',
                                selects: [
                                    '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#vesting table tr[id] #agent-name',
                                    '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#unlocking table tr[id] #agent-name'
                                ]
                            }
                        }
                    }
                })
            }
        }

        this.dataBlocks['pools'] = {
            tables: {
                poolTypes: new CalcableTable({
                    element: $('#zbcc-inputs .data-block#pools .inputs-table#pool-types table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trPoolType,
                        trsSelector: '#zbcc-inputs .data-block#pools .inputs-table#pool-types table tr[id]',
                        inputsSelectors: {
                            poolNumber: '#zbcc-inputs .data-block#pools .inputs-table#pool-types table tr#{tr-id} #pool-number',
                            poolType: '#zbcc-inputs .data-block#pools .inputs-table#pool-types table tr#{tr-id} #pool-type',
                        },
                        inputsTypes: {
                            poolNumber: 'number',
                            poolType: 'text',
                        },
                        unicInputs: [
                            'poolType',
                        ],
                        dataForSelectInputs: {
                            poolType: {
                                inputId: 'pool-type',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                optionPrevSelector: 'option[value="{value}"][id="{id}"]',
                                selects: [
                                    '#zbcc-inputs .data-block#pools .inputs-table#pools table tr[id] #pool-type'
                                ]
                            }
                        }
                    }
                }),
                pools: new CalcableTable({
                    element: $('#zbcc-inputs .data-block#pools .inputs-table#pools table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trPool,
                        trsSelector: '#zbcc-inputs .data-block#pools .inputs-table#pools table tr[id]',
                        inputsSelectors: {
                            poolTitle: '#zbcc-inputs .data-block#pools .inputs-table#pools table tr#{tr-id} #pool-title',
                            poolType: '#zbcc-inputs .data-block#pools .inputs-table#pools table tr#{tr-id} #pool-type',
                            poolShare: '#zbcc-inputs .data-block#pools .inputs-table#pools table tr#{tr-id} #pool-share',
                            amount: '#zbcc-inputs .data-block#pools .inputs-table#pools table tr#{tr-id} #amount',
                        },
                        inputsTypes: {
                            poolTitle: 'text',
                            poolType: 'select',
                            poolShare: 'text',
                            amount: 'text',
                        },
                        unicInputs: [
                            'poolTitle',
                        ],
                        importOptionsFrom: {
                            poolTypes: {
                                replaceInTrPool: '{pool-types-options}',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                byOptionsUsingSelector: '#zbcc-inputs .data-block#pools .inputs-table#pool-types table tr[id] #pool-type'
                            }
                        }
                    }
                })
            }
        },

        this.dataBlocks['vestingAndUnlocking'] = new UnhiddableTables({
            cssClass: 'unhidden',

            unhidders: {
                vesting: $('#zbcc-inputs .data-block#vesting-and-unlocking button.unhidder#show-vesting')[0],
                unlocking: $('#zbcc-inputs .data-block#vesting-and-unlocking button.unhidder#show-unlocking')[0],
            },
            tables: {
                vesting: new CalcableTable({
                    element: $('#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#vesting table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trVesting,
                        trsSelector: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#vesting table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #agent-name',
                            pool: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #pool',
                            startVesting: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #start-vesting',
                            endVesting: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #end-vesting',
                            vestingCoefficient: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #vesting-coefficient',
                        },
                        inputsTypes: {
                            agentName: 'text',
                            pool: 'text',
                            startVesting: 'text',
                            endVesting: 'text',
                            vestingCoefficient: 'text',
                        }

                    }
                }),
                unlocking: new CalcableTable({
                    element: $('#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#unlocking table')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trUnlocking,
                        trsSelector: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#unlocking table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #agent-name',
                            startUnlocking: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #start-unlocking',
                            endUnlocking: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #end-unlocking',
                            initialUnlocking: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #initial-unlocking',
                        },
                        inputsTypes: {
                            agentName: 'text',
                            startUnlocking: 'text',
                            endUnlocking: 'text',
                            initialUnlocking: 'text',
                        }
                    }
                })
            }
        })

        // this.dataBlocks['tokenCirculation'] = new UnhiddableTables({

        // })

        this.dataBlocks['tokenCirculation'] = new UnhiddableTables({
            cssClass: 'unhidden',
            unhidders: {
                actions: $('#zbcc-inputs .data-block#token-circulation button.unhidder#show-actions')[0],
            },
            tables: {
                actions: new CalcableTable({
                    element: $('#zbcc-inputs .data-block#token-circulation .inputs-table#actions table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trAction,
                        trsSelector: '#zbcc-inputs .data-block#token-circulation .inputs-table#actions table tr[id]',
                        inputsSelectors: {
                            actionNumber: '#zbcc-inputs .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #action-number',
                            source: '#zbcc-inputs .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #source',
                            currencyType: '#zbcc-inputs .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #currency-type',
                            valuePercents: '#zbcc-inputs .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #value-percents',
                            destionation: '#zbcc-inputs .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #destination',
                            preCondition: '#zbcc-inputs .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #pre-condition',
                        },
                        inputsTypes: {
                            actionNumber: 'text',
                            source: 'text',
                            currencyType: 'text',
                            valuePercents: 'text',
                            destionation: 'text',
                            preCondition: 'text',
                        },
                        unicInputs: [
                            'actionNumber'
                        ]
                    }
                })
            }
        })
    }
}