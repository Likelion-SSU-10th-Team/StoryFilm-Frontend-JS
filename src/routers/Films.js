import styled from "styled-components";
import { colors } from "../colors";
import Layout from "../components/Layout";
import { AlbumNavMini, MainNavMini } from "../components/navigation";
import FilmImgSrc from "../assets/filmRing.png";

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

const YearHeader = styled.div`
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
`;

const FilmBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Film = styled.div`
  width: 12%;
  height: 26vh;
  margin-left: 3.5%;
`;

const FilmImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Films = () => {
  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <Frame>
          <ContentBox bgColor={colors.filmBgColor}>
            <YearBox>
              <YearHeader>2020</YearHeader>
              <FilmBox>
                <Film>
                  <FilmImg src={FilmImgSrc} />
                </Film>
                <Film>
                  <FilmImg src={FilmImgSrc} />
                </Film>
                <Film>
                  <FilmImg src={FilmImgSrc} />
                </Film>
                <Film>
                  <FilmImg src={FilmImgSrc} />
                </Film>
                <Film>
                  <FilmImg src={FilmImgSrc} />
                </Film>
                <Film>
                  <FilmImg src={FilmImgSrc} />
                </Film>
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
