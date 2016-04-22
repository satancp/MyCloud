'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var cryptoCtrlStub = {
  index: 'cryptoCtrl.index',
  show: 'cryptoCtrl.show',
  create: 'cryptoCtrl.create',
  update: 'cryptoCtrl.update',
  destroy: 'cryptoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var cryptoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './crypto.controller': cryptoCtrlStub
});

describe('Crypto API Router:', function() {

  it('should return an express router instance', function() {
    cryptoIndex.should.equal(routerStub);
  });

  describe('GET /api/cryptos', function() {

    it('should route to crypto.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cryptoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/cryptos/:id', function() {

    it('should route to crypto.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'cryptoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/cryptos', function() {

    it('should route to crypto.controller.create', function() {
      routerStub.post
        .withArgs('/', 'cryptoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/cryptos/:id', function() {

    it('should route to crypto.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'cryptoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/cryptos/:id', function() {

    it('should route to crypto.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'cryptoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/cryptos/:id', function() {

    it('should route to crypto.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'cryptoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
