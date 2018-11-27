const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')


const userSchema = new Schema({
  username:String,
  role:{
    type:String,
    enum: ['BOSS','DEVELOPER', 'TA']
  }
  },{
    timestamps:{
      createdAt:true,
      updatedAt:true
    },
    edad:Number,
    email:String,
})
userSchema.plugin(passportLocalMongoose,{usernameField:'username'})

module.exports = mongoose.model('User', userSchema)