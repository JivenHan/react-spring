import styled from "@emotion/styled";
import { useState } from "react";
import { useTrail, useTransition, animated, config } from "react-spring";

export default function Page10({ tenRef, toPageEleven }) {
  const hello = ["h", "e", "l", "l", "o"];
  const [isShow, setShow] = useState(false);
  const trail = useTrail(hello.length, {
    config: { mass: 1, tension: 400, friction: 40 },
    opacity: isShow ? 1 : 0,
    width: isShow ? 100 : 0,
  });

  const [toggle, setToggle] = useState(false);
  const transitions = useTransition(toggle, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,
    config: config.stiff,
    onRest: () => setToggle(!toggle),
  });

  return (
    <Page ref={tenRef}>
      <div className="code">
        <span>
          useTrail <br />
          여러개의 springs가 이전의 spring을 따라 움직임
        </span>
        <TrailImg1 alt="trail1" src="/images/trail1.png" />
        <TrailImg2 alt="trail2" src="/images/trail2.png" />
        {trail.map((style, index) => (
          <Square1 key={index} style={style}>
            {hello[index]}
          </Square1>
        ))}
        <Btn1
          onClick={() => {
            setShow(!isShow);
          }}
        >
          목록열기
        </Btn1>
      </div>
      <div className="screen">
        <TransInfo>
          <span>
            useTransition <br />
            list에 item이 추가/제거/업데이트 될 때 동작
            <br />
            <br />
            from: 초기값, optional <br />
            enter: elements에 접근할 때 스타일 <br />
            leave: elements에서 떠날 때 스타일 <br />
            trail: animation이 시작되기 전 delay <br />
          </span>
        </TransInfo>
        <TransImg alt="trans" src="/images/transition.png" />
        {transitions((style, item) =>
          item ? (
            <ToggleBox1 style={style}>
              <span>깜</span>
            </ToggleBox1>
          ) : (
            <ToggleBox1 style={style}>
              <span>빡</span>
            </ToggleBox1>
          )
        )}
      </div>
      <button className="pageBtn" onClick={toPageEleven}>
        10/11
      </button>
    </Page>
  );
}

const Page = styled.div`
  padding: 30px;
  border: 1px solid black;
  position: relative;
  height: 100%;

  span {
    line-height: 140%;
    display: block;
  }
`;

const TrailImg1 = styled.img`
  margin-top: 20px;
  display: block;
  width: 500px;
`;

const TrailImg2 = styled.img`
  margin-bottom: 20px;
  display: block;
  width: 500px;
`;

const TransInfo = styled.div`
  line-height: 120%;
`;

const Btn1 = styled.button`
  position: absolute;
  bottom: 240px;
  right: 50px;
  padding: 12px;
  border: none;
  border-radius: 15px;
  background-color: #eeffdd;
  font-size: 30px;
  cursor: pointer;
`;

const Square1 = styled(animated.button)`
  display: inline-block;
  margin-top: 70px;
  margin-right: 1px;
  width: 100px;
  height: 100px;
  border: 1px solid #ddddbb;
  border-radius: 12px;
  background-color: #ffffdd;
  color: #a0b0c6;
  font-size: 50px;
`;

const TransImg = styled.img`
  display: block;
  margin-top: 20px;
  width: 500px;
`;

const ToggleBox1 = styled(animated.div)`
  position: absolute;
  right: 80px;
  bottom: 360px;
  color: #6a5493;
  font-size: 50px;
`;
