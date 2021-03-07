const express = require('express')
const router = express.Router()
const {
  getHomePage,
  getHello,
  getSum
} = require('./controllers/api_controller')


router.get("/", getHomePage)

// Returns hello
router.get('/hello', getHello);

// Returns the sum of the numbers in the query
router.get('/sum', getSum)

// Creates a new 
// router.('/', make);

// Deletes a  with given id
// router.delete('/:id', remove);

// Updates a  with given id
// router.patch('/:id', change);

module.exports = router