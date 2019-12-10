import mongoose from 'mongoose';
import { userSchema } from '../models/userModel';

const User = mongoose.model('User', userSchema);

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    }
    res.json(user);
  });
}

export const getUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
     if (err) {
       res.send(err)
     }
     res.json(user);
   });
 }
 