import styled from '@emotion/styled';
import Price from 'assets/price.png';

export const DomainPrice = () => {
  const list = [
    {
      name: '2 letters/digits',
      price: '$100',
    },
    {
      name: '3 letters/digits',
      price: '$75',
    },
    {
      name: '4 letters/digits',
      price: '$50',
    },
    {
      name: '5 letters/digits',
      price: '$12',
    },
    {
      name: '6 letters/digits',
      price: '$8',
    },
    {
      name: '7+ letters/digits',
      price: '$5',
    },
  ];

  return (
    <Wrapper className='container'>
      <Content>
        <Span>Own Your Domain Name on Solana</Span>
        <Title>The Price List until 1st of October, 2023</Title>
        <Ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-10">
          {list.map((item) => (
            <li key={item.name}>
              <Item>
                <Text>{item.name}</Text>
                <P>
                  <Para>{item.price}</Para>/a year
                </P>
                <PriceImage
                  src={Price}
                  alt="Price"
                  className="absolute md:top-[-40px] md:right-[-44px] md:w-24 w-16 top-[-20px] right-[-34px] "
                />
              </Item>
            </li>
          ))}
        </Ul>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 960px; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Span = styled.p`
  text-align: center;
  color: #ffff;
  z-index: 1;
  font-size: 20px;
  margin: 10px;
`;

const Title = styled.p`
  text-align: center;
  color: #e1b831;
  font-size: 30px;
  font-weight: 100;
  margin: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 50px;
  margin-inline-start: auto; */
  margin: 50px 0px;
`;

const Item = styled.li`
  color: #e3e3e3;
  text-align: left;
  font-size: 16px;
  height: 220px;
  width: 250px;
  border: 1px solid #464444;
  padding: 20px;
  border-radius: 10px;
  background: #1a1a1a;
  position: relative;
`;

const Text = styled.h1`
  display: flex;
  align-items: center;
  color: #e3e3e3;
  justify-content: center;
`;

const Para = styled.h1`
  margin: 30px 0px;
  color: var(--green);
  font-size: 40px;
`;
const P = styled.p`
  margin: 30px 0px;
  color: #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PriceImage = styled.img`
  /* position: absolute;
  top: -40px;
  right: -44px;
  width: 90px; */
`;
