import styled from '@emotion/styled';
import Rectangle from 'assets/Rectangle.png';

export const Services = () => {
  const list = [
    { name: '.Solana' },
    { name: '.Meta' },
    { name: '.Music' },
    { name: '.NFT' },
    { name: '.Web3' },
    { name: '.404' },
  ];

  return (
    <div className=" relative md:w-full sm:w-full mx-auto text-center">
      <BackgroundImage
        src={Rectangle}
        alt=""
        className="sm:inline-flex p-6 hidden"
      />
      <Content className=" px-4 sm:px-10 sm:top-0 sm:left-0 sm:absolute">
        <Title>
          SolNames <Span>(Solana Name Service)</Span>
        </Title>
        <Text>
          For Metaverse, DeFi, Games, NFTs, Wallets, Websites, and Many More...
        </Text>
        <Ul className="md:flex">
          {list.map((item) => (
            <Item key={item.name}>{item.name}</Item>
          ))}
        </Ul>
      </Content>
    </div>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img``;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  z-index: 1;
  background: #ffb703;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 30px;
`;

const Span = styled.span`
  background: linear-gradient(90deg, #f3d68d 0%, #ffb703 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 100;
  padding: 10px;
  z-index: 1;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 20px;
  margin: 50px 0px;
  margin-inline-start: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  color: var(--white);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  border: 1px solid #464444;
  padding: 10px 20px;
  border-radius: 20px;
  background: linear-gradient(
      0deg,
      rgba(95, 95, 99, 0.2),
      rgba(95, 95, 99, 0.2)
    ),
    linear-gradient(
      98.49deg,
      rgba(255, 255, 255, 0.22) 2.49%,
      rgba(255, 255, 255, 0) 102.37%
    );

  /* @media (max-width: 768px) {
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
  } */
`;
