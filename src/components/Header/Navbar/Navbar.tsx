import React from "react";
import styled from "styled-components";

interface NavbarProps {
  children:JSX.Element
}


const NavbarStl = styled.nav`
/* background-color: blue; */
display: flex;
height: 7rem;
width: 80vh;
align-items: center;

  
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

 
`
const Navbar: React.FC <NavbarProps> = ({children}) => {

  return (
    <NavbarStl>
      {children}
    </NavbarStl>
  )
}



export default Navbar;
