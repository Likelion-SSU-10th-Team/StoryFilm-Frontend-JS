import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { colors } from "../colors";
import styled from "styled-components";
import Story from "../components/Story";
import film from "../assets/film.jpg";
import button from "../assets/button.jpg";

const Container = styled.div``;

const Body = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 55px;
  width: 100vw;
  height: 100vh;
`;

const Frame = styled.div`
  margin-top: 55px;
  background-color: white;
  width: 900px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ContentBox = styled.div<ContentBoxProps>`
  background-color: ${(props) => props.mainBgColor};
  width: 90%;
  height: 80%;
  margin-bottom: 5%;
`;

const Film = styled.div``;

const EmptyFilm = styled.img`
  width: 100%;
  height: 100%;
`;

const SelectFilm = styled.button`
  border: none;
  background-color: white;
  width: 160px;
  position: absolute;
  bottom: 15px;
  right: 60px;
  &:hover {
    cursor: pointer;
  }
`;

const SelectFilmImg = styled.img`
  width: 100%;
  height: 100%;
`;

interface ContentBoxProps {
  mainBgColor: string;
}

interface HomeProps {
  mainBgColor: string;
}

interface StoriesDataProps {
  id: string;
  photo: string;
}

const Home = ({ mainBgColor }: HomeProps) => {
  const [loading, setLoading] = useState(true);
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

  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <Frame>
          <ContentBox mainBgColor={mainBgColor}>
            {loading ? (
              "loading..."
            ) : stories === [] ? (
              <EmptyFilm src={film} alt="Empty-Film" />
            ) : (
              <Film>
                {stories.map((story) => (
                  <Story id={story.id} key={story.id} photo={story.photo} />
                ))}
              </Film>
            )}
          </ContentBox>
          {stories === [] ? (
            <SelectFilm>
              <SelectFilmImg src={button} alt="Select Film" />
            </SelectFilm>
          ) : null}
        </Frame>
      </Body>
    </Container>
  );
};

export default Home;
