const userSchema = require('../models/users')
const bcrypt = require('bcrypt')
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)
const jwt = require('jsonwebtoken')

class Users {
  static viewAll(req,res){
    userSchema.find()
    .then(data=>{
      res.status(200).json({
        message:'this is list of users',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static createAdmin(req,res){
    let password = bcrypt.hashSync(req.body.password,salt)
    let user = {
      username:req.body.username,
      password:password,
      role:'admin'
    }
    userSchema.create(user)
    .then(data=>{
      res.status(200).json({
        message:'create admin successfully',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static signup(req,res){
    let password = bcrypt.hashSync(req.body.password,salt)
    let user = {
      username:req.body.username,
      password:password,
      role:'user'
    }
    userSchema.create(user)
    .then(data=>{
      res.status(200).json({
        message:'user created successfully',
        data
      })
    })
    .then(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static signin(req,res){
    let password = req.body.password
    let target = {
      username:req.body.username
    }
    userSchema.findOne(target)
    .then(user=>{
      if(user){
        let clarify = bcrypt.compareSync(password,user.password)
        if(clarify){
          let payload = {
            _id:user._id,
            name:user.username,
            role:user.role
          }
          jwt.sign(payload,'secret key',(err,token)=>{
            if(err){
              res.status(500).json({
                message:'something went wrong',
                err
              })
            } else {
              res.status(200).json({
                message:'berhasil signin',
                token:token
              })
            }
          })
        } else {
          res.status(403).json({
            message:'your password is wrong'
          })
        }
      } else {
        res.status(500).json({
          message:'user is not found'
        })
      }
    })
  }
}

module.exports = Users