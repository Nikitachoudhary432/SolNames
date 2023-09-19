import styled from '@emotion/styled';
import Ellipse01 from "../../../assets/ellipse01.png"
import Ellipse02 from "../../../assets/ellipse02.png"

export const Background = () => {
  return (
    <Wrapper>
      <img src={Ellipse01} alt="" />
      <img src={Ellipse02} alt="" />
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
      top: 0;
    }
  }
`;
