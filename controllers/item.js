function getItens (req,res) {
    try{
        res.send('Aqui serão exibidos os itens')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getItens 
}