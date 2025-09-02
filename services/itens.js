const fs = require('fs')

function getTodosItens() {
    return JSON.parse(fs.readFileSync('itens.json'))
}

module.exports = {
    getTodosItens
}