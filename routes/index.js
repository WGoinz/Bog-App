const express = require('express')
const router = express.Router()

const creatureController = require('../controllers/creatureController')

router.get('/creatures', creatureController.index)
router.post('/creatures', creatureController.create)
router.get('/creatures/:id', creatureController.show)
router.put('/creatures/:id', creatureController.update)
router.delete('/creatures/:id', creatureController.delete)




module.exports = router