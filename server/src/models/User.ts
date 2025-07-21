import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true }
});

export const UserModel = mongoose.model('User', UserSchema)