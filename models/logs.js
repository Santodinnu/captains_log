const mongoose =require('mongoose')

const Schema = mongoose.Schema

const logsSchema = new Schema({
    title:{type:String},
    entry:{type:String},
    shipIsBroken:{type:Boolean}
})

const Log = mongoose.model('Log',logsSchema)

module.exports = Log