import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SearchDomain } from './component/SearchDomain';
import { ConnectionBox } from './component/Box';

export const LandingPage = () => {
  return (
    <Wrapper className="mt-20 lg:mt-24 mx-6 sm:mx-16 lg:mx-20">
      {/* <SearchDomain /> */}
      <ConnectionBox />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background: rgba(12, 12, 12, 0.5);
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  min-height: calc(100% - var(--header-height));
  padding: 25px 20px 20px 20px;
`;
