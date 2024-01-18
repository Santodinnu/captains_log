const Log = require('../models/Logs')


const logIndex = async (req,res) => {
    try{
        const data = await Log.find()
        console.log('data', data)
        res.render('Index' , {
            logs: data
        })
    } catch(err){
        res.send('There is an error')
        console.log('error : ', err)
    }
    
}

const logNew = async (req,res) => {
        res.render('New')
}


const logCreate = async (req,res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    console.log(req.body)
    try{
        const result = await Log.create(req.body)
        console.log('data saved: ',result)
    }catch(err){
        console.log('error : ', err)
    }
    res.redirect('/logs')
}

const logClear = async (req,res) => {
    await Log.deleteMany()
    res.redirect('/logs')
}

const logShow = async (req,res) => {
    const data = await Log.findById(req.params.id)
    res.render('Show', {
        log: data
    })
}

const logEdit = async (req,res) => {
    const data = await Log.findById(req.params.id)
    res.render('Edit', {
        log: data
    })
}

const logUpdate = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    await Log.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/logs/${req.params.id}`)
}

const logDelete = async (req,res) => {
    await Log.findByIdAndDelete(req.params.id)
    res.redirect(`/logs`)
}


module.exports = {
    logIndex,
    logNew,
    logCreate,
    logClear,
    logShow,
    logEdit,
    logUpdate,
    logDelete
}