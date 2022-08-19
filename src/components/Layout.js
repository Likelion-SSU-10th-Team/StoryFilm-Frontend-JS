import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../colors";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
`;

const Header = styled.div`
  width: 100%;
  height: 7%;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 9px -6px #000000;
  z-index: 5;
`;

const Column = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ColumnLeft = styled(Column)`
  justify-content: flex-start;
  padding-left: 6%;
`;

const ColumnRight = styled(Column)`
  justify-content: flex-end;
  padding-right: 5%;
`;

const Logo = styled.div`
  margin: 0 1%;
`;
const Title = styled.div``;
const Profile = styled.div`
  margin-right: 2%;
`;
const Logout = styled.button`
  margin-left: 2%;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: black;
`;

const Layout = () => {
  // const [username, setUsername] = useState("");
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("/accounts/info");
  //     const json = await response.json();
  //     setUsername(json.name);
  //   })();
  // }, []);
  // const navigate = useNavigate();
  // const goLogin = () => {
  //   navigate(`/login`);
  // };

  return (
    <Container bgColor={colors.bgColor}>
      <Header>
        <ColumnLeft>
          <Logo>📽</Logo>
          <StyledLink to={"/"}>
            <Title>STORY FILM</Title>
          </StyledLink>
        </ColumnLeft>
        <ColumnRight>
          <Profile>김상민's story</Profile>
          <span>|</span>
          <Logout>로그아웃</Logout>
        </ColumnRight>
      </Header>
    </Container>
  );
};

export default Layout;
