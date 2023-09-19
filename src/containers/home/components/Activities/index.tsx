import styled from '@emotion/styled';
import { ActivitiesTitle } from './components/Title';
import { ActivitiesTabs } from './components/Tabs';
import { ActivitiesTable } from './components/Table';

export const Activities = () => {
  return (
    <Wrapper>
      <ActivitiesTitle />
      <ActivitiesTabs />
      <ActivitiesTable />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 21px 29px 43px 29px;
  background: rgba(7, 8, 7, 0.5);
  height: 601px;
  width: 397px;
`;
