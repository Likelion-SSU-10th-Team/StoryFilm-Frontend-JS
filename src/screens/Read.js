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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Frame = styled.img`
  bottom: 0;
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
  margin-top: 13vw;
  margin-left: 46vw;
  height: 15vw;
  z-index: 5;
  position: absoulte;
`;
const ImgPreview = styled.img`
  margin-top: 15.4vw;
  margin-left: 48vw;
  width: 16vw;
  height: 9vw;
  position: absolute;
  transform: rotate(-5.2deg);
  z-index: 5;
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
  text-align: center;
  font-weight: 600;
`;
const Label2 = styled.div`
  position: absolute;
  margin-top: 3.5vw;
  margin-left: 6.5vw;
`;
const CheckText = styled.label`
  position: relative;
  text-align: center;
  bottom: 50%;
  font-size: 1.2vw;
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

const ContentBox = styled.div`
  position: absolute;
  top: 10vh;
  left: 67vw;
`;

const Select = styled.div`
  margin: 0 auto;
  margin-top: 5.2vw;
  margin-bottom: 2vw;
  box-shadow: 3px 5px 3px 1px rgba(104, 97, 88, 0.66);
  width: 17.4vw;
  height: 14.4vw;
  background-color: #cec1ae;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const AlbumCheck = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5%;
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

const GoBackBtn = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
`;

const CommentDiv = styled.div``;
const Read = () => {
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  // const [album, setAlbum] = useState([
  //   {
  //     album_id: 0,
  //     album_name: "",
  //     isBelong: false,
  //   },
  // ]);

  // const [comments, setComments] = useState([
  //   {
  //     comment: "",
  //     createdAt: "",
  //   },
  // ]);
  // {album_id, album_name, isBelong}
  const [useralbum, setUseralbum] = useState([]);
  // content, created,at, image
  const [diaryinfo, setDiaryInfo] = useState([]);
  //{comment, createdAt}
  const [diarycomment, setDiaryComment] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://port-0-backend-django-1k5zz25l6f9nen1.gksl1.cloudtype.app/album/edit/${id}`
      )
      .then((res) => {
        console.log("data", res.data);
        setUseralbum(res.data.user_albums);
        setDiaryInfo(res.data.diary_info);
        setDiaryComment(res.data.diary_comment);

        // setComments(res.data.diary_comment);
        // console.log(content);
        // console.log(img);
        // console.log(album);
        // console.log(comments);
      });
  }, []);
  console.log("photo, text", diaryinfo);

  const navigate = useNavigate();

  // 카테고리 추가

  const [inputs, setInputs] = useState({
    album_id: "",
    album_name: "",
  });
  //const { album_id, album_name } = inputs;

  const nextId = useRef(inputs.album_id + 1);
  const onChange = (e) => {
    // const { album_id, album_name } = e.target;
    setInputs({
      album_name: e.target.value,
      album_id: nextId,
    });
  };
  console.log("input", inputs);

  // 카테고리 추가
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://port-0-backend-django-1k5zz25l6f9nen1.gksl1.cloudtype.app/album/new/",
        {
          album_id: inputs.album_id,
          album_name: inputs.album_name,
        }
      )
      .then((res) => console.log(res));

    // setCategorys(categorys.concat(category));
    setInputs({
      num: "",
      data: "",
    });
    nextId.current += 1;
    // console.log("categorys2", categorys);
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
  const now = new Date();
  const { addcomment, createdAt } = adds;
  // const addcomment = adds.addcomment;
  // const createdAt = adds.createdAt;
  const commentAdd = (e) => {
    setAdds({
      ...adds,
      addcomment: e.target.value,
      createdAt: now,
    });
  };
  const HandleFinalSubmit = () => {
    axios
      .post(
        "https://port-0-backend-django-1k5zz25l6f9nen1.gksl1.cloudtype.app/album/select",
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
  // comment 에 입력한 내용을 남기기 버튼 누르면 전송
  const postComment = (e) => {
    setComment(e.target.value);
    axios
      .post(
        `https://port-0-backend-django-1k5zz25l6f9nen1.gksl1.cloudtype.app/album/edit/${id}`,
        {
          comment: commented,
          diary_id: id,
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
        <Con>
          <Photoadd src={Photo} alt="photo" />
          <ImgPreview src={diaryinfo.image} alt="photo" />
          <Input
            // ref= {contentInput}
            placeholder="입력하세요"
            type="text"
          >
            {diaryinfo.content}
          </Input>
          <Frame src={diary} slt="diary" />
          <ContentBox>
            <Select>
              <Label>앨범선택</Label>
              {useralbum.map((album) => (
                <AlbumCheck key={album.album_id}>
                  <CheckBox
                    type="checkbox"
                    value={album.isBelong}
                    onChange={changeHandler}
                  />
                  <CheckText>{album.album_name}</CheckText>
                </AlbumCheck>
              ))}
              <AddCate onSubmit={onSubmit}>
                <CheckBox type="checkbox" />
                <CategoryInput value={inputs.album_name} onChange={onChange} />
                <Add>완료</Add>
              </AddCate>
            </Select>
            <Form onSubmit={HandleComment}>
              <CommentFrame>
                <Comment src={Subtract} slt="subtract" />
                <Label2>comment</Label2>
                {diarycomment.map((item) => (
                  <div key={item.comment}>
                    <CommentDate value={item.createdAt}>
                      {item.createdAt}
                    </CommentDate>
                    <CommentDiv>{item.comment}</CommentDiv>
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
          </ContentBox>
        </Con>
      </Body>
    </Container>
  );
};

export default Read;
