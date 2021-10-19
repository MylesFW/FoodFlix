import React from 'react';

const TestFunctional = (props) => {
	return (
		<div>
			Functional Component ~~~ <br />
			props number: {props.test_num} <br />
			props string: {props.test_string}
		</div>
	);
};

export default TestFunctional;
