import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  small?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: string;
}

const UIButton = styled.button<ButtonProps>`
  background-color: ${({ color }) => color};
  border-radius: 5px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: #4c4848;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  text-transform: uppercase;
  padding: ${({ small }) => (small === 'sm' ? '10px' : '15px')};

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.7;
    cursor: auto;
  }
`;
const Button = ({
  color,
  children,
  onClick,
  disabled,
  small,
  type
}: ButtonProps) => {
  return (
    <UIButton
      onClick={onClick}
      color={color}
      disabled={disabled}
      small={small}
      type={type}
    >
      {children}
    </UIButton>
  );
};

export default Button;
