import React from "react";
import styled from "styled-components";

interface NavbarProps {
  children:JSX.Element
}


const NavbarStl = styled.nav`
/* background-color: blue;
display: flex;
height: 7rem;

align-items: center; */
width: 100%;
  
  ul {
    
  margin: 0;
  padding: 0;
  overflow: hidden;
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
