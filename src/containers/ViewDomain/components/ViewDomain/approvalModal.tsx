import { useState } from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import SubDomains from 'assets/svg/subdomain.svg';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { PiShieldWarningBold } from 'react-icons/pi';
import { SuccessModal } from './successModal';

export const ApprovalModal = (props: any) => {
  const [success, setSuccess] = useState(false);
  console.log(success);

  const handleSuccess = () => {
    setSuccess(true);
  };

  const handleClose = () => {
    setSuccess(false);
  };

  return (
    <div className="">
      {success ? (
        <SuccessModal onClose={() => setSuccess(false)} />
      ) : (
        <>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-white"
          >
            Transaction Approval
          </Typography>
          <Text
            id="modal-modal-description"
            className="text-[#FB923C] text-xs lg:text-sm md:text-sm mt-2 text-center"
          >
            Once transfer is approved, Jamesmusa.solana will permanently be
            transferred to the new owner.
          </Text>
          <div className="flex flex-col justify-center items-center mt-4 pb-4 w-full">
            <div className="flex flex-col justify-between w-full items-center p-2 bg-[#262626] rounded-lg px-7 py-4 text-sm text-[#A3A3A3] my-4 ">
              <div className="flex justify-between w-full py-2">
                <Text>Estimated Balance Changes</Text>
                <PiShieldWarningBold className="text-white text-lg" />
              </div>
              <div className="flex justify-between w-full py-2">
                No Balance Changes found
              </div>
              <div className="flex justify-between w-full py-2">
                <Text>Network fee</Text>
                <Price>0.00023 SOL</Price>
              </div>
            </div>
            <Button1 className="mx-5" onClick={handleSuccess}>
              Approve Transfer
            </Button1>

            <Button2 className="mx-5" onClick={props.onClose}>
              Cancel
            </Button2>
          </div>
        </>
      )}
    </div>
  );
};

const Text = styled.p``;

const Price = styled.p`
  color: white;
`;

const Button1 = styled.button`
  background-color: var(--green);
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
