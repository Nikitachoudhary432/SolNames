import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { ViewDomain } from './components/ViewDomain';


export function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper className=''>
          <ViewDomain />
      
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 30px;
  background: rgba(12, 12, 12, 0.5);
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  min-height: calc(100% - var(--header-height));
  padding: 30px 20px 20px 20px;
`;
