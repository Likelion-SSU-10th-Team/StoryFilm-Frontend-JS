import { useEffect, useState } from "react";
import styled from "styled-components";
import filmEdge from "../assets/edge.png";
import filmCase from "../assets/case.png";
import filmFrame from "../assets/frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import film from "../assets/film.jpg";
import button from "../assets/button.jpg";
import { colors } from "../colors";
import printImg from "../assets/print.png";

const EmptyFilm = styled.img`
  width: 100%;
  height: 100%;
`;

const SelectFilm = styled.button`
  border: none;
  background-color: white;
  width: 11.5vw;
  height: 6.25vh;
  position: absolute;
  bottom: 2.5%;
  right: 5%;
  &:hover {
    cursor: pointer;
  }
`;

const SelectFilmImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ContextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${(props) => props.mainBgColor};
  width: 93%;
  height: 83%;
  margin-bottom: 5.5%;
  box-shadow: inset 0px 2px 5px -2px rgba(0, 0, 0, 0.8);
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
  z-index: 5;
  width: 21%;
  height: 22%;
  border-radius: 50%;
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

const StoryCounter = styled.div`
  position: absolute;
  right: 6.5%;
  bottom: 5%;
  font-size: larger;
  font-weight: 700;
  color: #545454;
`;

const PrintBtn = styled.button`
  border: none;
  background-color: white;
  width: 11.5vw;
  height: 6.5vh;
  position: absolute;
  bottom: 2.5%;
  right: 5%;
  &:hover {
    cursor: pointer;
  }
`;

const PrintImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MainFilm = () => {
  const [photoes, setPhotoes] = useState([
    { diary: "1", image: null, curr: true },
    { diary: "2", image: null, curr: true },
    { diary: "3", image: null, curr: true },
    { diary: "4", image: null, curr: true },
    { diary: "5", image: null, curr: true },
    { diary: "6", image: null, curr: true },
    { diary: "7", image: null, curr: true },
    { diary: "8", image: null, curr: true },
    { diary: "9", image: null, curr: true },
    { diary: "10", image: null, curr: true },
    { diary: "11", image: null, curr: true },
    { diary: "12", image: null, curr: true },
    { diary: "13", image: null, curr: true },
    { diary: "14", image: null, curr: true },
    { diary: "15", image: null, curr: true },
  ]);

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetch("/film/");
      const json = await response.json();

      json.curr_film ? setFilms(null) : setFilms(json);
      const result = json.contents;
      const cnt = result.length;
      setCount(cnt);
      const array = result.concat(photoes.splice(11, 15 - cnt));

      setPhotoes(array);
    })();

    setLoading(false);
  }, []);
  console.log(films);

  const navigate = useNavigate();
  const goPrint = () => {
    navigate("/print");
  };
  const goSelect = () => {
    navigate("/select");
  };
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

  return loading ? (
    "loading..."
  ) : films.curr_film === null ? (
    <>
      <ContextBox mainBgColor={colors.mainBgColor}>
        <EmptyFilm src={film} alt="Empty-Film" />
      </ContextBox>
      <SelectFilm onClick={goSelect}>
        <SelectFilmImg src={button} alt="Select Film" />
      </SelectFilm>
    </>
  ) : (
    <>
      <ContextBox mainBgColor={colors.mainBgColor}>
        <FilmCase src={filmCase} />
        {photoes.map((photo) => (
          <Film key={photo.diary}>
            <FilmFrame src={filmFrame} />
            <Thumbnail src={photo.image} />
            {count === photoes.indexOf(photo) ? (
              <AddBtn onClick={addStory}>
                <FontAwesomeIcon icon={faCirclePlus} size="2x" />
              </AddBtn>
            ) : null}
            {photo.image !== null ? <Blur /> : null}
          </Film>
        ))}
        <FilmEdge src={filmEdge} />
      </ContextBox>
      {count === 15 ? (
        <PrintBtn onClick={goPrint}>
          <PrintImg src={printImg} />
        </PrintBtn>
      ) : (
        <StoryCounter>
          {count}/{films.film_size}
        </StoryCounter>
      )}
    </>
  );
};

export default MainFilm;
