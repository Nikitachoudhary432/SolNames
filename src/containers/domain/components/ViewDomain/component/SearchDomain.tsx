import { useState } from 'react';
import styled from '@emotion/styled';
import View1 from 'assets/view1.png';
import Price from 'assets/svg/price.svg';
import { BsArrowUpRight } from 'react-icons/bs';
import { BuyModal } from '../../BuyModal';
import Modal from '@mui/material/Modal';
import { GiPadlock } from 'react-icons/gi';
import { PiWarningCircleBold } from 'react-icons/pi';
import Icon from 'assets/svg/Icon.svg';
import { Link } from 'react-router-dom';

export const SearchDomain = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Wrapper className="p-6 sm:full w-full lg:w-full flex flex-col justify-evenly items-center ">
      <div className="lg:py-3 py-2 px-5 flex bg-[#212121] border border-black items-center rounded-full w-full">
        <Input placeholder="Jamesyy" />
        <Button className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-60 md:w-48 text-xs md:text-sm lg:text-sm">
          Search domain
        </Button>
      </div>
      <div className="grid lg:gap-20 gap-5 lg:grid-cols-2 mt-12">
        <Wrapper className="p-6 sm:full w-full lg:w-full flex flex-col justify-evenly items-center ">
          <img src={View1} alt="" className="relative" />
          <Title className="absolute h-40 text-lg lg:text-3xl md:text-2xl ">
            Jamalmusa.solana
          </Title>
          <div className="flex justify-between items-center w-full mb-2 bg-[#151515] rounded-lg p-4 mt-6">
            <h3>
              Price
              <br />
              <br />
              <Span> 25 SOL $20</Span>
            </h3>
            <img src={Price} alt="" />
          </div>
        </Wrapper>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-[#2cef32] text-sm">
              <img src={Price} alt="" className="pr-3" />
              Domain Available
            </div>
            <p className="text-[#2cef32] text-sm flex">
              View full page
              <BsArrowUpRight />
            </p>
          </div>
          <Title className="my-4 text-2xl ">Jamalmusa.solana</Title>
          <Text>
            Whether you're an individual, a business, or a creator,
            Jamalmusa.solana empowers you to shape your online identity and
            engage with the global web3 community. Establish
          </Text>
          <Title className="my-4 text-xl">25 SOL</Title>
          <div>
            <Button
              className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-60 md:w-48 text-xs md:text-sm lg:text-sm"
              onClick={openModal}
            >
              Buy Now
            </Button>
            {/* {modalIsOpen && <BuyModal modalIsOpen={modalIsOpen} />} */}
            <Modal
              open={modalIsOpen}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Boxs className="w-[75%] lg:w-[30%] md:w-[50%]">
                <div className="flex flex-col justify-center items-center p-5">
                  <div className="flex items-center">
                    <GiPadlock size={35} className="mr-4" />
                    <p className="text-2xl">Buy Now</p>
                  </div>
                  <p className="font-thin text-[#FFFFFF] m-2">
                    You are about to buy 25. worth of SOL for $20.00 a year.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Item className="flex">
                    <img
                      src={Icon}
                      alt=""
                      style={{ width: '80px', paddingRight: '40px' }}
                    />
                    <div className="pl-4 flex flex-col items-end">
                      <Text>Total</Text>
                      <Para>25 sol</Para>
                    </div>
                  </Item>
                </div>
                <Title className="my-4 flex items-center text-xs lg:text-base md:text-sm">
                  <PiWarningCircleBold />
                  You’ll be asked to approve this purchase from your wallet.
                </Title>
                <Link
                  to="/connection"
                  className="flex justify-center items-center w-full"
                >
                  <Button1 className="mx-5">Connect Wallet</Button1>
                </Link>
              </Boxs>
            </Modal>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #027906;
  border-radius: 20px;
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

const Button = styled.button`
  background-color: var(--green);
  color: black;
  border-radius: 40px;
  font-weight: 600;
`;

const Title = styled.p`
  /* font-weight: 700; */
`;
const Text = styled.p`
  color: #a6a6a6;
`;
const Span = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

const Boxs = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  box-shadow: 24;
  background-color: #121111;
  border-radius: 20px;
  padding: 20px;
`;

// const Title = styled.p`
//   text-align: center;
//   color: #868686;
//   font-size: 15px;
//   font-weight: 100;
//   display: flex;
//   align-items: center;
// `;

const Item = styled.li`
  border: double 1.5px transparent;
  border-radius: 24px;
  background-image: linear-gradient(#060606, #060606),
    radial-gradient(circle at top left, var(--green), #050505);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 12px 40px;
`;

// const Text = styled.h1`
//   display: flex;
//   align-items: center;
//   color: #e3e3e3;
// `;

const Para = styled.p`
  margin: 10px 0px;
  color: #e3e3e3;
  font-size: 30px;
`;

const Button1 = styled.button`
  background-color: var(--green);
  width: 100%;
  border-radius: 30px;
  color: black;
  padding: 18px;
  margin: 20px;
  font-weight: 700;
`;
