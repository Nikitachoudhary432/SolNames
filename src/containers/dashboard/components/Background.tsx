import styled from '@emotion/styled';

export const Background = () => {
  return (
    <Wrapper>
      <img src="/ellipse1.svg" alt="" />
      <img src="/ellipse2.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -111;
  inset: 0;

  img {
    position: absolute;

    &:first-of-type {
      top: 0;
      right: 0;
    }
    &:last-of-type {
      bottom: 0;
      width: 100%;
    }
  }
`;
