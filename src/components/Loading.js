import loadingImg from "../assets/loading.png";
import styled from "styled-components";

const LoadingImg = styled.img`
  width: 10vw;
  height: 16vh;
`;

const Loading = () => {
  return (
    <>
      <LoadingImg src={loadingImg} />
    </>
  );
};

export default Loading;
