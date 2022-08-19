import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { colors } from "../colors";
import Layout from "../components/Layout";
import {
  FilmNavMini,
  GoBack,
  GoRead,
  MainNavMini,
} from "../components/navigation";
import prevPageImg from "../assets/prevPage.png";
import currPageImg from "../assets/currPage.png";
import photoImg from "../assets/albumPhoto.png";
import bookmarkImg from "../assets/bookmark.png";

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
  background-color: ${(props) => props.bgColor};
  width: 75%;
  height: 83%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.8);
`;
const BtnDiv = styled.div`
  width: 92%;
  height: 8%;
  margin-top: 4%;
  display: flex;
  justify-content: flex-start;
`;
const Book = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const PrevPage = styled.img`
  height: 95%;
  width: 12%;
`;
const ContentBox = styled.div`
  width: 80%;
  height: 100%;
  margin-left: -2%;
  margin-right: -1%;
  position: relative;
`;
const CurrPage = styled.img`
  width: 100%;
  height: 100%;
`;
const BookmarkDiv = styled.div`
  width: 10%;
  height: 22%;
  margin-bottom: 40%;
  position: relative;
`;
const BookmarkText = styled.div`
  width: 55%;
  height: 80%;
  writing-mode: vertical-rl;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
`;

const Bookmark = styled.img`
  width: 100%;
  height: 100%;
`;

const DiaryBox = styled.div`
  width: 80%;
  height: 90%;
  position: absolute;
  top: 10%;
  left: 10%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Diary = styled.div`
  width: 30%;
  height: 32%;
  margin: 4% 1.5%;
  position: relative;
`;

const DiaryImg = styled.img`
  width: 100%;
  height: 85%;
  background-color: inherit;
`;
const DiaryDate = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DiaryThumbnail = styled.img`
  width: 80%;
  height: 57%;
  z-index: 2;
  position: absolute;
  top: 29%;
  left: 10%;
`;

const Album = () => {
  const [diaries, setDiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(`/album/${id}`);
      const json = await response.json();
      setDiaries(json.diaries);
    })();
    setLoading(false);
  }, []);
  console.log(diaries);
  return (
    <>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <FilmNavMini />
        <MainNavMini />
        <Frame bgColor={colors.albumBgColor}>
          <BtnDiv>
            <GoBack />
          </BtnDiv>
          <Book>
            <PrevPage src={prevPageImg} />
            <ContentBox>
              <CurrPage src={currPageImg} />
              <DiaryBox>
                {diaries.map((diary) => (
                  <Diary key={diary.diary_id}>
                    <DiaryDate>{diary.created_at}</DiaryDate>
                    <DiaryImg src={photoImg} />
                    <DiaryThumbnail src={diary.image} />
                    <GoRead />
                  </Diary>
                ))}
              </DiaryBox>
            </ContentBox>
            <BookmarkDiv>
              <Bookmark src={bookmarkImg} />
              <BookmarkText>일상</BookmarkText>
            </BookmarkDiv>
          </Book>
        </Frame>
      </Body>
    </>
  );
};

export default Album;
