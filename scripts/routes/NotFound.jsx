/**
 * The default page displayed if the page does not exist.
 */

var React = require('react')
    , config = require('../../app.config')
    , DocumentTitle = require('react-document-title');

var NotFound = React.createClass({
    render: function () {
        return (
            <DocumentTitle title={config.brand + ' - Page Not Found'}>
                <span>Page does not exist.</span>
            </DocumentTitle>
        );
    }
});

module.exports = NotFound;