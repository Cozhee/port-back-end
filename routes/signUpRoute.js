'use strict'

const express = require('express')
const router = express.Router()
const { UserModel } = require('../models/index')


router.post('/signup', async(req, res) => {

    try {
        const user = await UserModel.create(req.body)
        res.send(user)
    }catch(err){
        res.status(201).send('Could not create user')
    }

})

module.exports = router;