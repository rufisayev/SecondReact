var React = require('react');
var ListItem = require('./listItem');
var Button = require('./mainPage');

var Dropdown = React.createClass({
    handleClick: function () {
        this.setState({open: !this.state.open})
    },
    getInitialState: function () {
        return {open: true}
    },
    handleItemClick: function (item) {
        this.setState({open: false, itemTitle: item})
    },
    render: function () {
        var list = this.props.items.map(function (item) {
            return <ListItem
                whenItemClicked={this.handleItemClick}
                item={item}
                className{this.state.itemTitle === item ? "active" : ""}
            />
        }.bind(this));

        return <div className="dropdown">
            <Button whenClicked={this.handleClick}
                    className="btn-default"
                    title={this.state.itemTitle || this.props.name}
                    subTitleClassName="caret"
                    subTitle="29"
            />
            <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>{list}</ul>
        </div>
    }
});

module.exports = Dropdown;
