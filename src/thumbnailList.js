var React = require('React');
var Thumbnail = require('./thumbnail');

var ThumbnailList = React.createClass({
    render: function () {
        var list = this.props.thumbnailData.map(function (thumbnailProp) {
            return <Thumbnail {...thumbnailProp} />
        });

        return <div>{list}</div>
    }
});
module.exports = ThumbnailList;