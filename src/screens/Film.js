import styled from "styled-components";
import { colors } from "../colors";
import CollectedFilm from "../components/CollectedFilm";
import Layout from "../components/Layout";
import { AlbumNavMini, GoBack, MainNavMini } from "../components/navigation";

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
  width: 88%;
  height: 90%;
  border-radius: 20px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const BtnDiv = styled.div`
  width: 92%;
  height: 8%;
  margin-top: 4%;
  display: flex;
  justify-content: flex-start;
`;

const FilmBox = styled.div`
  margin-top: 2%;
  width: 80%;
`;

const Film = () => {
  return (
    <>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <Frame>
          <ContentBox bgColor={colors.filmBgColor}>
            <BtnDiv>
              <GoBack />
            </BtnDiv>
            <FilmBox>
              <CollectedFilm />
            </FilmBox>
          </ContentBox>
        </Frame>
        <MainNavMini />
        <AlbumNavMini />
      </Body>
    </>
  );
};

export default Film;
