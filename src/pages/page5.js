import { useState } from "react";
import styled from "@emotion/styled";
import { useSpring, animated, config } from "react-spring";

export default function Page5({ fiveRef, toPageSix }) {
  const [mass, setMass] = useState(false);
  const [tension, setTension] = useState(false);

  const configDefault1 = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: mass && 400 },
    config: config.default,
  });
  const configMass = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: mass && 400 },
    config: { mass: 5, tension: 170, friction: 26 },
  });

  const configDefault2 = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: tension && 400 },
    config: config.default,
  });
  const configTension = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: tension && 400 },
    config: { mass: 1, tension: 340, friction: 26 },
  });

  return (
    <Page ref={fiveRef}>
      <div className="code">
        <span>
          1) config-mass <br />
          animation 대상이 가지고 있는 무게감 <br />
          mass가 높을수록 움직이는 속도는 줄고 <br />
          튕기는 정도가 심해진다
        </span>
        <span onClick={() => setMass(!mass)}>
          <br />
          default (mass: 1, tension: 170, friction: 26)
        </span>
        <Square1 style={configDefault1} />
        <span>massUp (mass: 2, tension: 170, friction: 26 )</span>
        <Square1 style={configMass} />
      </div>
      <div className="screen">
        <span>
          2) config-tension <br />
          animation 대상에 가해지는 힘 <br />
          tension이 높을수록 빠르게 움직이고 <br />
          튕기는 정도가 약간 심해진다
        </span>
        <span onClick={() => setTension(!tension)}>
          <br />
          default (mass: 1, tension: 170, friction: 26)
        </span>
        <Square2 style={configDefault2} />
        <span>tensionUp (mass: 1, tension: 340, friction: 26)</span>
        <Square2 style={configTension} />
      </div>
      <button className="pageBtn" onClick={toPageSix}>
        5/11
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

const Square1 = styled(animated.div)`
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: #ddbbdd;
  border-radius: 16px;
`;
const Square2 = styled(animated.div)`
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: #bbddbb;
  border-radius: 16px;
`;
