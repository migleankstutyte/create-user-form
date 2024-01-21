import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../index';

describe('Button', () => {
  it('should render button', () => {
    render(<Button />);
  });

  it('should render a disabled button', () => {
    render(<Button disabled />);
    const disabledButton = screen.getByRole('button');
    expect(disabledButton).toBeDisabled();
  });

  it('should render a regular size button', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    const styles = getComputedStyle(button);
    expect(styles.padding).toBe('15px');
  });

  it('should render a small size button when we pass small="sm" as prop', () => {
    render(<Button small="sm" />);
    const button = screen.getByRole('button');
    const styles = getComputedStyle(button);
    expect(styles.padding).toBe('10px');
  });

  it('should change button background color when we pass color as prop', () => {
    render(<Button color="black" />);
    const button = screen.getByRole('button');
    const styles = getComputedStyle(button);
    expect(styles.background).toBe('black');
  });

  it('should call mock function when button is clicked', () => {
    const onClickButton = jest.fn();
    render(<Button onClick={onClickButton} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickButton).toHaveBeenCalled();
  });
});
