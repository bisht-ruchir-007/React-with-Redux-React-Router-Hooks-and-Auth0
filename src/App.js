import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
	userName = 'RUCHIR BISHT';
	render() {
		//userName = 'RUCHIR BISHT'; won't work
		// const / let / var userName will work
		const date = new Date();
		const data = {
			key1: 'Some data'
		};

		return (
			<div className='container'>
				<Jumbotron>
					<h1>
						Welcome {this.userName}
						{/* {console.log(this.props)} */}
					</h1>
					{/* Displaying Objects in JSX */}
					{/* {React.createElement('h2', { className: 'app' }, var1.key1)} */}
					<h2>{data.key1}</h2>

					{/* Use Date and Time  */}
					<p className='lead'>{date.toDateString()}</p>
					<Button className='btn btn-success'>Submit</Button>
				</Jumbotron>
			</div>
		);
	}
}

const AppInstance = new App();

console.log(AppInstance.userName);

export default App;
