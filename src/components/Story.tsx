import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Photo = styled.img``;

interface DataProps {
  id: string;
  photo: string;
}

const Story = ({ id, photo }: DataProps) => {
  return (
    <Container>
      <Link to={`/read/${id}`}>
        <Photo alt="기본이미지" src={photo} />
      </Link>
    </Container>
  );
};

export default Story;
