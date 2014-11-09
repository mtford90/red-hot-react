/**
 * Entry point. You shouldn't have to change anything here.
 */
var React = require('react')
, app = require('./app');

require('./styles/vendor');
require('./styles/custom');
require('./styles/dev');

React.render(app, document.getElementById('wrapper'));