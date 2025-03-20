import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

export const Tasks = mongoose.model('task', taskSchema, 'tasks');