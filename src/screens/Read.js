import Layout from "../components/Layout";
import { colors } from "../colors";
import styled, { css } from "styled-components";
import diary from "../assets/diary.jpg";
import Subtract from "../assets/Subtract.png";
import Photo from "../assets/Photo.png";
import { useNavigate, useParams } from "react-router";
import { useCallback, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import Album from "./Album";
import qs from "qs";

//일기 출력 페이지
const Container = styled.div``;
const Con = styled.div`
  display: flex;
  position: relative;
`;
const Body = styled.div`
  display: flex;

  position: fixed;
  top: 1vw;
  width: 100vw;
  height: 100vh;
`;

const Input = styled.div`
  outline: none;
  width: 30vw;
  height: 40vw;
  position: absolute;
  margin-left: 15vw;
  margin-top: 17vw;
  border: none;
  z-index: 3;
  font-weight: 300;
  font-size: 1.1rem;
  text-align: center;
  resize: none;
  padding: 1vw;
  letter-spacing: 0.1vw; //글자 간격
  line-height: 2vw; // 줄 간격
`;
const Frame = styled.img`
  margin-top: 5.2vw;
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
  height: 0.1vw;
  border-radius: 50%;
`;
//사진 출력 페이지

const Photoadd = styled.img`
  width: 20vw;
  margin-top: 10vw;
  margin-left: 45vw;
  height: 15vw;
  z-index: 2;
  position: absoulte;
`;
//앨범 추가
const CheckBox = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0;
  margin-right: 1vw;
  &:checked {
    border-color: transparent;
    background-color: limegreen;
  }
`;
const Label = styled.div`
  padding-top: 2vw;
  font-size: 1.3vw;
  margin-top: 2vw;
  text-align: center;
`;
const Label2 = styled.div`
  position: absolute;
  margin-top: 3.5vw;
  margin-left: 6.5vw;
`;
const Check_text = styled.label`
  position: relative;
  text-align: center;
  top: 1px;
  font-size: 2vw;
`;

const Add = styled.button`
  position: relative;

  width: 3.5vw;
  height: 1.5vw;

  background-color: #545454;

  font-size: 0.6vw;
  color: white;
`;
const AddCate = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 1vw;
`;
const CategoryInput = styled.input`
  position: relative;
  background-color: inherit;
  width: 10vw;
  height: 3vh;
  margin-right: 0.5vw;
  border-right: 1px;
  border-left: 1px;
  border-top: 0px;
`;
//comment

const Select = styled.div`
  margin: 0 auto;
  margin-top: 5.2vw;
  margin-bottom: 2vw;
  box-shadow: 3px 5px 3px 1px rgba(104, 97, 88, 0.66);
  width: 17.4vw;
  height: 14.4vw;
  background-color: #cec1ae;
`;
const CommentFrame = styled.div`
  position: relative;
`;
const Comment = styled.img`
  margin: 0 auto;

  width: 18vw;
  height: 19.8vw;
  flex-grow: 0;
  position: absolute;
`;

const CommentDate = styled.div`
  position: absolute;
  background-color: white;
  margin-top: 6vw;
  width: 5vw;
  height: 1vw;
  margin-left: 1vw;
`;
const CommentInput = styled.input`
  position: absolute;
  margin-left: 7vw;
  margin-top: 6vw;
  width: 10vw;
  height: 8vh;
  background-color: inherit;

  border-left: 1;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
`;
const CommentBtn = styled.button`
  position: absolute;
  width: 3.5vw;
  height: 1.5vw;

  background-color: #545454;
  margin-left: 12vw;
  margin-top: 15vw;
  font-size: 0.6vw;
  color: white;
`;
const Form = styled.form``;
const FinalSubmit = styled.button`
  position: absolute;
  margin-left: 11.5vw;
  width: 6vw;
  height: 6vh;
  text-align: center;
  font-size: 1.3vw;
  margin-top: 19.5vw;
  background-color: #545454;
  border: solid 2px white;
  border-radius: 14px;
  color: white;
`;
const Read = () => {
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [album, setAlbum] = useState([
    {
      album_id: 0,
      album_name: "",
      isBelong: false,
    },
  ]);

  const [comments, setComments] = useState([
    {
      comment: "",
      createdAt: "",
    },
  ]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios.get("/album/edit/33").then((res) => {
      console.log("data", res.data);
      setResponse(res.data.user_albums);
      setContent(res.data.diary_info.content);
      setImg(res.data.diary_info.image);
      setAlbum(res.data.user_albums);
      setComments(res.data.diary_comment);
      // console.log(content);
      // console.log(img);
      // console.log(album);
      // console.log(comments);
    });
  }, []);

  const navigate = useNavigate();
  // axios.get("/");
  // axios.get("/diary/write/").then((res) => {
  //   console.log(res);
  // });
  // 카테고리 출력 & 기본
  const [categorys, setCategorys] = useState([
    {
      num: album.album_id,
      data: album.album_name,
    },
  ]);
  const [inputs, setInputs] = useState({
    num: "",
    data: "",
  });
  const { num, data } = inputs;

  const onChange = (e) => {
    const { num, data } = e.target;
    setInputs({
      ...inputs,
      data: e.target.value,
    });
  };
  console.log("input", inputs);
  const nextId = useRef(4);
  console.log("categorys", categorys);

  // 카테고리 추가
  const onSubmit = (e) => {
    e.preventDefault();
    const category = {
      num: nextId.current,
      data: inputs.data,
    };

    setCategorys(categorys.concat(category));
    setInputs({
      num: "",
      data: "",
    });
    nextId.current += 1;
    console.log("categorys2", categorys);
  };

  //앨범 선택 값 넘기기
  const [checkedInputs, setCheckedInputs] = useState([]);
  const changeHandler = (e) => {
    if (e.target.checked) {
      setCheckedInputs([...checkedInputs, e.target.value]);
    }
  };

  const [adds, setAdds] = useState({
    addcomment: "",
    createdAt: "",
  });
  // const { addcomment, createdAt } = adds;
  const addcomment = adds.addcomment;
  const createdAt = adds.createdAt;
  const commentAdd = (e) => {
    let now = new Date();
    setAdds({
      ...adds,
      addcomment: e.target.value,
      createdAt: now,
    });
  };
  const HandleFinalSubmit = () => {
    const album_id = album.album_id;
    const album_name = album.album_name;
    axios
      .post(
        `/album/${album_id}/${album_name}/select_album`,
        {
          selected_album: checkedInputs,
        },
        { withCredentials: true }
      )
      .then((res) => console.log(res));
  };
  console.log(checkedInputs);
  const [commented, setComment] = useState("");
  const HandleComment = (e) => {
    e.preventDefault();
    console.log(commented);
  };
  const postComment = (e) => {
    setComment(e.target.value);
    axios
      .post(
        "/album/edit/<diary_id>",
        {
          comment: commented,
        },
        {
          headers: {
            "Content-Type": `application/json`,
          },
        },
        { withCredentials: true }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
      <Body>
        <div>
          <BackBtn onClick={() => navigate(-1)}>이전</BackBtn>
        </div>
        <Con>
          <Photoadd src={Photo} alt="photo" />

          <Input
            // ref= {contentInput}
            placeholder="입력하세요"
            type="text"
            //value= {write}
            content="content"
          />
          <Frame src={diary} slt="diary" />
          <div>
            <Select>
              <Label>앨범선택</Label>
              {response.map((album) => (
                <div key={album.album_id}>
                  <CheckBox
                    type="checkbox"
                    value={album.isBelong}
                    onChange={changeHandler}
                  />
                  <Check_text>{album.album_name}</Check_text>
                </div>
              ))}
              <AddCate onSubmit={onSubmit}>
                <CheckBox type="checkbox" />
                <CategoryInput value={data} onChange={onChange} />
                <Add>완료</Add>
              </AddCate>
            </Select>
            <Form onSubmit={HandleComment}>
              <CommentFrame>
                <Comment src={Subtract} slt="subtract" />
                <Label2>comment</Label2>
                {comments.map((item) => (
                  <div key={item.comment}>
                    <CommentDate value={item.createdAt} />
                    <div>{item.comment}</div>
                    {/* <CommentInput value={item.comment} onChange={commentAdd} /> */}
                  </div>
                ))}
                <CommentInput
                  placeholder="     내용을 입력하세요"
                  onChange={commentAdd}
                  value={commented}
                />
                <CommentDate />
                <CommentBtn onClick={postComment}>남기기</CommentBtn>
              </CommentFrame>
            </Form>
            <FinalSubmit onClick={HandleFinalSubmit}>저장</FinalSubmit>
          </div>
        </Con>
      </Body>
    </Container>
  );
};

export default Read;
