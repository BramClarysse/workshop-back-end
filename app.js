const express = require('express');
const app = express();
const port = 3000;


app.get('/helloworld', (req, res) => {
    res.send("Hello World!");
})

app.get('/randomnumber', (req, res) => {
    let random = Math.floor(Math.random() * 101);

    res.json({
        randomnumber: random
    });
})


app.get('/howlongisthisstring', (req, res) => {
    const queryString = req.query.string;

    if(!queryString) {
        return res.status(400).send('Please provide a string in the query parameter.');
    }

    const stringLength = queryString.length;

    return res.json({
        length: stringLength
    });
})


app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
})