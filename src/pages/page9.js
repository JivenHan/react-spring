import React from "react";
import { useSpring, animated, useChain, useSpringRef } from "@react-spring/web";
import styled from "styled-components";

export default function Page9({ nineRef, toPageTen }) {
  const firstTextRef = useSpringRef();
  const secondTextRef = useSpringRef();
  const thirdTextRef = useSpringRef();
  const firstStyle = useAnimation(firstTextRef);
  const secondStyle = useAnimation(secondTextRef);
  const thirdStyle = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      transform: "scale(2.0)",
    },
    ref: thirdTextRef,
  });
  useChain([firstTextRef, secondTextRef, thirdTextRef]);
  return (
    <Page ref={nineRef}>
      <div className="code">
        <span>
          useChain <br />
          spring들의 순서를 정해주며, <br />
          여러 개의 스프링 생성 시차 애니메이션에 사용된다 <br />
          스프링들을 묶어주기 위해 springRef를 사용한다
        </span>
        <Wrapper>
          <Text style={firstStyle}>Good</Text>
          <Text style={secondStyle}>Bye</Text>
          <Text style={thirdStyle}>2021!👋</Text>
        </Wrapper>
        <ChainImg1 alt="chainImg1" src="/images/useChain1.png" />
      </div>
      <div className="screen">
        <ChainImg2 alt="chainImg2" src="/images/useChain2.png" />
      </div>
      <button className="pageBtn" onClick={toPageTen}>
        9/11
      </button>
    </Page>
  );
}

const Page = styled.div`
  border: 1px solid black;
  position: relative;
  height: 100%;

  span {
    line-height: 140%;
    display: block;
  }
`;
const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: "scale(0.2)",
    },
    to: [
      {
        opacity: 1,
        transform: "scale(2.0)",
      },
      {
        opacity: 0,
        transform: "scale(0.5)",
      },
    ],
    ref: ref,
  });
  return spring;
};

const Wrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

const Text = styled(animated.h1)`
  position: absolute;
`;

const ChainImg1 = styled.img`
  margin-left: 30px;
  width: 520px;
`;

const ChainImg2 = styled.img`
  width: 400px;
`;
