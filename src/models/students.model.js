// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const students = new Schema({
    name: { type: String, required: true },
    batch: { type: String, required: true },
    currentColor: { type: String },
    photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
    days: { type: [], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('students', students);
};
