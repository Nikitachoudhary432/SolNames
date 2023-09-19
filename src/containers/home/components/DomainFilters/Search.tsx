import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <Box className="p-4 my-5 md:p-5 lg:p-6">
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
  // height: 70px;
  width: 100%;
  color: #9ca3af;
  border: 1px solid rgba(35, 35, 35, 1);
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
