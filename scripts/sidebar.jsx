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


function toggleSidebar() {
    var wrapper = $("#inner-wrapper");
    wrapper.toggleClass("toggled");
    if (typeof(Storage) !== 'undefined') {
        var classes = wrapper[0].className.split(/\s+/);
        if (classes.indexOf('toggled') > -1) {
            localStorage.toggled = 'true';
        }
        else {
            localStorage.toggled = 'false';
        }
    }
}

function isStorageEnabled() {
    return typeof(Storage) !== 'undefined'
}

function isToggled() {
    return isStorageEnabled() ? localStorage.toggled : null;
}

var Nav = React.createClass({
    onSidebarToggle: function (e) {
        e.preventDefault();
        toggleSidebar();
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

module.exports.Nav = Nav;
module.exports.toggleSidebar = toggleSidebar;
module.exports.isToggled = isToggled;
module.exports.isStorageEnabled = isStorageEnabled;