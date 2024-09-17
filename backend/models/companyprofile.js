const mongoose = require("mongoose");

const companyProfileSchema = new mongoose.Schema({
    companyName: {
        type: "String",
        required: true,
    },
    contactNumber: {
        type: "String",
        required: true,
    },
    website: {
        type: "String",
        required: true,
    },
    email: {
        type: "String",
        required: true,
    },
    city: {
        type: "String",
        required: true,
    },
    state: {
        type: "String",
        required: true,
    },
    address: {
        type: "String",
        required: true,
    },
});

const companyProfile = mongoose.model('companyProfile', companyProfileSchema);

module.exports = companyProfile;
