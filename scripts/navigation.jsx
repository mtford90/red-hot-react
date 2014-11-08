var React = require('react')
    , router = require('react-router')
    , Route = router.Route
    , Routes = router.Routes
    , DefaultRoute = router.DefaultRoute
    , Link = router.Link;

var NavItem = React.createClass({
    render: function () {
        var className = this.props.active ? 'active' : '';
        return (
            <li className={className}>
                <Link to={this.props.name}>{this.props.name}</Link>
            </li>
        );
    }
});

var NavBar = React.createClass({
    render: function () {
        var links = ['Home', 'About'];
        var activeLink = 'Home';
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
                        <a className="navbar-brand" href="#">{this.props.brand}</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                        {links.map(function (o, i) {
                            return <NavItem name={o} key={i} active={activeLink == o}/>
                        })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

module.exports.NavBar = NavBar;
module.exports.NavItem = NavItem;