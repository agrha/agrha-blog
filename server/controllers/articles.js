const articleSchema = require('../models/articles')

class Article {
  static viewAll(req,res){
    articleSchema.find()
    .populate('author')
    .then(data=>{
      res.status(200).json({
        message:'this is list of articles',
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
  static create(req,res){
    let obj = {
      author: req.body.author,
      title: req.body.title,
      content: req.body.content
    }
    articleSchema.create(obj)
    .then(data=>{
      res.status(200).json({
        message:'data artikel berhasil dibuat',
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
  static update(req,res){
    let target = {
      _id:req.params.id
    }
    let obj = {
      title: req.body.title,
      content: req.body.content
    } 
    articleSchema.findOneAndUpdate(target,obj)
    .then(data=>{
      res.status(200).json({
        message:'update sucess',
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
  static delete(req,res){
    let target = {
      _id:  req.params.id
    }
    articleSchema.findOneAndRemove(target)
    .then(data=>{
      res.status(200).json({
        message:'delete success',
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
}

module.exports = Article