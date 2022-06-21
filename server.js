const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const projectRoute = require('./routes/projectRoute')
const signUpRoute = require('./routes/signUpRoute')
const signInRoute = require('./routes/signInRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json())
app.use(projectRoute, signUpRoute, signInRoute, userRoute)

function start() {
    app.listen(PORT,() => console.log(`Listening on port ${PORT}`))
}

module.exports = {server: app, start}