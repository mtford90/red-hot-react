var React = require('react')
    , router = require('react-router')
    , Link = router.Link;


var Home = React.createClass({
    render: function () {
        return (
            <div id="home">
                <div className="jumbotron">
                    <h1>Hello, world!</h1>
                    <p>This is a boilerplate configuration for ReactJS providing hot reloads of components and styles.</p>
                    <p>
                        <Link to="About" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link>
                    </p>
                </div>
            </div>
        );
    }
});


module.exports = Home;