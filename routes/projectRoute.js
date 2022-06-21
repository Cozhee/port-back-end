'use strict'

const express = require('express')
const router = express.Router()
const { ProjectModel, UserModel } = require('../models/index')

router.post('/project', async(req, res) => {
    const body = req.body
    try {
        const user = await UserModel.findOne({ where: { id: 1 }})
        const newProject = await ProjectModel.create(body)
        await user.addProject(newProject)
        res.status(200).send(newProject)
    } catch(err) {
        res.status(404).send('Could not create project')
    }

})

router.get('/project/:id', async(req, res) => {
    const id = req.params.id
    try {
        const selectedProject = await ProjectModel.findOne({ where: { id : id }})
        await selectedProject.destroy()
        res.status(200).send(`${selectedProject.dataValues.title} deleted`)
    } catch(err) {
        res.status(404).send('Could not delete project')
    }
})

router.delete('/project/:id', async(req, res) => {
    const id = req.params.id
    try {
        const projectToDelete = await ProjectModel.findOne({ where: { id: id }})
        console.log(projectToDelete)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router