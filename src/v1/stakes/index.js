const { Router } = require('express');

module.exports = ({ config, db }) => {
  const api = Router();

  api.get('/', async (req, res) => {
    try {
      res.json({ test: 'aaaaaaaa' });
    } catch (e) {
      res.json({ error: { message: e.message } });
    }
  });

  return api;
};