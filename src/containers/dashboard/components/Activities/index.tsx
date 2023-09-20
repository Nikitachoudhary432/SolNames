import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ActivitiesTitle } from './components/Title';
import { ActivitiesTabs } from './components/Tabs';
import { ActivitiesTable } from './components/Table';

export const Activities = () => {
  const [showItems, setShowItems] = useState(true);

  const toggleItems = () => {
    setShowItems((prevShowItems) => !prevShowItems);
  };

  return (
    <Wrapper>
      <ActivitiesTitle showItems={showItems} toggleItems={toggleItems} />
      {showItems && <ActivitiesTabs />}
      {showItems && <ActivitiesTable />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 15px;
  background: rgba(19, 21, 19, 0.5);
  height: auto;
  width: auto;
`;
