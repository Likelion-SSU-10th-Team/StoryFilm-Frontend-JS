import React from "react";
import Layout from "../components/Layout";
import { colors } from "../colors";
import styled from "styled-components";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Layout bgColor={colors.bgColor} />
    </Container>
  );
};

export default Home;
