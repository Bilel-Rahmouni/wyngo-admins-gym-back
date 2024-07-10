import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    subscription: {
        type: String,
        enum: ["Basic", "Premium", "None","Pro"],
        default: "None",
      },
});
const UserModel = mongoose.model('UserModel', userSchema);
export default UserModel;