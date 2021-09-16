const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true,"Title is required"]
    },
    due:{
        type: String,
        required: [true, "Must have due date"]
    },
    location: {
        type: String,
        required: false
    },
    priority:{
        type: String,
        required: false
    },
    contact:{
        type: String
    },
    description: {
        type: String,
        required: [true, "Must have description"],
        minlength: [6, "Must have at least 6 characters"]
    }

},{timestamps:true})


const Task = mongoose.model("Task",TaskSchema);

module.exports = Task;