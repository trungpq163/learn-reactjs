import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

export default {
	title: 'Button',
	component: Button,
	decorators: [ withInfo ]
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
	<Button onClick={action('clicked')}>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Button>
);

Emoji.story = {
	name: 'with emoji'
};
