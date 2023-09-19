import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { UserInfo } from './components/UserInfo';

export function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper className="mt-24 lg:mt-28 mx-6 sm:mx-16 lg:mx-20">
        <UserInfo />
      
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  /* position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  min-height: calc(100% - var(--header-height));
  border: 1px solid #027906;
  border-radius: 20px;
  background-color: #020202; */
`;
