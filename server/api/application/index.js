'use strict';

var express = require('express');
var controller = require('./application.controller');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/deploy/:id', controller.deploy);
router.post('/', controller.create);
router.post('/save/:userid/:appname/:name', multipartyMiddleware, controller.save);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
