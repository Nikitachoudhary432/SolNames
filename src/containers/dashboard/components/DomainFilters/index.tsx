import styled from '@emotion/styled';
import { Search } from './Search';
import { Price } from './Price';

export const DomainFilters = () => {
  return (
    <Wrapper>
      <Search />
      <Price />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
