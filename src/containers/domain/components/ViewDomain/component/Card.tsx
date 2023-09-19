import { useState } from 'react';
import styled from '@emotion/styled';
import View1 from 'assets/view1.png';
import View2 from 'assets/view2.png';
import View3 from 'assets/view3.png';
import Cloud from 'assets/svg/cloud.svg';
import Price from 'assets/svg/price.svg';
import { IoIosArrowForward } from 'react-icons/io';

export const CardDomain = () => {
  const list = [
    { id: 1, image: View1, name: 'Jamalmusa.nft' },
    { id: 2, image: View2, name: 'Jamalmusa.meta' },
    { id: 3, image: View3, name: 'Jamalmusa.404' },
  ];

  return (
    <div className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center ">
      <div className="flex justify-between w-full text-white">
        <Title className="py-8 text-left text-2xl">Great Alternatives</Title>
        <Text className="flex items-center text-white">
          View all <IoIosArrowForward className="ml-3" />
        </Text>
      </div>
      <Ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {list.map((item, index) => (
          <div key={item.id}>
            <Item>
              <Text>
                <div className="relative flex items-center justify-center">
                  <img src={item.image} alt="" className="" />
                  <Title className="absolute h-40 text-lg lg:text-2xl md:text-2xl flex justify-center items-center text-white ">
                    {item.name}
                  </Title>
                </div>
                <div className="flex justify-center text-[#2CEF32] mt-4">
                  <img src={Cloud} alt="" className='mr-2'/> Quick buy
                </div>
                <div className="flex justify-between items-center w-full mb-2 bg-[#151515] rounded-lg p-4 mt-4">
                  <h3 className="text-white">
                    Price
                    <br />
                    <br />
                    25 SOL $20
                  </h3>
                  <img src={Price} alt="" />
                </div>
              </Text>
            </Item>
          </div>
        ))}
      </Ul>
    </div>
  );
};


const Title = styled.h1`
  font-weight: 700;
`;
const Text = styled.p``;


const Ul = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  color: var(--white);
  text-align: left;
  font-size: 16px;
  height: auto;
  width: auto;
  border: 1px solid #027906;
  padding: 20px;
  border-radius: 10px;
  background: #100f0f;
`;

