import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const entrySchema = new Schema({
    content: {
      type: String,
      required: 'Entry must have content'
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
    belongsTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: 'Entry must have a user'
    }
});