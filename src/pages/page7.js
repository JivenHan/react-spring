import { useState } from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "@react-spring/web";

export default function Page7({ sevenRef, toPageEight }) {
  const duration = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 400 },
    config: { mass: 5, tension: 1000, friction: 10, duration: 2000 },
  });

  const [isShaking, setShaking] = useState(false);
  const shakeSpring = useSpring({
    from: { rotateZ: isShaking ? -5 : 0 },
    to: { rotateZ: isShaking ? 5 : 0 },
    loop: { reverse: isShaking },
    config: { frequency: 0.03 },
  });
  function handleShake() {
    setShaking(!isShaking);
  }
  async function shake3minute() {
    setShaking(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setShaking(false);
  }

  return (
    <Page ref={sevenRef}>
      <div className="code">
        <span>
          5) config-duration <br />
          animation이 동작하는데 걸리는 시간 <br />
          모든 spring physics를 대신한다 <br />
        </span>
        <Duration alt="duration" src="images/duration.png" />
        <SquareDu style={duration} />
      </div>
      <div className="screen">
        <span>
          5) config-frequency <br />
          1초당 bounce 하는 수를 가리킨다 <br />
        </span>
        <ShakeImg alt="shake1" src="images/shake.png" />
        <ShakeBtn1 onClick={handleShake}>흔들흔들</ShakeBtn1>
        <ShakeBtn2 onClick={shake3minute}>3초간흔들</ShakeBtn2>
        <SquareFr style={shakeSpring} />
      </div>
      <button className="pageBtn" onClick={toPageEight}>
        7/11
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

const Duration = styled.img`
  margin-top: 20px;
  width: 600px;
`;

const SquareDu = styled(animated.div)`
  margin-top: 30px;
  width: 150px;
  height: 150px;
  background-color: #ddbbcc;
  border-radius: 16px;
`;

const SquareFr = styled(animated.div)`
  margin-top: 30px;
  margin-left: 370px;
  width: 150px;
  height: 150px;
  background-color: #bbdddd;
  border-radius: 16px;
`;

const ShakeImg = styled.img`
  display: block;
  width: 530px;
`;

const ShakeBtn1 = styled.button`
  position: absolute;
  bottom: 250px;
  left: 50px;
  padding: 12px;
  border: none;
  border-radius: 15px;
  background-color: #ddbbdd;
  font-size: 20px;
  cursor: pointer;
`;

const ShakeBtn2 = styled.button`
  position: absolute;
  bottom: 180px;
  left: 50px;
  padding: 12px;
  border: none;
  border-radius: 15px;
  background-color: #ddbbdd;
  font-size: 20px;
  cursor: pointer;
`;
