import { useState } from "react";
import styled from "@emotion/styled";
import { useSpring, animated, config } from "react-spring";

export default function Page6({ sixRef, toPageSeven }) {
  const [friction, setFriction] = useState(false);
  const [double, setDouble] = useState(false);
  const configDefault3 = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: friction && 400 },
    config: config.default,
  });
  const configFriction = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: friction && 400 },
    config: { mass: 1, tension: 170, friction: 52 },
  });

  const configDefault4 = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: double && 400 },
    config: config.default,
  });
  const configDouble = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: double && 400 },
    config: { mass: 2, tension: 340, friction: 52 },
  });

  return (
    <Page ref={sixRef}>
      <div className="code">
        <span>
          3) config-friction <br />
          animation의 움직임에 대한 저항도 <br />
          friction 높을수록 느리게 움직이고 <br />
          튕기는 정도가 많이 줄어든다
        </span>
        <span onClick={() => setFriction(!friction)}>
          <br />
          default (mass: 1, tension: 170, friction: 26)
        </span>
        <Square3 style={configDefault3} />
        <span>frictionUp (mass: 1, tension: 170, friction: 52 )</span>
        <Square3 style={configFriction} />
      </div>
      <div className="screen">
        <span>
          4) mass-tension-friction의 관계 <br />
          기본값과 비율이 같다면 기본값과 똑같이 움직인다 <br />
          세 가지 수치는 서로 상호작용 하기 때문에 <br />
          다같이 설정해주는 것이 바람직하다고 생각
        </span>
        <span onClick={() => setDouble(!double)}>
          <br />
          default (mass: 1, tension: 170, friction: 26)
        </span>
        <Square4 style={configDefault4} />
        <span>allDouble (mass: 2, tension: 340, friction: 52)</span>
        <Square4 style={configDouble} />
      </div>
      <button className="pageBtn" onClick={toPageSeven}>
        6/11
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

const Square3 = styled(animated.div)`
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: #bbccdd;
  border-radius: 16px;
`;
const Square4 = styled(animated.div)`
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: #ddddbb;
  border-radius: 16px;
`;
