const mongoose = require("mongoose");

const DriveSchema = new mongoose.Schema({
    companyName: {
        type: "String",
        required: true,
    },
    ctc: {
        type: "String",
        required: true,
    },
    eligibilityCriteria: {
        type: "String",
        required: true,
    },
    role: {
        type: "String",
        required: true,
    },
    location: {
        type: "String",
        required: true,
    },
    qualification: {
        type: "String",
        required: true,
    },
    companyProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companyProfile',
        required: true,
    }
});

const companyDrive = mongoose.model('Drive', DriveSchema);

module.exports = companyDrive;
