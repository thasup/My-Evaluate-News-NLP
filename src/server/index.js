var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(express.json())
// to use url encoded values
app.use(express.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

console.log(JSON.stringify(mockAPIResponse))

const port = 8081;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})