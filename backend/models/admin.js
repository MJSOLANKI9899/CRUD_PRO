const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminID : {
        type : String,
        required : true
    },
    adminFirstName : {
        type : String,
        required : true
    },
    adminLastName : {
        type : String,
        required : true
    },
    adminEmail : {
        type : String,
        required : true
    },
    adminPassword : {
        type : String,
        required : true
    }
});

const Admin = mongoose.model('admin' , adminSchema);

module.exports = Admin;




