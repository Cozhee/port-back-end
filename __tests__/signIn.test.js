const supertest = require('supertest')
const { server } = require('../server')
const request = supertest(server)
const { sequelize, UserModel } = require('../models/index')

beforeAll(async() => {
    await sequelize.sync()
})

afterAll(async() => {
    await sequelize.drop()
    await sequelize.close()
})

describe('Sign in route', () => {

    it('Should sign in a user', async() => {
        const createUser = await UserModel.create({email: 'test@example.com'})
        const signedInUser = await request.post('/signin').send({email: 'test@example.com'})

        console.log(signedInUser.body.user)

        expect(signedInUser.status).toEqual(200)
        expect(signedInUser.body.user.name).toEqual(null)
        expect(signedInUser.body.user.img).toEqual(null)
        expect(signedInUser.body.user.title).toEqual(null)
        expect(signedInUser.body.user.resume).toEqual(null)
        expect(signedInUser.body.user.email).toEqual('test@example.com')
        expect(signedInUser.body.user.about).toEqual(null)
        expect(signedInUser.body.user.githubLink).toEqual(null)
        expect(signedInUser.body.user.linkedIn).toEqual(null)
    })

})