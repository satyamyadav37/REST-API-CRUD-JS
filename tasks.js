const express = require('express')
const router = express.Router()
const Task = require('../models/task')


router.get('/', async(req,res) => {
    try{
           const tasks = await User.find()
           res.json(tasks)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await User.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const user = new User({
        task: req.body.task,
        is_completed: req.body.is_completed,
        end_date: req.body.end_date
    })

    try{
        const a1 =  await user.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        user.sub = req.body.sub
        const a1 = await user.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        user.sub = req.body.sub
        const a1 = await user.delete()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router