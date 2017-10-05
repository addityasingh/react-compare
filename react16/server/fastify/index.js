const fastify = require('fastify')()
const { renderToString } = require('react-dom/server');
import React from 'react';
import App from './components/App.js';

// Declare a route
fastify.get('/', function (request, response) {
    const resp = `
    <!DOCTYPE html><html><head><title>My Page</title></head><body>
    <div id="root">
    ${renderToString(<App/>)}
    </div></body></html>
    `;
  response.send(resp);
})

// Run the server!
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
});
