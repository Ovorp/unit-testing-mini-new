import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter component', () => {
  it('starting text of the p tag', () => {
    let counter = render(<Counter />);
    console.log(counter.container.textContent);
    expect(counter.container.textContent).toContain(`You've clicked 0 times!`);
  });

  it('does the btn work', () => {
    let { container, getByTestId } = render(<Counter />);
    let btn = getByTestId('counter-button');
    expect(container.textContent).toContain(`You've clicked 0 times!`);
    fireEvent.click(btn);
    expect(container.textContent).toContain(`You've clicked 1 times!`);
  });
});
