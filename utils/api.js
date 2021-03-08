
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
  let newStr = ""
  let alpha = []
  for (let i = 0; i < str.length; i++) {
    if (!letters.includes(str[i])) {
      newStr += (alpha.reverse().join('') + str[i])
      alpha = []
    }
    else {
      alpha.push(str[i])
    }

    if (i === str.length - 1) {
      newStr += (alpha.reverse().join(''))
    }
  }
  return newStr
}
module.exports = { sumOfNums, reverseSentence }