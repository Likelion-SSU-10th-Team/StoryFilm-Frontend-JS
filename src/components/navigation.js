import { useNavigate } from "react-router";
import styled from "styled-components";
import filmsNavImg from "../assets/filmBtn.png";
import albumNavImg from "../assets/albumBtn.png";
import mainNavMiniImg from "../assets/mainNav.png";
import albumNavMiniImg from "../assets/albumNav.png";

const Btn = styled.button`
  border: none;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`;

const FilmsBtn = styled(Btn)`
  width: 11%;
  height: 49%;
  position: relative;
  left: -1%;
`;

const FilmsBtnImg = styled.img`
  width: 100%;
  height: 100%;
`;

const AlbumsBtn = styled(Btn)`
  width: 11%;
  height: 58%;
  position: relative;
  right: -1%;
`;

const AlbumsBtnImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MainBtnMini = styled(Btn)`
  width: 6%;
  height: 50%;
`;

const MainBtnMiniImg = styled.img`
  width: 100%;
  height: 100%;
`;

const AlbumBtnMini = styled(Btn)`
  width: 6%;
  height: 43%;
`;

const AlbumBtnMiniImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const FilmNav = () => {
  const navigate = useNavigate();

  const goToFilms = () => {
    navigate("/films");
  };
  return (
    <FilmsBtn onClick={goToFilms}>
      <FilmsBtnImg src={filmsNavImg} />
    </FilmsBtn>
  );
};

export const AlbumNav = () => {
  const navigate = useNavigate();

  const goToAlbums = () => {
    navigate("/albums");
  };
  return (
    <AlbumsBtn onClick={goToAlbums}>
      <AlbumsBtnImg src={albumNavImg} />
    </AlbumsBtn>
  );
};

export const MainNavMini = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };
  return (
    <MainBtnMini onClick={goToMain}>
      <MainBtnMiniImg src={mainNavMiniImg} />
    </MainBtnMini>
  );
};

export const AlbumNavMini = () => {
  const navigate = useNavigate();
  const goToAlbums = () => {
    navigate("/albums");
  };
  return (
    <AlbumBtnMini onClick={goToAlbums}>
      <AlbumBtnMiniImg src={albumNavMiniImg} />
    </AlbumBtnMini>
  );
};
