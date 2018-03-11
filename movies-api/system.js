const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'movies-api' }).bootstrap(join(__dirname, 'components'));
