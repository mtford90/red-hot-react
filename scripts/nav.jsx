var React = require('react')
    , $ = require('jquery')
    , router = require('react-router')
    , Link = router.Link;

var NavItem = React.createClass({
    render: function () {
        return (
            <li>
                <Link to={this.props.item.text}>
                    <span>{this.props.item.text}</span>
                        {this.props.item.icon ? <i className={this.props.item.icon}/> : ''}
                </Link>
            </li>
        );
    }
});


var Nav = React.createClass({
    onSidebarToggle: function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("toggled");
        $("#page-content-wrapper").toggleClass("toggled");
    },
    render: function () {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <Link to="app"  role="button">
                            {this.props.brandIcon ? <i className={this.props.brandIcon + ' ' + 'brand-icon'}></i> : ''}
                            {this.props.brand}
                        </Link>
                        <button className="btn toggle-button" onClick={this.onSidebarToggle}>
                            <i className="fa fa-exchange toggle"></i>
                        </button>
                    </li>
                    {this.props.items.map(function (k, i) {
                        return <NavItem item={k} key={i}/>
                    })}
                </ul>
            </div>
        )

    }
});

module.exports = Nav;