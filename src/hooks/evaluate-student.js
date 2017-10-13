// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const ADD_EVAL = 'ADD_EVAL'
const EDIT_EVAL = 'EDIT_EVAL'

module.exports = function (options = {}) {
  return function evaluateStudent (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return  hook.app.service('students').get(hook.id)
      .then((student) => {

        const { type, payload } = hook.data;
        console.log('"payload:"', type)


        switch (type) {
        case ADD_EVAL:{

          if (payload.green) {
            console.log("GREEEN")

            hook.data = {
              days: student.days.concat({day: payload.date, color: 'green', comment: payload.comment}),
              currentColor: 'green'
            }
            return hook;
          }
          if (payload.yellow) {
            console.log("YELLOWW")

            hook.data = {
              days: student.days.concat({day: payload.date, color: 'green', comment: payload.comment}),
              currentColor: 'yellow'
            }
            return hook;
          }

          if (payload.red) {
            console.log("REDD")

            hook.data = {
              days: student.days.concat({day: payload.date, color: 'green', comment: payload.comment}),
              currentColor: 'red'
            }
            return hook;
          }

          // return hook;
        }


        default:
          console.log("hoooooook",hook.id)
          return Promise.resolve(hook);

        }


      });


  };
};
