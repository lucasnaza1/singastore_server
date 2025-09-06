const { getTodosfavoritos, deletaFavoritoId } = require("../services/favoritos")

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosfavoritos()
        res.send(favoritos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavoritos(req, res) {
    try {
        const id = req.params.id
            (req.body.nome)
        insereFavoritos(id)
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
            deletaFavoritoId(id)
            res.send('Favorito foi deletado com sucesso')
            res.send(200)
        } else {
            res.status(422)
            res.send('ID inválido')
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavorito
}