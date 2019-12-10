import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    auth0_id: {
      type: String,
      required: 'User must have an Auth0 ID'
    }
});