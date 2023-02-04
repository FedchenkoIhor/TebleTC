class zbccForm {
    constructor(htmlTemplates) {
        this.dataBlocks = {}

        this.htmlTemplates = htmlTemplates

        this.declareDataBlocks()
    }

    declareDataBlocks() {
        this.dataBlocks['initialData'] = {
            inputs: {
                totalTokensAmount: new NumberInput({ element: $('#zbcc .data-block#initial-data #total-tokens-amount')[0], dataType: 'number', isUnic: false }),
                initialTokenPrice: new NumberInput({ element: $('#zbcc .data-block#initial-data #initial-token-price')[0], dataType: 'number', isUnic: false }),
                exchangeType: new SelectInput({ element: $('#zbcc .data-block#initial-data #exchange-type')[0], dataType: 'select', isUnic: false, allowedValues: ['decentralized', 'centralized'] }),
                tradingFunction: new SelectInput({ element: $('#zbcc .data-block#initial-data #trading-function')[0], dataType: 'select', isUnic: false, allowedValues: ['increasing', 'decreasing', 'volatility'] }),
                duration: new NumberInput({ element: $('#zbcc .data-block#initial-data #duration')[0], dataType: 'number', isUnic: false })
            }
        }

        this.dataBlocks['investmentRounds'] = {
            optionsForSelectInputs: {},
            tables: {
                rounds: new NumerableTable({
                    element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table')[0],
                    numerableInput: new NumberInput({ element: $('#zbcc .data-block#investment-rounds #rounds-number')[0], dataType: 'number', isUnic: false }),

                    row: {
                        htmlTemplate: this.htmlTemplates.trInvestmentRound,
                        trsSelector: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr[id]',
                        inputsSelectors: {
                            roundTitle: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #round-title',
                            fiat: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #fiat',
                            tokenPrice: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #token-price',
                            tokensAmount: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #tokens-amount',
                            investorShare: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #investor-share',
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
                    element: $('#zbcc .data-block#agents .inputs-table#agents table')[0],

                    numerableInput: new NumberInput({ element: $('#zbcc .data-block#agents #agents-number')[0], dataType: 'number', isUnic: false }),

                    row: {
                        htmlTemplate: this.htmlTemplates.trAgent,
                        trsSelector: '#zbcc .data-block#agents .inputs-table#agents table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc .data-block#agents .inputs-table#agents table tr#{tr-id} #agent-name',
                            agenShare: '#zbcc .data-block#agents .inputs-table#agents table tr#{tr-id} #agent-share',
                            tokensAmount: '#zbcc .data-block#agents .inputs-table#agents table tr#{tr-id} #tokens-amount',
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
                                    '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr[id] #agent-name',
                                    '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr[id] #agent-name'
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
                    element: $('#zbcc .data-block#pools .inputs-table#pool-types table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trPoolType,
                        trsSelector: '#zbcc .data-block#pools .inputs-table#pool-types table tr[id]',
                        inputsSelectors: {
                            poolNumber: '#zbcc .data-block#pools .inputs-table#pool-types table tr#{tr-id} #pool-number',
                            poolType: '#zbcc .data-block#pools .inputs-table#pool-types table tr#{tr-id} #pool-type',
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
                                    '#zbcc .data-block#pools .inputs-table#pools table tr[id] #pool-type'
                                ]
                            }
                        }
                    }
                }),
                pools: new CalcableTable({
                    element: $('#zbcc .data-block#pools .inputs-table#pools table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trPool,
                        trsSelector: '#zbcc .data-block#pools .inputs-table#pools table tr[id]',
                        inputsSelectors: {
                            poolTitle: '#zbcc .data-block#pools .inputs-table#pools table tr#{tr-id} #pool-title',
                            poolType: '#zbcc .data-block#pools .inputs-table#pools table tr#{tr-id} #pool-type',
                            poolShare: '#zbcc .data-block#pools .inputs-table#pools table tr#{tr-id} #pool-share',
                            amount: '#zbcc .data-block#pools .inputs-table#pools table tr#{tr-id} #amount',
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
                                byOptionsUsingSelector: '#zbcc .data-block#pools .inputs-table#pool-types table tr[id] #pool-type'
                            }
                        }
                    }
                })
            }
        },

        this.dataBlocks['vestingAndUnlocking'] = new UnhiddableTables({
            cssClass: 'unhidden',

            unhidders: {
                vesting: $('#zbcc .data-block#vesting-and-unlocking button.unhidder#show-vesting')[0],
                unlocking: $('#zbcc .data-block#vesting-and-unlocking button.unhidder#show-unlocking')[0],
            },
            tables: {
                vesting: new CalcableTable({
                    element: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trVesting,
                        trsSelector: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #agent-name',
                            pool: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #pool',
                            startVesting: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #start-vesting',
                            endVesting: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #end-vesting',
                            vestingCoefficient: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#{tr-id} #vesting-coefficient',
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
                    element: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        htmlTemplate: this.htmlTemplates.trUnlocking,
                        trsSelector: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #agent-name',
                            startUnlocking: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #start-unlocking',
                            endUnlocking: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #end-unlocking',
                            initialUnlocking: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #initial-unlocking',
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
        //     cssClass: 'unhidden',
        //     unhidders: {
        //         actions: $('#zbcc .data-block#token-circulation button.unhidder#show-actions')[0],
        //     },
        //     tables: {
        //         actions: new CalcableTable({
        //             element: $('#zbcc .data-block#token-circulation .inputs-table#actions table')[0],

        //             calcAppendBtnSelector: 'button.calc#append-row',
        //             calcRemoveBtnSelector: 'button.calc#remove-row',

        //             htmlTemplate: this.htmlTemplates.trAction,
        //             inputsSelectors: {
        //                 actionNumber: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #action-number',
        //                 source: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #source',
        //                 currencyType: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #currency-type',
        //                 valuePercents: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #value-percents',
        //                 destionation: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #destination',
        //                 preCondition: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #pre-condition',
        //             },
        //             rows: [
        //                 {
        //                     id: 0,
        //                     actionNumber: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #action-number'),
        //                     source: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #source'),
        //                     currencyType: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #currency-type'),
        //                     valuePercents: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #value-percents'),
        //                     destionation: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #destination'),
        //                     preCondition: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #pre-condition'),
        //                 },
        //                 {
        //                     id: 1,
        //                     actionNumber: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #action-number'),
        //                     source: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #source'),
        //                     currencyType: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #currency-type'),
        //                     valuePercents: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #value-percents'),
        //                     destionation: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #destination'),
        //                     preCondition: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #pre-condition'),
        //                 },
        //                 {
        //                     id: 2,
        //                     actionNumber: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #action-number'),
        //                     source: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #source'),
        //                     currencyType: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #currency-type'),
        //                     valuePercents: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #value-percents'),
        //                     destionation: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #destination'),
        //                     preCondition: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #pre-condition'),
        //                 }
        //             ],
        //         })
        //     }
        // })
    }
}