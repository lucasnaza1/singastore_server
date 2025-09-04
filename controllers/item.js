const { getTodosItens, getItensId } = require('../services/itens')

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


module.exports = {
    getItens,
    getItem
}