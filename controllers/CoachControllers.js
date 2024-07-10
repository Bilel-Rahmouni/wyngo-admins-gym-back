import CoachModel from "../models/CoachModel.js";

// Create a new coach
export const createCoach = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const coach = await CoachModel.findOne({ email: email });
    if (coach) {
      return res.status(401).json("Email already exists");
    }
    const newCoach = new CoachModel({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    const savedCoach = await newCoach.save();
    res.status(200).send({ savedCoach });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

// Get all coaches
export const getAllCoaches = async (req, res) => {
  try {
    const coaches = await CoachModel.find();
    res.status(200).send({ coaches });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

// Update a coach
export const updateCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber } = req.body;
    const updatedCoach = await CoachModel.findByIdAndUpdate(
      id,
      { firstName, lastName, email, phoneNumber },
      { new: true }
    );
    if (!updatedCoach) {
      return res.status(404).send({ error: "Coach not found" });
    }
    res.status(200).send({ updatedCoach });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

// Delete a coach
export const deleteCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCoach = await CoachModel.findByIdAndDelete(id);
    if (!deletedCoach) {
      return res.status(404).send({ error: "Coach not found" });
    }
    res.status(200).send({ message: "Coach deleted successfully" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};
