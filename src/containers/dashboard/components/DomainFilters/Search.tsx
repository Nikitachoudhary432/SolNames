import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <Box>
      <Input placeholder="Search domain name" />
      <SearchIcon />
    </Box>
  );
};

const Box = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #1b1b1b;
  height: 56px;
  width: 100%;
  padding-inline: 20px;
  color: #9ca3af;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  color: inherit;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: currentColor;
  }
`;
