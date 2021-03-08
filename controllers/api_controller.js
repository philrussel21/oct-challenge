const { sumOfNums, reverseSentence } = require('../utils/api')

const getHomePage = (req, res) => {
  res.status(200).send("Hello Octopus!")
}

const getHello = (req, res) => {
  res.status(204).end()
}

const getSum = (req, res) => {
  // converts the variable query string numbers to an array of numbers
  const queryArr = req.query.numbers.split(',')
  const nums = queryArr.map(num => +num)

  const sum = sumOfNums(nums)
  // express can only send a buffer obj, string, object, bool or an array
  // as per instructions, the response should not be in JSON format
  res.status(200).send(sum.toString())
}

const getReverseWords = (req, res) => {
  // converts the variable query string to an array of words according to its space
  const queryArr = req.query.sentence.split(' ')

  const reversedSentence = reverseSentence(queryArr)
  res.status(200).send(reversedSentence)
}

module.exports = { getHomePage, getHello, getSum, getReverseWords }