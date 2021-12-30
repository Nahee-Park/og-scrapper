import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
export type sizeType = 'sm' | 'md' | 'lg';

interface ButtonStyleProps {
  color: string;
  size: sizeType;
}
interface ButtonProps extends ButtonStyleProps {
  label: string;
  onClick: any;
}

function Button({ label, color, size, onClick }: ButtonProps) {
  return (
    <Styled.Button color={color} size={size} onClick={onClick}>
      {label}
    </Styled.Button>
  );
}

export default Button;

const Styled = {
  Button: styled.button<ButtonStyleProps>`
    border-radius: 12px;
    background: ${({ color }) => color};
    ${({ size }) =>
      size === 'sm'
        ? css`
            width: 90px;
            height: 35px;
          `
        : size === 'md'
        ? css`
            width: 106px;
            height: 45px;
          `
        : css`
            width: 130px;
            height: 55px;
          `}
    color: #8279F4;
    size: 21px;
    font-family: Roboto Mono Light for Powerline;
    line-height: 25px;
    cursor: pointer;
    &:hover {
      filter: brightness(115%);
    }
  `,
};
