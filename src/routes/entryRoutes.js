import { 
  addNewEntry,
  getEntries,
  updateEntry,
  deleteEntry
} from '../controllers/entryController';

const entryRoutes = (app) => {
  app.route('/api/entry')
      // Get all entries for a user
      .get(getEntries)

      // Create a new entry
      .post(addNewEntry);

  app.route('/api/entry/:id')
      // update a specific entry
      .patch(updateEntry)

      // delete a specific entry
      .delete(deleteEntry);
}

export default entryRoutes