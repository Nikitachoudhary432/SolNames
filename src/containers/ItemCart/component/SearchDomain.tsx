import { useState } from 'react';
import styled from '@emotion/styled';
import View1 from 'assets/view1.png';
import Price from 'assets/svg/price.svg';
import { BsArrowUpRight } from 'react-icons/bs';

export const SearchDomain = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <Wrapper className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center ">
      <div className="lg:py-3 py-2 px-5 flex bg-[#212121] border border-black items-center rounded-full w-full">
        <Input placeholder="Jamesyy" />
        <Button className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-60 md:w-48 text-xs md:text-sm lg:text-sm">
          Search domain
        </Button>
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

const Title = styled.h1`
  font-weight: 700;
`;
const Text = styled.p`
  color: #a6a6a6;
`;
const Span = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
