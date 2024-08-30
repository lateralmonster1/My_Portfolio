const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.post('/', (req, res) => {

  console.log(req.body)


  res.send('hello world')
})


app.listen(8080, () => {
    console.log('Listening on port 8080')
})