import styled from '@emotion/styled';

export const DomainCell = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <img src="/solana.png" alt="" />
      <span>{name}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    top: 4px;
  }

  span {
    display: inline-block;
    margin-left: 20px;
  }
`;
