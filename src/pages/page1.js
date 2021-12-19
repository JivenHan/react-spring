import styled from "@emotion/styled";

export default function Page1({ toPageTwo }) {
  return (
    <Page>
      <HeaderSt>
        <span>React-spring</span>
        <span>Wecode Fullstack 2기 한지훈, 이은정</span>
      </HeaderSt>
      <ul>
        <li>
          props - from, to, loop, delay, pause, reverse <br />
        </li>
        <li>
          config - mass, tenstion, friction, duration, frequency <br />
        </li>
        <li>useSprings</li>
        <li>useChain</li>
        <li>useTrail</li>
        <li>useTransition</li>
      </ul>
      <button className="pageBtn" onClick={toPageTwo}>
        1/11
      </button>
    </Page>
  );
}

const Page = styled.div`
  border: 1px solid black;
  position: relative;
  height: 100%;

  ul {
    padding-top: 40px;
    padding-left: 120px;

    li {
      line-height: 140%;
      padding: 15px;
      font-size: 40px;

      span {
        display: inline-block;
        padding: 10px;
      }
    }
  }
`;

const HeaderSt = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  padding: 40px 70px;
  background-color: #0d6ba8;
  color: #f0d3ad;
  font-size: 35px;
  z-index: 10;
`;
