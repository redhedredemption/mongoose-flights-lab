var express = require('express');
var router = express.Router();
const flightCtrl = require("../controllers/flights")

router.get("/", flightCtrl.index)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
