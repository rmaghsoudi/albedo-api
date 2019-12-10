import mongoose from 'mongoose';
import { testSchema } from '../models/testModel';

const Test = mongoose.model('Test', testSchema);

export const addNewTest = (req, res) => {
  let newTest = new Test(req.body);

  newTest.save((err, test) => {
    if (err) {
      res.send(err)
    }
    res.json(test);
  });
}

export const getTests = (req, res) => {
  Test.find(req.body, (err, test) => {
     if (err) {
       res.send(err)
     }
     res.json(test);
   });
 }


export const deleteTest = (req, res) => {
 Test.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted test!' });
  });
}