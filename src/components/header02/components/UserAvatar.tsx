import styled from '@emotion/styled';

export const UserAvatar = () => {
  return (
    <Wrapper className="overflow-hidden w-16 h-16 lg:w-8 lg:h-8 rounded-full ">
      <Img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        alt="user"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* overflow: hidden;
  width: 31.449px;
  height: 31.449px;
  border-radius: 17px; */
`;

const Img = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
`;
