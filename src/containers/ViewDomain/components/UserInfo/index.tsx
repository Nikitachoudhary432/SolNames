import { useState } from 'react';
import styled from '@emotion/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { UserForm } from '../../../Profile/components/UserForm';
import { SubDomain } from '../../../Profile/components/SubDomain';
import { DomainDetails } from '../../../Profile/components/DomainDetail';
import { ViewDomain } from '../ViewDomain';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RemoveModal } from './RemoveModal';

export const UserInfo = () => {
  const address =
    'MyAddress: erd1u3f5d8hg3gmyhgj5c6z66s52zxxezk78jzhl03asuy68hmj3z76s3hrstc';

  const shortenAddress = (address: string) =>
    `${address.substring(0, 7)}...${address.substring(address.length - 3)}`;

  const [value, setValue] = useState('3');
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRemoveModalOpen(false);
  };

  const handleContinue = () => {
    setRemoveModalOpen(true);
  };

  return (
    <Wrapper className="p-4 px-8 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-left ">
      <div className="flex flex-col lg:flex-row items-center gap-5  p-2 w-full">
        <div className="overflow-hidden w-32 h-32 lg:w-16 lg:h-16 rounded-full ">
          <Img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="user"
          />
        </div>

        <div className="sm:w-full w-full lg:w-full px-3 font-semibold tracking-wide flex flex-col lg:flex-row justify-between items-center">
          <div className="sm:w-full w-full lg:w-full px-3 font-semibold tracking-wide">
            <Title className="text-xl sm:text-2xl lg:text-3xl font-bold overflow-hidden">
              Hardgy.Solnames
            </Title>
            <Address className="text-xl lg:text-sm py-2 lg:py-1 text-[#A3A3A3] overflow-hidden">
              {address}
            </Address>
          </div>
          <div
            className="sm:w-full w-full lg:w-full px-3 font-semibold tracking-wide flex justify-start
          lg:justify-end"
          >
            <Button
              className="lg:px-7 lg:py-3 sm:text-base px-5 py-2 w-60 md:w-48 text-xs md:text-sm lg:text-sm"
              onClick={handleOpen}
            >
              Extend Domain
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="w-[60%] lg:w-[40%] md:w-[50%]">
                {removeModalOpen ? (
                  <RemoveModal onClose={() => setRemoveModalOpen(false)} />
                ) : (
                  <>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Extend Domain Name
                    </Typography>
                    <div className="lg:py-6 py-4 pl-32 flex bg-[#212121] items-center rounded-xl w-full my-8 text-[#ffff]">
                      <Input placeholder="1 Year" />
                    </div>
                    <div className="lg:py-3 py-2 pl-5 flex justify-between items-center w-full my-8 ]">
                      <Text className="text-sm text-[#A3A3A3]">Amount</Text>
                      <Price className="text-2xl">0.98291 SOL</Price>
                    </div>

                    <label className="flex items-center text-sm my-5">
                      <input
                        type="checkbox"
                        defaultChecked={checked}
                        onChange={() => setChecked((state) => state)}
                        className="mx-2 bg-transparent"
                      />
                      I understand that extending domain name is irreversible
                    </label>
                    <Button1 className="mx-5" onClick={handleContinue}>
                      Continue
                    </Button1>
                    <Button2 className="mx-5" onClick={handleClose}>
                      Cancel
                    </Button2>
                  </>
                )}
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center md:w-full w-full lg:w-full text-white my-14 mb-2 ">
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ backgroundColor: '#1D1D1D', borderRadius: '8px' }}
        >
          <Tab value="1" label="Profile" className="tab-item" />
          <Tab value="2" label="Subdomains" className="tab-item" />
          <Tab value="3" label="Domain Details" className="tab-item" />
        </Tabs>
      </div>
      {value === '1' && <UserForm />}
      {value === '2' && <SubDomain />}
      {value === '3' && <ViewDomain />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  min-height: calc(100% - var(--header-height));
  border: 1px solid #027906;
  border-radius: 20px;
  background-color: #020202;

  .MuiTabs-root {
    .MuiTabs-flexContainer {
      justify-content: space-between;
      margin: 10px;
    }

    button {
      color: #808f93;
      text-align: center;
      font-family: Plus Jakarta Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;
      text-transform: none;
      min-width: unset;
      min-height: unset;
      padding: 6px 12px;
      border-radius: 4px;
    }

    button.Mui-selected {
      background-color: var(--green);
      color: #020202;
    }

    .MuiTabs-indicator {
      background-color: transparent;
    }
  }
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Img = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
`;

const Text = styled.p``;
const Price = styled.h1``;

const Address = styled.p`
  color: var(--grey-grey-1, #a3a3a3);
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const Button = styled.button`
  background-color:  var(--green);
  border-radius: 15px;
  color: black;
  padding: 15px;
  margin: 8px;
  font-weight: 700;
  margin-top: 60px;
`;
const Button1 = styled.button`
  background-color:  var(--green);
  width: 100%;
  border-radius: 20px;
  color: black;
  padding: 15px;
  margin: 8px;
  font-weight: 700;
`;

const Button2 = styled.button`
  background-color: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  width: 100%;
  border-radius: 20px;
  padding: 15px;
  margin: 8px;
  font-weight: 700;
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
const Box = styled.div`
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
