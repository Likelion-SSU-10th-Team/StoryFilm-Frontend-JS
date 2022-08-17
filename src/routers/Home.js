import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { colors } from "../colors";
import styled from "styled-components";
import film from "../assets/film.jpg";
import button from "../assets/button.jpg";
import { AlbumNav, FilmNav } from "../components/navigation";
import OpenedFilm from "../components/MainFilm";

const Container = styled.div``;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vh;
`;

const Frame = styled.div`
  margin-top: 3.5%;
  background-color: white;
  width: 62.5%;
  height: 83%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.8);
`;

const ContentBox = styled.div`
  background-color: ${(props) => props.mainBgColor};
  width: 93%;
  height: 83%;
  margin-bottom: 5.5%;
  box-shadow: inset 0px 2px 5px -2px rgba(0, 0, 0, 0.8);
`;

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

const StoryCounter = styled.div`
  position: absolute;
  right: 6.5%;
  bottom: 5%;
  font-size: larger;
  font-weight: 700;
  color: #545454;
`;

// interface ContentBoxProps {
//   mainBgColor: string;
// }

// interface HomeProps {
//   mainBgColor: string;
//   OpenedFilmProps
// }

// interface StoriesDataProps {
//   id: string;
//   photo: string;
// }

const Home = () => {
  /* const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<StoriesDataProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`../data/stories.json`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await response.json();
      setStories(json.data.stories);
      console.log(stories);
    })();
    setLoading(false);
  }, [stories]);
  */

  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <FilmNav />
        <Frame>
          <ContentBox mainBgColor={colors.mainBgColor}>
            {/* {loading ? (
              "loading..."
            ) : stories === null ? (
              <EmptyFilm src={film} alt="Empty-Film" />
            ) : (
              <OpenedFilm />
            )}  */}
            <OpenedFilm />
          </ContentBox>
          {/* {stories === null ? (
            <SelectFilm>
              <SelectFilmImg src={button} alt="Select Film" />
            </SelectFilm>
          ) : (
            <StoryCounter>{stories.length}/15</StoryCounter>
            )} */}
          <StoryCounter>2/15</StoryCounter>
        </Frame>
        <AlbumNav />
      </Body>
    </Container>
  );
};

export default Home;
