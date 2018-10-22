const express = require('express');
const { renderToString } = require('react-dom/server');
// const React = require('react');
import React from 'react';
// const App = require('./components/App');
import App from './components/App.js';
const app = express();

app.get('/', (request, response) => {
    response.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>');
    response.write('<div id="root">');
    response.write(renderToString(<App/>));
    response.write('</div></body></html>');
    response.end();
});

app.listen(3001, function (err) {
    if (err) throw err;
    console.log(`React15 server listening on ${3001}`)
});