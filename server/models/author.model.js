import mongoose from 'mongoose';
import mongooseConnection from '../config/mongo';

const Author = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

export default mongooseConnection.model('Author', Author);
