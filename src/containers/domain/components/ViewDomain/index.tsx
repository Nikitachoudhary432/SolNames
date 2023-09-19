import styled from '@emotion/styled';
import { SearchDomain } from './component/SearchDomain';
import { CardDomain } from './component/Card';

export const ViewDomain = () => {
  return (
    <Wrapper className="mt-28 lg:mt-32 mx-6 sm:mx-16 lg:mx-20">
      <SearchDomain />
      <CardDomain/>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
