import styled from '@emotion/styled';
import B from 'assets/Br.svg';
import T from 'assets/T.svg';
import E from 'assets/e.svg';
import M from 'assets/M.svg';
import F from 'assets/f.svg';
import Tw from 'assets/Tw.svg';

import { Logo } from '@/components/header/components/Logo';
import Vector from '@/assets/Vector.png';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-900">
      <div className="py-10 px-6 sm:px-12 relative grid gap-7 ">
        <Logo />

        <div className="grid lg:gap-20 gap-5 lg:grid-cols-2">
          <span className="text-lg">
            We are builders specializing in Blockchain Name Service (BNS) and
            Exclusive NFT marketplace across Blockchains. We aim to create an
            interoperable BNS with enhanced use cases
          </span>
          <div className="grid gap-4">
            <div className="lg:py-3 py-2 px-5 flex bg-[#121212] border border-black items-center rounded-2xl">
              <Input placeholder="Email Address" />
              <Button className="lg:px-7 sm:text-base text-sm px-5 py-2">
                Subscribe
              </Button>
            </div>
            <div className="text-sm ml-2 md:ml-5">
              For Marketing : <Span> Marketing@bictory.io </Span> For Business :
              <Span>Business@bictory.io</Span>
            </div>
          </div>
        </div>

        {/* bottom part */}
        <div className="flex pt-6 md:flex-row flex-col gap-4 items-center w-full">
          <div>All Rights Reserved Bictory © 2023</div>
          <div className="flex md:ml-auto gap-4">
            <Img src={B} alt="" />
            <Img src={Tw} alt="" />
            <Img src={T} alt="" />
            <Img src={E} alt="" />
            <Img src={M} alt="" />
            <Img src={F} alt="" />
          </div>
        </div>

        <Background>
          <img src={Vector} alt="" className="w-80" />
        </Background>
      </div>
    </footer>
  );
};

const Img = styled.img`
  width: 40px;
`;

const Background = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -101;
  inset: 0;

  img {
    position: absolute;

    &:first-of-type {
      top: 0;
      right: 0;
    }
    &:last-of-type {
      top: 0;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  // margin: 20px;
`;
const Row = styled.p`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
`;
const Rows = styled.p`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const Foot = styled.footer`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
const Contact = styled.data`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
const Span = styled.span`
  color: #ffb703;
`;

const Link = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;

// const Box = styled.div`
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   border-radius: 16px;
//   background: #1b1b1b;
//   height: 45px;
//   width: 90%;
//   padding-inline: 15px;
//   color: #9ca3af;
// `;

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
  background-color: #ffb703;
  color: black;
  border-radius: 20px;
  font-weight: 600;
`;
