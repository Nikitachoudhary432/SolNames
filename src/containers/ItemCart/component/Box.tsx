import { useState } from 'react';
import styled from '@emotion/styled';
import Frame from 'assets/svg/Frame.svg';
import { RxCross2 } from 'react-icons/rx';
import { PurchesModal } from './PurchesModal';

export const ConnectionBox = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <Wrapper className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center ">
      <div className="lg:py-3 py-2 pl-5 pr-2 flex bg-[#212121] border border-black items-center rounded-full w-full">
        <Input placeholder="Jamesyy" />
        <Buttons className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-20 sm:w-48 text-xs md:text-sm lg:text-sm">
          Search domain
        </Buttons>
      </div>
      <div className="flex justify-between items-center w-full">
        <Title className="text-2xl my-5 ">Your cart</Title>
        <Text className="text-[#A6A6A6]">Empty cart</Text>
      </div>
      <div className="grid lg:gap-20 gap-5 lg:grid-cols-3 mt-8 w-full">
        <div className="w-full col-span-2">
          <div className="flex justify-between items-center border-b-2 border-gray-900 pb-4">
            <img src={Frame} alt="" />
            <div>
              <Title>Jamalmusa.solana</Title>
              <Text className="text-[#A6A6A6]">Storage 10KB</Text>
            </div>
            <Price>25 SOL</Price>
            <RxCross2 className="bg-[#292828] w-7 h-7 p-2 rounded-3xl" />
          </div>
          <div className="flex justify-between items-center border-b-2 border-gray-900 pb-4">
            <img src={Frame} alt="" />
            <div>
              <Title>Jamalmusa.solana</Title>
              <Text className="text-[#A6A6A6]">Storage 10KB</Text>
            </div>
            <Price>25 SOL</Price>
            <RxCross2 className="bg-[#292828] w-7 h-7 p-2 rounded-3xl" />
          </div>
          {/* <Button className="w-[50%] mt-10">Purches Now</Button> */}
          <div className="mt-14">
            <Button
              className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-60 md:w-48 text-xs md:text-sm lg:text-sm"
              onClick={openModal}
            >
              Purchase Now
            </Button>
            {modalIsOpen && <PurchesModal modalIsOpen={modalIsOpen} />}
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
          <Button className="w-full">Check Out</Button>
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
const Text = styled.p``;
const Button = styled.button`
  background-color: var(--green);
  /* width: 100%; */
  color: black;
  border-radius: 20px;
  padding: 10px;
  font-weight: 600;
`;

const Buttons = styled.button`
  background-color: var(--green);
  color: black;
  border-radius: 40px;
  font-weight: 600;
`;
const Price = styled.h3``;
