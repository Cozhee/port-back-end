'use strict'

const server = require('./server')
const { sequelize, UserModel, ProjectModel } = require('./models/index')

async function startSequelize (){
    try {
        await sequelize.sync()

        console.log('Connection a go!')
    } catch(err) {
        console.log(err)
    }
}

startSequelize()
server.start()