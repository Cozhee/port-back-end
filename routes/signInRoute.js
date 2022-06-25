const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const { UserModel } = require('../models/index')

router.post('/signin', async(req, res) => {
    try {
        const { email, password } = req.body
        let user = await UserModel.findOne({ where: { email: email }})
        const valid = await bcrypt.compare(password, user.password)
        console.log(valid)
        if (valid) {
            const projects = await user.getProjects()
            res.status(200).send({user: user, projects: projects})
        }
    } catch(err) {
        res.status(404).send('Could not fetch user')
    }
})

module.exports = router