import mongoose from 'mongoose';
import mongooseConnection from '../config/mongo';

const Book = new mongoose.Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: String,
  },
});

export default mongooseConnection.model('Book', Book);
