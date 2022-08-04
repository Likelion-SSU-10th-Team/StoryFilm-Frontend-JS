import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { colors } from "../colors";
import styled from "styled-components";
import Story from "../components/Story";

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
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div<ContentBoxProps>`
  background-color: ${(props) => props.mainBgColor};
  width: 90%;
  height: 80%;
  margin-bottom: 5%;
`;

const Film = styled.div``;

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
  // const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<StoriesDataProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("../data/stories.json");
      const json = await response.json();
      setStories(json.data.stories);
      console.log(stories);
    })();
    // setLoading(false);
  }, []);

  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <Frame>
          <ContentBox mainBgColor={mainBgColor}>
            {/* {loading ? (
              "loading..."
            ) : (
              <Film>
                {stories.map((story) => (
                  <Story
                    id={stories.id}
                    key={stories.id}
                    photo={stories.photo}
                  />
                ))}
              </Film>
            )} */}
          </ContentBox>
        </Frame>
      </Body>
    </Container>
  );
};

export default Home;
