'use strict'

module.exports = (sequelize, DataType) => {
    return sequelize.define('project', {
        title: {
            type: DataType.STRING,
            allowedNull: false
        },
        description: {
            type: DataType.TEXT,
            allowedNull: false,
        },
        img: {
            type: DataType.BLOB
        },
        githubLink: {
            type: DataType.STRING,
            allowedNull: true
        },
        liveLink: {
            type: DataType.STRING,
            allowedNull: true
        }
    })
}