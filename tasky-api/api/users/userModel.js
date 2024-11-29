import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

export default mongoose.model('User', UserSchema);