import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const BuyAction = () => {
  return (
    <div>
      <StyledButton>Buy now</StyledButton>
    </div>
  );
};

const StyledButton = styled(Button)`
  background-color: var(--green);
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 33px;
  text-transform: none;
  padding: 8px 16px;
  min-width: 100px;
  height: 42px;

  &:hover {
    background-color: var(--green);
    color: #000;
  }
`;
