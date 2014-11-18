/*global dev*/
/**
 * Entry point for the app.
 *
 * Here we:
 *     - setup the routing based on routes.jsx
 *     - pack all the stylesheets
 *     - render the react components
 */

var React = require('react'),
    conf = require('../app.config'),
    sidebar = require('./sidebar'),
    bootstrap = require('react-bootstrap'),
    routes = require('./routes'),
    Navigation = sidebar.Nav;

/*********************/
/** Pack dem styles **/
/*********************/

// The toggle wrapper features the 'toggle' class which passes down styles to the sidebar and content wrapper
// depending on whether or not toggle has been pressed.
var ToggleWrapper = React.createClass({
    render: function () {
        var isToggled = sidebar.isToggled();
        return (
            <div id="toggle-wrapper" className={isToggled == 'false' ? '' : 'toggled'}>
                {this.props.children}
            </div>
        )
    }
});

// The content wrapper 'wraps' the content of the page in a fluid, scrollable container ensuring that the
// sidebar is always visible.
var ContentWrapper = React.createClass({
    render: function () {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid" role="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <ToggleWrapper>
                <Navigation items={routes.navigationItems}
                    brand={conf.brand}
                    brandRoute={routes.defaultRoute.text}
                    brandIcon={conf.brandIcon}/>
                    {/*This is where routes are injected.*/}
                <ContentWrapper>
                    <this.props.activeRouteHandler/>
                </ContentWrapper>
            </ToggleWrapper>
        )
    }
});

/*********************/
/** Pack dem styles **/
/*********************/

require('./styles/vendor');
require('./styles/custom');
require('./styles/dev');

/***********************/
/** Configure Routing **/
/***********************/

var router = require('react-router')
    , Route = router.Route
    , Routes = router.Routes
    , Redirect = router.Redirect
    , NotFoundRoute = router.NotFoundRoute
    , DefaultRoute = router.DefaultRoute;

// the dev global variable is injected by a really simple custom webpack plugin.
var basePath = dev ? conf.basePath.dev : conf.basePath.prod;
console.log('basePath', basePath);

var RouterComponent = (
    <Routes>
        <Route name="app" path={basePath} handler={App}>
            {routes.navigationItems.map(function (item, idx) {
                return (<Route name={item.text} handler={item.handler} key={idx}/>);
            })}
            <DefaultRoute handler={routes.NotFound}/>
            <NotFoundRoute handler={routes.NotFound}/>
            <Redirect path={basePath} to={routes.defaultRoute.text} />
        </Route>
    </Routes>
);

/********************/
/** Render the app **/
/********************/

React.render(RouterComponent, document.getElementById('wrapper'));