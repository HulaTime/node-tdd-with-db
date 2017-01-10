// specify the environment 

const environment = process.env.NODE_ENV || 'development',
  config = require('../knexfile.js');

module.exports = require('knex')(config);