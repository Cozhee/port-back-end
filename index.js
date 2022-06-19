'use strict'

const server = require('./server')
const { sequelize, UserModel, ProjectModel } = require('./models/index')

async function startSequelize () {
    try {
        await sequelize.sync({alter: true})

        await UserModel.create({name: 'Test-User', title: 'Test-Title'})
        // let project = await ProjectModel.create({title: 'React Course x22', description: 'A really cool app x22', })

        // await user.addProjects(project)
        // console.log(await user.getProjects())

        console.log('Connection is a go!')
    } catch(err) {
        console.log(err)
    }
}

startSequelize()
server.start()