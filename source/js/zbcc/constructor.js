class zbCryptoConstructor {
    constructor(params) {
        this.dataBlocksForm = new zbccDataBlocksForm({ elementSelector: params.dataBlocksFormSelector })
        this.preConditionForm = new zbccPreConditionForm({ elementSelector: params.preConditionFormSelector })
        this.buildedSchemeFor = new zbccBuildedSchemeForm({ elementSelector: params.buildedSchemeFormSelector })
    }
}



class zbccDataBlocksForm extends htmlElement {
    constructor(params) {
        super(params)

        this.dataBlocks = {}
    }

    addDataBlocks(params) {
        let keys = ok(params)

        keys.forEach(dbName => {
            this.dataBlocks[dbName] = params[dbName]
        })
    }

    getValues() {
        let values = {}

        ok(this.dataBlocks).forEach(name => {
            values[name] = this.dataBlocks[name].getValues()
        })

        console.log(values)
        return values
    }
}



class zbccPreConditionForm extends htmlElement {
    constructor(params) {
        super(params)

        this.inputs = {}
    }
}



class zbccBuildedSchemeForm extends htmlElement {
    constructor(params) {
        super(params)

        this.inputs = {}
    }
}