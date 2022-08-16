import { useState } from "react";
import styled from "styled-components";
import filmEdge from "../assets/edge.png";
import filmCase from "../assets/case.png";
import filmFrame from "../assets/frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FilmCase = styled.img`
  width: 16.5%;
  height: 36.5%;
  position: relative;
  margin-right: -2%;
  margin-left: 2.2%;
`;

const FilmEdge = styled.img`
  width: 18%;
  height: 24%;
  position: relative;
  margin-top: 2.5%;
  margin-left: -0.1%;
`;

const Film = styled.div`
  width: 16.65%;
  height: 23%;
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
  height: 64.7%;
  z-index: 2;
  right: 5.1%;
  top: 16.4%;
`;

const AddBtn = styled.button`
  position: absolute;
  z-index: 3;
  width: 21%;
  height: 22%;
  border-radius: 50%;
  border: none;
  top: 40%;
  right: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Blur = styled.div`
  position: absolute;
  width: 91.2%;
  height: 64.7%;
  z-index: 2;
  right: 5.1%;
  top: 16.4%;
  background-color: lightgray;
  opacity: 0.8;
`;

// interface PhotoData {
//   id: string;
//   src: null;
//   current: boolean;
//   prev: boolean;
// }

const OpenedFilm = () => {
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

  const navigate = useNavigate();
  const addStory = () => {
    navigate("/write");
  };

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
      {photoes.map((photo) => (
        <Film key={photo.id}>
          <FilmFrame src={filmFrame} />
          <Thumbnail key={photo.id} src={photo.src} />
          {photo.current ? (
            <AddBtn onClick={addStory}>
              <FontAwesomeIcon icon={faCirclePlus} size="2x" />
            </AddBtn>
          ) : null}
          {photo.src !== null ? <Blur /> : null}
        </Film>
      ))}
      <FilmEdge src={filmEdge} />
    </Container>
  );
};

export default OpenedFilm;
