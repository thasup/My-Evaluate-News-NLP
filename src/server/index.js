require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

// Define API Credential
const meaningCloudAPI = process.env.API_KEY;

const app = express();
app.use(cors());
// to use json
app.use(express.json());
// to use url encoded values
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('dist'));

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const port = process.env.PORT || 8081;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

// GET Route
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});

// POST Route
app.post('/data', async (req, res) => {
    const text = req.body.url;
    try {
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${meaningCloudAPI}&url=${text}&lang=en`, {method: 'POST'});
        const data = await response.json();

        res.send(data);
    } catch (error) {
        console.log("error", error);
    };
});