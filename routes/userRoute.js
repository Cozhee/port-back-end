const express = require('express')
const router = express.Router()
const { UserModel } = require('../models/index')

router.get('/user/:id', async(req, res) => {
    const id = req.params.id
    try {
        const user = await UserModel.findOne({ where: { id: id }})
        const userProjects = await user.getProjects()
        res.status(200).send(userProjects)
    }catch(err) {
        res.status(404).send('Could not get projects for user')
    }
})

router.put('/user', async(req, res) => {
    try {
        const { email } = req.body
        const body = req.body
        const user = await UserModel.findOne({ where: { email: email }})
        await user.update(body)
        res.send(user)
    } catch(err) {
        res.status(404).send('Could not update user information')
    }
})

module.exports = router