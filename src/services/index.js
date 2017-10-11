const students = require('./students/students.service.js');
const users = require('./users/users.service.js');
const batch = require('./batch/batch.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(students);
  app.configure(users);
  app.configure(batch);
};
