import styled from "@emotion/styled";
import { useSprings, animated } from "react-spring";
import data from "./data";

export default function Page8({ eightRef, toPageNine }) {
  const springs = useSprings(data.length, data);
  return (
    <Page ref={eightRef}>
      <div className="code">
        <span>
          useSprings <br />
          각각 고유한 구성을 가진 여러 개의 스프링 생성 <br />
          주로 고정된 목록 등에 사용
        </span>
        <div style={{ display: "flex" }}>
          {springs.map((spring, index) => (
            <SpringsDiv key={data[index].id} style={spring}>
              {data[index].text}
            </SpringsDiv>
          ))}
        </div>
      </div>
      <div className="screen">
        <SpringsImg1 alt="springsImg1" src="/images/springs1.png" />
        <SpringsImg2 alt="springsImg1" src="/images/springs2.png" />
      </div>
      <button className="pageBtn" onClick={toPageNine}>
        8/11
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

const SpringsDiv = styled(animated.div)`
  width: 150px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpringsImg1 = styled.img``;
const SpringsImg2 = styled.img``;
