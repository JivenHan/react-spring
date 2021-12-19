import { useRef } from "react";
import styled from "@emotion/styled";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import Page9 from "./page9";
import Page10 from "./page10";
import Page11 from "./page11";

export default function Spring() {
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();
  const sixRef = useRef();
  const sevenRef = useRef();
  const eightRef = useRef();
  const nineRef = useRef();
  const tenRef = useRef();
  const elevenRef = useRef();

  function toPageTwo() {
    window.scrollTo({
      top: twoRef.current.offsetTop,
    });
  }
  function toPageThree() {
    window.scrollTo({
      top: threeRef.current.offsetTop,
    });
  }
  function toPageFour() {
    window.scrollTo({
      top: fourRef.current.offsetTop,
    });
  }
  function toPageFive() {
    window.scrollTo({
      top: fiveRef.current.offsetTop,
    });
  }
  function toPageSix() {
    window.scrollTo({
      top: sixRef.current.offsetTop,
    });
  }
  function toPageSeven() {
    window.scrollTo({
      top: sevenRef.current.offsetTop,
    });
  }
  function toPageEight() {
    window.scrollTo({
      top: eightRef.current.offsetTop,
    });
  }
  function toPageNine() {
    window.scrollTo({
      top: nineRef.current.offsetTop,
    });
  }
  function toPageTen() {
    window.scrollTo({
      top: tenRef.current.offsetTop,
    });
  }
  function toPageEleven() {
    window.scrollTo({
      top: elevenRef.current.offsetTop,
    });
  }

  return (
    <BodySt>
      <Page1 toPageTwo={toPageTwo} />
      <Page2 twoRef={twoRef} toPageThree={toPageThree} />
      <Page3 threeRef={threeRef} toPageFour={toPageFour} />
      <Page4 fourRef={fourRef} toPageFive={toPageFive} />
      <Page5 fiveRef={fiveRef} toPageSix={toPageSix} />
      <Page6 sixRef={sixRef} toPageSeven={toPageSeven} />
      <Page7 sevenRef={sevenRef} toPageEight={toPageEight} />
      <Page8 eightRef={eightRef} toPageNine={toPageNine} />
      <Page9 nineRef={nineRef} toPageTen={toPageTen} />
      <Page10 tenRef={tenRef} toPageEleven={toPageEleven} />
      <Page11 elevenRef={elevenRef} />
    </BodySt>
  );
}

const BodySt = styled.div`
  height: 100vh;
  font-size: 30px;

  .code {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 50%;
    height: 100%;
    padding: 50px;
  }

  .screen {
    position: absolute;
    right: 0;
    display: inline-block;
    width: 50%;
    height: 100%;
    padding: 50px;
  }

  .pageBtn {
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 90px;
    height: 40px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: skyblue;
    font-size: 25px;
    cursor: pointer;
  }
`;
