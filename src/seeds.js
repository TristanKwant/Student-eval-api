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
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'kerst man',
    batch: 9,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'yellow' },
      {day: '08-10-17', color: 'green' },
    ],
  },
  {
    name: 'Floris',
    batch: 9,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'yellow' },
      {day: '08-10-17', color: 'green' },
    ],
  },
  {
    name: 'Klaas vaak',
    batch: 10,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Sinter klaas',
    batch: 10,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Vera Koot',
    batch: 10,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'mimi',
    batch: 10,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Faisal al sudani',
    batch: 10,
    currentColor: 'green',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Jan Sijmen',
    batch: 10,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Anna paula',
    batch: 10,
    currentColor: 'yellow',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Marloes',
    batch: 10,
    currentColor: 'green',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'megan',
    batch: 10,
    currentColor: 'green',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Job weeda',
    batch: 10,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
  {
    name: 'Mathijs',
    batch: 10,
    currentColor: 'red',
    photo: 'https://pbs.twimg.com/profile_images/521600973198733312/-vydwN2r_400x400.jpeg',
    days: [
      {day: '09-10-17', color: 'green' },
      {day: '08-10-17', color: 'red' },
    ],
  },
];


const batch = [

  {
    number: 10,
    startDate: '2017-10-12',
    endDate: '2017-11-12',
    students: [],
  },
  {
    number: 9,
    startDate: '2017-09-12' ,
    endDate: '2017-08-12',
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
