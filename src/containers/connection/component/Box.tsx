import { useState } from 'react';
import styled from '@emotion/styled';
import Images from 'assets/svg/Images.svg';
import { Link } from 'react-router-dom';

export const ConnectionBox = () => {
  return (
    <Wrapper className="p-10 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center ">
      <div className="grid lg:gap-20 gap-5 lg:grid-cols-2 ">
        <div className="w-full flex flex-col justify-center">
          <Title className="my-4 text-2xl ">Select a wallet on Solana</Title>
            <div className="flex justify-around border-2 border-gray-800 rounded-full p-3 px-5 my-5 w-fit">
              <img src={Images} className="mr-5" />
              <h3>Phantom</h3>
            </div>
        </div>
        <Wrappers className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center ">
          <div className="w-full">
            <Text className=" border-b-2 border-gray-800 pb-7 mb-3 txt-lg">
              Order Summary
            </Text>
            <div className="flex justify-between w-full p-2 ">
              <h3 className="text-[#A6A6A6] text-sm">Subtotal</h3>
              <h3>25</h3>
            </div>
            <div className="flex justify-between w-full p-2 border-b-2 border-gray-800">
              <h3 className="text-[#A6A6A6] text-sm">Gas toll</h3>
              <h3>0.07 SOL</h3>
            </div>
          </div>
          <div className="flex justify-between  items-center w-full p-2 mb-2">
            <h3 className="text-[#A6A6A6] text-sm">Total</h3>
            <h3>
              25 USDC
              <br />
              0.07 SOL
            </h3>
          </div>
          <Button>Check Out</Button>
        </Wrappers>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #027906;
  border-radius: 20px;
  background-color: #020202;
`;
const Wrappers = styled.div`
  border-radius: 20px;
  background-color: #171717;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  color: inherit;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: currentColor;
  }
`;

const Title = styled.h1`
  font-weight: 700;
`;
const Text = styled.p`
  color: #ffffff;
`;
const Button = styled.button`
  background-color: #027906;
  width: 100%;
  color: black;
  border-radius: 20px;
  padding: 10px;
`;
