import { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { EditModal } from '../EditModal';

export const UserForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <Wrapper className="p-4 px-8 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-left bg-[#121212] ">
      <div className="flex flex-col md:flex-row  justify-between items-center w-full">
        <div className="w-full">
          <Title className="text-2xl my-5 ">General information</Title>
          <Text className="text-[#A6A6A6]">Add all Personal Information </Text>
        </div>
        <div className="flex justify-end w-full">
          <button
            className="bg-[#404040] text-[#A3A3A3] px-5 py-2 my-1 rounded-lg"
            onClick={openModal}
          >
            Edit
          </button>
          {modalIsOpen && <EditModal modalIsOpen={modalIsOpen} />}
        </div>
      </div>
      <div className="w-full mt-14">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
            '& .MuiInputLabel-root': { color: '#A3A3A3' }, // Customize label color here
            '& .MuiInputBase-input': { color: '#FFFFFF', width: 1 }, // Customize input text color here
            '& .MuiInput-underline:before': { borderBottomColor: '#252424' }, // Customize variant color here
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            id="input-with-icon-adornment"
            sx={{
              width: '100%',
              padding: '10px',
              paddingInlineStart: '50px',
              marginTop: '10px',
            }}
            placeholder="Readu Ceuca"
            startAdornment={
              <InputAdornment position="start">
                <span className="text-[#A3A3A3]">Name : </span>
              </InputAdornment>
            }
          />
          <Input
            id="input-with-icon-adornment"
            sx={{
              width: '100%',
              padding: '10px',
              paddingInlineStart: '60px',
              marginTop: '10px',
            }}
            placeholder="xnmane anamma"
            startAdornment={
              <InputAdornment position="start">
                <span className="text-[#A3A3A3]">Bio : </span>
              </InputAdornment>
            }
          />
          <Input
            id="input-with-icon-adornment"
            sx={{
              width: '100%',
              padding: '10px',
              paddingInlineStart: '60px',
              marginTop: '10px',
            }}
            placeholder="0x123345543467as23d"
            startAdornment={
              <InputAdornment position="start">
                <span className="text-[#A3A3A3]">Sol Wallet Address: : </span>
              </InputAdornment>
            }
          />
          <Input
            id="input-with-icon-adornment"
            sx={{
              width: '100%',
              padding: '10px',
              paddingInlineStart: '60px',
              marginTop: '10px',
            }}
            placeholder="@ReaduOfficial"
            startAdornment={
              <InputAdornment position="start">
                <span className="text-[#A3A3A3]">Twitter : </span>
              </InputAdornment>
            }
          />
          <Input
            id="input-with-icon-adornment"
            sx={{
              width: '100%',
              padding: '10px',
              paddingInlineStart: '60px',
              marginTop: '10px',
            }}
            placeholder="@Readu123"
            startAdornment={
              <InputAdornment position="start">
                <span className="text-[#A3A3A3]">Telegram : </span>
              </InputAdornment>
            }
          />
          <Input
            id="input-with-icon-adornment"
            sx={{
              width: '100%',
              padding: '10px',
              paddingInlineStart: '60px',
              marginTop: '10px',
            }}
            placeholder="xxn@Readu123"
            startAdornment={
              <InputAdornment position="start">
                <span className="text-[#A3A3A3]">Email : </span>
              </InputAdornment>
            }
          />
        </Box>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid #027906;
  border-radius: 20px;
  background-color: #020202; */
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Text = styled.p``;
