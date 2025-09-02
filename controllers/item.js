const { getTodosItens } = require('../services/itens')

function getItens(req, res) {
    try {
        const itens = getTodosItens
        res.send(itens)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getItens
}