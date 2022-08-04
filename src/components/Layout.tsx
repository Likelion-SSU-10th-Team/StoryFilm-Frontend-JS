import React from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
`;

const Header = styled.div`
  width: 100%;
  height: 55px;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 50px;
`;
const Logo = styled.div`
  margin: 0px 10px;
`;
const Title = styled.div``;
const Profile = styled.div`
  margin-right: 10px;
`;
const Logout = styled.button`
  border: none;
  background-color: white;
`;

interface ContainerProps {
  bgColor: string;
}

const Layout = ({ bgColor }: ContainerProps) => {
  return (
    <Container bgColor={bgColor}>
      <Header>
        <Column>
          <Logo>📽</Logo>
          <Title>STORY FILM</Title>
        </Column>
        <Column>
          <Profile>김상민's story |</Profile>
          <Logout>로그아웃</Logout>
        </Column>
      </Header>
    </Container>
  );
};

export default Layout;
