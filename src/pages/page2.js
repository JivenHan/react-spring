import styled from "@emotion/styled";

export default function Page2({ twoRef, toPageThree }) {
  return (
    <Page ref={twoRef}>
      <div>
        <span className="title">
          React-spring의 특성 <br />{" "}
        </span>
        <span>
          - 스프링 물리학 기반의 UI 애니메이션 라이브러리 <br />
          - 애니메이션의 곡선이나 지속 시간을 설정하지 않기 때문에 <br />
          시간 기반 애니메이션과는 다르게 실질적이고 자연스러움
        </span>
      </div>
      <img alt="libraries" src="/images/libraries.png" />
      <button className="pageBtn" onClick={toPageThree}>
        2/11
      </button>
    </Page>
  );
}

const Page = styled.div`
  padding: 50px;
  border: 1px solid black;
  position: relative;
  height: 100%;

  .title {
    font-size: 42px;
  }

  span {
    line-height: 140%;
    display: block;
  }

  img {
    margin-left: 150px;
    width: 75%;
  }
`;
