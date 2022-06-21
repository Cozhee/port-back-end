const express = require('express')
const router = express.Router()
const { UserModel } = require('../models/index')

router.get('/user', async(req, res) => {
    try {
        const { email } = req.body
        const user = await UserModel.findOne({ where: { email: email }})
        res.status(200).send(user)
    } catch(err) {
        res.status(404).send('Could not fetch user')
    }
})

module.exports = router