import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';

export const NavList = () => {
  const list = [
    { name: 'Domains', href: '' },
    { name: 'Resources', href: '' },
  ];

  return (
    <Ul className="lg:m-0 mx-5 lg:w-full flex flex-col lg:flex-row items-left">
      {list.map((item) => (
        <Item key={item.name}>
          <Wrapper>
            {/* <Link to="">{item.name}</Link> */}
            {item.name} <KeyboardArrowDownIcon />
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
`;
