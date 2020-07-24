const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const schema = require('./schema')

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: {
      accessToken: (args, req) => req.header.authorization 
    },
    graphiql: true
  })
)


module.exports = app
