var React = require('react')
    , bootstrap = require('react-bootstrap')
    , Row = bootstrap.Row
    , Col = bootstrap.Col;

var SocialIFrame = React.createClass({
    render: function () {
        var opts = {
            scrolling: "no",
            frameborder: "0",
            allowTransparency: "true"
        };
        opts.src = this.props.source;
        return React.DOM.iframe(opts);
    }
});

var Contact = React.createClass({
    render: function () {
        return (
            <div id="contact">
                <Row>
                    <Col md="12">
                        <p>You can follow me on twitter:</p>
                        <SocialIFrame id="twitter"
                            source={"//platform.twitter.com/widgets/follow_button.html?screen_name=mtford90&show_count=false&show_screen_name=true"}/>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <p>
                        Follow progress on GitHub:
                        </p>
                        <SocialIFrame id="githubFork"
                            source={"http://ghbtns.com/github-btn.html?user=mtford90&repo=red-hot-react&type=fork&count=true"}/>
                        <SocialIFrame id="githubWatch"
                            source={"http://ghbtns.com/github-btn.html?user=mtford90&repo=red-hot-react&type=watch&count=true"}/>
                        <SocialIFrame id="githubFollow"
                            source={"http://ghbtns.com/github-btn.html?user=mtford90&type=follow&count=true"}/>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <p>
                        Or visit my
                            <a href="http://www.mtford.co.uk"> blog</a>
                        </p>
                    </Col>
                </Row>
            </div>
        );

    }
});

module.exports = Contact;