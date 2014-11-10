var React = require('react')
    , router = require('react-router')
    , Link = router.Link;


var Feature = React.createClass({
    render: function () {
        return (
            <div className="feature">
                <div className="row title-row">
                    <i className={this.props.opts.icon}></i>
                    <span className="title">{this.props.opts.title}</span>
                </div>
                <div className="row">
                    <p className="description">{this.props.opts.description}</p>
                </div>
            </div>
        );
    }
});


var Home = React.createClass({


    render: function () {
        var features = [
            {
                title: 'Live React Components',
                description: 'Changes to React components are automatically injected into the page, without refreshing.',
                icon: 'fa fa-pencil'
            },
            {
                title: 'Live Styles',
                description: 'Changes to styles are automatically injected into the page, without refreshing.',
                icon: 'fa fa-text-height'
            },
            {
                title: 'Compilation',
                description: 'Thanks to webpack, all JS, JSX and stylesheets are compiled into one nifty, minified bundle.',
                icon: 'fa fa-code'
            },
            {
                title: 'Production Server',
                description: 'A server is provided for serving compiled bundles in production, configured for ease of use',
                icon: 'fa fa-cloud'
            },
            {
                title: 'Routing',
                description: 'React router is built-in, with both the dev and production servers configured to work in tandem.',
                icon: 'fa fa-arrows'
            },
            {
                title: 'Testing',
                description: 'Facebook\'s Jest framework - built on top of Jasmine - is used for testing and mocking.',
                icon: 'fa fa-check'
            }
        ];
        var i, j, tempArray, chunkedFeatures = [], chunk = 3;
        for (i = 0, j = features.length; i < j; i += chunk) {
            tempArray = features.slice(i, i + chunk);
            chunkedFeatures.push(tempArray);
        }
        return (
            <div id="home">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h1>Red Hot React</h1>
                            <p>
                            A rather opinionated boilerplate for ReactJS, focusing on developer workflow in aid of rapid development and delivery.
                            </p>
                            <p>
                                <Link to="About" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                </div>
                    {chunkedFeatures.map(function (featureRow, i) {
                        return (
                            <div className="row feature-row">
                                {featureRow.map(function (feature, j) {
                                    return (<div className="col-md-4 feature-col">
                                        <Feature key={i * j} opts={feature}/>
                                    </div>)
                                })}
                            </div>
                        );
                    })}
            </div>
        );
    }
});


module.exports = Home;