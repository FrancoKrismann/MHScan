import { DataViewType } from "@/interface";
import React from "react";
import styled from "styled-components";
import { ButtonsNavBottom } from "./components/ButtonsNavBottom";

interface ChapterButtonsBottomProps {
  DataForChapter: DataViewType[];
  CurrentChapter: number | undefined;
}

const ChapterButtonsBottom: React.FC<ChapterButtonsBottomProps> = ({
  CurrentChapter,
  DataForChapter,
}) => {
  const Chapters = DataForChapter[0].chapters;

  const Href = DataForChapter[0].href;

  return (
    <ChapterButtonsBottomStl>
      <ButtonsNavBottom
        Chapters={Chapters}
        Href={Href}
        CurrentChapter={CurrentChapter}
      />
    </ChapterButtonsBottomStl>
  );
};

export const ChapterButtonsBottomStl = styled.div`
  /* border: 1px solid #fff; */
  width: 20rem;
  display: flex;
  justify-content: space-around;
  padding: 15px;
  border-radius: 10px;
  background-color: #262626;
`;

export default ChapterButtonsBottom;
