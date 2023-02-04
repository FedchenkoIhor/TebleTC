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
                exchangeType: new SelectInput({ element: $('#zbcc .data-block#initial-data #exchange-type')[0], dataType: 'text', isUnic: false, allowedValues: ['decentralized', 'centralized'] }),
                tradingFunction: new SelectInput({ element: $('#zbcc .data-block#initial-data #trading-function')[0], allowedValues: ['increasing', 'decreasing', 'volatility'] }),
                duration: new NumberInput({ element: $('#zbcc .data-block#initial-data #duration')[0], dataType: 'number', isUnic: false })
            }
        }

        this.dataBlocks['investmentRounds'] = {
            tables: {
                rounds: new NumerableTable({
                    element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table')[0],
                    numerableInput: new NumberInput({ element: $('#zbcc .data-block#investment-rounds #rounds-number')[0], dataType: 'number', isUnic: false }),

                    rowHtmlTemplate: this.htmlTemplates.trInvestmentRound,

                    rowTrsSelector: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr[id]',
                    rowSelectors: {
                        roundTitle: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #round-title',
                        fiat: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #fiat',
                        tokenPrice: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #token-price',
                        tokensAmount: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #tokens-amount',
                        investorShare: '#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#{tr-id} #investor-share',
                    },

                    rowUnicInputs: [
                        'roundTitle'
                    ],
                    rowInputTypes: {
                        roundTitl: 'text',
                        fiat: 'text',
                        tokenPric: 'text',
                        tokensAmount: 'text',
                        investorShare: 'text',
                    },

                    // rows: [
                    //     {
                    //         id: 0,
                    //         roundTitle: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#0 #round-title')[0], dataType: 'text', isUnic: false }),
                    //         fiat: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#0 #fiat')[0], dataType: 'text', isUnic: false }),
                    //         tokenPrice: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#0 #token-price')[0], dataType: 'text', isUnic: false }),
                    //         tokensAmount: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#0 #tokens-amount')[0], dataType: 'text', isUnic: false }),
                    //         investorShare: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#0 #investor-share')[0], dataType: 'text', isUnic: false })
                    //     },
                    //     {
                    //         id: 1,
                    //         roundTitle: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#1 #round-title')[0], dataType: 'text', isUnic: false }),
                    //         fiat: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#1 #fiat')[0], dataType: 'text', isUnic: false }),
                    //         tokenPrice: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#1 #token-price')[0], dataType: 'text', isUnic: false }),
                    //         tokensAmount: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#1 #tokens-amount')[0], dataType: 'text', isUnic: false }),
                    //         investorShare: new TextInput({ element: $('#zbcc .data-block#investment-rounds .inputs-table#rounds table tr#1 #investor-share')[0], dataType: 'text', isUnic: false })
                    //     }
                    // ]
                })
            }
        }

        this.dataBlocks['agents'] = {
            tables: {
                agents: new NumerableTable({
                    element: $('#zbcc .data-block#agents .inputs-table#agents table')[0],
                    numerableInput: new NumberInput({ element: $('#zbcc .data-block#agents #agents-number')[0], dataType: 'text', isUnic: false }),

                    rowHtmlTemplate: this.htmlTemplates.trAgent,

                    rowTrsSelector: '#zbcc .data-block#agents .inputs-table#agents table tr[id]',
                    rowSelectors: {
                        agentName: '#zbcc .data-block#agents .inputs-table#agents table tr#0 #agent-name',
                        agenShare: '#zbcc .data-block#agents .inputs-table#agents table tr#0 #agent-share',
                        tokensAmount: '#zbcc .data-block#agents .inputs-table#agents table tr#0 #tokens-amount',
                    },

                    rowUnicInputs: [
                        'agentName'
                    ],
                    rowInputTypes: {
                        agentName: 'text',
                        agenShare: 'number',
                        tokensAmount: 'number',
                    },

                    // rows: [
                    //     {
                    //         id: 0,
                    //         agentName: new TextInput({ element: $('#zbcc .data-block#agents .inputs-table#agents table tr#0 #agent-name')[0], dataType: 'text', isUnic: false }),
                    //         agenShare: new TextInput({ element: $('#zbcc .data-block#agents .inputs-table#agents table tr#0 #agent-share')[0], dataType: 'text', isUnic: false }),
                    //         tokensAmount: new TextInput({ element: $('#zbcc .data-block#agents .inputs-table#agents table tr#0 #tokens-amount')[0], dataType: 'text', isUnic: false }),
                    //     },
                    //     {
                    //         id: 1,
                    //         agentName: new TextInput({ element: $('#zbcc .data-block#agents .inputs-table#agents table tr#1 #agent-name')[0], dataType: 'text', isUnic: false }),
                    //         agenShare: new TextInput({ element: $('#zbcc .data-block#agents .inputs-table#agents table tr#1 #agent-share')[0], dataType: 'text', isUnic: false }),
                    //         tokensAmount: new TextInput({ element: $('#zbcc .data-block#agents .inputs-table#agents table tr#1 #tokens-amount')[0], dataType: 'text', isUnic: false }),
                    //     }
                    // ],
                })
            }
        }

        this.dataBlocks['pools'] = {
            tables: {
                poolTypes: new CalcableTable({
                    element: $('#zbcc .data-block#pools .inputs-table#pool-types table')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    rowHtmlTemplate: this.htmlTemplates.trPoolType,

                    rowTrsSelector: '#zbcc .data-block#pools .inputs-table#pool-types table tr[id]',
                    rowSelectors: {
                        poolNumber: '#zbcc .data-block#pools .inputs-table#pool-types table tr#0 #pool-number',
                        poolType: '#zbcc .data-block#pools .inputs-table#pool-types table tr#0 #pool-type',
                    },

                    rowUnicInputs: [
                        'poolType',
                    ],
                    rowInputTypes: {
                        poolNumber: 'number',
                        poolType: 'text',
                    },
                    // rows: [
                    //     {
                    //         id: 0,

                            // poolNumber: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pool-types table tr#0 #pool-number')[0], dataType: 'text', isUnic: false }),
                    //         poolType: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pool-types table tr#0 #pool-type')[0], dataType: 'text', isUnic: false }),
                    //     }
                    // ],
                }),
                pools: new CalcableTable({
                    element: $('#zbcc .data-block#pools .inputs-table#pools table')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    rowHtmlTemplate: this.htmlTemplates.trPool,

                    rowTrsSelector: '#zbcc .data-block#pools .inputs-table#pools table tr[id]',
                    rowSelectors: {
                        poolTitle: '#zbcc .data-block#pools .inputs-table#pools table tr#0 #pool-title',
                        poolType: '#zbcc .data-block#pools .inputs-table#pools table tr#0 #pool-type',
                        poolShare: '#zbcc .data-block#pools .inputs-table#pools table tr#0 #pool-share',
                        amount: '#zbcc .data-block#pools .inputs-table#pools table tr#0 #amount',
                    },
                    rowUnicInputs: [
                        'poolTitle',
                    ],
                    rowInputTypes: {
                        poolTitle: 'text',
                        poolType: 'text',
                        poolShare: 'text',
                        amount: 'text',
                    },

                    // rows: [
                    //     {
                    //         id: 0,
                    //         poolTitle: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pools table tr#0 #pool-title')[0], dataType: 'text', isUnic: false }),
                    //         poolType: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pools table tr#0 #pool-type')[0], dataType: 'text', isUnic: false }),
                    //         poolShare: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pools table tr#0 #pool-share')[0], dataType: 'text', isUnic: false }),
                    //         amount: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pools table tr#0 #amount')[0], dataType: 'text', isUnic: false }),
                    //     },
                    //     {
                    //         id: 1,
                    //         poolTitle: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pools table tr#1 #pool-title')[0], dataType: 'text', isUnic: false }),
                    //         poolType: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pools table tr#1 #pool-type')[0], dataType: 'text', isUnic: false }),
                    //         poolShare: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pools table tr#1 #pool-share')[0], dataType: 'text', isUnic: false }),
                    //         amount: new TextInput({ element: $('#zbcc .data-block#pools .inputs-table#pools table tr#1 #amount')[0], dataType: 'text', isUnic: false }),
                    //     }
                    // ],
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

                    rowTrsSelector: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr[id]',
                    rowHtmlTemplate: this.htmlTemplates.trVesting,
                    rowSelectors: {
                        agentName: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #agent-name',
                        pool: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #pool',
                        startVesting: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #start-vesting',
                        endVesting: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #end-vesting',
                        vestingCoefficient: '#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #vesting-coefficient',
                    },
                    rowInputTypes: {
                        agentName: 'text',
                        pool: 'text',
                        startVesting: 'text',
                        endVesting: 'text',
                        vestingCoefficient: 'text',
                    }
                    // rows: [
                    //     {
                    //         id: 0,
                    //         agentName: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#0 #agent-name')[0].value,
                    //         pool: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#0 #pool')[0].value,
                    //         startVesting: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#0 #start-vesting')[0].value,
                    //         endVesting: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#0 #end-vesting')[0].value,
                    //         vestingCoefficient: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#0 #vesting-coefficient')[0].value
                    //     },
                    //     {
                    //         id: 1,
                    //         agentName: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #agent-name')[0].value,
                    //         pool: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #pool')[0].value,
                    //         startVesting: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #start-vesting')[0].value,
                    //         endVesting: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #end-vesting')[0].value,
                    //         vestingCoefficient: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#vesting table tr#1 #vesting-coefficient')[0].value
                    //     }
                    // ]
                }),
                unlocking: new CalcableTable({
                    element: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    rowTrsSelector: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr[id]',
                    rowHtmlTemplate: this.htmlTemplates.trUnlocking,
                    rowSelectors: {
                        agentName: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #agent-name',
                        startUnlocking: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #start-unlocking',
                        endUnlocking: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #end-unlocking',
                        initialUnlocking: '#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#{tr-id} #initial-unlocking',
                    },
                    rowInputTypes: {
                        agentName: 'text',
                        startUnlocking: 'text',
                        endUnlocking: 'text',
                        initialUnlocking: 'text',
                    }
                    // rows: [
                    //     {
                    //         id: 0,
                    //         agentName: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#0 #agent-name')[0].value,
                    //         startUnlocking: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#0 #start-unlocking')[0].value,
                    //         endUnlocking: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#0 #end-unlocking')[0].value,
                    //         initialUnlocking: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#0 #initial-unlocking')[0].value
                    //     },
                    //     {
                    //         id: 1,
                    //         agentName: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#1 #agent-name')[0].value,
                    //         startUnlocking: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#1 #start-unlocking')[0].value,
                    //         endUnlocking: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#1 #end-unlocking')[0].value,
                    //         initialUnlocking: $('#zbcc .data-block#vesting-and-unlocking .inputs-table#unlocking table tr#1 #initial-unlocking')[0].value
                    //     }
                    // ]
                })
            }
        })

        this.dataBlocks['tokenCirculation'] = new UnhiddableTables({
            cssClass: 'unhidden',
            unhidders: {
                actions: $('#zbcc .data-block#token-circulation button.unhidder#show-actions')[0],
            },
            tables: {
                actions: new CalcableTable({
                    element: $('#zbcc .data-block#token-circulation .inputs-table#actions table')[0],

                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    rowHtmlTemplate: this.htmlTemplates.trAction,
                    rowSelectors: {
                        actionNumber: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #action-number',
                        source: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #source',
                        currencyType: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #currency-type',
                        valuePercents: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #value-percents',
                        destionation: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #destination',
                        preCondition: '#zbcc .data-block#token-circulation .inputs-table#actions table tr#{tr-id} #pre-condition',
                    },
                    rows: [
                        {
                            id: 0,
                            actionNumber: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #action-number'),
                            source: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #source'),
                            currencyType: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #currency-type'),
                            valuePercents: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #value-percents'),
                            destionation: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #destination'),
                            preCondition: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#0 #pre-condition'),
                        },
                        {
                            id: 1,
                            actionNumber: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #action-number'),
                            source: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #source'),
                            currencyType: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #currency-type'),
                            valuePercents: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #value-percents'),
                            destionation: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #destination'),
                            preCondition: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#1 #pre-condition'),
                        },
                        {
                            id: 2,
                            actionNumber: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #action-number'),
                            source: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #source'),
                            currencyType: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #currency-type'),
                            valuePercents: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #value-percents'),
                            destionation: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #destination'),
                            preCondition: $('#zbcc .data-block#token-circulation .inputs-table#actions table tr#2 #pre-condition'),
                        }
                    ],
                })
            }
        })
    }
}