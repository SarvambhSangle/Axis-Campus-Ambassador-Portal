import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phoneNumber: { type: String, unique: true, sparse: true },
  college: { type: String },
  yearOfStudy: { type: Number },
  branch: { type: String },
  provider: { type: String, default: 'email' },
  firebaseUid: { type: String }, // optional for OAuth users
}, { timestamps: true });

export default mongoose.model('User', userSchema);
