import React, { Component } from 'react';

class TestClass extends Component {
	render() {
		return (
			<div>
				TestClass ~~~ <br />
				test text: {this.props.test_prop}
			</div>
		);
	}
}
export default TestClass;
