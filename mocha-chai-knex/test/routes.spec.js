process.env.NODE_ENV = 'test'

const chai = require('chai'),
  should = chai.should(),
  chaiHttp = require('chai-http'),
  server = require('../app');

chai.use(chaiHttp);

describe('API routes', () => {

});