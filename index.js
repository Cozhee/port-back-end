'use strict'

const server = require('./server')
const { sequelize, UserModel, ProjectModel } = require('./models/index')

async function startSequelize () {
    try {
        await sequelize.sync({force: true})

        let User = UserModel.create({name: 'J-dawg', title: 'The dawg'})
        let Project = ProjectModel.create({title: 'React Course', description: 'A really cool app', })

        await User.addProjectModel(Project)

        console.log('Connection is a go!')
    } catch(err) {
        console.log(err)
    }
}

startSequelize()
server.start()