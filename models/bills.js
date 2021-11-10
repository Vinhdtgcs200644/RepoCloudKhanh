const mongoose = require("mongoose");

const Cart_BIll_Schema = new mongoose.Schema({
     title : {type: String,required:true},
     price : {type: String,required:true},
     buyer : {type: String,required:true},
     date :{type: String,required:true}
});

const Bill = mongoose.model(
     "Bill",
     Cart_BIll_Schema
);
module.exports = Bill;
