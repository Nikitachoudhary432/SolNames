import { useState } from 'react';
import styled from '@emotion/styled';
import View1 from 'assets/view1.png';
import Price from 'assets/svg/price.svg';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ApprovalModal } from './approvalModal';

export const Detail = () => {
  const [open, setOpen] = useState(false);

  const [transfer, setTransfer] = useState(false);
  const [approve, setApprove] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleTransfer = () => {
    setTransfer(true);
  };

  const handleApprove = () => {
    setApprove(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTransfer(false);
    setApprove(false);
  };

  return (
    <div className="p-4 px-8 w-auto lg:w-full flex flex-col justify-evenly items-left ">
      <div className="grid lg:gap-10 gap-3 lg:grid-cols-3 mt-12">
        <div>
          <Wrapper className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center ">
            <img src={View1} alt="" className="relative" />
            <Title className="absolute h-40 text-md lg:text-2xl md:text-1xl ">
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
          <div className="flex mt-10">
            <Button1 className="mx-5 w-full " onClick={handleOpen}>
              {' '}
              Sell
            </Button1>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Boxs>
                <Button1 className="mx-5 px-20 py-4">Coming Soon</Button1>
              </Boxs>
            </Modal>
            <Button2 className="mx-5 w-full" onClick={handleTransfer}>
              Transfer
            </Button2>
            <Modal
              open={transfer}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Boxs className="w-[80%] lg:w-[40%] md:w-[60%]">
                {approve ? (
                  <ApprovalModal onClose={() => setApprove(false)} />
                ) : (
                  <>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Transfer Domain name
                    </Typography>
                    <div className="mt-2 lg:mt-6">
                      <Text className="text-sm lg:text-md md:text-md">
                        New owner’s wallet address{' '}
                      </Text>
                      <div className="lg:py-6 py-4 px-3 flex bg-[#212121] items-center rounded-xl w-full my-3 text-[#ffff]">
                        <Input
                          placeholder="0X347DHJ79WBSUR73BhJv8hjn"
                          style={{ color: 'white' }}
                        />
                      </div>
                    </div>
                    <label className="flex items-center  text-xs lg:text-sm md:text-sm my-5">
                      <input type="checkbox" className="mx-2 bg-transparent" />I
                      understand that extending domain name is irreversible
                    </label>
                    <Button1
                      className="mx-5 p-4 "
                      onClick={handleApprove}
                    >
                      Transfer Domain
                    </Button1>
                    <Button2
                      className="mx-5 p-4 "
                      onClick={handleClose}
                    >
                      Cancel transfer
                    </Button2>
                  </>
                )}
              </Boxs>
            </Modal>
          </div>
        </div>
        <div className="col-span-2 p-4 sm:w-full w-auto lg:w-full flex flex-col justify-evenly items-left bg-[#121212] ">
          <div className="flex flex-col lg:flex-row  justify-between w-full">
            <div>
              <Title className="text-2xl my-2">Jamalmusa.solana</Title>
              <Text className="text-[#A6A6A6]">Domain purchased by you.</Text>
            </div>
          </div>
          <div className="w-full mt-14">
            <Text className="text-[#FFB703] mb-4">Domain information</Text>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
                '& .MuiInputLabel-root': { color: '#A3A3A3' },
                '& .MuiInputBase-input': { color: '#FFFFFF', width: 1 },
                '& .MuiInputBase-placeholder': { color: '#FFFFFF' },
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#252424',
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Input
                id="input-with-icon-adornment"
                sx={{
                  width: '100%',
                  padding: '10px',
                }}
                placeholder="Jamalmusa.solana"
                startAdornment={
                  <InputAdornment position="start">
                    <span className="text-[#A3A3A3]">Domain Name: : </span>
                  </InputAdornment>
                }
              />
              <Input
                id="input-with-icon-adornment"
                sx={{
                  width: '100%',
                  padding: '10px',
                }}
                placeholder="0X347DHJ79WBSUR73BhJv8hjn"
                startAdornment={
                  <InputAdornment position="start">
                    <span className="text-[#A3A3A3]">Owner : </span>
                  </InputAdornment>
                }
              />
              <Input
                id="input-with-icon-adornment"
                sx={{
                  width: '100%',
                  padding: '10px',
                }}
                placeholder="0X347DHJ79WBSUR73BhJv8hjn"
                startAdornment={
                  <InputAdornment position="start">
                    <span className="text-[#A3A3A3]">Editor</span>
                  </InputAdornment>
                }
              />
              <Input
                id="input-with-icon-adornment"
                sx={{
                  width: '100%',
                  padding: '10px',
                }}
                placeholder="0X782HDghe8HjWBSonfBhJWQp"
                startAdornment={
                  <InputAdornment position="start">
                    <span className="text-[#A3A3A3]">Registrant : </span>
                  </InputAdornment>
                }
              />
              <Input
                id="input-with-icon-adornment"
                sx={{
                  width: '100%',
                  padding: '10px',
                }}
                placeholder="Default Resolver"
                startAdornment={
                  <InputAdornment position="start">
                    <span className="text-[#A3A3A3]">Resolver : </span>
                  </InputAdornment>
                }
              />
              <Input
                id="input-with-icon-adornment"
                sx={{
                  width: '100%',
                  padding: '10px',
                }}
                placeholder="25:03:08 - 18/08/21"
                startAdornment={
                  <InputAdornment position="start">
                    <span className="text-[#A3A3A3]">Expiration date: : </span>
                  </InputAdornment>
                }
              />
            </Box>
          </div>
        </div>
      </div>
      <Button3 className="mx-5 w-[40%] lg:w-[14%] md:w-[20%]">Tade</Button3>
    </div>
  );
};

const Wrapper = styled.div`
  border: 1px solid #027906;
  border-radius: 20px;
  background-color: #020202;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Span = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

const Text = styled.p``;

const Button1 = styled.button`
  background-color: var(--green);
  border-radius: 15px;
  color: black;
  margin: 8px;
  width: 100%;
  font-weight: 700;
`;

const Button2 = styled.button`
  background-color: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  border-radius: 15px;
  padding: 15px;
  margin: 8px;
  width: 100%;
  font-weight: 700;
`;
const Button3 = styled.button`
  background-color: var(--green);
  border-radius: 15px;
  color: black;
  padding: 15px;
  margin: 8px;
  font-weight: 700;
  margin-top: 60px;
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
