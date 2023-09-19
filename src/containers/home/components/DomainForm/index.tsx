import styled from '@emotion/styled';

export const DomainForm = () => {
  const inputFields = [
    { label: 'Email', type: 'text' },
    { label: 'Company Name', type: 'text' },
    { label: 'First Name', type: 'text' },
    { label: 'Last Name', type: 'text' },
  ];

  return (
    <div className="mx-auto px-10 tracking-wide sm:px-20 md:w-5/6 lg:w-3/4 py-10">
      <Content>
        <Title className="md:text-5xl sm:text-4xl text-3xl mb-5">
          Signup for Pre-sale Deal
        </Title>
        <Text className="mb-6 sm:mb-8 sm:text-lg md:mb-10 text-center">
          Join the Pre-sale for SolNames, FantomNames, and AvaxNames
        </Text>
        <Form className="grid mb-10 gap-6 md:grid-cols-2 w-full">
          {inputFields.map(({ label, type }) => (
            <FormGroup key={label}>
              <Label>{label}</Label>
              <Input type={type} className=" p-2 sm:p-2.5" />
            </FormGroup>
          ))}
        </Form>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Content>
    </div>
  );
};

const Wrapper = styled.div`
  width: 902px;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  z-index: 1;
  color: #ffff;
  // font-size: 30px;
`;

const Text = styled.p`
  // margin: 20px;
`;
const Row = styled.p`
  display: flex;
  gap: 20px;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const FormGroup = styled.div`
  // margin-bottom: 20px;
`;

const Label = styled.label`
  color: #ffff;
  font-weight: 100;
`;

const Input = styled.input`
  width: 100%;
  color: black;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 7px;
  outline: none;
`;

const SubmitButton = styled.button`
  background-color: #ffb703;
  border: none;
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
