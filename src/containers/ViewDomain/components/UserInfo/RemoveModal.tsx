import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import SubDomains from 'assets/svg/subdomain.svg';
import { TextField, InputLabel } from '@mui/material';

export const RemoveModal = (props: any) => {
  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="text-white"
      >
        Extend Domain Name
      </Typography>
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2 }}
        className="text-white"
      >
        Confirm Details
      </Typography>
      <div className="flex flex-col justify-center items-center mt-4 w-full">
        <div className="flex md:flex-row justify-around w-full items-center p-2 bg-[#262626] rounded-lg ">
          <img src={SubDomains} alt="" className="mr-1 md:mr-2 w-12 md:w-auto" />
          <div className="flex items-center text-sm sm:text-base lg:text-md">
            <Head className="text-[#E5E5E5]">Jamesmusa</Head>
            <Text className="text-[#757a7b]">.solnames</Text>
          </div>
        </div>
        <div className="mt-3 w-full">
          <form
            // sx={{
            //   '& .MuiTextField-root': { width: '100%' },
            //   '& .MuiInputLabel-formControl': { color: '#A3A3A3' },
            //   '& .MuiInputLabel-inputlabel': { color: '#A3A3A3' },
            //   '& .MuiInputBase-input': { color: '#FFFFFF', width: '100%' },
            // }}
            noValidate
            autoComplete="off"
          >
            <InputLabel
              htmlFor="input-with-icon-adornment"
              sx={{ marginTop: '5px' }}
            >
              <span className="text-[#A3A3A3]">To </span>
            </InputLabel>
            <StyledTextField
              id="outlined-basic"
              label="erd1ijg49ewv8bwh9g4290ckjas9j498fhjw3e02fgwq90hgj5390fq23e0gh"
              variant="outlined"
              sx={{
                width: '100%',
              }}
            />
            <InputLabel
              htmlFor="input-with-icon-adornment"
              sx={{ marginTop: '5px' }}
            >
              <span className="text-[#A3A3A3]">Action </span>
            </InputLabel>
            <StyledTextField
              id="outlined-basic"
              label="Removing subdomain"
              variant="outlined"
              sx={{
                width: '100%',
              }}
            />

            <InputLabel
              htmlFor="input-with-icon-adornment"
              sx={{ marginTop: '5px' }}
            >
              <span className="text-[#A3A3A3]">Fee </span>
            </InputLabel>
            <StyledTextField
              id="outlined-basic"
              label="~0.00023 SOL"
              variant="outlined"
              sx={{
                width: '100%',
              }}
            />
            <InputLabel
              htmlFor="input-with-icon-adornment"
              sx={{ marginTop: '5px' }}
            >
              <span className="text-[#A3A3A3]">Data </span>
            </InputLabel>
            <StyledTextField
              id="outlined-basic"
              label="N/A"
              variant="outlined"
              sx={{
                width: '100%',
              }}
            />
          </form>
        </div>
        <Button1 className="mx-5">Confirm</Button1>
        <Button2 className="mx-5" onClick={props.onClose}>
          Cancel
        </Button2>
      </div>
    </>
  );
};

const StyledTextField = styled(TextField)`
  & .MuiInputLabel-root {
    color: #a3a3a3; // Change label color here
  }

  & .MuiInputBase-input {
    color: #ffffff;
    width: 100%;
  }
`;

const Head = styled.h1`
  font-size: 20px;
`;
const Text = styled.p``;

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
  border: 1px solid var(--green);
  color: var(--green);
  width: 100%;
  border-radius: 30px;
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
