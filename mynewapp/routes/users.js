const mongoose = require("mongoose");
//setup --create db with name newdb
mongoose.connect("mongodb://127.0.0.1:27017/")
//schema
const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

//model


module.exports = mongoose.model("user", userschema)