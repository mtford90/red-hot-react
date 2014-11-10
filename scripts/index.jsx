/**
 * Entry point for the app.
 */

var React = require('react'),
    conf = require('../app.config'),
    sidebar = require('./sidebar'),
    bootstrap = require('react-bootstrap'),
    nav = require('./nav'),
    Navigation = sidebar.Nav;

var App = React.createClass({
    render: function () {
        var isToggled = sidebar.isToggled();
        return (
            <div id="inner-wrapper" className={isToggled == 'false' ? '' : 'toggled'}>
                <Navigation items={nav.navigationItems}
                    brand={conf.brand}
                    brandRoute={nav.defaultRoute.text}
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
var routes = (
    <Routes location="history">
        <Route name="app" path={basePath} handler={App}>
            {nav.navigationItems.map(function (item, idx) {
                return (<Route name={item.text} handler={item.handler} key={idx}/>);
            })}
            <DefaultRoute handler={nav.NotFound}/>
            <NotFoundRoute handler={nav.NotFound}/>
            <Redirect path={basePath} to={nav.defaultRoute.text} />
        </Route>
    </Routes>
);


require('./styles/vendor');
require('./styles/custom');
require('./styles/dev');

React.render(routes, document.getElementById('wrapper'));