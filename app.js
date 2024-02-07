const express = require('express');
const app = express();
const port = 3000;


app.get('/helloworld', (req, res) => {
    res.send("Hello World!");
})

app.get('/randomnumber', (req, res) => {
    let random = Math.floor(Math.random() * 101);
    const response = {
        randomnumber: random
    }
    res.send(response);
})


app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
})