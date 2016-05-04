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
var Application = require('../application/application.model');

var validationError = function(res, err) {
    return res.json(422, err);
};

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

// Creates a new User in the  DB
exports.create = function create(req, res) {
  return User.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Login
exports.login = function login(req, res) {
  return User.find({name:req.body.name,password:req.body.password}).populate('wishlist').populate('applist').exec()
    .then(handleEntityNotFound(res))
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

exports.playApplication = function playApplication(req, res) 
{
  var app = req.body.app;
  var developer = req.body.app.developer;
  
  Application.findById(app._id, function(err, app){
    if (app != null){
      app.consumer_number += 1;
      app.save(function(err){
      if (err) return validationError(res, err);
      console.log("app saved successfully");
      //return respondWithResult(app);
      });
    }else{
      return res.send(404);
    }  
  });

  User.findById(req.params.userId, function(err, user){
  if (user != null) 
  {
    console.log("user is not null"+"=======");
    user.account = user.account - app.price;
    user.save(function(err){
      if (err) return validationError(res, err);
      // User.findById("57264a994c33351c92d4b9ec", function(err, user){
        User.findById(developer._id, function(err, user){
        if (user != null){
          user.account = user.account + app.price;
          user.save(function(err){   
            if(err) return validationError(res, err);
          });
        }
        else{
          res.status(404).end();
        }
      });

    });
  }else{
      res.status(404).end();
  }
}).exec()
  .then(respondWithResult(res));
}


exports.subscribeApplication = function subscribeApplication(req, res)
{
   var app = req.body.app;
   User.findById(req.params.userId, function(err, user){
       if (user != null) {
           user.follow_app.push(req.body.app);
           user.save(function(err){
           if(err) return validationError(res, err);
           // return res.json();
          });
       }
       else
       {
          return res.send(404);
       }
   }).exec()
   .then(respondWithResult(res));
}


// exports.followTheUser = function(req, res) {
//     var currentUser = req.body.follower;
//     var theUser = req.body.follow;  
//     var userId = req.params.id; 

//     User.findById(userId, function(err, user) {
//         var to_follow = {
//             userId: currentUser._id,
//             follower: currentUser
//         }
//         if (user != null) {
//             user.followed.push(to_follow);
//             user.save(function(err) {
//                 if (err) return validationError(res, err);

//                 User.findById(currentUser._id, function(err, follow_user) {
//                     var follow_me = {
//                         userId: userId,
//                         follow: theUser
//                     }
//                     if (follow_user != null) {
//                         follow_user.followed.push(follow_me);
//                         follow_user.save(function(err) {
//                             if (err) return validationError(res, err);
//                             res.send(200);
//                         });
//                     } else {
//                         res.send(403);

//                     }
//                 });
//             });
//         } else {
//             res.send(403);
//         }
//     });
// };





