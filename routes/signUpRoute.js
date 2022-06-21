'use strict'

const express = require('express')
const router = express.Router()
const { UserModel } = require('../models/index')


router.post('/signup', async(req, res) => {

    try {
        const { body } = req
        const user = await UserModel.create(body)
        res.send(user)
    }catch(err){
        res.send('Could not create user')
    }

})

module.exports = router;