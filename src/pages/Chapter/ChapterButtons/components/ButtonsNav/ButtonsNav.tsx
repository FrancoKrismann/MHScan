import { Chapters_Item, DataViewType } from "@/interface";
import { LinkStyle } from "@/styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ButtonsNavProps {
  Chapters: Chapters_Item[];
  CurrentChapter: number | undefined;
  Href:string | undefined;
}

const ButtonsNav: React.FC<ButtonsNavProps> = ({
  Chapters,
  CurrentChapter,
  Href
}) => {

	const navigate = useNavigate();


const handlePreviousClick = () => {
    if (CurrentChapter !== undefined && CurrentChapter > 1) {
      const previousChapter = CurrentChapter - 1;
      navigate(`/manga/${Href}/${previousChapter}`);
    }
  };

const handleNextClick = () => {
    if (CurrentChapter !== undefined && CurrentChapter < Chapters.length) {
      const nextChapter = CurrentChapter + 1;
      navigate(`/manga/${Href}/${nextChapter}`);
    }
  };

  return <ButtonsNavStl>
	<div className="nav-previous">
	{CurrentChapter !== undefined && CurrentChapter > 1 && (
          <button onClick={handlePreviousClick}>
            Anterior
          </button>
        )}
	</div>
	<div className="nav-next">
	{CurrentChapter !== undefined && CurrentChapter < Chapters.length && (
          <button onClick={handleNextClick}>
			  Siguiente
		  </button>
          
        )}	</div>
  </ButtonsNavStl>;
};

export const ButtonsNavStl = styled.div``;

export default ButtonsNav;
