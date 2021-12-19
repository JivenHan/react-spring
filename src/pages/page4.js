import { useState } from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "@react-spring/web";

export default function Page4({ fourRef, toPageFive }) {
  const loopObj = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 400 },
  });

  const [isPaused, setPuased] = useState(false);
  const pause = useSpring({
    loop: { reverse: true },
    from: { rotateX: 0 },
    to: { rotateX: 360 },
    delay: 500,
    pause: isPaused,
  });

  return (
    <Page ref={fourRef}>
      <div className="code">
        <span>
          loop는 애니메이션이 한 번 동작한 후 <br />
          true일 경우 반복한다. <br />
          값이 reverse: true일 경우, <br />
          from -&gt; to, to -&gt; from으로 동작을 반복한다 <br />
        </span>
        <LoopObj alt="loopObj" src="images/loopObj.png" />
        <Square style={loopObj} />
      </div>
      <div className="screen">
        <span>
          pause가 true일 경우 애니메이션을 즉시 중지한다 <br />
          중지 후 false가 되면, <br />
          진행중이던 동작을 이어서 한다 <br />
        </span>
        <Pause alt="pause" src="images/pause.png" />
        <Square3 style={pause} />
        <PauseBtn onClick={() => setPuased(!isPaused)}>Pause</PauseBtn>
      </div>
      <button className="pageBtn" onClick={toPageFive}>
        4/11
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

const LoopObj = styled.img`
  display: block;
  width: 400px;
`;

const Square = styled(animated.div)`
  margin-top: 20px;
  width: 100px;
  height: 100px;
  background-color: #bbccdd;
  border-radius: 16px;
`;

const Pause = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 500px;
`;

const Square3 = styled(animated.div)`
  margin-bottom: 100px;
  width: 150px;
  height: 150px;
  background-color: #cccccc;
  border-radius: 16px;
`;

const PauseBtn = styled.button`
  position: absolute;
  bottom: 230px;
  right: 160px;
  padding: 12px;
  border: none;
  border-radius: 15px;
  background-color: #ffdde5;
  font-size: 30px;
  cursor: pointer;
`;
