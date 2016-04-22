/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cryptos              ->  index
 * POST    /api/cryptos              ->  create
 * GET     /api/cryptos/:id          ->  show
 * PUT     /api/cryptos/:id          ->  update
 * DELETE  /api/cryptos/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Crypto = require('./crypto.model');
var CryptoJS = require('crypto-js');
var stringify = require('json-stringify-safe');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity[0].content);
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

exports.index = function index(req, res) {
  return Crypto.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}
