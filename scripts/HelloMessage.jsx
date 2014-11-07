var React = require('react');

var HelloMessage = React.createClass({
    render: function() {
        return <div>Yo {this.props.name}!</div>;
    }
});

module.exports = HelloMessage;