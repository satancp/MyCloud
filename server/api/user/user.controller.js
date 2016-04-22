/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/users              ->  index
 * POST    /api/users              ->  create
 * GET     /api/users/:id          ->  show
 * PUT     /api/users/:id          ->  update
 * DELETE  /api/users/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var User = require('./user.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function checkUser(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity[0]) {
      res.status(statusCode).json(entity[0]);
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

function handleEntityNotFoundSpecial(res) {
  return function(entity) {
    if (!entity[0]) {
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

// Gets a list of Users
exports.index = function index(req, res) {
  return User.find().populate('wishlist').populate('applist').exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single User from the DB
exports.show = function show(req, res) {
  return User.findById(req.params.id).populate('wishlist').populate('applist').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new User in the DB
exports.create = function create(req, res) {
  return User.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Login
exports.login = function login(req, res) {
  return User.find({name:req.body.name}).populate('wishlist').populate('applist').exec()
    .then(handleEntityNotFoundSpecial(res))
    .then(checkUser(res))
    .catch(handleError(res));
}

// Updates an existing User in the DB
exports.update = function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return User.findById(req.params.id).populate('wishlist').populate('applist').exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a User from the DB
exports.destroy = function destroy(req, res) {
  return User.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}