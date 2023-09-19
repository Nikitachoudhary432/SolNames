import styled from '@emotion/styled';
import { GiPadlock } from 'react-icons/gi';
import { PiWarningCircleBold } from 'react-icons/pi';
import Icon from 'assets/svg/Icon.svg';
import { Link } from 'react-router-dom';

export const BuyModal = (props: any) => {
  return (
    props.modalIsOpen && (
      <div className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center overflow-hidden absolute z-50 top-0 left-0  h-screen bg-modal bg-[rgb(0,0,0,0.5)] ">
        <Content className="">
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
          <Title className="my-4">
            <PiWarningCircleBold />
            You’ll be asked to approve this purchase from your wallet.
          </Title>
          <Link
            to="/connection"
            className="flex justify-center items-center w-full"
          >
            <Button className="mx-5">Connect Wallet</Button>
          </Link>
        </Content>
      </div>
    )
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 20px;
  background-color: #151414;
  border-radius: 20px;
`;

const Title = styled.p`
  text-align: center;
  color: #868686;
  font-size: 15px;
  font-weight: 100;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  border: double 1.5px transparent;
  border-radius: 24px;
  background-image: linear-gradient(#060606, #060606),
    radial-gradient(circle at top left, #2cef32, #050505);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 12px 40px;
`;

const Text = styled.h1`
  display: flex;
  align-items: center;
  color: #e3e3e3;
`;

const Para = styled.p`
  margin: 10px 0px;
  color: #e3e3e3;
  font-size: 30px;
`;

const Button = styled.button`
  background-color: var(--green);
  width: 100%;
  border-radius: 30px;
  color: black;
  padding: 18px;
  margin: 20px;
  font-weight: 700;
`;
