


const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner, associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');
const populateBatch = require('../../hooks/populate-batch');
const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];



const evaluateStudent = require('../../hooks/evaluate-student');



module.exports = {
  before: {
    all: [ ...restrict],
    find: [],
    get: [],
    create: [],
    update: [evaluateStudent()],
    patch: [evaluateStudent()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [populateBatch()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
