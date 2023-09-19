import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Activities } from './components/Activities';
import { Background } from './components/Background';
import { DomainGrid } from './components/DomainGrid';
import { DomainFilters } from './components/DomainFilters';
import { First } from './components/FirstImage';
import { Sidebar } from './components/FilterSidebar';

export function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <First />
      <Wrapper>
        <Sidebar />
        <ContentContainer>
          <MiddleSection>
            <DomainFilters />
            <DomainGrid />
          </MiddleSection>

          <Activities />
        </ContentContainer>

        <Background />
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
  /* margin-top: 50px; */
`;

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const MiddleSection = styled.section`
  display: grid;
  gap: 50px;

  @media (max-width: 768px) {
    /* Apply relative positioning on small screens */
    position: relative;
    width: 100%;
    margin-left: 20px;
  }

  @media (min-width: 769px) {
    /* Apply absolute positioning on larger screens */
  }
`;
