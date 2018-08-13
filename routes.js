const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

//Create(2b)
//we are creating a new letter to post to the homepage
router.post('/', controller.create)

//Read (1)
router.get('/', controller.index)
// (2a)
// rendering form to create a new card..this gives us our form
router.get('/new', controller.new)
//Update (3)
router.put('/:id', controller.update)
//Delete (4)
router.delete('/:id', controller.delete)
module.exports = router