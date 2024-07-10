import AdminModel from "../models/AdminModel.js";

// LOGGING IN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email: email });
    if (!admin) {
      return res.status(401).json("Invalid email");
    }
    if (password !== admin.password) { // Directly compare password (not secure)
      return res.status(401).json("Invalid password");
    }
    res.status(200).send({
      admin: {
        id: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
      },
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};


// REGISTERING
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const admin = await AdminModel.findOne({ email: email });
    if (admin) {
      return res.status(401).json("Email already exists");
    }
    // Store the password as plaintext (not secure)
    const newAdmin = new AdminModel({
      firstName,
      lastName,
      email,
      password,  // Store password directly (not secure)
    });
    const savedAdmin = await newAdmin.save();
    res.status(200).send({
      admin: {
        id: savedAdmin._id,
        firstName: savedAdmin.firstName,
        lastName: savedAdmin.lastName,
        email: savedAdmin.email,
      },
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

// FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const admin = await AdminModel.findOne({ email: email });
    if (!admin) {
      return res.status(401).json("Invalid email");
    }

    // Sending the plaintext password to the user (not secure)
    res.status(200).send({ password: admin.password });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

// Updating user information
export const updateUser = async (req, res) => {
  try {
    const { id, firstName, lastName, email, password } = req.body;
    const updatedAdmin = await AdminModel.findByIdAndUpdate(
      id,
      { firstName, lastName, email, password },
      { new: true }
    );

    if (!updatedAdmin) {
      return res.status(404).send({ message: 'Admin not found' });
    }

    // Sending back the updated admin information
    res.status(200).send({
      admin: {
        id: updatedAdmin._id,
        firstName: updatedAdmin.firstName,
        lastName: updatedAdmin.lastName,
        email: updatedAdmin.email,
      },
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};
