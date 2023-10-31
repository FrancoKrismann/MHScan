import React, { useState } from "react";
import styled from "styled-components";
import LogoMHSCan from "@/assets/Logo.svg.webp";
import { LinkStyle } from "@/styled-components";
import { Navbar } from "./Navbar";
import { typedNavbarButtons } from "@/consts";
import MenuButton from "./Menu/Menu";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

interface HeaderProps {
  handleSearchClick: (boolValue: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({handleSearchClick}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {    
    setOpen(!open);
  };

  const ItemsNavbar: React.FC = () => {
    return (
      <ul>
        {Object.entries(typedNavbarButtons).map(([key, { href, literal }]) => {
          return (
            <li key={key}>
              <LinkStyle to={href}>{literal}</LinkStyle>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <HeaderStl>
        <div className="Div-log-list">
          <div className="logo-container">
            <LinkStyle to={"/"}>
              <img src={LogoMHSCan} alt="Logo" className="img-logo" />
            </LinkStyle>
          </div>

          <div className="navbar-container">
            <Navbar>
              <ItemsNavbar />
            </Navbar>
          </div>
        </div>
        <div className="Div-searchBar" onClick={(e) => e.stopPropagation()}>
          <div className="circle-SearchBar">
          <AiOutlineSearch className="searchIcon" size="2em"  onClick={() => handleSearchClick(true)}/>
          </div>
        </div>

        <div className="menu-container">
          <MenuButton open={open} handleClick={handleClick}>
            <ItemsNavbar />
          </MenuButton>
        </div>
        <div className="Div-user">
          <LinkStyle to="">
            <BiLogIn size={"3rem"} />
          </LinkStyle>
        </div>
      </HeaderStl>
      <div
        style={{ width: "100%", height: "35px", backgroundColor: "#9b51e0" }}
      ></div>
    </>
  );
};
const HeaderStl = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
  width: 100%;
  box-sizing: inherit;
  box-shadow: 10px 13px 35px -7px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 10px 13px 35px -7px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 10px 13px 35px -7px rgba(0, 0, 0, 0.8);
  background: #610dba;
  background: -webkit-linear-gradient(to right, #422c55, #0b0710);
  background: linear-gradient(to right, #100216, #50099c);
  /* border: #f5f5f5 solid 2px; */
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: space-around;
  }

  .Div-log-list {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    /* border: #07e73c solid 1px; */
    width: 50%;

    @media (max-width: 1440px) {
      width: 60%;
      text-align: center;
    }
  }

  .Div-searchBar {
    display: flex;
    justify-content: center;
    width: 10rem;
    /* border: #6c07e7 solid 1px; */

    .circle-SearchBar {
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;

    .searchIcon {
      cursor: pointer;
      color: #0b0710;
    }
    &:hover {
 
        background-color:#0b0710;
      

      .searchIcon {
        color: #fff;
      }
    }
    
    }
    

    @media screen and (max-width: 900px) {
      display: flex;
      width: 50rem;
    }
  }
  .logo-container {
    margin: 20px 0 20px 20px;
    /* border: #f4e006 solid 1px; */
    img {
      height: 90px;
    }
  }

  .navbar-container {
    /* display: flex; */
    /* border: #f30172 solid 1px; */
    width: 100%;
  }

  .Div-user {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
  .menu-container {
    display: none;
    /* border: #f97a03 solid 1px; */
  }
  @media screen and (max-width: 900px) {
    .navbar-container {
      display: none;
    }
    .logo-container {
      display: flex;

      align-items: flex-start;
    }

    .menu-container {
      display: flex;
      width: 80%;
      justify-content: flex-end;
    }
  }
`;
export default Header;
