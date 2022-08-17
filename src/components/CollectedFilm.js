import { useState } from "react";
import styled from "styled-components";
import filmEdge from "../assets/edge.png";
import filmCase from "../assets/case.png";
import filmFrame from "../assets/frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { GoRead } from "./navigation";

const Container = styled.div`
  display: flex;
`;

const Films = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1.2%;
`;

const FilmCase = styled.img`
  width: 13%;
  height: 25%;
  margin-right: -2%;
  margin-left: 2.2%;
`;

const FilmEdge = styled.img`
  width: 18%;
  height: 26%;
  position: relative;
  margin-top: 2.8%;
  margin-left: -0.1%;
`;

const Film = styled.div`
  width: 16.65%;
  height: 26%;
  position: relative;
  margin-top: 3%;
`;

const FilmFrame = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Thumbnail = styled.img`
  position: absolute;
  width: 91.2%;
  height: 65.8%;
  z-index: 2;
  right: 5.1%;
  top: 17%;
`;

const CollectedFilm = () => {
  const [photoes, setPhotoes] = useState([
    {
      id: "1",
      src: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
      current: false,
    },
    {
      id: "2",
      src: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
      current: false,
    },
    { id: "3", src: null, current: true },
    { id: "4", src: null, current: false },
    { id: "5", src: null, current: false },
    { id: "6", src: null, current: false },
    { id: "7", src: null, current: false },
    { id: "8", src: null, current: false },
    { id: "9", src: null, current: false },
    { id: "10", src: null, current: false },
    { id: "11", src: null, current: false },
    { id: "12", src: null, current: false },
    { id: "13", src: null, current: false },
    { id: "14", src: null, current: false },
    { id: "15", src: null, current: false },
  ]);

  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch(`../data/stories.json`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       });
  //       const json = await response.json();
  //       setPhotoes(json.data.stories);
  //       console.log(photoes);
  //     })();
  //   }, [photoes]);

  return (
    <Container>
      <FilmCase src={filmCase} />
      <Films>
        {photoes.map((photo) => (
          <Film key={photo.id}>
            <FilmFrame src={filmFrame} />
            <Thumbnail key={photo.id} src={photo.src} />
            <GoRead />
          </Film>
        ))}
        <FilmEdge src={filmEdge} />
      </Films>
    </Container>
  );
};

export default CollectedFilm;
