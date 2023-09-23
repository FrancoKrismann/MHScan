import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

interface MenuProps {
  open: boolean;
  handleClick: () => void;
  children: JSX.Element;
}

const MenuStl = styled.div<{ open: boolean }>`
  display: flex;
  width: 15vh;
  justify-content: center;
  /* border: #5ca31a solid 1px; */
  

  .container-menu {
    /* margin-top: 50px; */
    display: flex;
    
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #50099c;
  position: absolute;
  top:8.5rem;
  
  right: ${props => (props.open ? "0" : "-90%")};
  width: 25vh;
  
  height: 90vw;
  transition: right .2s ease-in-out;
  padding-top: 0px;

  @media screen and (max-width: 900px) {
    
    ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
  }
    }

  }
  @media screen and (max-width: 770px) {
          .container-menu {
            height: 111vw;
            padding-bottom: 2px;
          }

          
  }

  @media screen and (max-width: 500px) {
          .container-menu {
            height: 181vw;
            padding-bottom: 4px;
          }

          
  }
  
  
  
  
`;

const MenuButton: React.FC<MenuProps> = ({ open, handleClick, children }) => {
  return (
    <MenuStl open={open}>
      {open ? (
        <div className="div-button-close">
          <AiOutlineClose
            style={{ cursor: "pointer" , position:"relative" }}
            size={"3rem"}
            onClick={handleClick}
          />
        </div>
      ) : (
        <>
          <AiOutlineMenu
            style={{ cursor: "pointer" }}
            size={"3rem"}
            onClick={handleClick}
          />
        </>
      )}

      <div className="container-menu">{children}</div>
    </MenuStl>
  );
};

export default MenuButton;
