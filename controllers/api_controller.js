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
  for (const n of nums) {
    // checks to see if there's any decimal in the query
    if (!Number.isInteger(n)) {
      return res.status(400).send("Invalid query provided")
    }
  }
  const sum = sumOfNums(nums)

  // // would only return okay for valid queries
  if (sum) {
    //   // express can only send a buffer obj, string, object, bool or an array
    //   // as per instructions, the response should not be in JSON format
    return res.status(200).send(sum.toString())
  }
  else {
    res.status(400).send("Invalid query provided.")
  }
}

const getReverseWords = (req, res) => {
  // converts the variable query string to an array of words according to its space
  const queryArr = req.query.sentence.split(' ')

  const reversedSentence = reverseSentence(queryArr)
  res.status(200).send(reversedSentence)
}

module.exports = { getHomePage, getHello, getSum, getReverseWords }