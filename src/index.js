var React = require('react');
var ReactDOM = require('react-dom');
var MainPage = require('./mainPage');
var Thumbnail = require('./thumbnail');
var ThumbnailList = require('./thumbnailList');
var Dropdown = require('./dropdown');

//var options = {
//	name:'Rufet',
//	age:22,
//	title:'test',
//	imageUrl:'http://yycjs.com/real-world-react/img/react-logo.png',
//	header:'This is header',
//	description:'Testing react'
//};
//
// var options = {
//     thumbnailData: [{
//         name: 'Rufet',
//         age: 22,
//         title: 'test',
//         imageUrl: 'http://yycjs.com/real-world-react/img/react-logo.png',
//         header: 'This is header',
//         description: 'Testing react'
//     }, {
//         name: 'Azer',
//         age: 25,
//         title: 'test',
//         imageUrl: 'https://deversoy.files.wordpress.com/2015/06/nodejs-logo.png',
//         header: 'This is NodeJS',
//         description: 'Testing NodeJS'
//     }]
// };
//
var options = {
	name: 'Choose a desert',
    age:22,
	items:[
			'Apple Pie',
			'Peach Cobbler',
			'Coconut Cream Pie'
		  ]

};
var element = React.createElement(Dropdown, options);
ReactDOM.render(element, document.querySelector('.target'));
