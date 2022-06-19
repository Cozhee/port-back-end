'use strict'

const server = require('./server')
const { sequelize, ProfileModel } = require('./models/index')

sequelize.sync({force: true}).then(() => {
    console.log('Connection successful')
    ProfileModel.create({name: 'J-dawg', title: 'The dawg'})
}).catch((err) => {
    console.log('Unable to connect')
})

server.start()