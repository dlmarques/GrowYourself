const router = require("express").Router();
const User = require("../models/User");
const verify = require("../utils/verifyToken");

router.get("/", verify, (req, res) => {
  res.send(req.User);
  User.findByIdAndRemove({ _id: req.user });
});

module.exports = router;
