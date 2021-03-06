import mongoose from 'mongoose';
import { entrySchema } from '../models/entryModel';
import { userSchema } from '../models/userModel';

const Entry = mongoose.model('Entry', entrySchema);
const User = mongoose.model('User', userSchema);

export const addNewEntry = async (req, res) => {
  try {
    const user = await User.find({ auth0Id: req.body.auth0Id })
    const entry = {
      content: req.body.content,
      belongsTo: user[0]._id
    };
    const newEntry = await Entry.create(entry);
    res.json(newEntry);
  }
  catch(err) {
    res.send(err)
  }
}

export const getEntries = async (req, res) => {
  // error handling for async await rather than using callbacks
  try {
    const user = await User.find(req.query);
    const entries = await Entry.find(user._id);
    // if we're able to find a user and its entries, send them to the frontend
    res.send(entries)
  }
  catch(err) {
    // if we hit a error, send the error to the frontend
    res.send(err)
  }
 }

 export const updateEntry = (req, res) => {
  // findOneAndUpdate( ObjectId, updateParams, new: true -returns the updated object,
 //  useFindAndModify: false -uses new functions as opposed to deprecated ones )
 Entry.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false },  (err, entry) => {
    if (err) {
      res.send(err)
    }
    res.json(entry);
  });
}

export const deleteEntry = async (req, res) => {
  try {
    await Entry.deleteOne({ _id: req.params.id });

    res.json({ message: "Successfully deleted entry!"});
  }
  catch(err) {
    res.send(err);
  }
}