import { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { stackColor } from '../helpers/styles/colors';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 100px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  ${css`
    background-color: ${stackColor.darkBlue};
  `}
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
      <Logo>Bloget</Logo>
    </Wrapper>
  );
};
