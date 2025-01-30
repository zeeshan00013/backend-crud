// models/FormModel.js

const mongoose = require('mongodsfsdfofsdffsfsdfsdfdfsdsdfdsffsdfsdfsfsdasdasdfdsdsdasdasdasdasdasdasaadadaasdasdasdsdsadadadsadasdasdasdasfsfsfsdasdasdf
const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
   
  }
});

const FormModel = mongoose.model('FormModel', FormSchema);

module.exports = FormModel;
