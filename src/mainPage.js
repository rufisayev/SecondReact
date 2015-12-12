var React = require('react');
var History = require('./history');
var Payment = require('./payment');


var MainPage = React.createClass({

	render: function(){
		return  <div>
					<button onClick={this.props.whenClicked} className={"btn " + this.props.className}  type="button">
						{this.props.title} <span className={this.props.subTitleClassName}>{this.props.subtitle}</span>
					</button>;
				</div>

				//For thumbnail
				//<div>
				//<button className="btn btn-primary" type="button">
				//{this.props.name} <span className="badge">{this.props.age}</span>
				//</button>;
				//</div>
	}
});

module.exports = MainPage;
