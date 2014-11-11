var React = require('react'),
    bootstrap = require('react-bootstrap'),
    Row = bootstrap.Row,
    Col = bootstrap.Col;

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <Row>
                    <Col md="12">
                        <p>
                        Red-Hot-React is an opinionated boilerplate for ReactJS. It emphasises developer workflow with the aim of maximising productivity and easing delivery. See it in action below:
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <div className="embed-responsive embed-responsive-4by3">
                            <iframe src="//www.youtube.com/embed/dF1x3Hfg8RA" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = About;