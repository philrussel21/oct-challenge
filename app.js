const { app } = require('./server')

const server = app.listen(3000, () => {
  console.log("Server up, listening to port 3000!")
})

app.get("/", (req, res) => {
  res.status(200).send("Hello World!")
})