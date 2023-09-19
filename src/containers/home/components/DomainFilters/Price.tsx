import styled from '@emotion/styled';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Price = () => {
  return (
    <StyledButton>
      Price
      <KeyboardArrowDownIcon />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  justify-content: space-between;
  padding-inline: 20px;
  width: 155px;
  height: 56px;
  border-radius: 16px;
  background: #1b1b1b;
  color: #9ca3af;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: none;

  &:hover {
    background: #232222;
    color: #9ca3af;
  }
`;
