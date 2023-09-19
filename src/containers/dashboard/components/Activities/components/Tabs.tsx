import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@emotion/styled';

export const ActivitiesTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Wrapper className="p-6 sm:w-full w-full lg:w-full">
      <Tabs value={value} onChange={handleChange}>
        <Tab value="1" label="All" />
        <Tab value="2" label="Listed" />
        <Tab value="3" label="Sold" />
        <Tab value="4" label="Registered" />
      </Tabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-block: 25px;
  border-bottom: 1px solid rgba(41, 62, 72, 0.45);

  .MuiTabs-root {
    .MuiTabs-flexContainer {
      justify-content: space-between;
    }

    button {
      color: #808f93;
      text-align: center;
      font-family: Plus Jakarta Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;
      text-transform: none;
      min-width: unset;
      min-height: unset;
      padding: 6px 8px;
      border-radius: 4px;
    }

    button.Mui-selected {
      color: var(--green);
    }

    .MuiTabs-indicator {
      background-color: transparent;
    }
  }
`;
