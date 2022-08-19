import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import Layout from "../components/Layout";
import login from "../assets/login.png";
import { useCookies } from "react-cookie";

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
  position: relative;
  margin-top: 3vw;
  width: 800px;
  height: 800px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
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
  font-size: 110px;
`;

const LoginFrame = styled.div`
  width: 20vw;
  margin: 0 auto;
  padding: 5vw;
`;
const Form = styled.form``;
const Input = styled.input`
  position: relative;
  overflow: hidden;
  padding: 5px 3px 3px 11px;
  width: 100%;
  height: 40px;
  margin: 10px 2px 20px 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  text-align: center;
`;
const Register = () => {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };
  const Signup = () => {
    const localStorage = window.localStorage;
    fetch(
      "https://port-0-backend-django-1k5zz25l6f9nen1.gksl1.cloudtype.app/accounts/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }
    )
      .then((response) => console.log(response.headers))
      .then((body) => console.log("성공", body))
      .then(() => localStorage.setItem("session_id", ""));
  };
  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <Frame>
          <Title>STORY FILM </Title>
          <ImgFilm src={login} alt="login" />
          <LoginFrame>
            <Form method="POST">
              <Input
                id="name"
                name="name"
                value={name}
                placeholder="이름를 입력하세요"
                type="text"
                onChange={onChange}
              />
              <Input
                id="id"
                name="email"
                value={email}
                placeholder="아이디를 입력하세요"
                type="text"
                onChange={onChange}
              />
              <Input
                id="password"
                type="password"
                value={password}
                name="password"
                placeholder="비밀번호를 입력하세요"
                onChange={onChange}
              />
            </Form>
            <Button onClick={Signup}>회원가입하기</Button>
          </LoginFrame>
        </Frame>
      </Body>
    </Container>
  );
};

export default Register;
