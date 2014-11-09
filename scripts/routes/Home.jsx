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
                description: 'Changes to React components are updated without page refreshes.',
                icon: 'fa fa-pencil'
            },
            {
                title: 'Live Styles',
                description: 'Changes to styling are updated without page refreshes.',
                icon: 'fa fa-text-height'
            },
            {
                title: 'Compilation',
                description: 'Changes to React components are updated without page refreshes.',
                icon: 'fa fa-code'
            },
            {
                title: 'Production Server',
                description: 'A server is provided for serving the app in production',
                icon: 'fa fa-cloud'
            },
            {
                title: 'Routing',
                description: 'React router is built-in and optimally configured to work with express',
                icon: 'fa fa-arrows'
            },
            {
                title: 'Testing',
                description: 'Facebook\'s Jest for testing',
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
                            This is a gloriously opinionated boilerplate for ReactJS with a focus on developer workflow for rapid development
                            and delivery.
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