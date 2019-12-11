import { 
  addNewTest,
  getTests,
  deleteTest
} from '../controllers/testController';

const testRoutes = (app) => {
  app.route('/api/test')
      // Get all tests for a user
      .get(getTests)

      // Create a new test
      .post(addNewTest);

  app.route('/api/test/:id')
      // delete a specific test
      .delete(deleteTest);
}

export default testRoutes