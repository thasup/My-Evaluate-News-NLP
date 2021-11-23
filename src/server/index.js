var path = require('path');
const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
// to use json
app.use(express.json());
// to use url encoded values
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('dist'));

console.log(__dirname);

const port = 8081;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

// Define API Credential
const meaningCloudAPI = process.env.API_KEY;

// GET Route
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});

// POST Route
app.post('/data', async(req, res) => {
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${meaningCloudAPI}&url=${req.body.url}&lang=en`);

    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("error", error);
    };
});

