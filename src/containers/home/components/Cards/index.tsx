import styled from '@emotion/styled';
import Group from 'assets/svg/Group.svg';
import Vector from 'assets/svg/Vector.svg';
import Solnames from 'assets/svg/solnames.svg';
import Ftm from 'assets/svg/ftm.svg';
import Ava from 'assets/svg/ava.svg';

export const Cards = () => {
  const list = [
    { name: 'CNS', content: 'Concurdium Name Service', image: Group },
    { name: 'Names', content: 'MultiversX Name Service', image: Vector },
    { name: 'SolNames', content: 'Solana Name Service', image: Solnames },
    { name: 'FtmNames', content: 'Fantom Name Service', image: Ftm },
    { name: 'AvaxName', content: 'Avalanche Name Service', image: Ava },
  ];

  return (
    <div className="container mx-auto px-4 ">
      <Content>
        <Title className="py-8">We are building…</Title>
        <Ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {list.map((item, index) => (
            <div key={item.name}>
              <Item>
                <Text>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 mr-2"
                  />
                  {item.name}
                </Text>
                <Para>{item.content}</Para>
                {index < 3 ? (
                  <button className="btn" style={buttonStyle}>
                    View Live
                  </button>
                ) : (
                  <button className="btn" style={comingSoonStyle}>
                    Coming Soon
                  </button>
                )}
              </Item>
            </div>
          ))}
        </Ul>
      </Content>
    </div>
  );
};

const Wrapper = styled.div`
  width: 960px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  z-index: 1;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const buttonStyle = {
  backgroundColor: '#29c329',
  color: 'black',
  fontWeight: '600',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
};

const comingSoonStyle = {
  borderColor: '#E1B831',
  color: '#E1B831',
  padding: '10px 20px',
  backgroundColor: 'black',
  borderRadius: '20px',
};

const Ul = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  color: var(--white);
  text-align: left;
  font-size: 16px;
  height: auto;
  width: auto;
  border: 1px solid #464444;
  padding: 20px;
  border-radius: 10px;
  background: #1a1a1a;
`;

const Text = styled.h1`
  display: flex;
  align-items: center;
`;
const Para = styled.p`
  margin: 30px 0px;
`;
