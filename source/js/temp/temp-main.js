$(document).ready(() => {

let zbcc = new zbccForm({

    parentElement: $('div#zbcc')[0],
    element: $('form#zbcc')[0],

    insertions: {

        dataBlocks: {
            initialData: new zbccFormDataBlock({
                name: 'initialData',
                htmlTemplateName: 'divDataBlock',

                insertions: {
                    title: 'INITIAL DATA',
                    description: '',

                    inputs: new zbccDataBlockInputs([
                        new zbccInputsRow({
                            htmlTemplateName: '',
                            inputs: [
                                new zbccNumberInput({
                                    title: 'Total Tokens Amount',
                                    htmlTemplateName: 'numberInput',
                                    value: 0
                                }),
                                new zbccNumberInput({
                                    title: 'Initial Token Price',
                                    htmlTemplateName: 'numberInput',
                                    value: 0
                                }),
                                new zbccNumberInput({
                                    title: 'Exchange type',
                                    htmlTemplateName: 'numberInput',
                                    value: 'Decentralized'
                                }),
                                new zbccNumberInput({
                                    title: 'Trading function',
                                    htmlTemplateName: 'numberInput',
                                    value: 'Increasing'
                                }),
                                new zbccNumberInput({
                                    title: 'Duration',
                                    htmlTemplateName: 'numberInput',
                                    value: 0
                                })
                            ]
                        })
                    ])
                }
            }),
        }

    }
})

// zbcc.init(document, htmlTemplates1)

// zbcc.render()

})








































            /* investmentRounds: new zbccDataBlock({
                title: 'INVESTMENT ROUNDS',
                description: 'text',
                inputs: [
                    new zbccNumberInput({
                        title: 'Rounds Number',
                        type: 'number',
                        value: 0
                    })
                ]
            }),

            agents: new zbccDataBlock({
                title: 'AGENTS',
                description: 'text another',
                inputs: [
                    new zbccNumberInput({
                        title: 'Agents Number',
                        type: 'number',
                        value: 0
                    })
                ]
            }), */