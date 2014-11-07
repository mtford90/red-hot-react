var React = require('react');
var HelloMessage = require('./HelloMessage');
var Image = require('./Image');

// Configure styles
require('./styles');

React.render(
    (<div>
        <HelloMessage name="Peter" />
        <Image />
    </div>),
    document.getElementById('wrapper'));