const { Router } = require('express');
const Stakes = require('./stakes');

module.exports = ({ config, db }) => {
  const api = Router();

  api.use('/stakes', Stakes({ config, db }));

  return api;
};