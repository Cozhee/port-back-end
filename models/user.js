'use strict'

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowedNull: true
        },
        username: {
          type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.BLOB,
            allowedNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowedNull: true
        },
        resume: {
            type: DataTypes.BLOB,
            allowedNull: true
        },
        about: {
          type: DataTypes.TEXT,
          allowedNull: true
        },
        githubLink: {
            type: DataTypes.STRING,
            allowedNull: true
        },
        linkedIn: {
            type: DataTypes.STRING,
            allowedNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowedNull: false,
            unique: true
        },
        skills: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowedNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowedNull: true
        }
    }, {
        hooks: {
            beforeCreate: async(user, options) => {
                user.password = await bcrypt.hash(user.password, 5)
                user.username = user.email.split('@')[0]
            }
        }
    })
}