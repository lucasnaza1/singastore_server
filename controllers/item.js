const { getTodosItens, getItensId, insereItem, modificaItem } = require('../services/itens')

function getItens(req, res) {
    try {
        const itens = getTodosItens()
        res.send(itens)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getItem(req, res) {
    try {
        const id = req.params.id
        const item = getItensId(id)
        res.send(item)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postItem(req, res) {
    try {
        const itemNovo = req.body
        insereItem(itemNovo)
        res.send('Item novo cadastrado')
        res.send(201)
    } catch (error) {
        res.send(500)
        res.send(error.message)
    }
}

function patchItem(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        modificaItem(body, id)
        res.send('Item modificado com sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getItens,
    getItem,
    postItem,
    patchItem
}