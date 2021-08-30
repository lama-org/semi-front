import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const SwiperContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
`;

const Main = (): JSX.Element => {
  return (
    <SwiperContainer>
      <Swiper navigation={true} loop={true}>
        {[
          'https://t1.daumcdn.net/cfile/tistory/231235395466C11011?original',
          'http://img.lifestyler.co.kr/uploads/program/seditor/2021/08/f637656764822846028.jpeg',
          'http://img.lifestyler.co.kr/uploads/program/seditor/2021/07/f637632472041903770.jpeg',
        ].map((i) => {
          return (
            <SwiperSlide>
              <Poster src={i} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
};

export default Main;
