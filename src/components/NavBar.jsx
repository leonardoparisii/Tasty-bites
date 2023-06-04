import React, { useState, useEffect } from "react";
import HomeLogo from "../assets/HomeLogo.svg";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import FullScreenSideBar from "./FullScreenSideBar";

function NavBar() {
  const location = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleHamburger() {
      setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="w-[90%] mx-auto mt-6 flex flex-col  justify-between items-center sm:flex sm:flex-col sm:justify-center sm:mt-3 relative z-50">
      <div className="flex sm:flex-col justify-between w-full items-center">
        <LogoContainer>
          <Link
            to="/discover"
            className="z-50"
            onClick={isMenuOpen ? toggleHamburger : null}
          >
            <Img path={location.pathname} src={HomeLogo} alt="Logo" />
          </Link>
          <h1 className="hidden sm:text-4xl sm:font-inter sm:text-slate-50 sm:font-medium sm:m-0 sm:block">
            TastyBites
          </h1>
        </LogoContainer>
        <BtnWrap className="hidden sm:flex sm:flex-wrap sm:gap-4 sm:mt-2">
          <StyledLinks to="/cuisine/Italian">
            <h1 className="text-2xl font-satoshi text-slate-50 font-medium m-0">
              Italian
            </h1>
          </StyledLinks>
          <StyledLinks to="/cuisine/Thai">
            <h1 className="text-2xl font-satoshi text-slate-50 font-medium m-0">
              Thai
            </h1>
          </StyledLinks>
          <StyledLinks to="/cuisine/Japanese">
            <h1 className="text-2xl font-satoshi text-slate-50 font-medium m-0">
              Japanese
            </h1>
          </StyledLinks>
          <StyledLinks to="/cuisine/American">
            <h1 className="text-2xl font-satoshi text-slate-50 font-medium m-0">
              American
            </h1>
          </StyledLinks>
          <div className="flex items-center w-[45px] h-[45px] sm:hidden"></div>
        </BtnWrap>
        <div className="block sm:hidden z-50">
          <Hamburger
            size={22}
            duration={0.5}
            color="#FFF"
            toggled={isMenuOpen}
            toggle={toggleHamburger}
          />
        </div>
      </div>
      {isMenuOpen && (
        <FullScreenSideBar>
          <div className="flex flex-col bg-zinc-900 p-3 box-border gap-3 absolute w-full m-auto">
            <DropNavLink
              to="/cuisine/Italian"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <h1 className="text-2xl transition-all font-satoshi text-slate-50 font-medium m-0">
                Italian
              </h1>
            </DropNavLink>
            <DropNavLink
              to="/cuisine/Thai"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <h1 className="text-2xl transition-all font-satoshi text-slate-50 font-medium m-0">
                Thai
              </h1>
            </DropNavLink>
            <DropNavLink
              to="/cuisine/Japanese"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <h1 className="text-2xl transition-all font-satoshi text-slate-50 font-medium m-0">
                Japanese
              </h1>
            </DropNavLink>
            <DropNavLink
              to="/cuisine/American"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <h1 className="text-2xl transition-all font-satoshi text-slate-50 font-medium m-0">
                American
              </h1>
            </DropNavLink>
          </div>
        </FullScreenSideBar>
      )}
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
`;
const Img = styled.img`
  width: 120px;
  cursor: pointer;
  filter: ${(props) => props.path !== "/discover" && "grayscale(0.7)"};
`;

const BtnWrap = styled.div`
  @media (max-width: 640px) {
    h1,
    a {
      display: none;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DropNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
`;
export default NavBar;