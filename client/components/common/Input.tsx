import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
interface InputStyleProps {
  height: string;
  width: string;
}
interface InputProps extends InputStyleProps {
  type: string;
  name: string;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  submitHandler: () => void;
  value: string | undefined;
}

const Input = ({ type, name, height, width, setValue, submitHandler, value }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(inputRef?.current?.value);
  };

  return (
    <Styled.Form onSubmit={submitHandler} height={height} width={width}>
      <input className="input" type={type} name={name} onChange={changeHandler} ref={inputRef} value={value} placeholder='아카이빙 하고 싶은 url주소를 입력해주세요!'/>
    </Styled.Form>
  );
};
export default Input;

const Styled = {
  Form: styled.form<InputStyleProps>`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    background: #e5e5e5;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    .input {
      width: 95%;
      height: 100%;
      background: #e5e5e5;
      border-radius: 12px;
      border: 0 solid white;
    }
  `,
};
