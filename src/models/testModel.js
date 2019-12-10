import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testSchema = new Schema({
    score: {
      type: Number,
      required: 'Test must have a score'
    },
    created_date: {
      type: Date,
      default: Date.now
    },
    belongsTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: 'Test must have a user'
    }
});