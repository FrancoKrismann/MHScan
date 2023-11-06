import { DataViewType } from "@/interface";
import React from "react";
import styled from "styled-components";
import { SelectMenu } from "./components/SelectMenu";
import { ButtonsNav } from "./components/ButtonsNav";

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

  return (
    <ChapterButtonsStl>
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
    </ChapterButtonsStl>
  );
};

export const ChapterButtonsStl = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;

  border: 1px solid #fff;
`;

export default ChapterButtons;
