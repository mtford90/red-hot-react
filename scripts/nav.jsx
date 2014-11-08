var React = require('react')
    , router = require('react-router')
    , Link = router.Link;

var NavItem = React.createClass({
    render: function () {
        return (
            <li>
                <Link to={this.props.name}>{this.props.name}</Link>
            </li>
        );
    }
});


var Nav = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="app" className="navbar-brand" role="button">{this.props.brand}</Link>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                                {this.props.items.map(function (k, i) {
                                    return <NavItem name={k} key={i}/>
                                })}
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
});

module.exports = Nav;