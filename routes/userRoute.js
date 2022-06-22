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

router.delete('/user/:id', async(req, res) => {
    try {
        const id = req.params.id
        const getUser = await UserModel.findOne({ where: { id: id }})
        await getUser.destroy()
        res.status(204).send('Deleted user')
    } catch(err) {
        res.status(404).send('Could not delete user')
    }

})

module.exports = router