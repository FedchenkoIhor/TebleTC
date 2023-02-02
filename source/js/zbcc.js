class zbccElementHTML {
    constructor(params) {
        this.htmlTemplateName = params.htmlTemplateName ?? ''
    }

    init(params) {
        this.document = params.document
        this.htmlTemplates = params.htmlTemplates

        this.htmlTemplate = this.htmlTemplates[this.htmlTemplateName]

    }

    createElement() {
        this.element = params.document.createElement('div')
        this.element.innerHTML = this.htmlTemplate
    }
}

//

class zbccForm extends zbccElementHTML {
    /* params = {
        element: @HTMLelement
        dataBlock: Array< zbccDataBlock >
    } */
    constructor(params) {
        super(params)

        this.parentElement = params.parentElement
        // this.element = params.element

        this.document = params.document
        this.htmlTemplates = params.htmlTemplates

        this.dataBlocks = params.dataBlocks
    }

    render() {
        this.parentElement.append(this.element)
        // const dataBlocksKeys = Object.keys(this.dataBlocks)

        // dataBlocksKeys.forEach(key => {
        //     const dataBlock = this.dataBlocks[key]

        //     dataBlock.init({
        //         document: this.document,
        //         htmlTemplates: this.htmlTemplates
        //     })

        //     this.element.insertAdjacentHTML(
        //         'beforeend',
        //         dataBlock.render()
        //     )
        // })
    }

    collectData() {

    }

    composeData() {
        this.collectData()

        return JSON.stringify(this.data)
    }
}

//

class zbccFormDataBlock extends zbccElementHTML {
    constructor(params) {
        super(params)

        this.name = params.name
        this.htmlTemplateName = params.htmlTemplateName

        this.title = params.title
        this.description = params.description

        this.inputs = params.inputs
    }

    render() {
        this.inputs.init({
            document: this.document,
            htmlTemplates: this.htmlTemplates
        })

        this.element.innerHTML = this.element.innerHTML
            .replace('{id}', this.name.replace(/([A-Z])/g, "-$1").toLowerCase())
            .replace('{title}', this.title)
            .replace('{description}', this.description)
            .replace('{inputs}', this.inputs.render())

        return this.element
    }
}

//

class zbccDataBlockInputs extends zbccElementHTML {
    constructor(params) {
        super(params)

        this.htmlTemplateName = params.htmlTemplateName
        this.inputs = params.inputs
    }

    render() {
        let html = ''

        this.inputs.forEach(input => {
            input.init({
                document: this.document,
                htmlTemplates: this.htmlTemplates
            })

            html += input.render()
        })

        return html
    }
}

//

class zbccInputsRow extends zbccElementHTML {
    constructor(params) {
        super(params)

        this.htmlTemplateName = params.htmlTemplateName
        this.inputs = params.inputs
    }

    render() {
        this.element.innerHTML = this.element.innerHTML
            .replace('{id}', this.name.replace(/([A-Z])/g, "-$1").toLowerCase())
            .replace('{title}', this.title)
            .replace('{description}', this.description)
            .replace('{inputs}', this.inputs.render())

        return this.element

        let html = '<div>'

        this.inputs.forEach(input => {
            html += input.render()
        })

        return '</div>' + html
    }
}

class zbccInputsTable extends zbccElementHTML {
    constructor(params) {}

    render() {
        return 'asd11'
    }
}

//

class zbccInput extends zbccElementHTML {
    constructor(params, type) {
        super(params)

        this.title = params.title ?? ''
        this.value = params.value
        this.type = type
        this.htmlTemplateName = params.htmlTemplateName
    }

    render() {
        return htmlTemplates[this.htmlTemplateName]
            .replace('{title}', this.title)
            .replace('{type}', this.type)
            .replace('{value}', this.value)
    }
}

class zbccStringInput extends zbccInput {
    constructor(params) {
        super(params)
    }
}

class zbccNumberInput extends zbccInput {
    constructor(params) {
        super(params, 'number')
    }
}

class zbccCalcInput extends zbccInput {
    constructor(params) {
        super(params, 'calc')
    }
}
