// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const ADD_EVAL = 'ADD_EVAL'

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function evaluateStudent (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return  hook.app.service('students').get(hook.id)
      .then((student) => {

        const { type, payload } = hook.data;
        console.log('"payload:"', payload)


        switch (type) {
        case ADD_EVAL:{

          if (payload.green) {
            console.log("GREEEN")

            hook.data = {
              days: student.days.concat({day: '11-10-17', color: 'green'})
            }
            return hook;
          }

          return hook;
        }



        default:
          console.log("hoooooook",hook.id)
          return Promise.resolve(hook);

        }


      });


  };
};
