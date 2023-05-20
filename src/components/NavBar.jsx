import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import HomeLogo from "../assets/HomeLogo.svg";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-center items-center mt-3">
      <LogoContainer>
        <Link to="/discover">
          <Img path={location.pathname} src={HomeLogo} alt="Logo" />
        </Link>
        <H1>Spoonacular Api Project</H1>
      </LogoContainer>
      <div className="flex flex-wrap gap-4">
        <StyledLinks to="/cuisine/Italian">
          <H1>Italian</H1>
        </StyledLinks>
        <StyledLinks to="/cuisine/Thai">
          <H1>Thai</H1>
        </StyledLinks>
        <StyledLinks to="/cuisine/Japanese">
          <H1>Japanese</H1>
        </StyledLinks>
        <StyledLinks to="/cuisine/American">
          <H1>American</H1>
        </StyledLinks>
      </div>
    </div>
  );
}

//styling

const StyledLinks = styled(NavLink)`
  text-decoration: none;
  border-radius: 5px;
  border-style: none;
  box-sizing: border-box;
  color: #f7f8eb;
  cursor: pointer;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  padding: 0.6rem 1.6rem;
  text-align: center;
  background-color: #1e1c1c;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: box-shadow 1s ease-out;
  &&:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
  &.active {
    background-color: rgba(80, 63, 205, 0.7);
  }
  H1 {
    font-size: 22px;
  }
`;
const Img = styled.img`
  width: 120px;
  cursor: pointer;
  filter: ${(props) => props.path !== "/discover" && "grayscale(0.7)"};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 15px 0;
`;
const H1 = styled.h1`
  font-size: 36px;
  font-family: "Satoshi";
  font-weight: 500;
  margin: 0;
  color: #f1f1f1;
`;
export default NavBar;
