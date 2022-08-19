import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { colors } from "../colors";
import styled from "styled-components";
import line from "../assets/line.png";
import clip from "../assets/clip.png";
import filmframe from "../assets/frame.png";
import axios from "axios";
import login from "../assets/login.png";
import { useNavigate } from "react-router";
const Container = styled.div``;

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 5vw;
  width: 90vw;
  height: 100vh;
`;
const Btn = styled.button`
  position: absolute;
  width: 10vw;
  height: 3vw;
  margin-top: 35vw;
  margin-left: 90vw;
  background-color: #817366;
  border-radius: 1vw;
  padding-left: 2.6vw;
  font-size: 1vw;
  color: white;
`;
const Img = styled.img`
  position: absolute;
  width: 3vw;
  height: 1.8vw;
  margin-top: 35.8vw;
  margin-left: 83.7vw;
`;
const Frame = styled.div`
  margin-left: 7%;
  margin-top: 1.5%;
  background-color: white;
  width: 70%;
  height: 83%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  align-items: center;
  background-color: #f0ece8;
  width: 75%;
  height: 80%;
  justify-content: space-evenly;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Total = styled.div`
  margin-left: 0.6vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Line = styled.img`
  margin-top: -11.5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 2.5vw;
  width: 141%;
`;

const Clip = styled.img`
  width: 5%;
  position: absolute;
  z-index: 4;
  margin: 0 auto;
  margin-top: -13vw;
`;
const Filmframe = styled.img`
  margin-top: 1%;
  width: 80%;
  height: 100%;
  z-index: 1;
  position: absolute;
`;
const FilmClip = styled.div`
  margin-bottom: 40%;
  position: relative;
  width: 14vw;
  height: 18vh;
  margin-right: 0;

  margin-top: 10%;
  border-top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1% 3%;
`;
const Thumbnail = styled.img`
  position: absolute;
  width: 67.3%;
  height: 63%;
  marigin-top: 6vw;
  z-index: 2;
`;
const Print = () => {
  const navigate = useNavigate();
  const [photoes, setPhotoes] = useState([]);
  const onClick = () => {
    navigate("/");
  };
  axios
    .get(
      "https://port-0-backend-django-1k5zz25l6f9nen1.gksl1.cloudtype.app/film/inhwa"
    )
    .then((res) => {
      console.log(res);
      setPhotoes(res.data.diary);
      console.log(photoes);
    });
  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <Frame>
          <ContentBox>
            {photoes.map((photo) => (
              <Total key={photo.diary}>
                <Line src={line} />
                <Clip src={clip} />

                <FilmClip key={photo.diary}>
                  <Filmframe src={filmframe} />
                  <Thumbnail src={photo.image} />
                </FilmClip>
              </Total>
            ))}
          </ContentBox>
        </Frame>
        <Btn onClick={onClick}> 인 화 완 료</Btn>
        <Img src={login} />
      </Body>
    </Container>
  );
};
export default Print;
