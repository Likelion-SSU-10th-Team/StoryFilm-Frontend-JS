import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import Layout from "../components/Layout";

import axios from "axios";
import login from "../assets/login.png";
import { Cookies, useCookies } from "react-cookie";

const Container = styled.div``;
const Body = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 5vw;
  width: 100vw;
  height: 100vh;
`;
const Frame = styled.div`
  margin-top: 2.5vw;
  background-color: white;
  width: 50vw;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ImgFilm = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 2.5vw;
  width: 9vw;
`;

const Title = styled.h1`
  margin-top: 5vw;
  text-align: center;
  font-size: 5vw;
`;

const LoginFrame = styled.div`
  width: 20vw;
  margin: 0 auto;
  padding: 5vw;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  padding: 1vw 1vw 1vw 1vw;
  width: 100%;
  height: 5vh;
  margin: 1vw 1vw 1vw 1vw;
  box-sizing: border-box;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  text-align: center;
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
const Login = () => {
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
          alert("로그인 성공");
        }

        //document.location.href='/write'
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
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
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onPasswordHandler}
            />
            <Button onClick={onClick}>로그인</Button>
          </LoginFrame>
          <div>{JSON.stringify(sessionStorage)}</div>
        </Frame>
      </Body>
    </Container>
  );
};

export default Login;
