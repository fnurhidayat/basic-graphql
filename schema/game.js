const {
  GraphQLObjectType,
  GraphQLNonNull,
  /* Data Types */
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql')
const game = require('../controllers/gameController')

const GameType = new GraphQLObjectType({
  name: 'Game',
  description: 'Game object and data structure',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt)},
    title: { type: GraphQLNonNull(GraphQLString)},
    cover: { type: GraphQLNonNull(GraphQLString)},
    price: { type: GraphQLNonNull(GraphQLInt)},
    rate: { type: GraphQLNonNull(GraphQLInt)},
  })
})

module.exports = {
  query: {
    game: {
      type: GameType,
      description: 'A single game described by id',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: game.findById
    },
    games: {
      type: GraphQLList(GameType),
      description: 'List of all available game',
      resolve: game.index
    },
  },

  mutation: {
    createGame: {
      type: GameType,
      description: 'Add new game on the database',
      args: {
        title: { type: GraphQLString },
        cover: { type: GraphQLString },
        price: { type: GraphQLInt },
        rate: { type: GraphQLInt },
      },
      resolve: game.create
    },
    updateGame: {
      type: GameType,
      description: 'Update existing game',
      args: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        cover: { type: GraphQLString },
        price: { type: GraphQLInt },
        rate: { type: GraphQLInt },
      },
      resolve: game.update
    }
  }
}
