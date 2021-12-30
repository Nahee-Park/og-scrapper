import React from 'react';
import CardView, { contentsInterface } from './CardView';
import useSWR from 'swr';
import { client } from '../../lib/client';
import useContentsDatas from '../../hooks/useContentsDatas';
import styled from '@emotion/styled';

function Result() {
  const { isLoading, contentsData, setIsLoading } = useContentsDatas();
  React.useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);

  React.useEffect(() => {
    setIsLoading(false);
  }, [contentsData]);

  return (
    <>
      {isLoading ? (
        <Styled.loading>
          <div className="loading">로딩중이에요!</div>
        </Styled.loading>
      ) : (
        <CardView />
      )}
    </>
  );
}

export default Result;

const Styled = {
  loading: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading {
      margin-top: 1rem;
      color: white;
      font-size: 1rem;
      display: flex;
    }
  `,
};
