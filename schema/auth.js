const {
  GraphQLObjectType,
  GraphQLNonNull,
  /* Data Types */
  GraphQLInt,
  GraphQLString,
} = require('graphql')
const auth = require('../controllers/authController')

const LoginType = new GraphQLObjectType({
  name: 'Login',
  description: 'Schema that are being used for Login',
  fields: () => ({
    accessToken: { type: GraphQLNonNull(GraphQLString)},
  })
})

module.exports = {
  mutation: {
    login: {
      type: LoginType,
      description: 'Add new game on the database',
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: auth.login
    },
  }
}
