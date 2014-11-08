var React = require('react');

var Contact = React.createClass({
    render: function () {
        return (
            <div className="container" role="main">
                <span>Contact us!</span>
                <this.props.activeRouteHandler/>
            </div>
        );
    }
});

module.exports = Contact;