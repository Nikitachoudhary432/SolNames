import { useState } from 'react';
import styled from '@emotion/styled';
import SubDomains from 'assets/svg/subdomain.svg';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RxCross2 } from 'react-icons/rx';
import { RemoveModal } from '../RemoveModal';

export const SubDomain = () => {
  const [open, setOpen] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleRemove = () => setRemoveModal(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper className="p-4 px-8 sm:w-full w-auto lg:w-full flex flex-col justify-evenly items-left bg-[#121212] ">
      <div className="grid grid-flow-row gap-5">
        <Boxs className="md:w-full w-auto">
          <Title className="text-lg my-4 ">Filter</Title>
        </Boxs>
        <Boxs className=" flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-center w-full border-b-2 border-gray-900 m-4 pb-4">
            <div className="flex flex-col md:flex-row justify-around w-full items-center mx-5">
              <img src={SubDomains} alt="" className='mr-2'/>
              <div className="flex items-center text-sm md:text-base lg:text-xl">
                <Head className="text-[#E5E5E5]">myproject.Jamesmusa</Head>
                <Text className="text-[#757a7b]">.solnames</Text>
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full items-center mx-5 text-sm sm:text-base lg:text-md">
              <Datee>First created 50 days ago</Datee>
              <RxCross2
                className="bg-[#292828] w-7 h-7 p-2 rounded-md ml-3"
                onClick={handleRemove}
              />
              <RemoveModal
                open={removeModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full border-b-2 border-gray-900 m-4 pb-4">
            <div className="flex  flex-col md:flex-row justify-around w-full items-center mx-5">
              <img src={SubDomains} alt="" className='mr-2' />
              <div className="flex items-center text-sm md:text-base lg:text-xl">
                <Head className="text-[#E5E5E5]">myproject.Jamesmusa</Head>
                <Text className="text-[#757a7b]">.solnames</Text>
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full items-center mx-5 text-sm sm:text-base lg:text-md">
              <Datee>First created 50 days ago</Datee>
              <RxCross2
                className="bg-[#292828] w-7 h-7 p-2 rounded-md ml-3"
                onClick={handleRemove}
              />
            </div>
          </div>

          {/* <Button className="w-[50%] mt-10">Purches Now</Button> */}
        </Boxs>
        <div className="mt-6">
          <Button
            className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-60 md:w-48 text-xs md:text-sm lg:text-sm"
            onClick={handleOpen}
          >
            Add Subdomain
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add subdomain
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Domain Name
              </Typography>{' '}
              <div className="lg:py-3 py-2 pl-5 flex bg-[#212121] border border-[#6B6B6B] items-center rounded-xl w-full my-8 text-[#6B6B6B]">
                <Input placeholder="Enter Subdomain" />
                <Buttons className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-60 md:w-48 text-xs md:text-sm lg:text-sm">
                  mydomain.solana
                </Buttons>
              </div>
              <Button1 className="mx-5">Save</Button1>
              <Button2 className="mx-5">Cancel</Button2>
            </Box>
          </Modal>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid #027906;
  border-radius: 20px;
  background-color: #020202; */
`;

const Title = styled.p`
  font-weight: 500;
  background: #1b1b1b;
  padding: 10px 40px;
  margin-left: 20px;
  border-radius: 13px;
`;

const Head = styled.h1`
  /* font-size: 20px; */
`;
const Text = styled.p``;

const Boxs = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #020202;
  // height: 70px;
  width: 100%;
  color: #9ca3af;
  border: 1px solid rgba(35, 35, 35, 1);
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  border: 2px solid #000;
  box-shadow: 24;
  background-color: #222222;
  border-radius: 20px;
  padding: 20px;
`;

const Button = styled.button`
  background-color: var(--green);
  color: black;
  border-radius: 40px;
  font-weight: 600;
`;
const Buttons = styled.h3`
  font-size: 14px;
`;

const Button1 = styled.button`
  background-color: var(--green);
  width: 100%;
  border-radius: 30px;
  color: black;
  padding: 15px;
  margin: 8px;
  font-weight: 700;
`;

const Button2 = styled.button`
  background-color: transparent;
  border: 1px solid  var(--green);
  color:  var(--green);
  width: 100%;
  border-radius: 30px;
  padding: 15px;
  margin: 8px;
  font-weight: 700;
`;

const Datee = styled.h3`
  font-size: 14px;
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
