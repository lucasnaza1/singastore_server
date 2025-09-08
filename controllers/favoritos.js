const { getTodosFavoritos, deletarFavoritoId, insereFavorito } = require("../services/favoritos")

function getFavoritos(req, res) {
    try {
        const itens = getTodosFavoritos()
        res.send(itens)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavoritos(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.send('Favoritos cadastrado com sucesso')
        res.send(201)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletarFavoritoId(id)
            res.send(200).send('Favorito foi deletado com sucesso')
        } else {
            res.status(422).send('ID inválido')
        }


    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavorito
}