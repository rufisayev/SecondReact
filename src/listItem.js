var React = require('react');

var ListItem = React.createClass({
    handleClick:function(){
        this.props.whenItemClicked(this.props.item);
    },
    render: function(){
        return <li><a onClick={this.handleClick}>{this.props.item}</a></li>
    }
});
module.exports = ListItem;