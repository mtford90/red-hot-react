/**
 * Entry point. You shouldn't have to change anything here.
 */
var React = require('react')
, app = require('./app');

require('./styles/vendor'); // Render styles;
require('./styles/custom'); // Render styles;

React.render(app, document.getElementById('wrapper'));