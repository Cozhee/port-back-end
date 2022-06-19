const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const projectRoute = require('./routes/project')

app.use(express.json())
app.use(projectRoute)

function start() {
    app.listen(PORT,() => console.log(`Listening on port ${PORT}`))
}

module.exports = {server: app, start}