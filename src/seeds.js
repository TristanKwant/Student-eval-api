const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  name: 'admin',
  email: 'admin@admin.nl',
  password: 'test123'
};




const students = [
  {
    name: 'Tristan Kwant',
    batch: 10,
    photo: 'https://ca.slack-edge.com/T3EFKFK5Z-U6HHT3P1S-d302379029ed-1024',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Job Weeda',
    batch: 9,
    photo: 'https://ca.slack-edge.com/T3EFKFK5Z-U6HHT3P1S-d302379029ed-1024',
    days: [
      {day: '09-10-17', color: 'yellow' },
      {day: '08-10-17', color: 'green' },
    ],
  },
];


const batch = [

  {
    number: 10,
    students: [],
  },
  {
    number: 9,
    students: [],
  }




];


const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    }).then(() => {
      batch.map((batch) => {
        feathersClient.service('batch').create(batch)
          .then((result) => {
            console.log('Batch seeded...', result.name);
          }).catch((error) => {
            console.error('Error seeding recipe!', error.message);
          });
      });
    })
      .then(() => {
        students.map((student) => {
          feathersClient.service('students').create(student)
            .then((result) => {
              console.log('Student seeded...', result.name);
            }).catch((error) => {
              console.error('Error seeding recipe!', error.message);
            });
        });
      })
      .catch(function(error){
        console.error('Error authenticating!', error);
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });
