const { sumOfNums } = require('../utils/api')

const getHomePage = (req, res) => {
  res.status(200).send("Hello World!")
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

module.exports = { getHomePage, getHello, getSum }