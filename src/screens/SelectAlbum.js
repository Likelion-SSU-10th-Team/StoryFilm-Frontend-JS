import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import bg from "../assets/bg.png";
import blur from "../assets/blur.png";
import { colors } from "../colors";
import Frame from "../assets/Frame2.png";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { axios } from "axios";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Back = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Blur = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Framed = styled.img`
  margin-left: 31vw;
  margin-top: 14vw;
  position: absolute;
  width: 40%;
  height: 40%;
`;

const LoginBtn = styled.button`
  width: 5vw;
  height: 2vw;
  z-index: 3;
  margin-left: 62vw;
  margin-top: 28vw;
  background-color: inherit;
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;

const SelectAlbum = () => {
  const navigate = useNavigate();
  const onClick = () => {
    axios
      .post("/film/new", {
        size: 15,
      })
      .then((res) => console.log(res));
    navigate("/");
  };
  return (
    <Div>
      <Back src={bg} />
      <Blur src={blur} />
      <Framed src={Frame} />
      <LoginBtn onClick={onClick} />
    </Div>
  );
};
export default SelectAlbum;
