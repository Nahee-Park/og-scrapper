import React from 'react'
import styled from '@emotion/styled';

function Header() {
    return (
        <Styled.header >
            <div className="text">HAVIT's Content Storage</div>
            <div className="subtext">해빗도리들의 컨텐츠 저장소</div>
        </Styled.header>
    )
}

export default Header

const Styled = {
    header: styled.div`
    margin-top:1rem;
    width:80%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text{
        font-size: 1rem;
        color: #FFFF;
    }
    .subtext{
        font-size: 0.5rem;
        color: #FFFF;
    }
    `,
}