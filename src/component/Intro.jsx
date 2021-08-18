import React from "react";
import styled from "styled-components";
import Box from "./BoxContiner";
import Navbar from "./Navbar";
import IntroImage from "../image/intro.jpg";

const Intro = ({ HomeRef, AboutRef, FeaturesRef, ServicesRef }) => {
  return (
    <Container image={IntroImage}>
      <Navbar
        HomeRef={HomeRef}
        AboutRef={AboutRef}
        FeaturesRef={FeaturesRef}
        ServicesRef={ServicesRef}
      />
      <IntroTitle>
        <Subtitle>All Busniess Services at one station</Subtitle>
        <Title>Busniess Station</Title>
        <a href="/contact">
          <Button>Join now</Button>
        </a>
      </IntroTitle>
      <Boxes>
        <Box />
      </Boxes>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  /* position: absolute; */
  position: relative;
  width: 100%;
  height: 80vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
  top: 0;
  left: 0;
  color: white;
`;

const IntroTitle = styled.div`
  padding-top: 250px;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.p`
  text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
`;
const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);

  @media (max-width: 765px) {
    font-size: 2rem;
  }
`;
const Button = styled.button`
  padding: 10px 25px;
  border-radius: 20px;
  background-color: white;
  color: #084f8a;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;
  font-size: 1.1rem;
  &:hover {
    background-color: #084f8a;
    color: white;
  }
`;

const Boxes = styled.div`
  position: absolute;
  left: 50%;
  bottom: -60px;
  background-color: white;
  /* width: 50%; */
  height: 120px;
  transform: translateX(-50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  padding: 10px;

  @media (max-width: 480px){
    display: none;
  }
`;
