import { useState } from 'react';
import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavList = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const list = [
    {
      name: 'Domains',
      other: [
        { name: 'Buy Domain', path: '/domain' },
        { name: 'View Domain', path: '/cart' },
      ],
    },
    { name: 'Resources', href: '' },
  ];

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <Ul className="lg:m-0 mx-5 lg:w-full flex flex-col-reverse lg:flex-row items-left">
      {list.map((item) => (
        <Item key={item.name}>
          <Wrapper>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              onClick={toggleDropdown}
            >
              {item.name} <KeyboardArrowDownIcon />
            </div>
            {openDropdown && (
              <Dropdown className="rounded-b-lg rounded-tl-lg">
                {item?.other?.map((subItem) => (
                  <DropdownItem key={subItem.name}>
                    <Link to={subItem.path}>{subItem.name}</Link>
                  </DropdownItem>
                ))}
              </Dropdown>
            )}
          </Wrapper>
        </Item>
      ))}
    </Ul>
  );
};

const Wrapper = styled(Typography)`
  display: flex;
  gap: 10px;
  color: white;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 10px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: -30px;
  background-color: black;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
  border-top: none;
`;

const DropdownItem = styled.div`
  padding: 10px;
  width: 150px;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  width: 100%;

  // margin-inline-start: auto;
`;

const Item = styled.li`
  color: var(--white);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  position: relative;
`;
