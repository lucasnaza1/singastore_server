const { router } = require('express')
const { getFavoritos, postFavoritos, deleteFavorito } = require('../controllers/favoritos')

const router = Router()

router.get('/', getFavoritos)
router.post('/:id', postFavoritos)
router.delete('/:id', deleteFavorito)

module.exports = router