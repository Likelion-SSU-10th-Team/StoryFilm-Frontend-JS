import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import Layout from "../components/Layout";
import { FilmNavMini, GoRead, MainNavMini } from "../components/navigation";
import shelf from "../assets/shelf.png";
import { Link } from "react-router-dom";

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
  background-color: ${(props) => props.bgColor};
  width: 75%;
  height: 83%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.8);
`;

const ContentBox = styled.div`
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Album = styled.div`
  width: 11vw;
  height: 11vw;
  background-color: grey;

  transform: perspective(190px) rotateX(5deg);
  box-shadow: -10px 5px 24px -1px rgba(0, 0, 0, 0.7);
  background: linear-gradient(to bottom left, #eae3dc, grey);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlbumImg = styled.img`
  width: 50%;
  height: 50%;
`;

const AlbumAndShelf = styled.div`
  width: 100%;
  height: 13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Shelf = styled.img`
  width: 110%;
  height: 13%;
  z-index: 2;
`;

const AlbumTitle = styled.div`
  margin-top: 5%;
  font-weight: 600;
  font-size: large;
`;

const Content = styled.div`
  width: 16vw;
  height: 15vw;
  margin-top: 9%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AlbumDetail = styled(Link)`
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: inherit;
  position: absolute;
`;

const Albums = () => {
  // const [albums, setAlbums] = useState([
  //   {
  //     id: "1",
  //     src: "https://images.unsplash.com/photo-1617611413968-537a2ba4986d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  //     current: false,
  //   },
  //   {
  //     id: "2",
  //     src: "",
  //     current: false,
  //   },
  //   { id: "3", src: null, current: true },
  //   { id: "4", src: null, current: false },
  //   { id: "5", src: null, current: false },
  //   { id: "6", src: null, current: false },
  //   { id: "7", src: null, current: false },
  //   { id: "8", src: null, current: false },
  //   { id: "9", src: null, current: false },
  //   { id: "10", src: null, current: false },
  //   { id: "11", src: null, current: false },
  //   { id: "12", src: null, current: false },
  //   { id: "13", src: null, current: false },
  //   { id: "14", src: null, current: false },
  //   { id: "15", src: null, current: false },
  // ]);

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("/album/");
      const json = await response.json();
      setAlbums(json.albums);
    })();
    setLoading(false);
  }, []);
  console.log(albums);

  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <FilmNavMini />
        <MainNavMini />
        <Frame bgColor={colors.albumBgColor}>
          <ContentBox>
            {albums.map((album) => (
              <Content>
                <AlbumAndShelf key={album.album_id}>
                  <Album>
                    <AlbumImg src="https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" />
                    <AlbumDetail to={`album/${album.album_id}`} />
                  </Album>
                  <Shelf src={shelf} />
                </AlbumAndShelf>
                <AlbumTitle>{album.album_name}</AlbumTitle>
              </Content>
            ))}
          </ContentBox>
        </Frame>
      </Body>
    </Container>
  );
};

export default Albums;
