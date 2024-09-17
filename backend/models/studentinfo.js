// studentinfo.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phonenumber: String,
    password: String,
    quali: String,
    Stream: String,
    city: String,
    state: String,
    hsc: String,
    ssc: String,
    ug: String,
    Address: String,
    skills: String,
    company: [String]
});

const studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel;
