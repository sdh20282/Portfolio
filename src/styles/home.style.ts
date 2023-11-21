import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  font-family: 'Noto Sans KR', sans-serif;
`;

export const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y proximity;
  overflow-y: scroll;
`;

export const Section = styled.section`
  height: 100vh;

  scroll-snap-align: start;
`;