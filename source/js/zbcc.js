class zbccForm {
    constructor(htmlTemplates) {
        this.dataBlocks = {}

        this.htmlTemplates = htmlTemplates

        this.declareDataBlocks()
    }

    declareDataBlocks() {
        this.dataBlocks['initialData'] = {
            inputs: {
                totalTokensAmount: new NumberInput({ element: $('#zbcc .data-block#initial-data #total-tokens-amount')[0] }),
                initialTokenPrice: new NumberInput({ element: $('#zbcc .data-block#initial-data #initial-token-price')[0] }),
                exchangeType: new SelectInput({ element: $('#zbcc .data-block#initial-data #exchange-type')[0], allowedValues: ['decentralized', 'centralized'] }),
                tradingFunction: new SelectInput({ element: $('#zbcc .data-block#initial-data #trading-function')[0], allowedValues: ['increasing', 'decreasing', 'volatility'] }),
                duration: new NumberInput({ element: $('#zbcc .data-block#initial-data #duration')[0] })
            }
        }

        this.dataBlocks['investmentRounds'] = {
            tables: {
                rounds: new NumerableTable({
                    element: $('#zbcc .data-block#investment-rounds #rounds')[0],
                    numerableInput: new NumberInput({ element: $('#zbcc .data-block#investment-rounds #rounds-number')[0] }),

                    rowHtmlTemplate: this.htmlTemplates.trInvestmentRound,

                    rows: [
                        {
                            id: 0,
                            roundTitle: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#0 #round-title')[0] }),
                            fiat: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#0 #fiat')[0] }),
                            tokenPrice: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#0 #token-price')[0] }),
                            tokensAmount: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#0 #tokens-amount')[0] }),
                            investorShare: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#0 #investor-share')[0] })
                        },
                        {
                            id: 1,
                            roundTitle: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#1 #round-title')[0] }),
                            fiat: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#1 #fiat')[0] }),
                            tokenPrice: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#1 #token-price')[0] }),
                            tokensAmount: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#1 #tokens-amount')[0] }),
                            investorShare: new TextInput({ element: $('#zbcc .data-block#investment-rounds table#rounds tr#1 #investor-share')[0] })
                        }
                    ]
                })
            }
        }

        this.dataBlocks['agents'] = {
            tables: {
                ahents: new NumerableTable({
                    element: $('#zbcc .data-block#agents table#agents')[0],
                    numerableInput: new NumberInput({ element: $('#zbcc .data-block#agents #agents-number')[0] }),

                    rowHtmlTemplate: this.htmlTemplates.trAgent,

                    rows: [
                        {
                            id: 0,
                            agentName: new TextInput({ element: $('#zbcc .data-block#agents table#agents tr#0 #agent-name')[0] }),
                            agenShare: new TextInput({ element: $('#zbcc .data-block#agents table#agents tr#0 #agent-share')[0] }),
                            tokensAmount: new TextInput({ element: $('#zbcc .data-block#agents table#agents tr#0 #tokens-amount')[0] }),
                        },
                        {
                            id: 1,
                            agentName: new TextInput({ element: $('#zbcc .data-block#agents table#agents tr#1 #agent-name')[0] }),
                            agenShare: new TextInput({ element: $('#zbcc .data-block#agents table#agents tr#1 #agent-share')[0] }),
                            tokensAmount: new TextInput({ element: $('#zbcc .data-block#agents table#agents tr#1 #tokens-amount')[0] }),
                        }
                    ],
                })
            }
        }

        this.dataBlocks['pools'] = {
            tables: {
                poolTypes: new CalcableTable({
                    element: $('#zbcc .data-block#pools table#pool-types')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    rowHtmlTemplate: this.htmlTemplates.trPoolType,

                    rows: [
                        {
                            id: 0,
                            poolNumber: new TextInput({ element: $('#zbcc .data-block#pools table#pool-types tr#0 #pool-number')[0] }),
                            poolType: new TextInput({ element: $('#zbcc .data-block#pools table#pool-types tr#0 #pool-type')[0] }),
                        }
                    ],
                }),
                pools: new CalcableTable({
                    element: $('#zbcc .data-block#pools table#pools')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    rowHtmlTemplate: this.htmlTemplates.trPool,

                    rows: [
                        {
                            id: 0,
                            poolTitle: new TextInput({ element: $('#zbcc .data-block#pools table#pools tr#0 #pool-title')[0] }),
                            poolType: new TextInput({ element: $('#zbcc .data-block#pools table#pools tr#0 #pool-type')[0] }),
                            poolShare: new TextInput({ element: $('#zbcc .data-block#pools table#pools tr#0 #pool-share')[0] }),
                            amount: new TextInput({ element: $('#zbcc .data-block#pools table#pools tr#0 #amount')[0] }),
                        },
                        {
                            id: 1,
                            poolTitle: new TextInput({ element: $('#zbcc .data-block#pools table#pools tr#1 #pool-title')[0] }),
                            poolType: new TextInput({ element: $('#zbcc .data-block#pools table#pools tr#1 #pool-type')[0] }),
                            poolShare: new TextInput({ element: $('#zbcc .data-block#pools table#pools tr#1 #pool-share')[0] }),
                            amount: new TextInput({ element: $('#zbcc .data-block#pools table#pools tr#1 #amount')[0] }),
                        }
                    ],
                })
            }
        },

        this.dataBlocks['vestingAndUnlocking'] = {
            tables: {
                vesting: new CalcableTable({
                    element: $('#zbcc .data-block#vesting-and-unlocking table#vesting')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    unhidderSectionSelector: '#zbcc .data-block#vesting-and-unlocking',
                    unhidderBtnSelector: 'button.unhidder#show-vesting',
                    simpleTablesSelector: '#zbcc .data-block#vesting-and-unlocking table',
                    unhidderTableCssClass: 'unhidden',

                    rowHtmlTemplate: this.htmlTemplates.trVesting,

                    rows: [
                        {
                            id: 0,
                            agentName: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #agent-name')[0].value,
                            pool: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #pool')[0].value,
                            startVesting: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #start-vesting')[0].value,
                            endVesting: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #end-vesting')[0].value,
                            vestingCoefficient: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#0 #vesting-coefficient')[0].value
                        },
                        {
                            id: 1,
                            agentName: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #agent-name')[0].value,
                            pool: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #pool')[0].value,
                            startVesting: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #start-vesting')[0].value,
                            endVesting: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #end-vesting')[0].value,
                            vestingCoefficient: $('#zbcc .data-block#vesting-and-unlocking table#vesting tr#1 #vesting-coefficient')[0].value
                        }
                    ]
                }),
                unlocking: new CalcableTable({
                    element: $('#zbcc .data-block#vesting-and-unlocking table#unlocking')[0],
                    calcAppendBtnSelector: 'button.calc#append-row',
                    calcRemoveBtnSelector: 'button.calc#remove-row',

                    unhidderSectionSelector: '#zbcc .data-block#vesting-and-unlocking',
                    unhidderBtnSelector: 'button.unhidder#show-unlocking',
                    simpleTablesSelector: '#zbcc .data-block#vesting-and-unlocking table',
                    unhidderTableCssClass: 'unhidden',

                    rowHtmlTemplate: this.htmlTemplates.trUnlocking,

                    rows: [
                        {
                            id: 0,
                            agentName: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#0 #agent-name')[0].value,
                            startUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#0 #start-unlocking')[0].value,
                            endUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#0 #end-unlocking')[0].value,
                            initialUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#0 #initial-unlocking')[0].value
                        },
                        {
                            id: 1,
                            agentName: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#1 #agent-name')[0].value,
                            startUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#1 #start-unlocking')[0].value,
                            endUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#1 #end-unlocking')[0].value,
                            initialUnlocking: $('#zbcc .data-block#vesting-and-unlocking table#unlocking tr#1 #initial-unlocking')[0].value
                        }
                    ]
                })
            }
        }
    }
}