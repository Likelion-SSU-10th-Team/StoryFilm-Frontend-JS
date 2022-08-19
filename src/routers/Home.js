import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { colors } from "../colors";
import styled from "styled-components";

import { AlbumNav, FilmNav } from "../components/navigation";
import MainFilm from "../components/MainFilm";
import { Navigate } from "react-router";

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

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [storage, setStorage] = localStorage.getItem("session_id");

  useEffect(() => {
    storage ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);
  console.log(isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <Container>
          <Layout bgColor={colors.bgColor} />
          <Body>
            <FilmNav />
            <Frame>
              <MainFilm />
            </Frame>
            <AlbumNav />
          </Body>
        </Container>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
