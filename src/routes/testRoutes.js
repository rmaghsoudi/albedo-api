import { 
  addNewTest,
  getTests,
  deleteTest
} from '../controllers/testController';

const testRoutes = (app) => {
  app.route('/test')
      // Get all tests for a user
      .get(getTests)

      // Create a new test
      .post(addNewTest);

  app.route('/test/:id')
      // delete a specific test
      .delete(deleteTest);
}

export default testRoutes