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
  ScrollSection,
  Wrapper,
} from '../styles/wedding.styles';

const Wedding = () => {
  return (
    <Wrapper id="show-scene-0">
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

        <ScrollSection
          paddingTop={window.innerHeight}
          className="scroll-section"
          // id="scroll-section-0"
        >
          <div className="sticky-elem main-message">
            <p>봄물보다 깊으니라</p>
          </div>

          <div className="sticky-elem main-message">
            <p>갈산보다 놀으니라</p>
          </div>

          <div className="sticky-elem main-message">
            <p>달보다 높으리라</p>
          </div>

          <div className="sticky-elem main-message">
            <p>돌보다 굳으리라</p>
          </div>

          <div className="sticky-elem main-message">
            <p>사랑을 묻는 이 있거든</p>
          </div>

          <div className="sticky-elem main-message">
            <p>
              이대로만 말하리
              <span>-한용운, &lt;사랑&gt;-</span>
            </p>
          </div>

          <div className="sticky-elem main-message">
            <p>
              저희 두 사람이
              <br />
              사랑과 믿음으로 하나되는 날,
            </p>
          </div>

          <div className="sticky-elem main-message">
            <p>
              함께 축복해주시면
              <br />
              감사하겠습니다.
            </p>
          </div>
        </ScrollSection>
      </Contentsbox>
    </Wrapper>
  );
};

export default Wedding;
