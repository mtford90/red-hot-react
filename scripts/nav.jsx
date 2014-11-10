/**
 * This is where navigation & routing is configured.
 */

var React = require('react');

var Home = require('./routes/Home')
    , About = require('./routes/About')
    , Contact = require('./routes/Contact')
    , NotFound = require('./routes/NotFound');

var defaultRoute = {text: 'Home', icon: 'fa fa-home', handler: Home};
var navigationItems = [
    defaultRoute,
    {text: 'About', icon: 'fa fa-question-circle', handler: About},
    {text: 'Contact', icon: 'fa fa-envelope-o', handler: Contact}
];

module.exports.defaultRoute = defaultRoute;
module.exports.navigationItems = navigationItems;
module.exports.NotFound = NotFound;