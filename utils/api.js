
// returns the total sum of the array
const sumOfNums = (numArr) => {
  return numArr.reduce((accum, currVal) => accum + currVal)
}

module.exports = { sumOfNums }