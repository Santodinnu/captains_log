const captainController = require('../controllers/captainController')

const express = require('express')

const router = express.Router()


// index
router.get('/', captainController.logIndex)

// delete all route
router.get('/clear', captainController.logClear)

// new
router.get('/new', captainController.logNew)

//show route
router.get('/:id', captainController.logShow)

// create route
router.post('/', captainController.logCreate)

// edit route
router.get('/:id/edit', captainController.logEdit)

// update route
router.put('/:id', captainController.logUpdate)

// destroy route
router.delete('/:id', captainController.logDelete)


module.exports = router