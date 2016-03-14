'use strict';

var app = require('../..');
var request = require('supertest');

var newApplication;

describe('Application API:', function() {

  describe('GET /api/applications', function() {
    var applications;

    beforeEach(function(done) {
      request(app)
        .get('/api/applications')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          applications = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      applications.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/applications', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/applications')
        .send({
          name: 'New Application',
          info: 'This is the brand new application!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newApplication = res.body;
          done();
        });
    });

    it('should respond with the newly created application', function() {
      newApplication.name.should.equal('New Application');
      newApplication.info.should.equal('This is the brand new application!!!');
    });

  });

  describe('GET /api/applications/:id', function() {
    var application;

    beforeEach(function(done) {
      request(app)
        .get('/api/applications/' + newApplication._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          application = res.body;
          done();
        });
    });

    afterEach(function() {
      application = {};
    });

    it('should respond with the requested application', function() {
      application.name.should.equal('New Application');
      application.info.should.equal('This is the brand new application!!!');
    });

  });

  describe('PUT /api/applications/:id', function() {
    var updatedApplication;

    beforeEach(function(done) {
      request(app)
        .put('/api/applications/' + newApplication._id)
        .send({
          name: 'Updated Application',
          info: 'This is the updated application!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedApplication = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedApplication = {};
    });

    it('should respond with the updated application', function() {
      updatedApplication.name.should.equal('Updated Application');
      updatedApplication.info.should.equal('This is the updated application!!!');
    });

  });

  describe('DELETE /api/applications/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/applications/' + newApplication._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when application does not exist', function(done) {
      request(app)
        .delete('/api/applications/' + newApplication._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
