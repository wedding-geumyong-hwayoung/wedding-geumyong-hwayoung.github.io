import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Contentsbox = styled.div`
  margin: 0 auto;
  max-width: 700px;
  background: #fff url('/images/background-fabric.png');
`;

export const MainBanner = styled.section`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`;

export const DateTextBox = styled.div`
  position: relative;
  height: 100px;
`;

export const Datetext = styled.p`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
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
  background: url('/images/main.png') top center / cover no-repeat;
`;

export const InfoTextbox = styled.div`
  position: relative;
  height: 100px;
`;

export const InfoText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
