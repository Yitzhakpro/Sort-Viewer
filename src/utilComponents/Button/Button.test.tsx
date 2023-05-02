import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button Util Component', () => {
	it('Should render button with given children', () => {
		const text = 'test button';

		const { getByText } = render(
			<Button>
				<h1>{text}</h1>
			</Button>
		);

		const button = getByText(text);
		expect(button).toBeTruthy();
	});
});
