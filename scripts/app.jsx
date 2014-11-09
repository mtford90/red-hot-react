/*global dev*/
var React = require('react'),
    conf = require('../app.config'),
    nav = require('./nav'),
    Nav = nav.Nav;

var App = React.createClass({
    render: function () {
        var items = [
            {text: 'Home', icon: 'fa fa-home'},
            {text: 'About', icon: 'fa fa-question-circle'},
            {text: 'Contact', icon: 'fa fa-envelope-o'}
        ];
        return (
            <div id="inner-wrapper" className={nav.isStorageEnabled() ? (nav.isToggled ? 'toggled' : '') : ''}>
                <Nav items={items}
                    brand={conf.brand}
                    brandRoute="Home"
                    brandIcon={conf.brandIcon}/>
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


var basePath = dev ? conf.basePath.dev : conf.basePath.prod;
// Configure new routes here.
var routes = (
    <Routes location="history">
        <Route name="app" path={basePath} handler={App}>
            <Route name="Home" handler={require('./routes/Home')}/>
            <Route name="About" handler={require('./routes/About')}/>
            <Route name="Contact" handler={require('./routes/Contact')}/>
            <DefaultRoute handler={require('./routes/NotFound')}/>
            <NotFoundRoute handler={require('./routes/NotFound')}/>
            <Redirect path={basePath} to="Home" />
        </Route>
    </Routes>
);

module.exports = routes;