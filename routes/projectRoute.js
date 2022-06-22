'use strict'

const express = require('express')
const router = express.Router()
const { ProjectModel, UserModel } = require('../models/index')

// add a project to the current authenticated user
router.post('/project/:id', async(req, res) => {
    const body = req.body
    const id = req.params.id
    console.log(body)
    console.log(req.params.id)
    try {
        const user = await UserModel.findOne({ where: { id: id }})
        const newProject = await ProjectModel.create(body)
        await user.addProject(newProject)
        res.status(200).send(newProject)
    } catch(err) {
        res.status(404).send('Could not create project')
    }

})

router.put('/project/:id', async(req, res) => {

    try {
        const id = req.params.id
        const body = req.body
        const getProject = await ProjectModel.findOne({ where: { id: id }})
        await getProject.update(body)
        res.status(200).send(getProject)
    } catch(err) {
        res.status(404).send('Could not update project')
    }

})

// delete a project based on the id
router.delete('/project/:id', async(req, res) => {
    const id = req.params.id
    try {
        const selectedProject = await ProjectModel.findOne({ where: { id : id }})
        await selectedProject.destroy()
        res.status(200).send(`${selectedProject.dataValues.title} deleted`)
    } catch(err) {
        res.status(404).send('Could not delete project')
    }
})

module.exports = router