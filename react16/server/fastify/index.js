const fastify = require('fastify')()

const server = () => {
    // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })
  
  // Run the server!
  fastify.listen(3000, function (err) {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
  })
};

module.exports = server;
