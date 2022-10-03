import React from 'react';
import Snowfall from 'react-snowfall';
import {
  Contentsbox,
  Datetext,
  DateTextBox,
  ImageLine1,
  ImageLine2,
  InfoText,
  InfoTextbox,
  MainBanner,
  MainImageBox,
  Wrapper,
} from '../styles/wedding.styles';

const Wedding = () => {
  return (
    <Wrapper>
      <Contentsbox>
        <MainBanner boxHeight={window.innerHeight}>
          <DateTextBox>
            <Datetext>
              석 금 용<span>and</span>천 화 영
            </Datetext>
          </DateTextBox>
          <MainImageBox>
            <Snowfall snowflakeCount={30} />
            <ImageLine1 />
            <ImageLine2 />
          </MainImageBox>
          <InfoTextbox>
            <InfoText>
              <span>2022.11.12 PM 03:30</span>
              <span>엘루체컨벤션 6층 스텔라하우스</span>
            </InfoText>
          </InfoTextbox>
        </MainBanner>
      </Contentsbox>
    </Wrapper>
  );
};

export default Wedding;
