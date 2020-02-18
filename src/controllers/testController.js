import mongoose from 'mongoose';
import { testSchema } from '../models/testModel';
import { userSchema } from '../models/userModel';

const Test = mongoose.model('Test', testSchema);
const User = mongoose.model('User', userSchema);

export const addNewTest = async (req, res) => {
  try {
    const user = await User.find({ auth0Id: req.body.auth0Id })
    const test = {
      score: req.body.score,
      belongsTo: user[0]._id
    };
    const newTest = await Test.create(test);
    res.json(newTest);
  }
  catch(err) {
    res.send(err)
  }
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