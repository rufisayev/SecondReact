var React = require('react');
var MainPage = require('./mainPage');

var Thumbnail = React.createClass({
    render: function () {
        return <div className="thumbnail">
            <img src={this.props.imageUrl}/>
            <div className="caption">
                <h3>{this.props.header}</h3>
                <p>{this.props.description}</p>
                <p>
                    <MainPage name="Test button" age={this.props.age}/>
                </p>
            </div>
        </div>
    }
});

module.exports = Thumbnail;