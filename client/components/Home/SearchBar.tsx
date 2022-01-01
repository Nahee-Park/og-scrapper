import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Button from '../common/Button';
import Input from '../common/Input';
import { baseUrl, client } from '../../lib/client';
import { mutate } from 'swr';
import useContentsDatas from '../../hooks/useContentsDatas';

// 콘텐스트 api로 상태관맇기
function SearchBar() {
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const { contentsData, setContentsData, setIsLoading } = useContentsDatas();

  const clickHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      console.log('searchValue', searchValue);
      setIsLoading(true);
      await client
        .post('', {
          url: searchValue,
        })
        .then((response) => {
          const copyData = [...contentsData];
          copyData.push(response?.data?.data);
          setContentsData([...copyData]);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          alert(`에러가 났어요ㅠ ${error}`);
        });
      mutate('/list');
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
    /* margin-left: 1.5rem; */
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
  Input: styled.div`
    margin-right: 0.5rem;
    width: 90%;
  `,
  Button: styled.div``,
};
