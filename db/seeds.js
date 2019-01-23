const mongoose = require('./connection')
const { Creature } = require('./schema')

// using async/await
const saved = async () => {
    await Creature.remove()
    const luke = new Creature({ name: 'Luke', description: 'Jedi' })
    await luke.save()
    const darth = new Creature({ name: 'Darth Vader', description: 'Father of Luke' })
    await darth.save()
    db.close()
}

saved()