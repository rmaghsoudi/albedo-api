import mongoose from 'mongoose';
import { exerciseSchema } from '../models/exerciseModel';

const Exercise = mongoose.model('Exercise', exerciseSchema);

export const addNewExercise = (req, res) => {
  let newExercise = new Exercise(req.body);

  newExercise.save((err, exercise) => {
    if (err) {
      res.send(err)
    }
    res.json(exercise);
  });
}

export const getExercises = (req, res) => {
  Exercise.find(req.body, (err, exercise) => {
     if (err) {
       res.send(err)
     }
     res.json(exercise);
   });
 }


export const deleteExercise = (req, res) => {
 Exercise.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted exercise!' });
  });
}