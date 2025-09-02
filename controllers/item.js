const fs = require('fs')

function getItens (req,res) {
    try{
        const itens = JSON.parse( fs.readFileSync('itens.json'))
        res.send(itens)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getItens 
}