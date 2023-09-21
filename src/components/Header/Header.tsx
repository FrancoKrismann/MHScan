import React from "react";
import styled from "styled-components";
import { Navbar } from "..";
import LogoMHSCan from "@/assets/Logo.svg.webp";
import { LinkStyle } from "@/styled-components";
// import { BiLogIn } from "react-icons/bi";

const HeaderStl = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  width: 100vw;
  box-sizing: inherit;
  box-shadow: 10px 13px 35px -7px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 10px 13px 35px -7px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 10px 13px 35px -7px rgba(0, 0, 0, 0.8);
  background: #610dba;
  background: -webkit-linear-gradient(to right, #422c55, #0b0710);
  background: linear-gradient(to right, #100216, #50099c);
  /* border: blue solid 1px; */

  .img-logo {
    height: 110px;
    margin: 20px 0 20px 20px;
  }
`;

// const Button = styled.button`
// border-radius: 5px;
// cursor: pointer;
// `;

const Header: React.FC = () => {
  return (
    <>
      <HeaderStl>
        <LinkStyle to={"/inicio"}>
          <img src={LogoMHSCan} alt="Logo" className="img-logo" />
        </LinkStyle>
        <Navbar />

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
