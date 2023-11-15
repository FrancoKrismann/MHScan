import { typedSideButtons } from "@/consts";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface AsideButtonsProps {}

const AsideButtons: React.FC<AsideButtonsProps> = ({}) => {
  const navigate = useNavigate();

  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  return (
    <AsideButtonsStl>
      <div className="container-icons">
        <ul>
          {Object.keys(typedSideButtons).map((key) => {
            const { href, literal, icons } = typedSideButtons[key];
            const DynamicIcon = icons as React.ComponentType<any>;
            return (
              <li
                key={key}
                onClick={() => navigate(`/dashboard${href}`)}
                onMouseEnter={() => setHoveredButton(key)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {typeof icons === "string" ? (
                  <span>{icons}</span>
                ) : (
                  <DynamicIcon size="2.5em" />
                )}
                
                {hoveredButton === key && <span className="hover-literal">{literal}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </AsideButtonsStl>
  );
};

export const AsideButtonsStl = styled.aside`
  width: 12rem;
  height: 100vh;
  
  align-items: flex-start;
  background-color: #262626;

  .container-icons {
    display: flex;
    
    justify-content: center;
    width: 100%;
    height: 50%;
    
    ul {
      
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      margin: 70px 0 0 0;
      width: 6rem;
    }
    
    li {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #616161;
      padding: 8px;
      border-radius: 10px;
    }

    .hover-literal {
      position: absolute;
      display: flex;
      justify-content: center;
      bottom: -35px;
      padding: 5px;
      background: rgba(54, 53, 53, 0.8);
      border-radius: 5px;
      width: 100%;
    }

    
  }


  .react-icons {
    cursor: pointer;
  }
`;

export default AsideButtons;
