'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-flight-dom-webpack-server.node.production.min.js');
} else {
  module.exports = require('./cjs/react-flight-dom-webpack-server.node.development.js');
}
