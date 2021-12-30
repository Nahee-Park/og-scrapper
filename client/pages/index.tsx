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
        <title>해빗도리들의 컨텐츠 저장소</title>
        <meta name="description" content="해빗도리들의 컨텐츠 저장소" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/socar-server-814e9.appspot.com/o/car%2Fhavitlogobig.png?alt=media"
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta name="description" content="해빗도리들의 컨텐츠 저장소" />
        <meta name="keywords" content="해빗도리들의 컨텐츠 저장소" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HAVIT's Content Storage" />
        {/* <meta property="og:url" content="https://www.kyrics.org" /> */}
        <meta property="og:site_name" content="HAVIT's Content Storage" />
        <meta property="og:description" content="해빗도리들의 컨텐츠 저장소" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/socar-server-814e9.appspot.com/o/car%2Fhavitlogobig.png?alt=media"
        />
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
