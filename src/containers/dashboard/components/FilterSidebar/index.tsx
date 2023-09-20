import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Button,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IoOptionsSharp } from 'react-icons/io5';
import { PiArrowsHorizontalBold } from 'react-icons/pi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import './style.css';

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
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleCheckbox = (itemName: string) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  const toggleItems = () => {
    setShowItems((prevShowItems) => !prevShowItems);
    setBackgroundColor((prevBackgroundColor) =>
      prevBackgroundColor === 'transparent' ? 'black' : 'transparent'
    );
  };

  return (
    <div className="h-100vh">
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        style={{
          width: isSmallScreen ? '50px' : '200px',
          flexShrink: 0,
          backgroundColor: backgroundColor,
        }}
      >
        <div className="flex flex-row-reverse mt-11">
          <ArrowRightButton onClick={toggleItems}>
            <KeyboardArrowRightIcon />
          </ArrowRightButton>

          {!isSmallScreen && (
            <div className="flex justify-center items-center w-fit">
              <IoOptionsSharp size={30} className="text-white" />
              {!showItems && <h3 className="pl-2 text-white">Filter Menu</h3>}
            </div>
          )}
        </div>

        {!showItems && (
          <List>
            {NavLinks.map((item) => (
              <ListItem key={item.name}>
                <ListItemText primary={item.name} />
                <ListItemIcon style={{ color: 'tranparent' }}>
                  <Checkbox
                    checked={!!checkboxes[item.name]}
                    onChange={() => toggleCheckbox(item.name)}
                  />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        )}
        {!showItems && (
          <List>
            <div className="flex justify-center items-center w-fit my-5">
              <PiArrowsHorizontalBold size={30} className="text-white" />
              <h3 className="pl-2 text-white">Length</h3>
            </div>
            {Digit.map((item) => (
              <ListItem key={item.name}>
                <ListItemText primary={item.name} />
                <ListItemIcon>
                  <Checkbox
                    checked={!!checkboxes[item.name]}
                    onChange={() => toggleCheckbox(item.name)}
                  />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        )}

        {!showItems && (
          <List>
            <div className="flex justify-center items-center w-fit my-5">
              <h3 className="pl-2 text-white">Price (SOL)</h3>
            </div>
            <div className="flex items-center">
              {' '}
              <Item>Min</Item> to <Item>Max</Item>
            </div>
          </List>
        )}

        {!showItems && (
          <List>
            <div className="flex justify-center items-center w-fit my-5">
              <AiOutlineClockCircle size={30} className="text-white" />
              <h3 className="pl-2 text-white">Expiration</h3>
            </div>
            {Year.map((item) => (
              <ListItem key={item.name}>
                <ListItemText primary={item.name} />
                <ListItemIcon>
                  <Checkbox
                    checked={!!checkboxes[item.name]}
                    onChange={() => toggleCheckbox(item.name)}
                  />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
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
