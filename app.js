const express = require('express')
const routes = require('./routes')

// express app
const app = express()

app.use("/", routes)

module.exports = app
