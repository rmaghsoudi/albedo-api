import { 
  addNewExercise,
  getExercises,
  deleteExercise
} from '../controllers/exerciseController';

const exerciseRoutes = (app) => {
  app.route('/exercise')
      // Get all exercises for a user
      .get(getExercises)

      // Create a new exercise
      .post(addNewExercise);

  app.route('/exercise/:id')
      // delete a specific exercise
      .delete(deleteExercise);
}

export default exerciseRoutes