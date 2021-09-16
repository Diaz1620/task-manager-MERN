const Task = require("../models/task.models");


module.exports = {
    index: (req,res) => {
        Task.find()
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    create: (req,res) => {
        Task.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    show: (req,res) => {
        Task.find({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    update: (req,res) => {
        Task.updateOne({_id:req.params.id},req.body,{runValidators:true})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    destroy: (req,res) => {
        Task.deleteOne({_id:req.params.id})
            .then(data => res.redirect(303,'/api/tasks'))
            .catch(err => res.status(404).json({errors:err.errors}));
    }
}