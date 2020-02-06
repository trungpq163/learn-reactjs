import React, { Component } from 'react';
import Arcordion from './components/Arcordion';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Arcordion heading="Heading">props.children: demo lesson</Arcordion>
			</div>
		);
	}
}

export default App;
