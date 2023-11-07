import { DataViewType } from "@/interface";
import React from "react";
import styled from "styled-components";
import { SelectMenu } from "./components/SelectMenu";
import { ButtonsNav } from "./components/ButtonsNav";
import { LinkStyle } from "@/styled-components";

interface ChapterButtonsProps {
  DataForChapter: DataViewType[];
  CurrentChapter: number | undefined;
}

const ChapterButtons: React.FC<ChapterButtonsProps> = ({
  DataForChapter,
  CurrentChapter,
}) => {
  const Chapters = DataForChapter[0].chapters;

  const Href = DataForChapter[0].href;

  const Title = DataForChapter[0].title;

  return (
    <ChapterButtonsStl>

    <div className="container-title-ref">
      <LinkStyle to={`/manga/${Href}`}>
      {Title}
      </LinkStyle>
      <p>/Capitulo {CurrentChapter}</p>
    </div>
      
      <div className="container-buttons-nav">
        <SelectMenu
        Chapters={Chapters}
        CurrentChapter={CurrentChapter}
        Href={Href}
      />
      <ButtonsNav
        Chapters={Chapters}
        CurrentChapter={CurrentChapter}
        Href={Href}
      />
      </div>
      
    </ChapterButtonsStl>
  );
};

export const ChapterButtonsStl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 10px 0 10px 0;
  
  /* border: 1px solid #fff; */
  
  .container-title-ref {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight:0;
    padding: 20px;
    width: 100%;

  /* border: 1px solid #fff; */


a{
  text-transform: none;
  font-size: 25px;
}
    
    p {
      font-size: 25px;
    }
  }

  .container-buttons-nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    background-color: #262626;



  }
`;

export default ChapterButtons;
