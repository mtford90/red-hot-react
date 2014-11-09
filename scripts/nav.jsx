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
    onSidebarToggle: function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    },
    render: function () {
        return (
            <div>
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <Link to="app"  role="button">{this.props.brand}</Link>
                            <button className="btn toggle-button" onClick={this.onSidebarToggle}><i className="fa fa-exchange"></i></button>
                        </li>
                    {this.props.items.map(function (k, i) {
                        return <NavItem name={k} key={i}/>
                    })}
                    </ul>
                </div>
            </div>
        )

    }
});

module.exports = Nav;