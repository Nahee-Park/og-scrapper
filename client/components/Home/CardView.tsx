import React, { useState, useEffect } from 'react';
import { client } from '../../lib/client';
import styled from '@emotion/styled';
import useSWR from 'swr';
import CardItem from './CardItem';
import useContentsDatas from '../../hooks/useContentsDatas';

export interface contentsInterface {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

function CardView() {
  const { contentsData, setContentsData, setIsLoading } = useContentsDatas();

  const { data, error } = useSWR<{ data: { data: { contents: contentsInterface[] } } }>(
    '/list',
    client.get,
  );
  useEffect(() => {
    setContentsData(data?.data?.data?.contents);
  }, [data]);

  return (
    <>
      {contentsData?.length === 0 ? (
        <Styled.EmptyCard>
          <div className="message">공유하고 싶은 컨텐츠 링크를 입력해주세요!</div>
        </Styled.EmptyCard>
      ) : (
        <Styled.Card>
          {contentsData?.map((item, idx) => {
            return <CardItem contentItem={item} id={idx} />;
          })}
        </Styled.Card>
      )}
    </>
  );
}

export default CardView;

const Styled = {
  Card: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 165px);
    justify-content: center;
    column-gap: 25px;
    margin-top: 1.5rem;
    /* margin-left: 1.5rem; */
    width: 100%;
    row-gap: 25px;
    @media (max-width: 580px) {
      grid-template-columns: repeat(auto-fill, 92px);
      column-gap: 16px;
      /* margin: 53px 12px; */
      row-gap: 16px;
    }
  `,
  EmptyCard: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 380px;
    .message {
      color: #fff;
      font-family: Poppins;
      font-size: 1.5rem;
      font-weight: 600;
      font-style: normal;
      @media (max-width: 580px) {
        font-size: 1rem;
      }
    }
  `,
};
