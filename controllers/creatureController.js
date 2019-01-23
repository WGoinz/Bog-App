const Creature = require('../models/Creature')

const creatureController = {
    index: (req, res) => {
        Creature.find().then((creatures) => {
            res.json(creatures)
        }).catch((err) => {
            console.log(err)
        })
    },
    show: (req, res) => {
        const creatureId = req.params.id
        Creature.findById(creatureId).then((creature) => {
            res.send(creature)
        })
    },
    create: async (req, res) => {
        try {
          const newCreature = req.body
          const savedCreature = await Creature.create(newCreature)
          res.json(savedCreature)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
      },
      update: async (req, res) => {
        try {
          const creatureId = req.params.id
          const updatedCreature = req.body
          const savedCreature = await Creature.findByIdAndUpdate(creatureId, updatedCreature)
          res.json(savedCreature)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
      },
      delete: async (req, res) => {
        try {
          const creatureId = req.params.id
          await Creature.findByIdAndRemove(creatureId)
          res.json({
            msg: 'Successfully Deleted'
          })
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
      }
}

module.exports = creatureController