var React = require('react'),
    conf = require('../app.config');

var Nav = require('./nav');

// Configure styles
require('./styles');

var App = React.createClass({
    render: function () {
        var items = ['About', 'Contact'];
        return (
            <div>
                <Nav items={items} brand={conf.brand} brandRoute="Home"/>
                <this.props.activeRouteHandler/>
            </div>
        )
    }
});

var router = require('react-router')
    , Route = router.Route
    , Routes = router.Routes
    , DefaultRoute = router.DefaultRoute;

var Home = require('./routes/Home'),
    About = require('./routes/About'),
    Contact = require('./routes/Contact');

var routes = (
    <Routes location="history">
        <Route name="app" path="/" handler={App}>
            <Route name="About" handler={About}/>
            <Route name="Contact" handler={Contact}/>
            <DefaultRoute handler={Home}/>
        </Route>
    </Routes>
);

React.render(routes, document.getElementById('wrapper'));