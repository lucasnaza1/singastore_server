const { Router } = require('express')

const router = Router()

router.get('/', (req,res) => {
    res.send('Aqui serão exibidos os itens')
})

module.exports = router