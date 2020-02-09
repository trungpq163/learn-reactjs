import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {
	render() {
		const { item, onClick } = this.props;

		let url = checkImg;
		if (item.isComplete) {
			url = checkCompleteImg;
		}

		return (
			<div
				onClick={onClick}
				className={classNames('TodoItem', {
					'TodoItem-complete': item.isComplete
				})}
			>
				<img src={url} witdh={30} height={30} />
				<p>{this.props.item.title}</p>
			</div>
		);
	}
}

TodoItem.PropTypes = {
	item: PropTypes.shape({
		isComplete: PropTypes.bool,
		title: PropTypes.string.isRequired
	}),
	onClick: PropTypes.func.isRequired
};

export default TodoItem;
