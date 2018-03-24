const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  author:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  title:{
    type:String
  },
  image:{
    type:String
  },
  content:{
    type:String
  }
},{timestamps:true})

module.exports = mongoose.model('Article',articleSchema)

