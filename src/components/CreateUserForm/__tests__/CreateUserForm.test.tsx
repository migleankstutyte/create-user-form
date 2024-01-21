import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CreateUserForm from '../CreateUserForm';

describe('Create User form', () => {
  describe('button', () => {
    it('should have four buttons with specific names', () => {
      render(<CreateUserForm />);

      const resetButton = screen.getByRole('button', { name: 'Reset' });
      const submitButton = screen.getByRole('button', { name: 'Submit form' });
      const addButton = screen.getByRole('button', { name: '+' });
      const removeButton = screen.getByRole('button', { name: '-' });

      expect(resetButton).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(addButton).toBeInTheDocument();
      expect(removeButton).toBeInTheDocument();
    });
  });

  describe('input component', () => {
    it('should fill hobbies input', () => {
      render(<CreateUserForm />);
      const hobbiesInput = screen.getByRole('textbox', { name: 'Hobbies' });
      fireEvent.change(hobbiesInput, { target: { value: 'Skiing' } });
      expect(hobbiesInput).toHaveValue('Skiing');
    });
  });

  describe('checkbox ', () => {
    it('should find checkbox and check if it is checked', () => {
      render(<CreateUserForm />);

      const checkbox = screen.getAllByRole('checkbox', { name: 'beige' })[0];
      expect(checkbox).not.toBeChecked();
    });

    it('should check checkbox', () => {
      render(<CreateUserForm />);

      const checkbox = screen.getAllByRole('checkbox', { name: 'beige' })[0];
      expect(checkbox).not.toBeChecked();
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });

  describe('select component', () => {
    it('should render Select component', () => {
      render(<CreateUserForm />);

      const select = screen.getByRole('combobox');
      expect(select).toHaveValue('Female');
    });

    it('should change selected value in Select component', () => {
      render(<CreateUserForm />);
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'Male' } });
      expect(select).toHaveValue('Male');
    });

    it('should render options length in Select component', () => {
      render(<CreateUserForm />);

      const options = screen.getAllByRole('option');
      expect(options.length).toBe(3);
    });
  });
});
