import { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { stackColor, breakpointWidth } from '../helpers/_variables';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  ${css`
    background-color: ${stackColor.darkBlue};
  `}
`;

const CenterWrapper = styled.div`
  width: 1000px;

  @media (max-width: ${breakpointWidth.tablet}) {
    width: 100%;
    padding-left: 70px;
  }
`;

const Logo = styled.div`
  ${css`
    font-size: 1.5rem;
    color: ${stackColor.white};
  `}
`;

export const Header: FC = () => {
  return (
    <Wrapper>
      <CenterWrapper>
        <Logo>Bloget</Logo>
      </CenterWrapper>
    </Wrapper>
  );
};
