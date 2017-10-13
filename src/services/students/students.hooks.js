


const { authenticate } = require('feathers-authentication').hooks;
const { restrictToAuthenticated } = require('feathers-authentication-hooks');
const populateBatch = require('../../hooks/populate-batch');
const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];



const evaluateStudent = require('../../hooks/evaluate-student');
const editStudent = require('../../hooks/edit-student');








module.exports = {
  before: {
    all: [ ...restrict],
    find: [],
    get: [],
    create: [],
    update: [evaluateStudent(), editStudent()],
    patch: [evaluateStudent(), editStudent()],
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
