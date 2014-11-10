var React = require('react');

var TwitterFollowButton = React.createClass({
    render: function () {
        return React.DOM.iframe({
            src: "//platform.twitter.com/widgets/follow_button.html?screen_name=mtford90&show_count=false&show_screen_name=true",
            scrolling: "no",
            frameborder: "0",
            allowTransparency: "true",
            id: "twitter"
        })
    }
});


var Contact = React.createClass({
    render: function () {
        return (
            <div id="contact">
                <span>Contact Us!</span>
                <TwitterFollowButton/>
            </div>
        );

    }
});

module.exports = Contact;

