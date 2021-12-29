import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Button from '../common/Button';
import Input from '../common/Input';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string | undefined>('');

  const clickHandler = () => {
    if (searchValue) {
      console.log('searchValue',searchValue);
      // searchValue 가지고 Post하기 
      // post한 url og테그 크롤링 해서 
      setSearchValue('');
    }
  };

  return (
    <Styled.SearchBar>
      <Styled.Input>
        <Input
          type="text"
          name="searchbar_input"
          height="35px"
          width="100%"
          setValue={setSearchValue}
          value={searchValue}
          submitHandler={clickHandler}
        />
      </Styled.Input>
      <Styled.Button>
        <Button size="sm" label="archive" color="#fcfc84" onClick={clickHandler} />
      </Styled.Button>
    </Styled.SearchBar>
  );
}

export default SearchBar;

const Styled = {
  SearchBar: styled.div`
    display: flex;
    margin-top: 1rem;
  `,
  Input: styled.div`
    margin-right: 0.5rem;
    width:80%;
  `,
  Button: styled.div``,
};
