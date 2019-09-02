const { Router } = require('express');

module.exports = ({ config, db }) => {
  const routes = Router();

  // Add something if needed...
  // db.Store.findAll({}).then(s => console.log(s))

  return routes;
};