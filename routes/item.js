const { Router } = require('express')
const { getItens, getItem, postItem } = require('../controllers/item')

const router = Router()
// GET --> todos os itens
router.get('/', getItens)
// GET --> um item especificado pelo id
router.get('/:id', getItem)

router.post('/', postItem)

router.post('/', (req, res) => {
    res.send('Aqui estão os itens')
})


router.patch('/', (req, res) => {
    res.send('Itens atualizados')
})


router.delete('/', (req, res) => {
    res.send('Itens deletados')
})

module.exports = router