require('dotenv').config()
const db = require('./models')
db.connect() // test the db connection

const dbTest = async () => {
  try {
    // CREATE
    const newUser = new db.User({
      name: 'ken hamamoto',
      email: 'test@c.com',
      password: 'testpw'
    })

    await newUser.save()
    console.log('new user:', newUser)

    // READ -- at login
    const foundUser = await db.User.findOne({
      name: 'ken hamamoto'
    })

    console.log('found user:', foundUser)
  } catch (err) {
    console.log(err)
  }
}

dbTest()