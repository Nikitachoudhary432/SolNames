import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Ash from 'assets/svg/ash.svg';

export const SuccessModal = (props: any) => {
  console.log('====>', props);
  return (
    <div className="">
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="text-white"
      >
        Transfer Successful
      </Typography>
      <div className="flex  flex-col justify-center items-center my-4 px-6 py-4">
        <img
          src={Ash}
          alt=""
          style={{ width: '250px', paddingRight: '40px' }}
        />
        <Text
          id="modal-modal-description"
          className="text-[#FB923C] text-xs lg:text-sm md:text-sm mt-2 text-center"
        >
          This transfer was successfully done purchased Jamesmusa.nft.solana.
          Click to continue.
        </Text>
      </div>
      <Button2 className="mx-5" onClick={props.onClose}>
        Continue
      </Button2>
    </div>
  );
};

const Text = styled.p``;

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
