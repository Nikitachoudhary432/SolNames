import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { UserAvatar } from './UserAvatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const address = '0G345Bv555555555558hU';

  const shortenAddress = (address: string) =>
    `${address.substring(0, 7)}...${address.substring(address.length - 3)}`;

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-left lg:items-center md:gap-2 lg:gap-11 w-full justify-end lg:m-0 mx-5">
        <span className="pl-2 ">Manage Domains</span>
        <div className="flex  flex-col lg:flex-row gap-5 lg:rounded-lg lg:border lg:border-solid lg:border-green-500 lg:text-green-500 lg:shadow-md	 p-2">
        <Link to="/profile" className='w-full'>
          <UserAvatar />
          </Link>
          <Address className="text-2xl lg:text-sm py-2 lg:py-1 border-b border-gray-500 lg:border-b-0">
            {shortenAddress(address)}
          </Address>
          <div className="hidden lg:block">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </>
  );
};

const Wrapper = styled(Button)`
  /* display: flex;
  gap: 10px;
  border-radius: 8px;
  border: 0.5px solid var(--green);
  color: var(--green);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 11px; */
`;

const Address = styled.p`
  color: var(--grey-grey-1, #efeee5);
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
