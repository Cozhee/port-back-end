const express = require('express')
const router = express.Router()
const { UserModel } = require('../models/index')

router.post('/signin', async(req, res) => {
    try {
        const { email } = req.body
        let user = await UserModel.findOne({ where: { email: email }})
        let userProjects;
        if (!user) {
            user = await UserModel.create({ email: email })
        } else {
            const projects = await user.getProjects()
            if (projects.length > 0) {
                userProjects = projects
            }
        }
        res.status(200).send({user: user, projects: userProjects})
    } catch(err) {
        res.status(404).send('Could not fetch user')
    }
})

module.exports = router