webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 通过 require 的方式依赖 React，ReactDOM
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(38);
	
	var Hello = React.createClass({
	    displayName: 'Hello',
	
	    propTypes: {
	        name: React.PropTypes.string.isRequired
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            'Hello ',
	            this.props.name
	        );
	    }
	});
	
	ReactDOM.render(React.createElement(Hello, { name: 'World' }), document.getElementById('AppRoot'));

/***/ }
]);
//# sourceMappingURL=home.js.map