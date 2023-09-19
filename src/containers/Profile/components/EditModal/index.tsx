import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

export const EditModal = (props: any) => {
  return (
    props.modalIsOpen && (
      <div className="p-6 sm:w-full w-full lg:w-full flex flex-col justify-evenly items-center overflow-hidden absolute z-50 top-0 left-0 bg-modal bg-[rgb(0,0,0,0.5)] ">
        <Content className="sm:w-[80%] w-full lg:w-[50%]">
          <div className="flex flex-col justify-center items-start mb-3 p-5 w-full">
            <p className="text-xl">Edit Profile Info</p>
          </div>
          <div className="overflow-hidden w-28 h-28 lg:w-16 lg:h-16 rounded-full ">
            <Img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="user"
            />
          </div>
          <div className="sm:w-full w-full lg:w-full mt-8 flex justify-center items-center">
            <Box
              className="sm:w-full w-full lg:w-full"
              component="form"
              sx={{
                '& .MuiTextField-root': { mb: 2, m: 1 },
                '& .MuiInputLabel-root': { color: '#FFFFFF' }, // Customize label color here
                '& .MuiInputBase-input': { color: '#5c5c5c' }, // Customize input text color here
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#303030', // Customize outline color here
                  },
                  '&:hover fieldset': {
                    borderColor: '#303030', // Customize outline color when hovered here
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#303030', // Customize outline color when focused here
                  },
                },
                display: 'flex',
                flexDirection: 'column',
              }}
              noValidate
              autoComplete="off"
            >
              <InputLabel htmlFor="input-with-icon-adornment">
                Display Name
              </InputLabel>
              <TextField
                placeholder="Enter Display Name"
                id="fullWidth"
                sx={{ borderRadius: '10px' }}
              />
              <InputLabel htmlFor="input-with-icon-adornment">Bio</InputLabel>
              <TextField
                placeholder="Enter Bio (500)"
                id="fullWidth"
                sx={{ borderRadius: '10px' }}
              />
              <InputLabel htmlFor="input-with-icon-adornment">
                Wallet Address
              </InputLabel>
              <TextField
                placeholder="paste your wallet address"
                id="fullWidth"
                sx={{ borderRadius: '10px' }}
              />
              <div className="flex ">
                <div style={{ width: '30ch' }}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Twitter
                  </InputLabel>
                  <TextField
                    placeholder="Enter Twitter"
                    id="fullWidth"
                    sx={{ borderRadius: '10px' }}
                  />
                </div>
                <div style={{ width: '30ch' }}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Telegram
                  </InputLabel>
                  <TextField
                    placeholder="Enter telegram"
                    id="fullWidth"
                    sx={{ borderRadius: '10px' }}
                  />
                </div>
              </div>
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <TextField
                placeholder="Enter email"
                id="fullWidth"
                sx={{ borderRadius: '10px' }}
              />
              <Button className="mx-5">Save</Button>
              <Button2 className="mx-5">Cancel</Button2>
            </Box>
          </div>
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

const Button = styled.button`
  background-color: var(--green);
  width: 100%;
  border-radius: 30px;
  color: black;
  padding: 10px;
  margin: 8px;
  font-weight: 700;
`;
const Button2 = styled.button`
  background-color: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  width: 100%;
  border-radius: 30px;
  padding: 10px;
  margin: 8px;
  font-weight: 700;
`;

const Img = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
`;
