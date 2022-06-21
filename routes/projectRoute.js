'use strict'

const express = require('express')
const router = express.Router()
const { ProjectModel, UserModel } = require('../models/index')

router.post('/project', async(req, res) => {
    const body = req.body
    try {
        const user = await UserModel.findOne({ where: { id: 3 }})
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
        res.status(200).send(selectedProject)
    } catch(err) {
        res.status(404).send('Could not get project')
    }
})

module.exports = router