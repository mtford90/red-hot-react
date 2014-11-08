var React = require('react'),
    conf = require('../app.config');

var Nav = require('./nav');

// Configure styles
require('./styles');

var App = React.createClass({
    render: function () {
        var items = ['Home', 'About'];
        return (
            <div>
                <Nav items={items}/>
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
    About = require('./routes/About');

var routes = (
    <Routes location="history">
        <Route name="app" path="/" handler={App}>
            <Route name="Home" handler={Home}/>
            <Route name="About" handler={About}/>
            <DefaultRoute handler={Home}/>
        </Route>
    </Routes>
);

React.render(routes, document.getElementById('wrapper'));