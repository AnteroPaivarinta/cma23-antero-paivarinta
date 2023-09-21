const translate = (mjono:string) => {
    const dir:any = {
        hello: "hei",
        world: "maailma",
        bit: "bitti",
        byte: "tavu",
        integer: "kokonaisluku",
        boolean: "totuusarvo",
        string: "merkkijono",
        network: "verkko"
    }
    return dir[mjono] ? dir[mjono] : "No translation exists for word word given as the argument";
}



console.log('Translate', translate('Hello'))