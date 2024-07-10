import TaskModel from "../models/TaskModel.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { coach, specialty, contacts, typeSport, location, startTime, endTime } = req.body;

    const existingTask = await TaskModel.findOne({ contacts });
    if (existingTask) {
      return res.status(400).json({ error: "Contact already exists" });
    }

    const newTask = new TaskModel({
      coach,
      specialty,
      contacts,
      typeSport,
      location,
      startTime,
      endTime,
    });

    const savedTask = await newTask.save();
    res.status(201).json({ task: savedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get task by id
export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findById(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update task by id
export const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await TaskModel.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (req.body.contacts && req.body.contacts !== task.contacts) {
      const existingTask = await TaskModel.findOne({ contacts: req.body.contacts });
      if (existingTask) {
        return res.status(400).json({ error: "Contact already exists" });
      }
    }

    const updatedTask = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ task: updatedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete task by id
export const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await TaskModel.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await TaskModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
