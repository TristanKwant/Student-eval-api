// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const EDIT_STUDENT = 'EDIT_STUDENT'

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function evaluateStudent (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return  hook.app.service('students').get(hook.id)
      .then((student) => {

        const { type, payload } = hook.data;

        console.log('"payload:"', type)


        switch (type) {
        case EDIT_STUDENT:{
          console.log('"payload:"', payload)
          hook.data = {
              name: payload.name,
              batch: payload.batch,
              photo: payload.photo
          };

          return hook;
        }






        default:

          return Promise.resolve(hook);

        }


      });


  };
};
