import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LogoMHSCan from "@/assets/Logo.svg.webp";
import { LinkStyle } from "@/styled-components";
import { Navbar } from "./Navbar";
import { typedNavbarButtons } from "@/consts";
import MenuButton from "./Menu/Menu";
// import { BiLogIn } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (): void => {
    setOpen(!open);
  };

  const handleClickSearch = (): void => {
    setSearchOpen(!searchOpen);
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
        <div ref={searchRef} className="container-searchinput">
          {searchOpen && (
            <input
              type="text"
              name="search"
              className="SearchInput"
              placeholder="Search..."
            />
          )}
          <div className="div-search">
            <AiOutlineSearch size="2.5em" onClick={handleClickSearch} />
          </div>
        </div>
        <div className="menu-container">
          <MenuButton open={open} handleClick={handleClick}>
            <ItemsNavbar />
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

  .container-searchinput {
    position: relative;
    /* border: #f30172 solid 1px; */
    display: flex;
    width: 14%;
    height: 2.5rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);

    input {
      /* color: #8707ff; */
      font-size: 17px;
      border: 1px solid #8707ff;
      border-radius: 5px;
      width: 85%;
      height: 2.5rem;
      /* background: transparent; */
      /* max-width: 200px; */
      transition: width 0.3s ease;
      padding: 0;

      padding-block: 0px;
      padding-inline: 0px;
    }

    .div-search {
      position: absolute;
      right: 0;
      background-color: #fff;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
      border-radius: 5px;
      height: 2.5rem;
      
    }

    .react-icons {
      color: #0b0710;

      cursor: pointer;
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
