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
// const logShow = async(req, res) => {
//     try{
//         console.log('hello')
//     const data = await logs.findById(req.params.id)
//     res.render('logs/Show', { log: data })
//     }catch(error){
//         console.log(error)
//     }
   
// }
const logShow = async (req, res) => {
  try {
      const log = await Log.findById(req.params.id);
      res.render('logs/Show', { log: data });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
};


// "create" route
const logCreate = async (req, res) => {
  console.log(req.body);
  if (req.body.shipIsBroken === 'on') {
      req.body.shipIsBroken = true;
  } else {
      req.body.shipIsBroken = false;
  }

  try {
      const result = await Log.create(req.body);
      console.log(result);
      res.redirect('/logs');
  } catch (err) {
      console.log('error', err);
  }
};


// "edit" route
const logEdit = async(req, res) => {
    const data = await Log.findById(req.params.id)
    res.render('logs/Edit', { log: data })
}

// "destroy" route
const logDelete = async(req, res) => {
    const data =  await Log.findByIdAndDelete(req.params.id)
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
    await Log.findByIdAndUpdate(req.params.id, req.body)
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