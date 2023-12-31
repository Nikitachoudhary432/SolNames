import { useState } from 'react';
import styled from '@emotion/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { UserForm } from '../../components/UserForm';
import { SubDomain } from '../../components/SubDomain';
import { DomainDetails } from '../../components/DomainDetail';

export const UserInfo = () => {
  const address =
    'MyAddress: erd1u3f5d8hg3gmyhgj5c6z66s52zxxezk78jzhl03asuy68hmj3z76s3hrstcCopy';

  const shortenAddress = (address: string) =>
    `${address.substring(0, 7)}...${address.substring(address.length - 3)}`;

  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Wrapper className="p-4 px-8 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-left ">
      <div className="flex flex-col lg:flex-row items-center gap-5  p-2 w-full">
        <div className="overflow-hidden w-32 h-32 lg:w-16 lg:h-16 rounded-full ">
          <Img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="user"
          />
        </div>
        <div className="sm:w-full w-full lg:w-full px-3 font-semibold tracking-wide">
          <Title className="text-xl sm:text-2xl lg:text-3xl font-bold overflow-hidden">
            Hardgy.Solnames
          </Title>
          <Address className="text-xl lg:text-sm py-2 lg:py-1 text-[#A3A3A3] overflow-hidden">
            {address}
          </Address>
        </div>
      </div>
      <div className="flex justify-between items-center sm:w-full w-full lg:w-full text-white my-14">
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ backgroundColor: '#1D1D1D', borderRadius: '8px' }}
        >
          <Tab value="1" label="Profile" className="tab-item"/>
          <Tab value="2" label="Subdomains" className="tab-item"/>
          <Tab value="3" label="Domain Details" className="tab-item"/>
        </Tabs>
      </div>
      {value === '1' && <UserForm />}
      {value === '2' && <SubDomain />}
      {value === '3' && <DomainDetails />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  min-height: calc(100% - var(--header-height));
  border: 1px solid #027906;
  border-radius: 20px;
  background-color: #020202;

  .MuiTabs-root {
    .MuiTabs-flexContainer {
      justify-content: space-between;
      margin: 10px;
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
      padding: 6px 12px;
      border-radius: 4px;
    }

    button.Mui-selected {
      background-color: var(--green);
      color: #020202;
    }

    .MuiTabs-indicator {
      background-color: transparent;
    }
  }
`;

const Title = styled.h1`
  font-weight: 500;
  /* font-size: 30px; */
  /* padding: 5px; */
`;

const Img = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
`;

const Text = styled.p``;

const Address = styled.p`
  color: var(--grey-grey-1, #a3a3a3);
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
