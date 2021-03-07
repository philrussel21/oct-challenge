const getHomePage = (req, res) => {
  res.status(200).send("Hello World!")
}

const getHello = (req, res) => {
  res.status(204).end()
}

module.exports = { getHomePage, getHello }