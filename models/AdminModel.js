import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const AdminModel = mongoose.model('AdminModel', adminSchema);
export default AdminModel;