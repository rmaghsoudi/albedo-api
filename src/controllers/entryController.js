import mongoose from 'mongoose';
import { entrySchema } from '../models/entryModel';

const Entry = mongoose.model('Entry', entrySchema);

export const addNewEntry = (req, res) => {
  let newEntry = new Entry(req.body);

  newEntry.save((err, entry) => {
    if (err) {
      res.send(err)
    }
    res.json(entry);
  });
}

export const getEntries = (req, res) => {
  Entry.find(req.body, (err, entry) => {
     if (err) {
       res.send(err)
     }
     res.json(entry);
   });
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

export const deleteEntry = (req, res) => {
 Entry.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted entry!' });
  });
}