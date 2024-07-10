import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  coach: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  contacts: {
    type: String,
    required: true,
    unique: true,
  },
  typeSport: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  }
});

const TaskModel = mongoose.model("TaskModel", taskSchema);
export default TaskModel;
