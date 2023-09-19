import styled from '@emotion/styled';
import Add from 'assets/add.png';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const DomainQuestions = () => {
  const list = [
    { name: 'What is Blockchain Name Service (BNS)?' },
    { name: 'How can I get a BNS domain name?' },
    { name: 'How much does it cost to register a BNS domain?' },
    { name: 'What is the maximum length of name can I register?' },
    { name: 'What tokens can be used to purchase a BNS domain?' },
    { name: 'What is Blockchain Name Service (BNS)?' },
    { name: 'Will there be fees in creating a subdomain?' },
    { name: 'Do I have to pay renewal fees?' },
    { name: 'How does auction works in BNS domain?' },
    { name: 'Are BNS domains considered as an NFT?' },
  ];

  return (
    <div className="py-6 px-6 sm:px-14 tracking-wide w-full relative mt-28">
      {/* <Content> */}
      <Title className=" text-2xl lg:text-3xl">
        Frequently Asked Questions
      </Title>
      <div className="flex flex-col gap-5 sm:gap-7 pt-10 sm:pt-14">
        {list.map((item) => (
          <li key={item.name} className="flex gap-1 items-center w-full">
            <div className="p-1.5 mr-3 sm:mr-4 rounded-full bg-white"></div>
            <div className=" text-sm sm:text-lg">{item.name}</div>
            <AiOutlinePlusCircle className="ml-auto text-2xl sm:text-3xl cursor-pointer text-gray-600" />
          </li>
        ))}
      </div>
      {/* </Content> */}
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
  color: #ffb703;
`;

const Ul = styled.ul`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 21px 0px;
  margin-inline-start: auto;
`;

const Item = styled.li`
  color: var(--white);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
`;

const ItemText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

const AddImage = styled.img``;
