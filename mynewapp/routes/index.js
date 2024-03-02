var express = require('express');
var router = express.Router();
const userModel = require("./users")

router.get('/', function (req, res) {
  res.render('index');
});


router.get('/create', async function (req, res) {
  const createduser = await userModel.create({
    username: "hars",
    name: "gautam",
    age: 27
  })
  
  res.send(createduser);
});




module.exports = router;
