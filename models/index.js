'use strict'

const { Sequelize, DataTypes } = require('sequelize')
require("dotenv").config();
const ProfileSchema = require('./user')
const ProjectSchema = require('./project')

const DATABASE_URL = `postgres://${process.env.USERNAME}:${process.env.PW}${process.env.HOST}/${process.env.DB_NAME}`

const sequelize = new Sequelize(DATABASE_URL)

const UserModel = ProfileSchema(sequelize, DataTypes)
const ProjectModel = ProjectSchema(sequelize, DataTypes)

UserModel.hasMany(ProjectModel)
ProjectModel.belongsTo(UserModel)

module.exports = {sequelize, UserModel, ProjectModel}