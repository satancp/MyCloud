/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/applications              ->  index
 * POST    /api/applications              ->  create
 * GET     /api/applications/:id          ->  show
 * PUT     /api/applications/:id          ->  update
 * DELETE  /api/applications/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Application = require('./application.model');
var shell = require('shelljs');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function doDeploy(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      var command1 = "osascript -e ";
      var command2 = 'tell application "Terminal" to do script ';
      var command3 = "sshpass -p 'tianze1228' ssh -o StrictHostKeyChecking=no wangzh1228@143.167.238.68";
      var command4 = " -e ";
      var command5 = '"cd /Users/wangzh1228/Desktop/MyCloud"';
      var command6 = '"grunt serve"';
      var command7 = '"delay 2"';
      var command = command1 + "'" + command2 + '"' + command3 + '"' + "'" + command4 + "'" + command7 + "'" + command4 + "'" + command2 + command5 + " in front window'" + command4 + "'" + command2 + command6 + " in front window'";
      shell.exec(command, {silent:false}).stdout;
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Applications
exports.index = function index(req, res) {
  return Application.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Application from the DB
exports.show = function show(req, res) {
  return Application.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deploy
exports.deploy = function deploy(req, res) {
  return Application.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(doDeploy(res))
    .catch(handleError(res));
}

// Creates a new Application in the DB
exports.create = function create(req, res) {
  return Application.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Application in the DB
exports.update = function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Application.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Application from the DB
exports.destroy = function destroy(req, res) {
  return Application.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
