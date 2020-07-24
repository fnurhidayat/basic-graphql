const { Game } = require('../models')

module.exports = {
  index: () => Game.findAll(),
  findById: (parent, args) => Game.findByPk(args.id), 
  create: (parent, args) => Game.create(args),
  update: async (parent, args, request, response) => {
    const { id, title, cover, price, rate } = args
    if (request.headers.authorization !== 'this is token') {
      throw new Error('Unauthorized')
    }
    try {
      await Game.update({ title, cover, price, rate }, {
        where: { id } 
      })
      const updatedGame = await Game.findByPk(id)
      return Promise.resolve(updatedGame)
    }

    catch(err) {
      return Promise.reject(err)
    }
  }
}
