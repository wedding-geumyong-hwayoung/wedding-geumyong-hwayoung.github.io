import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  &#show-scene-0 #scroll-section-0 .sticky-elem {
    display: block;
  }
`;

export const Contentsbox = styled.div`
  margin: 0 auto;
  max-width: 700px;
  background: #fff url('/images/background-fabric.png');
`;

export const MainBanner = styled.section<{ boxHeight: number }>`
  display: flex;
  flex-flow: column nowrap;
  height: ${(props) => `${props.boxHeight}px`};
`;

export const TitleTextBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 15px;
  height: 100px;
`;

export const TitleText = styled(motion.p)`
  position: relative;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 20px;
  color: #868e96;

  span {
    display: inline-block;
    margin: 0 10px;
    font-family: 'Passions Conflict', cursive;
    font-size: 30px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 80px;
    height: 1px;
    background-color: #000;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 0;
    width: 80px;
    height: 1px;
    background-color: #000;
  }
`;

export const MainImageBox = styled.div`
  flex: 1;
  position: relative;
  background: url('/images/main.png') top center / cover no-repeat;
`;

export const ImageLine1 = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 98%;
  height: 98%;
  border: 3px solid #eee;
`;

export const ImageLine2 = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 95%;
  border: 1px solid #eee;
`;

export const InfoTextbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const InfoText = styled(motion.p)`
  width: 100%;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  color: #868e96;

  span {
    display: block;
  }
`;

export const ScrollSection = styled.section<{ paddingTop: number }>`
  padding-top: ${(props) => `${props.paddingTop / 2}px`};

  p {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 23px;
    font-weight: 700;
    text-align: center;
    line-height: 1.5;

    @media screen and (min-width: 700px) {
      font-size: 35px;
    }

    span {
      font-size: 16px;
      margin-top: 15px;

      @media screen and (min-width: 700px) {
        font-size: 20px;
      }
    }
  }

  & .main-message {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 3em;
  }

  & .sticky-elem {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
