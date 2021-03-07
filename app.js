const express = require('express')
const routes = require('./routes')

// express app
const app = express()



app.get("/", (req, res) => {
  res.status(200).send("Hello World!")
})

module.exports = app
