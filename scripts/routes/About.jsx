var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div className="container" role="main">
                <span>About...</span>
                <this.props.activeRouteHandler/>
            </div>
        );
    }
});

module.exports = About;