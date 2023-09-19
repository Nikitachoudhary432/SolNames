import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Detail } from './details';
import { Records } from './records';
import { Socials } from './Socials';

export function ViewDomain() {
  const { t } = useTranslation();

  return (
    <>
        <Detail />
        <Records/>
        <Socials/>
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
