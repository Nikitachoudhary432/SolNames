import styled from '@emotion/styled';
import Cards from 'assets/cards.png';
import { Container } from 'postcss';

export const DomainCards = () => {
  const list = [
    {
      name: 'Memorisable',
      content:
        'Replacing lenghty hexadecimal wallet addresses with human-readable ones makes it easier to remember.',
    },
    {
      name: 'Immutable',
      content:
        'Bictory domain names are handled by smart contracts on the Blockchain and give holders unrestricted rights.',
    },
    {
      name: 'NFT Support',
      content:
        'Bictory domains are NFTs in their own rights and they give owners proof of domain ownership on the Blockchain.',
    },
    {
      name: 'Decentralized',
      content:
        'Bictory domains is built on top of a permissionless blockchain system, Concordium, solely owned and controlled by the Domain name owner.',
    },
    {
      name: 'Multiwallet Support',
      content:
        'Bictory domains are NFTs in their own rights and they give owners proof of domain ownership on the Blockchain.',
    },
    {
      name: 'Enhanced User Interaction',
      content:
        'Bictory is built on top of a permissionless blockchain system, Concordium, solely owned and controlled by the Domain name owner.',
    },
  ];

  return (
    <Wrapper className="px-5 container">
      <Content>
        <div className="pt-8 lg:pt-8 px-6 sm:px-16 lg:px-20 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
          <div className="text-center text-yellow-500 z-10 text-2xl ">
            Zero Worries About Getting the Wallet Address Wrong.
          </div>
          <p className=" text-center text-white text-2xl font-light m-6 px-84 md:px-16  ">
            Send and receive assets on the Blockchian Network without having to
            worry about copy-pasting the wrong address.
          </p>
        </div>
        <Ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-5 sm:gap-7 pt-10 sm:pt-14 ">
          {list.map((item, index) => (
            <Item key={item.name}>
              <Text>
                <img
                  src={Cards}
                  alt={item.name}
                  style={{ width: '35px', paddingRight: '10px' }}
                />
                {item.name}
              </Text>
              <Para>{item.content}</Para>
            </Item>
          ))}
        </Ul>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Span = styled.p`
  /* text-align: center;
  color: #e1b831;
  z-index: 1;
  font-size: 20px; */
`;

const Title = styled.p`
  text-align: center;
  color: white;
  font-size: 22px;
  font-weight: 100;
  margin: 30px;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  border: double 1.5px transparent;
  border-radius: 24px;
  background-image: linear-gradient(#060606, #060606),
    radial-gradient(circle at top left, #e1b831, #050505);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 30px 22px 0px 22px;
`;

const Text = styled.h1`
  display: flex;
  align-items: center;
  color: #e3e3e3;
`;

const Para = styled.p`
  margin: 30px 0px;
  color: #e3e3e3;
`;
