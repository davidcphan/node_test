var express = require('express');
var router = express.Router();
var controller = require('../controllers/control.js');


router.route('/bye').get(controller.bye);
router.route('/ejstest').get(controller.userDisplay);
router.route('/').get(controller.helloWorld);
router.route('/users').get(controller.users);
router.route('/users/:id').get(controller.userFind);










module.exports = router;
