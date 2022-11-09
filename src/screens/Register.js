import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { colors } from "../colors";
import Layout from "../components/Layout";
import login from "../assets/login.png";
import { useNavigate } from "react-router";
import axios from "axios";

const Container = styled.div``;
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
`;
const Frame = styled.div`
  background-color: white;
  width: 30.4vw;
  height: 38vw;
  display: flex;
  flex-direction: column;
  margin-top: 2vw;
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

const Form = styled.form`
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
  margin-top: 1vw;
`;
const Input3 = styled.input`
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
  margin-top: 0.1vw;
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
    const navigate = useNavigate();
    axios
      .post("/accounts/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      })
      .then((body) => console.log("성공", body))
      .then(() => navigate("/"));
  };

  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <Frame>
          <Title>STORY FILM </Title>
          <ImgFilm src={login} alt="login" />

          <Form method="POST">
            <Input
              id="name"
              name="name"
              value={name}
              placeholder="이름를 입력하세요"
              type="text"
              onChange={onChange}
            />
            <Input2
              id="id"
              name="email"
              value={email}
              placeholder="아이디를 입력하세요"
              type="text"
              onChange={onChange}
            />
            <Input3
              id="password"
              type="password"
              value={password}
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onChange}
            />
            <Button onClick={Signup} type="submit">
              회원가입하기
            </Button>
          </Form>
        </Frame>
      </Body>
    </Container>
  );
};

export default Register;
