'use strict'

const sequelize = require('./models/index')

sequelize.authenticate().then(() => {
    console.log('Connection successful')
}).catch((err) => {
    console.log('Unable to connect')
})