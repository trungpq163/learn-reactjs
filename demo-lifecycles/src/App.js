import React, { Component } from 'react';
import Counter from './components/Counter.js';
import './App.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCounter: true
		};
	}

	componentDidUpdate() {
		console.log(`App updated`);
	}

	removeCounter() {
		this.setState({ showCounter: false });
	}

	render() {
		console.log('App render');
		return (
			<div className="App">
				<button onClick={() => this.removeCounter()}>Remove counter</button>
				<Counter />
			</div>
		);
	}
}
