const express = require('express')
const router = express.Router()
const { UserModel } = require('../models/index')

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