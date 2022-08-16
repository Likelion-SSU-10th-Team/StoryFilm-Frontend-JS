import styled from "styled-components";
import { colors } from "../colors";
import Layout from "../components/Layout";
import { AlbumNavMini, MainNavMini } from "../components/navigation";
import FilmImgSrc from "../assets/filmRing.png";
import { useEffect, useState } from "react";

const Container = styled.div``;

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vh;
`;

const Frame = styled.div`
  margin-top: 3.5%;
  background-color: white;
  width: 75%;
  height: 83%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.8);
`;

const ContentBox = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 75%;
  height: 90%;
  border-radius: 20px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const FilmCounter = styled.div`
  width: 13%;
  height: 30%;
  background-color: ;
  border-radius: 20px;
  border: solid 3px ${(props) => props.borderColor};
  margin-top: -34.5%;
`;

const YearBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
`;

const Year = styled.div`
  width: 7vw;
  height: 4vh;
  border-top: solid;
  border-bottom: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 600;
  margin-bottom: 2%;
  position: sticky;
  top: 3%;
`;

const FilmBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Film = styled.div`
  width: 12%;
  height: 26vh;
  margin-left: 3.5%;
  margin-bottom: 3%;
`;

const FilmImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Films = () => {
  // const [loading, setLoading] = useState(true);
  // const [filmsList, setFilmsList] = useState([]);
  // const getFilms = async () => {
  //   const response = await fetch("");
  //   const json = response.json();
  //   setFilmsList(json.data.films);
  // };
  // useEffect(() => {
  //   getFilms();
  //   setLoading(false);
  //   return;
  // }, [filmsList]);

  const filmList = [
    { id: "1", year: "2022", period: "10.05 ~ 11.15" },
    { id: "2", year: "2022", period: "10.05 ~ 11.15" },
    { id: "3", year: "2020", period: "10.05 ~ 11.15" },
    { id: "4", year: "2022", period: "10.05 ~ 11.15" },
    { id: "5", year: "2021", period: "10.05 ~ 11.15" },
    { id: "6", year: "2022", period: "10.05 ~ 11.15" },
    { id: "7", year: "2021", period: "10.05 ~ 11.15" },
    { id: "8", year: "2022", period: "10.05 ~ 11.15" },
    { id: "9", year: "2022", period: "10.05 ~ 11.15" },
    { id: "10", year: "2020", period: "10.05 ~ 11.15" },
    { id: "11", year: "2022", period: "10.05 ~ 11.15" },
    { id: "12", year: "2022", period: "10.05 ~ 11.15" },
    { id: "13", year: "2021", period: "10.05 ~ 11.15" },
    { id: "14", year: "2022", period: "10.05 ~ 11.15" },
    { id: "15", year: "2021", period: "10.05 ~ 11.15" },
    { id: "16", year: "2021", period: "10.05 ~ 11.15" },
    { id: "17", year: "2022", period: "10.05 ~ 11.15" },
    { id: "18", year: "2022", period: "10.05 ~ 11.15" },
    { id: "19", year: "2022", period: "10.05 ~ 11.15" },
    { id: "20", year: "2021", period: "10.05 ~ 11.15" },
    { id: "21", year: "2021", period: "10.05 ~ 11.15" },
    { id: "22", year: "2021", period: "10.05 ~ 11.15" },
    { id: "23", year: "2021", period: "10.05 ~ 11.15" },
    { id: "24", year: "2021", period: "10.05 ~ 11.15" },
    { id: "25", year: "2021", period: "10.05 ~ 11.15" },
  ];

  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <Frame>
          <ContentBox bgColor={colors.filmBgColor}>
            <YearBox>
              <Year>2022</Year>
              <FilmBox>
                {filmList.map((film) =>
                  film.year === "2022" ? (
                    <Film key={film.id}>
                      <FilmImg src={FilmImgSrc} />
                    </Film>
                  ) : null
                )}
              </FilmBox>
            </YearBox>
            <YearBox>
              <Year>2021</Year>
              <FilmBox>
                {filmList.map((film) =>
                  film.year === "2021" ? (
                    <Film key={film.id}>
                      <FilmImg src={FilmImgSrc} />
                    </Film>
                  ) : null
                )}
              </FilmBox>
            </YearBox>
            <YearBox>
              <Year>2020</Year>
              <FilmBox>
                {filmList.map((film) =>
                  film.year === "2020" ? (
                    <Film key={film.id}>
                      <FilmImg src={FilmImgSrc} />
                    </Film>
                  ) : null
                )}
              </FilmBox>
            </YearBox>
          </ContentBox>
          <FilmCounter borderColor={colors.borderColor}></FilmCounter>
        </Frame>
        <MainNavMini />
        <AlbumNavMini />
      </Body>
    </Container>
  );
};

export default Films;
