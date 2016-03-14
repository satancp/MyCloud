/**
 * Application model events
 */

'use strict';

var {EventEmitter} = require('events');
var Application = require('./application.model');
var ApplicationEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ApplicationEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Application.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ApplicationEvents.emit(event + ':' + doc._id, doc);
    ApplicationEvents.emit(event, doc);
  }
}

module.exports = ApplicationEvents;
