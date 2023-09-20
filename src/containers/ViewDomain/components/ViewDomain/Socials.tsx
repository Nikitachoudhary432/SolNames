import { useState } from 'react';
import styled from '@emotion/styled';
import { TbTrash } from 'react-icons/tb';
import { RiAddBoxLine } from 'react-icons/ri';

export const Socials = () => {
  const List = [
    { name: 'Twitter', link: 'https://twitter.com/Jamesmusa', icons: TbTrash },
    { name: 'Facebook', link: 'Not set', icons: RiAddBoxLine },
    { name: 'Github', link: 'github.com/Jamesmusa', icons: TbTrash },
    { name: 'Description', link: 'Not set ', icons: RiAddBoxLine },
    { name: 'Email', link: 'Not set ', icons: RiAddBoxLine },
    { name: 'Avatar', link: 'Not set ', icons: RiAddBoxLine },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="p-4 px-3 md:px-8 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-left ">
      <Title className="text-lg sm:text-xl lg:text-2xl font-bold overflow-hidden">
        Socials
      </Title>
      <Text className="text-lg lg:text-xl py-2 lg:py-1 my-3 text-[#A3A3A3] overflow-hidden">
        Link your domain to your social media acounts.
      </Text>
      <div className="w-full">
        <Wrapper className="p-4 px-2 md:px-4 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-left ">
          <Title className=" text-md lg:text-xl md:text-lg my-4">
            Texts and Links
          </Title>
          <div className="flex py-5 w-full ">
            <div className="w-full">
              <Ul>
                {List.map((item) => (
                  <Item key={item.name} className="flex-row">
                    <Text>{item.name}</Text>
                    <Text className="flex flex-row justify-start items-start w-[50%] overflow-hidden">
                      {item.link}{' '}
                      {<item.icons className="text-2xl ml-2 text-[#2CEF32]" />}
                    </Text>
                  </Item>
                ))}
              </Ul>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  border: 1px solid #027906;
  border-radius: 20px;
  background-color: #020202;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Button = styled.button`
  background-color: var(--green);
  color: black;
  border-radius: 40px;
  font-weight: 600;
`;

const Text = styled.p`
  font-weight: 100;
`;

const Button3 = styled.button`
  background-color: var(--green);
  border-radius: 15px;
  color: black;
  padding: 10px;
  margin: 8px;
  font-weight: 700;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-inline-start: auto;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
`;
