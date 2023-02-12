const mongoose = require('mongoose')


const taskschema = new mongoose.Schema({

    task: {
        type: String,
        required: true
    },
    is_completed: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true,
     
    }

})

module.exports = mongoose.model('Task',taskschema)