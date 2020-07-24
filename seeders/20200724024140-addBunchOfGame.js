'use strict';
const faker = require('faker')
const { Op } = require('sequelize')
const { Game } = require('../models')

const games = [
  'The Last of Us Part II',
  'Just Cause 3',
  'Minecraft Dungeon'
]

module.exports = {
  up: async () => {
    await Game.bulkCreate(
      games.map(
        game => ({
          title: game,
          cover: faker.image.imageUrl(),
          price: Math.floor(Math.random() * 101),
          rate: Math.floor(Math.random() * 6),
        })
      )
    )
  },

  down: async () => {
    await Game.destroy({
      title: {
        [Op.in]: games
      }
    })
  }
};
