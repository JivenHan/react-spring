import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

const slides = ["images/rock.png", "images/scissors.png", "images/paper.png"];
const nums = ["😁", "😅", "🤣", "😍", "🤪", "😎", "🥳", "👿"];

export default function Page11({ elevenRef }) {
  const [index, setIndex] = useState(0);
  const rspTrans = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((index) => (index + 1) % slides.length),
      1000
    );
    return () => clearTimeout(interval);
  }, []);

  const [numdex, setNumdex] = useState(0);
  const [isRolling, setRolling] = useState(false);
  const numTrans = useTransition(numdex, {
    from: { rotateY: 0 },
    enter: { rotateY: 360 },
    config: { duration: 200 },
  });
  useEffect(() => {
    let numsInterval;
    if (isRolling) {
      numsInterval = setInterval(
        () => setNumdex((numdex) => (numdex + 1) % nums.length),
        200
      );
    }
    return () => clearInterval(numsInterval);
  }, [isRolling]);

  return (
    <Page ref={elevenRef}>
      <div className="code">
        <ImgWrapper>
          {rspTrans((style, i) => (
            <SlideDiv
              style={{
                ...style,
                backgroundImage: `url(${slides[i]})`,
              }}
            />
          ))}
        </ImgWrapper>
        <TransImg alt="trans2" src="/images/transition1.png" />
      </div>
      <div className="screen">
        {numTrans((style, i) => (
          <NumDiv style={style}>{nums[i]}</NumDiv>
        ))}
        <OnOffBtn
          onClick={() => {
            setRolling(!isRolling);
          }}
        />
      </div>
      <button className="pageBtn">11/11</button>
    </Page>
  );
}

const Page = styled.div`
  padding: 30px;
  border: 1px solid black;
  position: relative;
  height: 100%;
`;

const TransImg = styled.img`
  margin-top: 20px;
  width: 600px;
`;

const ImgWrapper = styled(animated.div)`
  width: 160px;
  height: 160px;
`;

const SlideDiv = styled(animated.div)`
  position: absolute;
  top: 30px;
  left: 265px;
  width: 160px;
  height: 160px;
  background-size: cover;
  background-position: center;
`;

const NumDiv = styled(animated.div)`
  position: absolute;
  bottom: 150px;
  right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50px;
  font-size: 180px;
`;

const OnOffBtn = styled(animated.button)`
  position: absolute;
  bottom: 150px;
  right: 80px;
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 40px;
  background: none;
`;
