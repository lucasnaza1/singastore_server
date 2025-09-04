const { Router } = require('express')
const { getItens, getItem, postItem, patchItem, deleteItem } = require('../controllers/item')

const router = Router()
// GET --> todos os itens
router.get('/', getItens)
// GET --> um item especificado pelo id
router.get('/:id', getItem)

router.post('/', postItem)

router.patch('/:id', patchItem)

router.delete('/:id', deleteItem)

module.exports = router