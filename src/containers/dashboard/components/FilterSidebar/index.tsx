import React, { useState } from 'react';
import styled from '@emotion/styled';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IoOptionsSharp } from 'react-icons/io5';
import { PiArrowsHorizontalBold } from 'react-icons/pi';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';

const NavLinks = [
  {
    name: 'Buy Now',
  },
  {
    name: 'Taken',
  },
  {
    name: 'Available',
  },
];

const Digit = [
  { name: ' 2 digit' },
  { name: ' 3 digit' },
  { name: ' 4 digit' },
  { name: ' 5 digit' },
  { name: ' 6 digit' },
  { name: ' 7+ digit' },
];

const Year = [
  { name: ' < 3 Months' },
  { name: ' 1 Year' },
  { name: ' 2 Year' },
  { name: ' 3 Year' },
];

export function Sidebar() {
  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({});
  const [showItems, setShowItems] = useState(true);

  const toggleCheckbox = (itemName: string) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  const toggleItems = () => {
    setShowItems((prevShowItems) => !prevShowItems);
  };

  const isSmallScreen = window.innerWidth < 768;

  const sidebarStyle = {
    position: isSmallScreen ? 'absolute' : 'relative',
    left: '0',
    marginTop: '14px',
    backgroundColor: 'transparent',
  };

  return (
    <div className="h-[100vh]">
      <SideNav style={sidebarStyle}>
        <div className="flex flex-row-reverse ">
          <ArrowRightButton onClick={toggleItems}>
            <KeyboardArrowRightIcon />
          </ArrowRightButton>

          <div className="flex justify-center items-center w-fit ">
            <IoOptionsSharp size={30} className="text-white" />
            <>
              {!showItems && <h3 className="pl-2 text-white">Filter Menu</h3>}
            </>
          </div>
        </div>

        {!showItems && (
          <SideNav.Nav>
            {NavLinks.map((item) => (
              <NavItem
                key={item.name}
                eventKey={item.name}
                //   onClick={() => handleClick(item)}
              >
                <NavText
                  style={{ color: 'white' }}
                  className="flex justify-between items-center"
                >
                  {item.name}
                </NavText>
                <div className="checkbox text-end">
                  <input
                    type="checkbox"
                    checked={!!checkboxes[item.name]}
                    onChange={() => toggleCheckbox(item.name)}
                  />
                </div>
              </NavItem>
            ))}
          </SideNav.Nav>
        )}

        {!showItems && (
          <SideNav.Nav>
            <div className="flex justify-center items-center w-fit my-5">
              <PiArrowsHorizontalBold size={30} className="text-white" />
              <>
                <h3 className="pl-2 text-white">Length</h3>
              </>
            </div>
            {Digit.map((item) => (
              <NavItem key={item.name} eventKey={item.name}>
                <NavText style={{ color: 'white' }}>{item.name}</NavText>
                <div className="checkbox text-end">
                  <input
                    type="checkbox"
                    checked={!!checkboxes[item.name]}
                    onChange={() => toggleCheckbox(item.name)}
                  />
                </div>
              </NavItem>
            ))}
          </SideNav.Nav>
        )}
        {!showItems && (
          <SideNav.Nav>
            <div className="flex justify-center items-center w-fit my-5">
              <>
                <h3 className="pl-2 text-white">Price (SOL)</h3>
              </>
            </div>
            <div className="flex items-center">
              {' '}
              <Item>Min</Item> to <Item>Max</Item>
            </div>
          </SideNav.Nav>
        )}
        {!showItems && (
          <SideNav.Nav>
            <div className="flex justify-center items-center w-fit my-5">
              <AiOutlineClockCircle size={30} className="text-white" />
              <>
                <h3 className="pl-2 text-white">Expiration</h3>
              </>
            </div>
            {Year.map((item) => (
              <NavItem
                key={item.name}
                eventKey={item.name}
              >
                <NavText style={{ color: 'white' }}>{item.name}</NavText>
                <div className="checkbox text-end">
                  <input
                    type="checkbox"
                    checked={!!checkboxes[item.name]}
                    onChange={() => toggleCheckbox(item.name)}
                  />
                </div>
              </NavItem>
            ))}
          </SideNav.Nav>
        )}
      </SideNav>
    </div>
  );
}

const Item = styled.li`
  color: var(--white);
  text-align: left;
  font-family: Inter;
  font-size: 16px;
  border: 1px solid #464444;
  padding: 10px 20px;
  border-radius: 20px;
  background: linear-gradient(
      0deg,
      rgba(95, 95, 99, 0.2),
      rgba(95, 95, 99, 0.2)
    ),
    linear-gradient(
      98.49deg,
      rgba(255, 255, 255, 0.22) 2.49%,
      rgba(255, 255, 255, 0) 102.37%
    );
`;

const ArrowRightButton = styled(Button)`
  color: var(--green);
  background-color: #202320bf;
`;
