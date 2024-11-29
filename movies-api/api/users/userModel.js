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

const passwordValidator = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g.test(password);
}

UserSchema.path("password").validate(passwordValidator);

export default mongoose.model('User', UserSchema);