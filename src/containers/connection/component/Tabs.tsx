import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@emotion/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

export const ConnectionTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const isLargeScreen = useMediaQuery('(min-width: 980px)');

  return (
    <Wrapper className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center ">
      <Tabs value={value} onChange={handleChange}>
        <Tab value="1" label="Select wallet on Solana" className="tab-items"  />
        <Tab value="2" label="Choose token to connect" className="tab-items" />
        <Link to="/cart" className="text-white">
          <Tab value="3" label="Review item" className="tab-items text-white" />
        </Link>
      </Tabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .MuiTabs-root {
    .MuiTabs-flexContainer {
      justify-content: space-between;
    }

    button {
      color: #ffffff;
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
