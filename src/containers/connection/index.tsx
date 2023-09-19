import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ConnectionTabs } from './component/Tabs';
import { ConnectionBox } from './component/Box';

export const LandingPage = () => {
  return (
    // <Wrapper className="mt-28 lg:mt-32 mx-6 sm:mx-16 lg:mx-20">
    <Wrapper className="mt-20 lg:mt-24 mx-6 sm:mx-16 lg:mx-20">
      <ConnectionTabs />
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
  /* min-height: calc(100% - var(--header-height)); */
  padding: 30px 20px 20px 20px;
`;
