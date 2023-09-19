import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Activities } from './components/Activities';
import { Background } from './components/Background';
import { DomainGrid } from './components/DomainGrid';
import { DomainFilters } from './components/DomainFilters';
import { DomainPlatform } from './components/DomainPlatform';
import { Services } from './components/Services';
import { Cards } from './components/Cards';
import { DomainCards } from './components/DomainCards';
import { DomainPrice } from './components/DomainPrice';
import { DomainQuestions } from './components/DomainQuestions';
import { DomainForm } from './components/DomainForm';
import { Footer } from './components/Footer';
import { Roadmap } from './components/Roadmap';

export function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <Text className="pt-48 lg:pt-52 px-6 sm:px-16 lg:px-20 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
          {' '}
          Receive Crypto Assets across
          <br />
          chains using your Domain Name. {' '}
        </Text>
        <DomainFilters />
        <DomainGrid />
        <DomainPlatform />
        <Services />
        <Cards />
        <DomainCards />
        <DomainPrice />
        <Roadmap />
        <DomainQuestions />
        <DomainForm />
        <Footer />

        <Background />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: rgba(12, 12, 12, 0.5);
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  min-height: calc(100% - var(--header-height));
  // padding: 80px 20px 20px 20px;
`;

const MiddleSection = styled.section`
  display: grid;
  gap: 50px;
`;

const Text = styled.h1`
  // padding: 40px;
  // font-size: 40px;
  text-align: center;
`;
