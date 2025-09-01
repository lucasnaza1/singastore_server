const { Router } = require('express')

const router = Router()

router.get('/', (req,res) => {
    try{
        res.send('Aqui serão exibidos os itens')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

})


router.post('/', (req,res) => {
    res.send('Aqui estão os itens')
})


router.patch('/', (req,res) => {
    res.send('Itens atualizados')
})


router.delete('/', (req,res) => {
    res.send('Itens deletados')
})

module.exports = router