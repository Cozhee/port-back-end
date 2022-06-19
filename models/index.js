'use strict'

const { Sequelize } = require('sequelize')
require("dotenv").config();

const DATABASE_URL = `postgres://${process.env.USERNAME}:${process.env.PW}${process.env.HOST}/${process.env.DB_NAME}`

const sequelize = new Sequelize(DATABASE_URL)

module.exports = sequelize