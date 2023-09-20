import React, { useState } from 'react';
import styled from '@emotion/styled';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CompareArrow } from '@/assets/CompareArrow';
import { Button } from '@mui/material';

export const ActivitiesTitle = ({ showItems, toggleItems }: any) => {
  return (
    <Wrapper>
      <ArrowRightButton onClick={toggleItems}>
        <KeyboardArrowRightIcon />
      </ArrowRightButton>

      <Button>
        <CompareArrow color="#D9D9D9" />
      </Button>

      {showItems && <Text>Activity</Text>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: unset;
  }
`;

const Text = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ArrowRightButton = styled(Button)`
  color: var(--green);
  background-color: #202320bf;
`;
