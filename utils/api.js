
// returns the total sum of the array
const sumOfNums = (numArr) => {
  return numArr.reduce((accum, currVal) => accum + currVal)
}

const reverseSentence = (strArr) => {
  // reverses the words before putting back together to be a whole string
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
      // when a special char is encountered, reverses the current chars in the alphaArr
      // then adds the special char at the end before adding to the current newStr
      // also resets the alpha array for new set of chars
      newStr += (alpha.reverse().join('') + str[i])
      alpha = []
    }
    else {
      // adds the char to the alpha array for reversing later on
      alpha.push(str[i])
    }

    // if the end of the str is reached, reverses the alpha array then adds to the end of the newStr
    if (i === str.length - 1) {
      newStr += (alpha.reverse().join(''))
    }
  }
  return newStr
}
module.exports = { sumOfNums, reverseSentence }