// const Task = require("../model/Task")
import Task from './model/Task.js';

const taskController = {}

taskController.createTask = async(req, res) => {
    try
    {
        const {task, isComplete} = req.body;
        const newTask = new Task({task, isComplete});

        await newTask.save();

        console.log('Task createTask!!!');
        res.status(200).json({status: 'create ok', data: newTask});
    }catch(err)
    {
        res.status(400).json({status: "create fail", error: err});
    }
}

taskController.getTask = async(req, res) => {
    try
    {
        const taskList = await Task.find({}).select("-__v");

        console.log('Task getTask!!!');
        res.status(200).json({status: 'get ok', data: taskList});
    }catch(err)
    {
        res.status(400).json({status: "get fail", error: err});
    }
}

taskController.updateTask = async(req, res) => {
    try
    {
        const taskUpdate = await Task.findByIdAndUpdate(req.params.id, {
            task: req.body.task,
            isComplete: req.body.isComplete
        });

        console.log('Task updateTask!!!');
        res.status(200).json({status: 'update ok', data: taskUpdate});
    }catch(err)
    {
        res.status(400).json({status: "update fail", error: err});
    }
}

taskController.deleteTask = async(req, res) => {
    try
    {
        const taskDelete = await Task.findByIdAndDelete(req.params.id);

        console.log('Task deleteTask!!!');
        res.status(200).json({status: 'delete ok', data: taskDelete});
    }catch(err)
    {
        res.status(400).json({status: "delete fail", error: err});
    }
}

 export default taskController;