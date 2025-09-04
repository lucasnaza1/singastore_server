const fs = require('fs')

function getTodosItens() {
    return JSON.parse(fs.readFileSync('itens.json'))
}

function getItensId(id) {
    const itens = JSON.parse(fs.readFileSync('itens.json'))

    const itemFiltrado = itens.filter(item => item.id === id)[0]
    return itemFiltrado
}

function insereItem(itemNovo) {
    const itens = JSON.parse(fs.readFileSync('itens.json'))
    const novaListaItens = [...itens, itemNovo]

    fs.writeFileSync('itens.json', JSON.stringify(novaListaItens))
}

module.exports = {
    getTodosItens,
    getItensId,
    insereItem
}