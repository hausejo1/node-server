'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('This is a demo app, which is only used to show the building of a docker-app!'); 
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
