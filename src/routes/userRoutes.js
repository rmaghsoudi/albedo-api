import { 
  addNewUser,
  getUser
} from '../controllers/userController';

const userRoutes = (app) => {
  app.route('/user')
      // Create a new user
      .post(addNewUser);

  app.route('/user/:id')
      // get a specific user
      .get(getUser)
}

export default userRoutes