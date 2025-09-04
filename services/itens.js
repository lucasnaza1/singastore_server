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

function modificaItem(modificacoes, id) {
    let itensAtuais = JSON.parse(fs.readFileSync('itens.json'))
    const indiceModificado = itensAtuais.findIndex(item => item.id === id)

    const conteudoModificado = { ...itensAtuais[indiceModificado], ...modificacoes }

    itensAtuais[indiceModificado] = conteudoModificado

    fs.writeFileSync('item.json', JSON.stringify(itensAtuais))
}

function deletarItemPorId(id) {
    const itens = JSON.parse(fs.readFileSync('itens.json'))

    const itemFiltrado = itens.filter(item => item.id !== id)
    fs.writeFileSync('itens.json', JSON.stringify(itemFiltrado))
}

module.exports = {
    getTodosItens,
    getItensId,
    insereItem,
    modificaItem,
    deletarItemPorId
}