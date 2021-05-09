import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'react-bootstrap';
import Component1 from './components/functional/Component1';

class App extends Component {
	//userName = 'RUCHIR BISHT';
	render() {
		//userName = 'RUCHIR BISHT'; won't work
		// const / let / var userName will work
		const date = new Date();
		const userData = {
			username: 'ruchircr7',
			name: 'Ruchir Bisht',
			age: 21
		};

		return (
			<div className='container'>
				<span className='badge bg-success text-light'>{date.toDateString()}</span>

				<Jumbotron>
					<h1 className='text-primary'>
						Welcome {userData.username}
						{/* {console.log(this.props)} */}
					</h1>
				</Jumbotron>

				{/* Displaying Objects in JSX */}
				{/* {React.createElement('h2', { className: 'app' }, var1.key1)} */}
				<Component1 name={userData.name} age={userData.age} />
				{/* Use Date and Time  */}
			</div>
		);
	}
}

const AppInstance = new App();

console.log(AppInstance.userName);

export default App;
