import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
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

interface ContainerProps {
  bgColor: string;
}

const Layout = ({ bgColor }: ContainerProps) => {
  return (
    <Container bgColor={bgColor}>
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
