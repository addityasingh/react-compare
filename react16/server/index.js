const express = require('express');
const { renderToString } = require('react-dom/server');
// const React = require('react');
import React from 'react';
// const App = require('./components/App');
import App from '../client/components/App/App.js';
const app = express();

app.use(express.static('./'));

app.get('/', (request, response) => {
    response.write(`<!DOCTYPE html><html>
        <head>
            <title>My Page</title>
            <link href='main.css' rel="stylesheet">
        </head>
    <body>`);
    response.write('<div id="root">');
    response.write(renderToString(<App/>));
    response.write(`</div>
        <script src='client.js'></script>
        </body>
    </html>`);
    response.end();
});

app.listen(3000, function (err) {
    if (err) throw err;
    console.log(`React16 server listening on ${3000}`)
});