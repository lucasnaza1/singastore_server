const fs = require('fs')

function getTodosItens() {
    return JSON.parse(fs.readFileSync('itens.json'))
}

function getItensId(id) {
    const itens = JSON.parse(fs.readFileSync('itens.json'))

    const itemFiltrado = itens.filter(item => item.id === id)[0]
    return itemFiltrado
}

module.exports = {
    getTodosItens,
    getItensId
}