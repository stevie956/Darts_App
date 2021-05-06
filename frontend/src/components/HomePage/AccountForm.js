import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";
import { CreateGameForm } from "./CreateGame";
import { motion } from "framer-motion";
import { AccountContext } from "./Context";
import { FunctionalGameContainer } from "../GameOn/GameContainer";
import { Game501Form } from "./Game501";


const Container = styled.div `
width: 500px;
margin-left: 45%;
margin-top: 10%;

`;


const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(56, 210, 18, 1) 75%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  line-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${'' /* padding: 0 1.8em; */}
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 3.3,
  stiffness: 30,
};


export function Homepage(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");
  
    const playExpandingAnimation = () => {
      setExpanded(true);
      setTimeout(() => {
        setExpanded(false);
      }, expandingTransition.duration * 1000 - 1500);
    };
  
    const switchToSignup = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("signup");
      }, 400);
    };
  
    const switchToSignin = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("signin");
      }, 400);
    };
  
    const switchToGameOn = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("gameOn");
      }, 400);
    };

    const switchToPlayDarts = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("playDarts");
      }, 400);
    };
    const contextValue = { switchToSignup, switchToSignin, switchToGameOn, switchToPlayDarts};
  
    return (
        <Container>
      <AccountContext.Provider value={contextValue}>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "signin" && (
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
              </HeaderContainer>
            )}
            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-up to continue!</SmallText>
              </HeaderContainer>
            )}
            {active === "gameOn" && (
              <HeaderContainer>
                <HeaderText>WHO'S</HeaderText>
                <HeaderText>PLAYING?</HeaderText>
              </HeaderContainer>
            )}
            {active === "playDarts" && (
              <HeaderContainer>
                <HeaderText>Lets</HeaderText>
                <HeaderText>Player</HeaderText>
                <HeaderText>Darts!</HeaderText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <CreateGameForm />}
            {active === "gameOn" && <Game501Form />}
            {active === "playDarts" && <FunctionalGameContainer />}
          </InnerContainer>
        </BoxContainer>
      </AccountContext.Provider>
      </Container>
    );
  }
