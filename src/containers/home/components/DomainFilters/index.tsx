import styled from '@emotion/styled';
import { Search } from './Search';
import { Price } from './Price';

export const DomainFilters = () => {
  return (
    <Wrapper className="w-4/5 lg:w-4/6">
      <Search />
      {/* <Price /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
