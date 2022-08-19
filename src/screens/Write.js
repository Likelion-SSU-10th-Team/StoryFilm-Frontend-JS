import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { colors } from "../colors";
import Layout from "../components/Layout";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import Photo from "../assets/Photo.png";
import diary from "../assets/diary.jpg";
import noimages from "../assets/noimages.png";
import React from "react";
import { useCookies } from "react-cookie";
import { GoBack } from "../components/navigation";

// const DiaryItem = ({
//   id,
//   content,
//   created_date
// }) => {
//   const localContentInput = useRef();
//   const [localContentInput, setLocatContent] = useState(content);
// }

const Input = styled.input`
  outline: none;
  width: 30vw;
  height: 40vw;
  position: absolute;
  margin-left: 10vw;
  margin-top: 0vw;
  border: none;
  z-index: 3;
  font-weight: 300;
  font-size: 1.1rem;
  text-align: center;
  resize: none;
  padding: 1vw;
  letter-spacing: 0.1vw; //글자 간격
  line-height: 2vw; // 줄 간격
  background-color: inherit;
`;
const Container = styled.div``;
const Con = styled.div`
  display: flex;
  position: relative;
`;
const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 1vw;
  width: 100vw;
  height: 100vh;
`;

const Photoadd = styled.img`
  width: 20vw;
  margin-top: 13vw;
  margin-left: 46vw;
  height: 15vw;
  z-index: 5;
  position: absoulte;
`;
const Frame = styled.img`
  margin-top: 10vw;
  background-color: white;
  width: 43vw;
  height: 43vw;
  display: flex;
  margin-left: 12vw;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

const BackBtn = styled.button`
  margin-top: 10vw;
  margin-left: 3vw;
  width: 3.5vw;
  heigth: 0.1vw;
  border-radius: 50%;
`;
// const ImageBox = styled.div`

// `;
const ImgPreview = styled.img`
  margin-top: 15.4vw;
  margin-left: 48vw;
  width: 16vw;
  height: 9vw;
  position: absolute;
  transform: rotate(-5.2deg);
  z-index: 5;
`;

const ImgInput = styled.input`
  position: absolute;
  margin-top: 27vw;
  margin-left: 55vw;
  z-index: 5;
  height: 20vw;
  width: 10vw;

  [type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
  }
`;
const Button = styled.button`
  margin-top: 40vw;

  width: 10vw;
  height: 3vw;
  flex-grow: 0;
  position: absolute;
  margin-left: 70vw;
  border-radius: 15px;
  font-size: 10px;
  border: 2px solid #817366;
  background-color: #c0b9ad;
`;
const ButtonTemp = styled.button`
  width: 8vw;
  height: 3vw;
  margin-top: 35vw;
  margin-left: 5vw;
  background-color: #cfbfb0;
  border-radius: 15px;
  border: 2px solid #a69784;
`;
const GoBackBtn = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
`;

//const history = useHistory();
const Write = () => {
  //const contentInput = ([]);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("content_temp")));
  }, []);
  const [content, setContent] = useState("");
  const [img, setImg] = useState({
    image_file: "",
    preview_URL: noimages,
  });

  const getContent = (event) => {
    setContent(event.target.value);
  };

  const getImg = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();

    fileReader.readAsDataURL(event.target.files[0]);

    fileReader.onload = () => {
      setImg({
        image_file: event.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };

  const handleSubmit_temp = (e) => {
    localStorage.setItem("content_temp", JSON.stringify(content));
    console.log(content);
  };
  const [cookies, setCookie] = useCookies([]);
  setCookie("session_id", localStorage.getItem("session_id"), {
    path: "/",
    secure: true,
    sameSite: "none",
  });
  const HandleSubmit = (e) => {
    const formData = new FormData();
    console.log(JSON.stringify(cookies.session_id));
    formData.append("image", img.image_file);
    formData.append("content", content);
    axios.defaults.withCredentials = true;
    for (let key of formData.keys()) {
      console.log(key);
    }

    /* value 확인하기 */
    for (let value of formData.values()) {
      console.log(value);
    }
    axios
      .post(
        "/diary/write", //url
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            session_id: JSON.stringify(cookies.session_id),
          },
        }
      )
      .then((res) => console.log(res));
    alert("서버에 등록 완료");
    setImg({
      image_file: "",
      preview_URL: noimages,
    });
    setContent("");
  };

  const navigate = useNavigate();
  function handleHistory() {
    navigate("/");
  }

  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <GoBackBtn>
          <GoBack />
        </GoBackBtn>
        <Con>
          <Photoadd src={Photo} alt="photo" />

          <ImgPreview src={img.preview_URL} />

          <ImgInput
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="img"
            onChange={getImg}
          />

          <Input
            placeholder="입력하세요"
            type="text"
            contentEditable
            value={content}
            onChange={getContent}
          />

          <Frame src={diary} slt="diary" />
          <ButtonTemp onClick={handleSubmit_temp}>임시저장</ButtonTemp>

          <Button onClick={HandleSubmit}>일기 저장</Button>
        </Con>
      </Body>
    </Container>
  );
};

export default Write;
