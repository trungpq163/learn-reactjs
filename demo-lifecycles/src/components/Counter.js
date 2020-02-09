import React, { Component } from 'react';

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	increaseCount() {
		this.setState({ count: ++this.state.count });
	}

	decreaseCount() {
		this.setState({ count: --this.state.count });
	}

	render() {
		console.log('Counter render');
		return (
			<div className="counter">
				<button onClick={() => this.decreaseCount()}>-</button>
				<span>{this.state.count}</span>
				<button onClick={() => this.increaseCount()}>+</button>
			</div>
		);
	}

	componentDidMount() {
		console.log('Counter did mount');
	}

	componentDidUpdate() {
		console.log('Counter did update');
	}

	componentWillUnmount() {
		console.log('Counter did unmount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.count === nextState.count) {
			return false;
		}
		return true;
	}
}
