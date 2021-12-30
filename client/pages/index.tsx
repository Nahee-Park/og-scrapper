import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SearchBar from '../components/Home/SearchBar';
import styled from '@emotion/styled';
import Result from '../components/Home/Result';
import Header from '../components/common/Header';

const Home: NextPage = () => {
  return (
    <Styled.root>
      <Head>
        <title>og 테그 검색기</title>
        <meta name="description" content="링크의 og테그" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <img src="https://user-images.githubusercontent.com/81923229/147679923-499b556c-7b5c-44bd-add4-58ed731b8397.png" width="100%" height="200px"/> */}
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
