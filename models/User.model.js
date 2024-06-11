import mongoose from "mongoose";
import validator from 'validator';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "PLease enter an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [6, "Minimum password length is 6 characters"]
    }
})

export const User = mongoose.model('User', userSchema);
