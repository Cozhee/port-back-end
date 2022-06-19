'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        img: {
            type: DataTypes.BLOB
        },
        title: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        githubLink: {
            type: DataTypes.STRING,
            allowedNull: true
        },
        linkedIn: {
            type: DataTypes.STRING,
            allowedNull: true
        }
    })
}