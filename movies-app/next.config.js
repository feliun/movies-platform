const withSass = require('@zeit/next-sass');

module.exports = withSass({ webpack: config => Object.assign(config, { node: { fs: 'empty' } }) });
