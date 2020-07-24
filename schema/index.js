const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql')

const game = require('./game')
const auth = require('./auth') 

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
      ...game.query
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
      ...game.mutation,
      ...auth.mutation, 
    })
  })
})
