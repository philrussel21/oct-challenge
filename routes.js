const express = require('express')
const router = express.Router()
const {
  getHomePage,
  getHello,
  getSum,
  getReverseWords
} = require('./controllers/api_controller')


router.get("/", getHomePage)

// Returns hello
router.get('/hello', getHello);

// Returns the sum of the numbers in the query
router.get('/sum', getSum)

// Returns the sentence with its words reversed in the query
router.get('/reverse-words', getReverseWords)

module.exports = router