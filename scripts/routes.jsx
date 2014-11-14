/**
 * This is where navigation & routing is configured.
 */

var React = require('react');

var navigationItems = [
    {text: 'Home', icon: 'fa fa-home', handler: require('./routes/home/Home')},
    {text: 'About', icon: 'fa fa-question-circle', handler: require('./routes/About')},
    {text: 'Contact', icon: 'fa fa-envelope-o', handler: require('./routes/Contact')}
];

// These exports are used to configure the routing and the sidebar that visually represents
// the routing.
module.exports.defaultRoute = navigationItems[0];
module.exports.navigationItems = navigationItems;
module.exports.NotFound = require('./routes/NotFound');