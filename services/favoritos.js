const fs = require('fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
};

function deletarFavoritoId() {
    const itens = JSON.parse(fs.readFileSync('favoritos.json'))
    const itensFiltrados = itens.filter(item => item.id !== id)
    fs.writeFileSync('favoritos.json', JSON.stringify(itensFiltrados))
}

function insereFavorito(id) {
    const itens = JSON.parse(fs.readFileSync('itens.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const itemInserido = itens.find(item => item.id === id)
    const novaListaFavoritos = [...favoritos, itemInserido]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))

}


module.exports = {
    getTodosFavoritos,
    deletarFavoritoId,
    insereFavorito
}