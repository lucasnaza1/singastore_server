const { Router } = require('express')
const { getItens, getItem, postItem, patchItem } = require('../controllers/item')

const router = Router()
// GET --> todos os itens
router.get('/', getItens)
// GET --> um item especificado pelo id
router.get('/:id', getItem)

router.post('/', postItem)

router.patch('/:id', patchItem)


router.delete('/', (req, res) => {
    res.send('Itens deletados')
})

module.exports = router