var React = require('react'),
    conf = require('../app.config'),
    Nav = require('./nav');

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

var routes = (
    <Routes location="history">
        <Route name="app" path="/" handler={App}>
            <Route name="About" handler={require('./routes/About')}/>
            <Route name="Contact" handler={require('./routes/Contact')}/>
            <DefaultRoute handler={require('./routes/Home')}/>
        </Route>
    </Routes>
);

require('./styles'); // Render styles;

React.render(routes, document.getElementById('wrapper'));