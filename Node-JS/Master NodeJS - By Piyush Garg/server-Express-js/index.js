const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});



const show = () => {
    res.send('Show World!');
}












const Endpoints = {
    '/test': (req, res) => { res.send('Test World!'); },
    '/blog': (req, res) => { res.send('Blog World!'); },
    '/show': show
};

Object.keys(Endpoints).forEach((endpoint) => {
    app.get(endpoint, Endpoints[endpoint]);
});






app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});                 