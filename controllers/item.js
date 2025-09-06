const { getTodosItens, getItensId, insereItem, modificaItem, deletarItemPorId } = require('../services/item')

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
        if (id && Number(id)) {
            const item = getItensId(id)
            res.send(item)
        } else {
            res.status(422)
            res.send('ID invalido')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postItem(req, res) {
    try {
        if (req.body.name) {
            insereItem(itemNovo)
            res.send('Item novo cadastrado')
            res.send(201)
        } else {
            res.status(422)
            res.send('O campo nome é obrigatório')
        }
        const itemNovo = req.body

    } catch (error) {
        res.send(500)
        res.send(error.message)
    }
}

function patchItem(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        if (id && Number(id)) {
            modificaItem(body, id)
            res.send('Item modificado com sucesso')
        } else {
            res.status(422)
            res.send('ID invalido')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteItem(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletarItemPorId(id)
            res.send('Item deletado com sucesso')
            res.send(200)
        } else {
            res.status(422)
            res; send('ID invalido')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getItens,
    getItem,
    postItem,
    patchItem,
    deleteItem
}