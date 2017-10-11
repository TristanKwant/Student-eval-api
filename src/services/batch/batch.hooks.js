const { authenticate } = require('feathers-authentication').hooks;
// import { populate } from 'feathers-hooks-common';
// const populateBatch = require('../../hooks/populate-batch');




// const postCommentsSchema = {
//   include: {
//     service: 'students',
//     nameAs: 'students',
//     parentField: '_id',
//     childField: 'studentId'
//   }
// };


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
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
