import { useState } from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "@react-spring/web";

export default function Page3({ threeRef, toPageFour }) {
  const [isWide, setWide] = useState(false);
  const wider = useSpring({
    to: { width: isWide ? 400 : 0, height: isWide ? 100 : 0 },
    duration: 500,
  });

  const toArray = useSpring({
    loop: true,
    from: { x: 0, y: 0 },
    to: [{ x: 100 }, { y: 100 }, { x: 0 }, { y: 0 }],
    config: { duration: 500 },
  });

  const delyed = useSpring({
    loop: { reverse: true },
    delay: 1000,
    from: { rotateX: 0, rotateY: 0 },
    to: { rotateX: 90, rotateY: 90 },
  });

  return (
    <Page ref={threeRef}>
      <div className="code">
        <span>
          - props의 type - <br />
          from: obj <br />
          to: obj/fn/array(obj) <br />
          delay: number/fn <br />
          loop: obj/fn/bool <br />
          reverse: bool <br />
          pause: bool <br />
          config: obj/fn
        </span>
        <span>
          <br />
          animation은 from에서 to로 동작한다 <br />
          from은 경우에 따라 생략할 수 있다 <br />
        </span>
        <Wide alt="wide" src="images/wide.png" />
        <WideBtn
          onClick={() => {
            setWide(!isWide);
          }}
        >
          넓게
        </WideBtn>
        <Square1 style={wider} />
      </div>
      <div className="screen">
        <span>
          to에 배열을 넣을 경우, 요소의 순서대로 움직인다 <br />
        </span>
        <ToArray alt="toArray" src="images/toArray.png" />
        <Square2 style={toArray} />
        <span>delay는 애니메이션이 시작하기 전의 시간이다</span>
        <Delay alt="delay" src="images/delay.png" />
        <Square3 style={delyed} />
      </div>
      <button className="pageBtn" onClick={toPageFour}>
        3/11
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

const Wide = styled.img`
  display: block;
  margin-bottom: 20px;
  width: 500px;
`;

const WideBtn = styled.button`
  position: absolute;
  bottom: 90px;
  left: 50px;
  padding: 12px;
  border: none;
  border-radius: 15px;
  background-color: #bbccdd;
  font-size: 20px;
  cursor: pointer;
  font-size: 30px;
`;

const Square1 = styled(animated.div)`
  margin-left: 100px;
  background-color: #bbddcc;
  border-radius: 15px;
`;

const ToArray = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 500px;
`;

const Square2 = styled(animated.div)`
  margin-bottom: 120px;
  width: 100px;
  height: 100px;
  background-color: #ffdddd;
  border-radius: 16px;
`;

const Delay = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 400px;
`;

const Square3 = styled(animated.div)`
  position: absolute;
  right: 80px;
  bottom: 100px;
  width: 150px;
  height: 150px;
  background-color: #cccccc;
  border-radius: 16px;
`;
