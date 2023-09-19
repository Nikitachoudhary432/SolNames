import styled from '@emotion/styled';
import Vector from 'assets/svg/Vector.svg';

export const DomainPlatform = () => {
  return (
    <Wrapper className="md:w-3/4 sm:w-full mx-auto">
      <Text className="text-xl md:text-2xl sm:text-lg md:py-8 sm:py-4 text-center text-yellow-500">
        Integrated Platforms
      </Text>
      <GridContainer className="md:flex  sm:divide-x sm:flex md:space-x-4 sm:space-y-4">
        <Grid
          id="gridW"
          className="flex items-center justify-center w-full py-2 text-xl md:text-3xl sm:text-xl text-center  "
        >
          <img src={Vector} alt="Wallet" className="mr-2" />
          Wallet
        </Grid>
        <Grid
          id="gridW"
          className="flex items-center justify-center w-full py-2 text-xl md:text-3xl sm:text-xl text-center border-r-0 border-white md:border-r-2 sm:border-r-2 m-0"
        >
          <img src={Vector} alt="Portal" className="mr-2" />
          Portal
        </Grid>
        <Grid
          id="gridW"
          className="flex items-center justify-center w-full py-2 text-xl md:text-3xl sm:text-xl text-center border-r-0 border-white md:border-r-2 sm:border-r-0 m-0"
          style={{ borderRight: 'none' }}
        >
          <img src={Vector} alt="Multivers" className="mr-2" />
          Multivers
        </Grid>
      </GridContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 100%; */
`;

const Text = styled.h4`
  /* padding: 40px;
  text-align: center;
  color: #f4ba41; */
`;
const GridContainer = styled.div`
  /* display: flex;
  align-items: stretch; */
`;

const Grid = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  /* font-size: 30px; */
  /* border-right: 1px solid #ffffff; */
`;
