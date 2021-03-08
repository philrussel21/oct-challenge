
// returns the total sum of the array
const sumOfNums = (numArr) => {
  return numArr.reduce((accum, currVal) => accum + currVal)
}

const reverseSentence = (strArr) => {
  const newSentence = []
  for (const word of strArr) {
    const newWord = reverseWord(word)
    newSentence.push(newWord)
  }
  return newSentence.join(' ')
}

const reverseWord = (str) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const wordArr = []
  for (let i = 0; i < str.length; i++) {
    if (!letters.includes(str[i])) {
      wordArr[i] = str[i]
    }
    else {
      wordArr.unshift(str[i])
    }
  }
  return wordArr.join('')
}

module.exports = { sumOfNums, reverseSentence }