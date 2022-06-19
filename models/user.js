'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        img: {
            type: DataTypes.BLOB,
            allowedNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        resume: {
            type: DataTypes.BLOB,
            allowedNull: true
        },
        about: {
          type: DataTypes.TEXT,
          allowedNull: false
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
            allowedNull: false
        }
    })
}