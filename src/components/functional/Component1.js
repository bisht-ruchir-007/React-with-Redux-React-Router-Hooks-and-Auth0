import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Component1 = ({ name, age }) => {
	return (
		<div>
			<h4 className='text-info'>Personal Details</h4>
			<h5>Name : {name}</h5>
			<h5>Age : {age}</h5>
		</div>
	);
};

export default Component1;
