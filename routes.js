const express = require('express')
const router = express.Router()
const {
  getHomePage,
  getHello
} = require('./controllers/api_controller')


router.get("/", getHomePage)

// Returns hello
router.get('/hello', getHello);

// Returns one  with given id
// router.get('/:id', get);

// Creates a new 
// router.('/', make);

// Deletes a  with given id
// router.delete('/:id', remove);

// Updates a  with given id
// router.patch('/:id', change);

module.exports = router