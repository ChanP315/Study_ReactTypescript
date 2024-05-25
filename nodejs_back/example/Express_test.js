const express = require('express');
const app = express();
const port = 4000;

// app.get('/', (req, res) => {
//     res.send('hello World!');
// });
// app.get('/about', (req, res) => {
//     res.send('hello about World!');
// });

const checkAuth = (req, res, next) => {
    console.log('she has admin permission');
    next();
}

const getUser = (req, res) => {
    console.log("here is user info");
    res.send("here is user info");
}

app.get('/users', checkAuth, getUser);

app.listen(port, () => {
    console.log("Server is on 4000");
});