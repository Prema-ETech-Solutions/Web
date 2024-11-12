const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});


const Endspoints = {
    '/test': (req, res) => { res.send('Test World!'); },
    '/blog': (req, res) => { res.send('Blog World!'); },
};

Object.keys(Endspoints).forEach((endpoint) => {
    app.get(endpoint, Endspoints[endpoint]);
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});                 