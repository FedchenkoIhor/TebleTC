class zbccForm {
    constructor(params) {
        this.element = params.element
        this.listeners = {}

        this.dataBlocks = {}

        this.htmlTemplates = params.htmlTemplates

        this.declareDataBlocks()
    }



    declareDataBlocks() {
        this.dataBlocks['initialData'] = {
            inputs: {
                totalTokensAmount: new NumberInput({ element: $('#zbcc-inputs .data-block#initial-data #total-tokens-amount')[0] }),
                initialTokenPrice: new NumberInput({ element: $('#zbcc-inputs .data-block#initial-data #initial-token-price')[0] }),
                exchangeType: new SelectInput({ element: $('#zbcc-inputs .data-block#initial-data #exchange-type')[0], allowedValues: ['decentralized', 'centralized'] }),
                tradingFunction: new SelectInput({ element: $('#zbcc-inputs .data-block#initial-data #trading-function')[0], allowedValues: ['increasing', 'decreasing', 'volatility'] }),
                duration: new NumberInput({ element: $('#zbcc-inputs .data-block#initial-data #duration')[0] })
            }
        }

        this.dataBlocks['investmentRounds'] = {
            optionsForSelectInputs: {},
            tables: {
                rounds: new NumerableTable({
                    element: $('#zbcc-inputs .data-block#investment-rounds .inputs-table.numerable#rounds table')[0],
                    numerableInput: new NumberInput({ element: $('#zbcc-inputs .data-block#investment-rounds #rounds-number')[0] }),

                    row: {
                        numberOfInitial: 1,
                        numberOfMin: 1,
                        htmlTemplate: this.htmlTemplates.trInvestmentRound,
                        trSelector: '#zbcc-inputs .data-block#investment-rounds .inputs-table.numerable#rounds table tr[id]',
                        inputsSelectors: {
                            roundTitle: '#zbcc-inputs .data-block#investment-rounds .inputs-table.numerable#rounds table tr#{tr-id} #round-title',
                            fiat: '#zbcc-inputs .data-block#investment-rounds .inputs-table.numerable#rounds table tr#{tr-id} #fiat',
                            tokenPrice: '#zbcc-inputs .data-block#investment-rounds .inputs-table.numerable#rounds table tr#{tr-id} #token-price',
                            tokensAmount: '#zbcc-inputs .data-block#investment-rounds .inputs-table.numerable#rounds table tr#{tr-id} #tokens-amount',
                            investorShare: '#zbcc-inputs .data-block#investment-rounds .inputs-table.numerable#rounds table tr#{tr-id} #investor-share',
                        },
                        inputsTypes: {
                            roundTitle: 'text',
                            fiat: 'number',
                            tokenPrice: 'number',
                            tokensAmount: 'number',
                            investorShare: 'number',
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
                    element: $('#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table')[0],

                    numerableInput: new NumberInput({ element: $('#zbcc-inputs .data-block#agents #agents-number')[0] }),

                    row: {
                        numberOfInitial: 1,
                        numberOfMin: 1,
                        htmlTemplate: this.htmlTemplates.trAgent,
                        trSelector: '#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table tr#{tr-id} #agent-name',
                            agenShare: '#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table tr#{tr-id} #agent-share',
                            tokensAmount: '#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table tr#{tr-id} #tokens-amount',
                        },
                        inputsTypes: {
                            agentName: 'text',
                            agenShare: 'number',
                            tokensAmount: 'number',
                        },
                        unicInputs: [
                            'agentName'
                        ],
                        linksToDependableSelects: {
                            agentName: {
                                inputId: 'agent-name',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                optionSelector: 'option[value="{value}"][id={id}]',
                                selects: [
                                    '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table tr[id] #agent-name',
                                    '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#unlocking table tr[id] #agent-name',
                                    '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr[id] #agent-name',
                                    '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr[id] #agent-name',
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
                    element: $('#zbcc-inputs .data-block#pools .inputs-table.calcable#pool-types table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        numberOfInitial: 1,
                        numberOfMin: 1,
                        htmlTemplate: this.htmlTemplates.trPoolType,
                        trSelector: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pool-types table tr[id]',
                        inputsSelectors: {
                            poolNumber: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pool-types table tr#{tr-id} #pool-number',
                            poolType: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pool-types table tr#{tr-id} #pool-type',
                        },
                        inputsTypes: {
                            poolNumber: 'number',
                            poolType: 'text',
                        },
                        unicInputs: [
                            'poolType',
                        ],
                        linksToDependableSelects: {
                            poolType: {
                                inputId: 'pool-type',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                optionSelector: 'option[value="{value}"][id="{id}"]',
                                selects: [
                                    '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr[id] #pool-type',
                                    '#zbcc-inputs .data-block#token-circulation .inputs-table.unhiddable.calcable#actions table tr[id] #currency-type',
                                ]
                            },
                        }
                    }
                }),
                pools: new CalcableTable({
                    element: $('#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        numberOfInitial: 1,
                        numberOfMin: 1,
                        htmlTemplate: this.htmlTemplates.trPool,
                        trSelector: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr[id]',
                        inputsSelectors: {
                            poolTitle: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr#{tr-id} #pool-title',
                            poolType: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr#{tr-id} #pool-type',
                            poolShare: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr#{tr-id} #pool-share',
                            amount: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr#{tr-id} #amount',
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
                        linksToOptions: {
                            poolTypes: {
                                mask: '{pool-types-options}',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                selector: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pool-types table tr[id] #pool-type'
                            }
                        },
                        linksToDependableSelects: {
                            poolTitle: {
                                inputId: 'pool-title',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                optionSelector: 'option[value="{value}"][id="{id}"]',
                                selects: [
                                    '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table tr[id] #pool-title',
                                    '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr[id] #pool-for-rewards',
                                    '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr[id] #pool-for-rewards',
                                ]
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
                    element: $('#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        numberOfInitial: 1,
                        numberOfMin: 1,
                        htmlTemplate: this.htmlTemplates.trVesting,
                        trSelector: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table tr#{tr-id} #agent-name',
                            poolTitle: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table tr#{tr-id} #pool-title',
                            startVesting: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table tr#{tr-id} #start-vesting',
                            endVesting: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table tr#{tr-id} #end-vesting',
                            vestingCoefficient: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#vesting table tr#{tr-id} #vesting-coefficient',
                        },
                        inputsTypes: {
                            agentName: 'text',
                            poolTitle: 'select',
                            startVesting: 'text',
                            endVesting: 'text',
                            vestingCoefficient: 'text',
                        },
                        linksToOptions: {
                            agentName: {
                                mask: '{agent-names-options}',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                selector: '#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table tr[id] #agent-name'
                            },
                            poolTitle: {
                                mask: '{pool-title-options}',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                selector: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr[id] #pool-title'
                            }
                        }
                    }
                }),
                unlocking: new CalcableTable({
                    element: $('#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#unlocking table')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    row: {
                        numberOfInitial: 1,
                        numberOfMin: 1,
                        htmlTemplate: this.htmlTemplates.trUnlocking,
                        trSelector: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#unlocking table tr[id]',
                        inputsSelectors: {
                            agentName: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#unlocking table tr#{tr-id} #agent-name',
                            startUnlocking: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#unlocking table tr#{tr-id} #start-unlocking',
                            endUnlocking: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#unlocking table tr#{tr-id} #end-unlocking',
                            initialUnlocking: '#zbcc-inputs .data-block#vesting-and-unlocking .inputs-table.unhiddable.calcable#unlocking table tr#{tr-id} #initial-unlocking',
                        },
                        inputsTypes: {
                            agentName: 'text',
                            startUnlocking: 'text',
                            endUnlocking: 'text',
                            initialUnlocking: 'text',
                        },
                        linksToOptions: {
                            agentName: {
                                mask: '{agent-names-options}',
                                optionHtmlTemplate: this.htmlTemplates.selectOption,
                                selector: '#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table tr[id] #agent-name'
                            }
                        }
                    }
                })
            }
        })

        this.dataBlocks['projectServices'] = {
            stakingAndFarming: new UnhiddableTables({
                cssClass: 'unhidden',
                unhidders: {
                    staking: $('#zbcc-inputs .data-block#project-services button.unhidder#show-staking')[0],
                    farming: $('#zbcc-inputs .data-block#project-services button.unhidder#show-farming')[0],
                },
                tables: {
                    staking: new CalcableTable({
                        element: $('#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table')[0],

                        calcAppendBtnSelector: 'button.calc#append-row',
                        calcRemoveBtnSelector: 'button.calc#remove-row',

                        row: {
                            numberOfInitial: 1,
                            numberOfMin: 1,
                            htmlTemplate: this.htmlTemplates.trStaking,
                            trSelector: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr[id]',
                            inputsSelectors: {
                                number: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr#{tr-id} #number',
                                agentName: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr#{tr-id} #agent-name',
                                agentShare: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr#{tr-id} #agent-share',
                                unstakingFactor: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr#{tr-id} #unstaking-factor',
                                rewardCoefficient: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr#{tr-id} #reward-coefficient',
                                poolForRewards: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#staking table tr#{tr-id} #pool-for-rewards',
                            },
                            inputsTypes: {
                                number: 'number',
                                agentName: 'select',
                                agentShare: 'text',
                                unstakingFactor: 'text',
                                rewardCoefficient: 'text',
                                poolForRewards: 'select',
                            },
                            linksToOptions: {
                                agentName: {
                                    mask: '{agent-names-options}',
                                    optionHtmlTemplate: this.htmlTemplates.selectOption,
                                    selector: '#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table tr[id] #agent-name'
                                },
                                poolTitle: {
                                    mask: '{pool-title-options}',
                                    optionHtmlTemplate: this.htmlTemplates.selectOption,
                                    selector: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr[id] #pool-title'
                                }
                            }
                        }
                    }),
                    farming: new CalcableTable({
                        element: $('#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table')[0],

                        calcAppendBtnSelector: 'button.calc#append-row',
                        calcRemoveBtnSelector: 'button.calc#remove-row',

                        row: {
                            numberOfInitial: 1,
                            numberOfMin: 1,
                            htmlTemplate: this.htmlTemplates.trFarming,
                            trSelector: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr[id]',
                            inputsSelectors: {
                                number: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr#{tr-id} #number',
                                agentName: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr#{tr-id} #agent-name',
                                agentShare: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr#{tr-id} #agent-share',
                                unstakingFactor: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr#{tr-id} #unstaking-factor',
                                rewardCoefficient: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr#{tr-id} #reward-coefficient',
                                poolForRewards: '#zbcc-inputs .data-block#project-services .inputs-table.unhiddable.calcable#farming table tr#{tr-id} #pool-for-rewards',
                            },
                            inputsTypes: {
                                number: 'number',
                                agentName: 'select',
                                agentShare: 'text',
                                unstakingFactor: 'text',
                                rewardCoefficient: 'text',
                                poolForRewards: 'select',
                            },
                            linksToOptions: {
                                agentName: {
                                    mask: '{agent-names-options}',
                                    optionHtmlTemplate: this.htmlTemplates.selectOption,
                                    selector: '#zbcc-inputs .data-block#agents .inputs-table.numerable#agents table tr[id] #agent-name'
                                },
                                poolTitle: {
                                    mask: '{pool-title-options}',
                                    optionHtmlTemplate: this.htmlTemplates.selectOption,
                                    selector: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pools table tr[id] #pool-title'
                                }
                            }
                        }
                    })
                }
            }),
            services: new ChoosableCalcableTables({
                // cssClass: 'choosable',
                cssClass: 'choosen',
                controls: {
                    serviceNameInput: '#zbcc-inputs .data-block#project-services .extra-inputs #service-name',
                    serviceNamesList: '#zbcc-inputs .data-block#project-services .extra-inputs #service-names',
                    addServiceBtn: '#zbcc-inputs .data-block#project-services .extra-inputs #add-service',
                    serviceNameOptionSelector: 'option[id="{id}"]',
                    serviceNameOptionTemplate: this.htmlTemplates.serviceNameOption,
                    serviceNameInputPlaceholder: 'enter Service name'
                },
                presetTable: {
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    tableParentElement: '#zbcc-inputs .data-block#project-services .base-inputs',
                    tableBlockSelector: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id}',
                    tableSelector: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table',
                    htmlTableTemplate: this.htmlTemplates.serviceTableTemplate,

                    header: {
                        titleElement: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} header h3.table-title',
                        titlePreset: '"{service-name}" Income',
                        description: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} header div.table-description',
                    },

                    row: {
                        numberOfInitial: 1,
                        numberOfMin: 1,
                        htmlTemplate: this.htmlTemplates.trServiceCurve,
                        trSelector: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr[id]',
                        tableId: '',
                        inputsSelectors: {
                            curveNumber: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr#{tr-id} #curve-number',
                            salesStart: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr#{tr-id} #sales-start',
                            salesEnd: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr#{tr-id} #sales-end',
                            salesMin: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr#{tr-id} #sales-min',
                            salesMax: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr#{tr-id} #sales-max',
                            chooseAlgorithm: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr#{tr-id} #choose-algorithm',
                            angularCoefficient: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr#{tr-id} #angular-coefficient',
                            risingsCoefficient: '#zbcc-inputs .data-block#project-services .inputs-table.choosable.calcable#{table-id} table tr#{tr-id} #risings-coefficient',
                        },
                        inputsTypes: {
                            curveNumber: 'number',
                            salesStart: 'number',
                            salesEnd: 'number',
                            salesMin: 'number',
                            salesMax: 'number',
                            chooseAlgorithm: 'select',
                            angularCoefficient: 'number',
                            risingsCoefficient: 'number',
                        },
                    }
                }

            })
        }

        this.dataBlocks['tokenCirculation'] = {
            actions: new UnhiddableTables({
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
                            numberOfInitial: 1,
                            numberOfMin: 1,
                            htmlTemplate: this.htmlTemplates.trAction,
                            trSelector: '#zbcc-inputs .data-block#token-circulation .inputs-table#actions table tr[id]',
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
                                currencyType: 'select',
                                valuePercents: 'text',
                                destionation: 'text',
                                preCondition: 'text',
                            },
                            unicInputs: [
                                'actionNumber'
                            ],
                            linksToOptions: {
                                poolTypes: {
                                    mask: '{pool-types-options}',
                                    optionHtmlTemplate: this.htmlTemplates.selectOption,
                                    selector: '#zbcc-inputs .data-block#pools .inputs-table.calcable#pool-types table tr[id] #pool-type'
                                }
                            },
                        }
                    })
                }
            })
        }
    }
}