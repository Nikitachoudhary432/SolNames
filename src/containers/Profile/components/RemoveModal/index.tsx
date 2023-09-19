import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import SubDomains from 'assets/svg/subdomain.svg';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

export const RemoveModal = (props: any) => {
  return (
    props.open && (
      <div className="p-4 px-8 sm:w-full w-full lg:w-full">
        <Box className="">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-white"
          >
            Removing subdomain
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-white"
          >
            Confirm Details
          </Typography>
          <div className="flex flex-col justify-center items-center m-4 pb-4">
            <div className="flex flex-col lg:flex-row justify-between w-full items-center p-5 bg-[#262626] rounded-lg">
              <img src={SubDomains} alt="" />
              <div className="flex items-center text-sm sm:text-base lg:text-md">
                <Head className="text-[#E5E5E5]">myproject.Jamesmusa</Head>
                <Text className="text-[#757a7b]">.solnames</Text>
              </div>
            </div>
            <div className="mt-3">
              <div
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%' },
                  '& .MuiInputLabel-formControl': { color: '#A3A3A3' },
                  '& .MuiInputLabel-inputlabel': { color: '#A3A3A3' },
                  '& .MuiInputBase-input': { color: '#FFFFFF', width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <StyledTextField
                  id="standard-basic"
                  label="To"
                  variant="standard"
                  placeholder="erd1ijg49ewv8bwh9g4290ckjas9j498fhjw3e02fgwq90hgj5390fq23e0gh"
                  sx={{
                    width: '100%',
                    marginTop: '10px',
                  }}
                />
                <StyledTextField
                  id="standard-basic"
                  label="Action"
                  variant="standard"
                  sx={{
                    width: '100%',
                    marginTop: '10px',
                  }}
                />
                <StyledTextField
                  id="standard-basic"
                  label="Fee"
                  variant="standard"
                  sx={{
                    width: '100%',
                    marginTop: '10px',
                  }}
                />

                <InputLabel
                  htmlFor="input-with-icon-adornment"
                  sx={{ marginTop: '20px' }}
                >
                  <span className="text-[#A3A3A3]">Data </span>
                </InputLabel>
                <StyledTextField
                  id="outlined-basic"
                  label="N/A"
                  variant="outlined"
                  sx={{
                    width: '100%',
                    paddingTop: '5px',
                  }}
                />
              </div>
            </div>
            <Button1 className="mx-5">Remove Subdomain</Button1>
            <Button2 className="mx-5">Cancel</Button2>
          </div>
        </Box>
      </div>
    )
  );
};

const Wrapper = styled.div``;

const StyledTextField = styled(TextField)`
  & .MuiInputLabel-root {
    color: #a3a3a3; // Change label color here
  }

  & .MuiInputBase-input {
    color: #ffffff;
    width: 100%;
  }
`;
const Title = styled.p`
  font-weight: 500;
  background: #1b1b1b;
  padding: 10px 40px;
  margin-left: 20px;
  border-radius: 13px;
`;

const Head = styled.h1`
  font-size: 20px;
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
  background-color: #131313;
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
  border: 1px solid var(--green);
  color:  var(--green);
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
