const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

function start() {
    app.listen(PORT,() => console.log(`Listening on port ${PORT}`))
}

module.exports = {server: app, start}