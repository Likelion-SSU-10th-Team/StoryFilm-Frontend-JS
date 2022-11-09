import styled from "styled-components";
import imgone from "../assets/introone.png";
import imgtwo from "../assets/introtwo.png";
import imgthree from "../assets/introthree.png";
import { colors } from "../colors";
import Layout from "../components/Layout";
import { GoLogin } from "../components/navigation";
import { useNavigate } from "react-router";

const Container = styled.div`
  position: relative;
`;

const IntroFirst = styled.img`
  width: 100vw;
  height: auto;
`;
const IntroSecond = styled.img`
  width: 100vw;
  height: auto;
`;
const IntroThird = styled.img`
  width: 100vw;
  height: auto;
`;

const Body = styled.div`
  width: 100vw;
  height: auto;
  z-index: 2;
  position: absolute;
  top: 7%;
`;

const LoginBtn = styled.button`
  width: 24vw;
  height: 8vh;
  z-index: 4;
  background-color: inherit;
  border: none;
  position: absolute;
  top: 86.53%;
  left: 45.5%;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Intro = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/login");
  };
  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <IntroFirst src={imgone} />
        <IntroSecond src={imgtwo} />
        <IntroThird src={imgthree} />
        <LoginBtn onClick={onClick} />
      </Body>
    </Container>
  );
};

export default Intro;
