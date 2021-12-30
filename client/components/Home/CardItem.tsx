import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { mutate } from 'swr';
import { contentsInterface } from './CardView';
import { client } from '../../lib/client';
import useContentsDatas from '../../hooks/useContentsDatas';

interface contentItemInterface {
  contentItem: contentsInterface;
  id: number;
  //   setContentsData: Dispatch<SetStateAction<contentsInterface[] | undefined>>;
  //   contentsData: contentsInterface[];
}
function CardItem({ contentItem, id }: contentItemInterface) {
  const { contentsData, setContentsData } = useContentsDatas();
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget;
    const copyData = [...contentsData];
    copyData.splice(id, 1);
    setContentsData(copyData);
    await client
      .delete(`/delete/hard/${Number(target.id)}`)
      .then((response) => console.log('response', response))
      .catch((error) => {
        console.log('error', error);
        alert(`에러가 났어요ㅠ ${error}`);
      });

    mutate('/list');
  };

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.Button>
          <button
            onClick={(e) => {
              handleDelete(e);
            }}
            id={contentItem.id.toString(10)}
          >
            X
          </button>
        </Styled.Button>
        <Styled.ATag target="_blank" href={contentItem.url}>
          <img src={contentItem.imageUrl} alt="" />
          <span>
            <Styled.Title>{contentItem.title}</Styled.Title>
            <Styled.Bottom>
              <Styled.Description>{contentItem.description}</Styled.Description>
            </Styled.Bottom>
          </span>
        </Styled.ATag>
      </Styled.Container>
    </Styled.Root>
  );
}

export default CardItem;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(100, 101, 244, 0.35);
    border-radius: 15px;
    cursor: pointer;
    width: 100%;
    max-width: 156px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.1);
    &:hover {
      border: 1px solid #6465f4;
    }
    @media (max-width: 580px) {
      width: 95px;
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.5rem;
    }
  `,
  ATag: styled.a`
      display: flex;
      flex-direction: column;
      align-items: center;
      & > img {
      margin-bottom: 12px;
      border-radius: 15px;
      height: 100px;
      width: 126px;
      object-fit: cover;
      @media (max-width: 580px) {
        max-width: 68px;
        height: 60px;
      }
  `,
  Button: styled.div`
    width: 100%;
    width: 100%;
    text-align: right;
    button {
      z-index: 1000;
      background: transparent;
      cursor: pointer;
    }
  `,
  Title: styled.div`
    width: 135px;
    height: 27px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #656565;
    font-size: 0.875rem;
    font-weight: 700;
    @media (max-width: 580px) {
      width: 68px;
      font-size: 11px;
    }
  `,
  Bottom: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Description: styled.div`
    color: #949494;
    font-size: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    line-height: 0.8rem;
    height: 3.2rem;
    /* font-weight: 500; */
    @media (max-width: 580px) {
      font-size: 8px;
    }
  `,
};
