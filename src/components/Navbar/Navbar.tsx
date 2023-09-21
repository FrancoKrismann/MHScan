import { typedNavbarButtons } from "@/consts";
import React from "react";
import styled from "styled-components";
import { LinkStyle } from "@/styled-components";
// interface NavbarProps {}




const NavbarStl = styled.nav`
/* background-color: blue; */
display: flex;
height: 7rem;
width: 100vh;
align-items: center;

  
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

 
`
const Navbar: React.FC = () => {

  return (
    <NavbarStl>
      <ul>
      {
        Object.entries(typedNavbarButtons).map(([key, {href,literal}]) => {
          // const className = isSelected ? `selected` : ``
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
    </NavbarStl>
  )
}



export default Navbar;
