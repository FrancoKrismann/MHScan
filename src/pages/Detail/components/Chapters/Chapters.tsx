import { LinkStyle } from "@/styled-components";
import { DataChapterNumber, DataChapterUpdateTime } from "@/types";
import React, { useState } from "react";
import styled from "styled-components";

interface ChaptersProps {
  chapter: DataChapterNumber["chapter"] | null;
  updateTime: DataChapterUpdateTime["updateTime"];
}

const Chapters: React.FC<ChaptersProps> = ({ chapter, updateTime }) => {

	
 

  return (
    <LinkStyle to={""}>
      <ChaptersStl>
		
        <h4>Capitulo {chapter}</h4>
        <span>Hace {updateTime} horas</span>
      </ChaptersStl>
    </LinkStyle>
  );
};

export const ChaptersStl = styled.div`
  width:14rem;
  height: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  text-align: center;

  border: 1px solid;
  border-radius:15px;
  margin:10px 0 0px 0;

  --un-border-opacity: 1;
    border-color: rgba(55,65,81,var(--un-border-opacity));

  h4 {
    margin-left: 10px;
    font-size: 16px;
  }

  span {
	display: flex;
	align-items: center;
	font-size: 12px;
	font-weight: 400;

	margin-right: 15px;
  }

  &:hover {
    background-color: #282727;
  }
`;

export default Chapters;
