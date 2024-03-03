var express = require('express');
var router = express.Router();
const userModel = require("./users")
router.get("/", function (req, res) {
  res.render("index")
})
// create
// router.get("/create", async function (req, res) {
//   const createduser = await userModel.create({
//     username: "gautam",
//     age: 43,
//     name: "gautam"
//   });
//   res.send(createduser)
// })

//find all
// router.get("/allusers", async function (req, res) {
//   const allusers = await userModel.find();
//   res.send(allusers)
// })
//find one
// router.get("/oneusers", async function (req, res) {
//   const oneuser = await userModel.findOne(
//     { username: "raman" }
//   );
//   res.send(oneuser)
// })

// router.get("/delete", async function (req, res) {
//   const deleteduser = await userModel.findOneAndDelete({
//     username: "gautam"
//   })
//   res.send(deleteduser)
// })

module.exports = router;
