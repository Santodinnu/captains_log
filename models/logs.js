const mongoose =require('mongoose')

const Schema = mongoose.Schema

const LogSchema = new Schema({
    title:{type:String},
    entry:{type:String},
    shipIsBroken:{type:Boolean, default: true}
})

const Log = mongoose.model('Log',LogSchema)

module.exports = Log