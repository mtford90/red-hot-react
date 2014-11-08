var React = require('react');

var Jumbotron = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Hello, world!</h1>
                <p>This is a boilerplate configuration for ReactJS providing hot reloads of components and styles.</p>
                <p>
                    <a href="#" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</a>
                </p>
            </div>
        )
    }
});


var Home = React.createClass({
    render: function () {
        return (
            <div className="container" role="main">
                <Jumbotron/>
                <this.props.activeRouteHandler/>
            </div>
        );
    }
});


module.exports = Home;