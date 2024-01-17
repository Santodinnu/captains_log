const logs = require('../models/logs')

const logIndex = async(req, res) => {
    try{
        const data = await logs.find()
    console.log('data from mongo:',data)
    res.render('logs/Index', { logs: data })

    }catch(err){
        console.log(err)

    }
    
}

const logNew = (req, res) => {
    res.render('logs/New')
}

// "show" route
const logShow = async(req, res) => {
    try{
        console.log('hello')
    const data = await logs.findById(req.params.id)
    res.render('logs/Show', { log: data })
    }catch(error){
        console.log(error)
    }
   
    // res.send(fruits[req.params.index])
}

// "create" route
const logCreate = async(req, res) => {
    console.log(req.body)
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try{
     const result = await logs.create(req.body)
     console.log(result)
    }catch(err){
        console.log('error',err)

    }
    logs.push(req.body)
    res.redirect('/logs')
}

// "edit" route
const logEdit = async(req, res) => {
    const data = await logs.findById(req.params.id)
    res.render('logs/Edit', { log: data })
}

// "destroy" route
const logDelete = async(req, res) => {
    const data =  await logs.findByIdAndDelete(req.params.id)
    console.log('delete')
    logs.splice(req.params.index, 1)
    console.log('deleting')
    res.redirect('/logs')
}

// "update" route
const logUpdate = async(req, res) => {
    console.log('update',req.params.id)
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    await logs.findByIdAndUpdate(req.params.id, req.body)
    logs[req.params.index] = req.body
    res.redirect(`/logs/${req.params.id}`)
}


module.exports = {
    logCreate,
    logDelete,
    logEdit,
    logIndex,
    logNew,
    logShow,
    logUpdate
}