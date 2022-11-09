import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import axios from "axios";
import login from "../assets/login.png";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vh;
`;
const Frame = styled.div`
  background-color: white;
  width: 30.4vw;
  height: 38vw;
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;
  box-shadow: 6px 6px 4px -1px rgba(0, 0, 0, 0.47);
  border-radius: 3vw;
`;
const ImgFilm = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 8vw;
  width: 10vw;
  height: 6vw;
`;

const Title = styled.h1`
  position: absolute;
  margin-top: 1.8vw;
  text-align: center;
  font-size: 4vw;
`;

const LoginFrame = styled.div`
  position: absolute;
  width: 20vw;
  margin: 0 auto;
  padding: 0vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3vw;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  padding: 1vw 1vw 1vw 1vw;
  width: 100%;
  height: 3.5vh;
  margin: 1vw 1vw 1vw 1vw;
  border: none;
  border-radius: 1.5vw;
  box-shadow: 1px 6px 4px 0px rgba(129, 129, 129, 0.65);
  background-color: #d9d9d9;
  justify-content: center;
  margin-top: 14vw;
  margin-bottom: 0vw;
`;
const Input2 = styled.input`
  position: relative;
  overflow: hidden;
  padding: 1vw 1vw 1vw 1vw;
  width: 100%;
  height: 3.5vh;
  margin: 1vw 1vw 1vw 1vw;
  border: none;
  border-radius: 1.5vw;
  box-shadow: 1px 6px 4px 0px rgba(129, 129, 129, 0.65);
  background-color: #d9d9d9;
  justify-content: center;
  margin-top: 2.5vw;
`;

const Button = styled.button`
  margin-top: 29vw;
  position: absolute;
  display: block;
  width: 22vw;
  height: 7vh;
  border-radius: 1.5vw;
  text-align: center;
  border: none;
  background-color: #545454;
  box-shadow: 5px 8px 4px 0px rgba(84, 84, 84, 0.61);
  &:hover {
    cursor: pointer;
  }
`;

const Button2 = styled.button`
  margin-top: 25vw;
  position: absolute;
  width: 5vw;
  height: 4vh;
  border-radius: 1.5vw;
  margin-left: 17vw;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
// const fetchLogin = async ({ id, password }) => {
//     const response = await fetch("http://localhost:8888/users");

//     if (response.ok) {
//         //서버통신이 성공적으로 이루어지면 users에 json값 대입
//       const users = await response.json();

//       //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
//       //서로 일치하는 것만 user에 대입
//       const user = users.find((user) => user.id === id);
//       //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
//       if (!user || user.password !== password) {
//         throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
//       }

//       //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
//       //form 컴포넌트에서 setUser값에 넣어야함
//       return user;
//     }

//     //서버 통신이 안이루어졌을떄
//     throw new Error("서버 통신이 원할하지 않습니다.");
//   };

const Layout = styled.div`
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
const HeaderTitle = styled.div``;
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

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // const [saveId,setSaveId]= useState("");
  // const [savePassword,setSavePassword]=useState("");

  const localStorage = window.localStorage;
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const ryu = new Cookies();
  const [cookies, setCookie] = useCookies(["session_id"]);
  const onClick = (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("/accounts/login", {
        email: id,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (cookies.session_id === 404) {
          alert("email이 틀림");
        } else if (cookies.session_id === 400) {
          alert("비밀번호 다름");
        } //id있는데 pw다름
        else {
          //   setCookie(cookies);
          localStorage.setItem("session_id", ryu.get("session_id"));
        }
        navigate("/");

        //document.location.href='/write'
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goJoin = () => {
    navigate("/register");
  };
  return (
    <Container>
      <Layout bgColor={colors.bgColor}>
        <Header>
          <ColumnLeft>
            <Logo>📽</Logo>
            <StyledLink to={"/"}>
              <HeaderTitle>STORY FILM</HeaderTitle>
            </StyledLink>
          </ColumnLeft>
          <ColumnRight></ColumnRight>
        </Header>
      </Layout>
      <Body>
        <Frame>
          <Title>STORY FILM </Title>
          <ImgFilm src={login} alt="login" />
          <LoginFrame>
            <Input
              id="id"
              name="id"
              placeholder="아이디를 입력하세요"
              type="text"
              onChange={onIdHandler}
            />
            <Input2
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onPasswordHandler}
            />
            <Button2 onClick={goJoin}>회원가입</Button2>
            <Button onClick={onClick} type="submit">
              로그인
            </Button>
          </LoginFrame>
        </Frame>
      </Body>
    </Container>
  );
};

export default Login;
