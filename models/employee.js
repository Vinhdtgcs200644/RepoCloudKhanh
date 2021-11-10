const mongoose = require("mongoose");

const Employee_Scehma = new mongoose.Schema({
     fullname : {type: String,required:true},
     phone : {type: String,required:true},
     Age : {type: Number,required:true},
     Address : {type: String,required:false},
     email : {type: String, required:false},
});

const Employee = mongoose.model(
     "Employees",
     Employee_Scehma
);

module.exports = Employee;
