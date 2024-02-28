const mongoose = require('mongoose')

const estudianteSchema = new mongoose.Schema({
    first_name:String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String
})

const estudianteModel = mongoose.model('estudiantes', estudianteSchema);

module.exports = estudianteModel;