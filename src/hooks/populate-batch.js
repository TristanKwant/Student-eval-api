// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) {
  // debugger
  return function(hook) {
     console.log("hook data:", hook.result)
    return hook.app.service('batch').find({
      query: { number: hook.data.batch }
    }).then(batch => {
      console.log("bach_id:", batch.data[0]._id)
      hook.app.service('batch').patch(batch.data[0]._id, {
        $addToSet: { students: hook.result }
      })
        .then((result) => {
          console.log('Student yes...', result.name);
          return hook;
        }).catch((error) => {
          console.error('Error seeding recipe!', error.message);
        });

    });




  };
};

// // debugger
// const thisbatch = batch.data[0];
// // console.log("const:", thisbatch)
//  console.log("student:",thisbatch.students)
// thisbatch.students = thisbatch.students.concat(hook.data)
// console.log("student:",thisbatch.students)
// //  console.log("hellooo",batch.data)
//
// // console.log("hookdatainside",hook.data)
// // console.log(hook.data)
// // // debugger
// // // hook.data.students = students;
// // // // Or you can replace all the data with
// // batch.data =  'student' ;
// // console.log(batch.data)
// // IMPORTANT: always return the `hook` object in the end
// // return hook;
