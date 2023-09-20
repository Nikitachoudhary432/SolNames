import { useState } from 'react';
import styled from '@emotion/styled';
import View1 from 'assets/view1.png';
import View2 from 'assets/view2.png';
import View3 from 'assets/view3.png';
import Cloud from 'assets/svg/cloud.svg';
import Price from 'assets/svg/price.svg';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const DomainDetails = () => {
  const list = [
    { id: 1, image: View1, name: 'Jamalmusa.solana' },
    { id: 2, image: View1, name: 'Jamalmusa.solana' },
    { id: 3, image: View1, name: 'Jamalmusa.solana' },
  ];

  return (
    <div className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center ">
      <div className="flex justify-between w-full text-white px-4">
        <Title className="py-6 text-left text-lg lg:text-2xl md:text-xl">
          My Active Domains
        </Title>
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
                  <Title className="absolute h-40 text-md lg:text-2xl md:text-xl flex justify-center items-center text-white ">
                    {item.name}
                  </Title>
                </div>
                <div className="flex justify-center items-center w-full mb-2 bg-[#151515] rounded-lg p-4 mt-4">
                  <Link to="/viewdomain">
                    <Button className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-60 md:w-48 text-xs md:text-sm lg:text-sm">
                      View Domain
                    </Button>
                  </Link>
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

const Button = styled.button`
  background-color: var(--green);
  color: black;
  border-radius: 10px;
  font-weight: 600;
`;
