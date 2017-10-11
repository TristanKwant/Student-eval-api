// Initializes the `batch` service on path `/batch`
const createService = require('feathers-mongoose');
const createModel = require('../../models/batch.model');
const hooks = require('./batch.hooks');
const filters = require('./batch.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'batch',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/batch', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('batch');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
