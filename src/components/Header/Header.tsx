import React, { useState } from "react";
import styled from "styled-components";
import LogoMHSCan from "@/assets/Logo.svg.webp";
import { LinkStyle } from "@/styled-components";
import { Navbar } from "./Navbar";
import { typedNavbarButtons } from "@/consts";
import MenuButton from "./Menu/Menu";
// import { BiLogIn } from "react-icons/bi";

const HeaderStl = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
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

  .logo-container {
    
    margin: 20px 0 20px 20px;
    /* border: #f4e006 solid 1px; */
    img {
      height: 90px;
    }
  }
  
  

  .navbar-container {
      display: flex;
      /* border: #f30172 solid 1px; */

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

// const Button = styled.button`
// border-radius: 5px;
// cursor: pointer;
// `;

const Header: React.FC = () => {

  const [open, setOpen] = useState(false)


  const handleClick = ():void => {
    setOpen(!open);
  };
  
  const ItemsNavbar: React.FC = () => {
    return (
      <ul>
      {
        Object.entries(typedNavbarButtons).map(([key, {href,literal}]) => {
          return (
          <li key={key}>
            <LinkStyle
            to={href}
            // className={className}
            
            >
              {literal}
            </LinkStyle>
          </li>
          )
        })
      }
      </ul>
    )
  }

  return (
    <>
      <HeaderStl>
        <div className="logo-container">
          <LinkStyle to={"/"}>
          <img src={LogoMHSCan} alt="Logo" className="img-logo" />
        </LinkStyle>
        </div>
        
        <div className="navbar-container">
          <Navbar>
            <ItemsNavbar/>
          </Navbar>
        </div>
        
        <div className="menu-container">
        <MenuButton open={open} handleClick={handleClick}>
          <ItemsNavbar/>
        </MenuButton>
        </div>

        {/* <LinkStyle to="">
          <BiLogIn size={"3rem"}/>
        </LinkStyle> */}
      </HeaderStl>
      <div
        style={{ width: "100%", height: "35px", backgroundColor: "#9b51e0" }}
      ></div>
    </>
  );
};

export default Header;
