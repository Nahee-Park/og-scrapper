import React from 'react';
import type { NextPage } from 'next';
import SearchBar from '../components/Home/SearchBar';
import styled from '@emotion/styled';
import Result from '../components/Home/Result';
import Header from '../components/common/Header';

const Home: NextPage = () => {
  return (
    <Styled.root>
      <Header />
      <div className="SearchvarWrapper">
        <SearchBar />
      </div>
      <div className="ResultWrapper">
        <Result />
      </div>
    </Styled.root>
  );
};

export default Home;

const Styled = {
  root: styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    .SearchvarWrapper {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ResultWrapper {
      width: 80%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
};
