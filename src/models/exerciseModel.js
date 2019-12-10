import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const exerciseSchema = new Schema({
    name: {
      type: String,
      required: 'Exercise must have a name'
    },
    result: {
      type: String,
      required: 'Exercise must have a result'
    },
    created_date: {
      type: Date,
      default: Date.now
    },
    belongsTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: 'Exercise must have a user'
    }
});