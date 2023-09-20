import { useState } from 'react';
import styled from '@emotion/styled';
import { TbTrash } from 'react-icons/tb';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export const Records = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-4 px-3 md:px-8  sm:w-full w-full lg:w-full flex flex-col justify-evenly items-left ">
      <Title className="text-xl sm:text-2xl lg:text-3xl font-bold overflow-hidden">
        Records
      </Title>
      <Text className="text-lg lg:text-xl py-2 lg:py-1 my-3 text-[#A3A3A3] overflow-hidden">
        Attach records such as wallet addresses, URLs and texts to your domain
        name.
      </Text>
      <div>
        <Wrapper className="p-4 px-4 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-left ">
          <div className="grid lg:gap-5 gap-3 lg:grid-cols-4  py-10 ">
            <div className="flex flex-col justify-center">
              <Title className=" text-md lg:text-xl md:text-lg my-4">
                Wallets
              </Title>
              <Text className="text-md lg:text-xl md:text-lg ">Solana</Text>
            </div>
            <div className="col-span-2 p-4 w-full lg:w-full overflow-hidden ">
              <div className="flex flex-col lg:flex-row justify-center items-center ">
                <Title className="text-lg lg:text-sm my-2text-xl py-2 lg:py-1 text-[#A3A3A3] overflow-hidden">
                  4c7goyyukBh2wFuc94SWvCo8XXkmTt761ty9t9v
                </Title>
                <TbTrash className="text-2xl ml-2 text-[#2CEF32]" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button3
                className="mx-5 w-[100%] lg:w-[80%] md:w-[90%]"
                onClick={openModal}
              >
                Set Primary Address
              </Button3>
              <Modal
                open={modalIsOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Boxs className="w-[80%] lg:w-[40%] md:w-[60%]">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Set wallet as primary address
                  </Typography>
                  <div className="mt-5 lg:mt-6 p-3 flex flex-col lg:flex-row md:flex-row justify-between w-full text-[#A3A3A3]">
                    <Text className="text-sm lg:text-md md:text-md">
                      Solana
                    </Text>
                    <Text className="text-xs lg:text-md md:text-sm">
                      4c7goyyukBh2wFuc94SWvCo8XXkmTt761ty9t9v
                    </Text>
                  </div>
                  <Button1 className="mx-2 p-4 w-[70%] lg:w-full md:w-[80%] ">
                    Continue
                  </Button1>
                  <Button2
                    className="mx-2 p-4 w-[70%] lg:w-full md:w-[80%] "
                    onClick={handleClose}
                  >
                    Cancel
                  </Button2>
                </Boxs>
              </Modal>
            </div>
          </div>
          <Button3 className="mx-5 my-14  w-[80%] sm:w-[40%] lg:w-[20%] md:w-[30%]">
            Add wallet
          </Button3>
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

const Button1 = styled.button`
  background-color: var(--green);
  border-radius: 15px;
  color: black;
  margin: 8px;
  font-weight: 700;
`;

const Button2 = styled.button`
  background-color: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  border-radius: 15px;
  padding: 15px;
  margin: 8px;
  font-weight: 700;
`;

const Text = styled.p`
  font-weight: 100;
`;

const Button3 = styled.button`
  background-color: var(--green);
  border-radius: 15px;
  color: black;
  padding: 12px;
  margin: 8px;
  font-weight: 700;
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
