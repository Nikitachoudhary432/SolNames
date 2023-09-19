import styled from '@emotion/styled';
import Group from 'assets/svg/Group.svg';
import Vector from 'assets/svg/Vector.svg';
import Solnames from 'assets/svg/solnames.svg';
import Ftm from 'assets/svg/ftm.svg';
import Ava from 'assets/svg/ava.svg';

export const Roadmap = () => {
  const list = [
    {
      id: 'Q1',
      name: 'Launch of Bictory Exclusive NFT Marketplace',
      content: [
        { text: 'Listing Physical and Digital Sports and Esports NFTs' },
      ],
    },
    {
      id: 'Q2',
      name: 'Launch of xName',
      data: '.MVX, .nft, .art, meta, game, 420, 404, etc',
      content: [
        { text: 'Integrations' },
        { text: 'Top dapps on MultiverX Ecosystem' },
        { text: 'Crossmint - Payment getaway.' },
      ],
    },
    {
      id: 'Q3',
      name: 'Launch of SolName',
      data: ' .Solana, .nft, .art, meta, game, 420, 404, etc',
      content: [
        {
          text: 'Integrations',
        },
        {
          text: 'Crossmint - Payment getaway.',
        },
        {
          text: 'Top dapps on MultiverX Ecosystem',
        },
      ],
    },
    {
      id: 'Q4',
      name: 'Launch of FtmName',
      data: 'Fantom, .art, .nft, .music, .meta, .game, .defi, .404 etc.',
      content: [
        {
          text: 'Integrations',
        },
        {
          text: 'Payment getaway.',
        },
        {
          text: 'Fantom Ecosystem',
        },
      ],
    },
  ];

  const list2 = [
    {
      id: 'Q1',
      content: [
        {
          name: 'Launch Decentralized and Encrypted email service with Bictory.Domains',
          data: '',
        },
      ],
    },
    {
      id: 'Q2',
      content: [
        {
          name: 'Launch of  DID (Decentralized Identification)',
          data: 'More domain extensions (.com, .org, .edu, .io, .org, .govt, .edu, .net, .co .id) to onboard organisations to onboard organisations, government org, communities, and schools on the decentralised web3 movement.',
        },
      ],
    },
    {
      id: 'Q3',
      content: [
        {
          name: 'Adding Rent Feature of domain and sub-domain.',
          data: '',
        },
      ],
    },
    {
      id: 'Q4',
      content: [
        {
          name: 'Decentralized ticketing system with Decentralized ID:',
          data: 'Utilizing a decentralized ticketing platform with decentralized ID, you can leverage your custom crypto domain to acquire tickets for various occasions, such as concerts, gatherings, reservations, and other events in the future.',
        },
        {
          name: 'Introducing chat functionality:',
          data: 'Digital Business Card Builder using .domain extensions. Build a decentralized website or online store with .domain extensions.',
        },
      ],
    },
  ];

  return (
    <Wrapper className="mb-24 p-5 container">
      <Content>
        <div className="pt-8 lg:pt-8 px-6 sm:px-16 lg:px-20 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
          <div className="text-center text-yellow-500 z-10 text-2xl">
            Our Roadmap
          </div>
          <p className="text-center text-white text-2xl font-light m-6 px-84 md:px-16">
            Our roadmap is a dynamic guide that outlines our vision for the
            future and demonstrates our commitment to continuously enhance our
            products and services.
          </p>
        </div>
        <div className="w-full  ">
          <Daate className="w-20 md:w-20 sm:w-20 ">2023</Daate>
        </div>
        <Ul className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-5 sm:gap-7 pt-10 sm:pt-5 h-auto ">
          {list.map((item, index) => (
            // <li key={item.id}>
            <Item key={item.id} index={index}>
              <Text>{item.id}</Text>
              <Para>{item.name}</Para>
              <Paras>{item.data}</Paras>
              <ul>
                {item.content.map((contentItem, contentIndex) => (
                  <li
                    className="flex items-center justify-start"
                    key={contentIndex}
                  >
                    <div className="p-1.5 mr-3 sm:mr-4 rounded-full bg-white"></div>
                    <div>{contentItem.text}</div>
                  </li>
                ))}
              </ul>
            </Item>
            // </li>
          ))}
        </Ul>
        <div className="w-full pt-32 md:pt-24 sm:pt-28 ">
          <Daate className="w-20 md:w-20 sm:w-20 ">2023</Daate>
        </div>
        <Ul className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-5 sm:gap-7 pt-10 sm:pt-5 h-auto">
          {list2.map((item, index) => (
            <Item key={item.id} index={index}>
              <Text>{item.id}</Text>
              <ul>
                {item.content.map((contentItem, contentIndex) => (
                  <li
                    className="flex items-center justify-start"
                    key={contentIndex}
                  >
                    <div>
                      <Para>{contentItem.name}</Para>
                      <Paras>{contentItem.data}</Paras>
                    </div>
                  </li>
                ))}
              </ul>
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

const Ul = styled.ul`
  list-style: none;
  /* display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px; */
`;

// const Item = styled.div<{ index: number }>`
//   color: var(--white);
//   text-align: left;
//   font-size: 16px;
//   width: 250px;
//   padding: 20px;
//   border-radius: 10px;
//   background: #1a1a1a;
//   transform: translateX(${(props) => props.index * 20}px);

const Item = styled.div<{ index: number }>`
  color: var(--white);
  text-align: left;
  font-size: 16px;
  /* width: 250px; */
  padding: 20px;
  border-radius: 10px;
  background: #1a1a1a;
  position: relative;

  transform: translateX(${(props) => props.index * 0}px);
  top: ${(props) => props.index * 40}px;
`;

const Text = styled.h1`
  display: flex;
  align-items: center;
  font-size: 22px;
`;

const Para = styled.p`
  margin: 10px 0;
  font-weight: 600;
  font-size: 17px;
`;

const Paras = styled.p`
  margin: 10px 0;
  color: #e1b831;
`;

const Daate = styled.h1`
  color: var(--white);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  height: auto;
  padding: 10px 0px;
  border: double 1.5px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#060606, #060606),
    radial-gradient(circle at top left, #e1b831, #050505);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;
