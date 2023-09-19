import styled from '@emotion/styled';
import Banner from 'assets/Banner.png';
import Icon from 'assets/svg/Icon.svg';
import Club from 'assets/svg/Club.svg';
import Clubs from 'assets/svg/Clubs.png';

export function First() {
  const list = [
    { name: '.Solana' },
    { name: '.Meta' },
    { name: '.Music' },
    { name: '.NFT' },
    { name: '.Web3' },
    { name: '.404' },
  ];

  const t1 = [
    { name: '3 letters/digits', price: '$75' },
    { name: '4 letters/digits', price: '$50' },
    { name: '5 letters/digits', price: '$12' },
    { name: '6 letters/digits', price: '$8' },
    { name: '7+ letters/digits', price: '$5' },
  ];

  return (
    <Wrapper className="bg-gray-600 md:bg-gray-800 lg:bg-gray-900 py-8 md:py-16 lg:py-24">
      <div className="relative md:w-full sm:w-full mx-auto text-center">
        <BackgroundImage
          src={Banner}
          alt=""
          className="h-[400px] max-h-full"
        />
        <Content className="px-4 sm:px-10 sm:top-0 sm:left-0 top-0 absolute flex flex-col md:flex-row justify-center items-center h-full">
          <img src={Icon} alt="" className="w-20 md:w-28 sm:w-18 mx-2" />

          <div className="flex flex-col justify-center mx-4 pl-4 lg:p-0">
            <Title className="text-xl sm:text-2xl lg:text-3xl font-bold ">
              SolNames(Solana Name Service)
            </Title>
            <Text className="text-sm sm:text-base lg:text-md my-2 text-[#9CA3AF]">
              For Metaverse, DeFi, Games, NFTs, Wallets, Websites, and Many
              More...
            </Text>
            <Ul className="md:flex gap-3">
              {list.map((item) => (
                <Item key={item.name}>{item.name}</Item>
              ))}
            </Ul>
          </div>

          <div className="lg:inline-flex hidden">
            <div className="relative text-center sm:top-12 mx-2">
              <div style={{ position: 'relative' }}>
                <BackgroundImage src={Club} alt="" className="px-2 " />
                <Content className="absolute bottom-8 left-1 p-3 flex-col w-fit">
                  <Title className="text-lg lg:text-xl">SolNames Price</Title>
                  <Text className="text-sm text-[#c86e6e] border-b-2 pb-2">
                    Current Price
                  </Text>
                  <Ul className="flex flex-col gap-0.5">
                    {t1.map((item) => (
                      <Items key={item.name}>
                        {item.name} {item.price}
                      </Items>
                    ))}
                  </Ul>
                </Content>
              </div>
            </div>

            <div className="relative text-center sm:top-6 mx-2">
              <div style={{ position: 'relative' }}>
                <BackgroundImage src={Clubs} alt="" className="px-2 " />
                <Content className="absolute bottom-12 left-1 p-3 flex-col w-fit">
                  <Title className="text-lg lg:text-xl">SolNames Price</Title>
                  <Text className="text-xs text-[#c86e6e] border-b-2 pb-2">
                    From the 15th of November
                  </Text>
                  <Ul className="flex flex-col gap-0.5">
                    {t1.map((item) => (
                      <Items key={item.name}>
                        {item.name} {item.price}
                      </Items>
                    ))}
                  </Ul>
                </Content>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background: rgba(12, 12, 12, 0.5);
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  min-height: calc(100% - var(--header-height));
  padding: 30px 10px;
  margin-top: 50px;
`;

const BackgroundImage = styled.img``;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: left;
`;

const Text = styled.p`
  text-align: left;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: start;
  text-align: center;
  width: 100%;
  margin: 10px 0px;
  margin-inline-start: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  color: var(--white);
  text-align: left;
  font-family: Inter;
  font-size: 12px;
  border: 1px solid #464444;
  padding: 10px 20px;
  border-radius: 20px;
  background: linear-gradient(
      0deg,
      rgba(40, 40, 41, 0.2),
      rgba(95, 95, 99, 0.2)
    ),
    linear-gradient(
      98.49deg,
      rgba(59, 57, 57, 0.22) 2.49%,
      rgba(255, 255, 255, 0) 102.37%
    );
`;

const Items = styled.li`
  font-size: 16px;
`;
