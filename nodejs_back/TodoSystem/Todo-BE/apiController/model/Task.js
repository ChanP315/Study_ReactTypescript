// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = Schema({
        task: {
            type: String,
            required: true
        },
        isComplete: {
            type: Boolean,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            requred: true,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model("Task", taskSchema);
// const TaskQuery = mongoose.Query() //?

export default Task;