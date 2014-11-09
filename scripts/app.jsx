var React = require('react'),
    conf = require('../app.config'),
    Nav = require('./nav');

var App = React.createClass({
    render: function () {
        var items = [
            {text: 'Home', icon: 'fa fa-home'},
            {text: 'About', icon: 'fa fa-question-circle'},
            {text: 'Contact', icon: 'fa fa-envelope-o'}
        ];
        return (
            <div>
                <Nav items={items} brand={conf.brand} brandRoute="Home"/>
                <div id="page-content-wrapper">
                    <div className="container-fluid" role="main">
                    {/*This is where routes are injected.*/}
                        <this.props.activeRouteHandler/>
                    </div>
                </div>
            </div>
        )
    }
});

var router = require('react-router')
    , Route = router.Route
    , Routes = router.Routes
    , Redirect = router.Redirect
    , NotFoundRoute = router.NotFoundRoute
    , DefaultRoute = router.DefaultRoute;

// Configure new routes here.
var routes = (
    <Routes location="history">
        <Route name="app" path="/" handler={App}>
            <Route name="Home" handler={require('./routes/Home')}/>
            <Route name="About" handler={require('./routes/About')}/>
            <Route name="Contact" handler={require('./routes/Contact')}/>
            <DefaultRoute handler={require('./routes/NotFound')}/>
            <NotFoundRoute handler={require('./routes/NotFound')}/>
            <Redirect path="/" to="Home" />
        </Route>
    </Routes>
);

module.exports = routes;