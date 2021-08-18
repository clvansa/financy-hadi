import React from "react";
import styled from "styled-components";

const Logo = ({ color }) => {
  return (
    <Container>
      <Box>
        <Layer1 />
        <Layer2 />
        <Layer3 />
        <Layer4 />
      </Box>
      <Title color={color}>Busniess Station</Title>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  padding-top: 5px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85px;
  transform: rotate(-180deg);
`;
const Layer1 = styled.div`
  width: 18px;
  height: 20px;
  background-color: orange;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 15px;
    background-color: orange;
    top: 13px;
    left: 1.5px;
    transform: rotateX(80deg) skew(10deg);
  }
`;
const Layer2 = styled.div`
  width: 18px;
  height: 40px;
  background-color: #e7e7e7;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 15px;
    background-color: #e7e7e7;
    top: 33px;
    left: 1.5px;
    transform: rotateX(80deg) skew(12deg);
  }
`;
const Layer3 = styled.div`
  width: 18px;
  height: 50px;
  background-color: #084f8a;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 15px;
    background-color: #084f8a;
    top: 43px;
    left: 1.5px;
    transform: rotateX(80deg) skew(10deg);
  }
`;
const Layer4 = styled.div`
  width: 18px;
  height: 25px;
  background-color: #0a2f75;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 15px;
    background-color: #0a2f75;
    top: 19px;
    left: 1.5px;
    transform: rotateX(80deg) skew(12deg);
  }
`;

const Title = styled.h1`
  color: ${(props) => (props.color === "light" ? "black" : "white")};
  font-size: 1rem;
  padding-top: 8px;
  width: 85px;
  word-wrap: wrap;
  text-align: center;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 1.5px;
  /* word-break: break-all; */
`;
