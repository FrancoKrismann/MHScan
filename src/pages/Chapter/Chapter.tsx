import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ChapterButtons } from "./ChapterButtons";
import { SectionChapter } from "./SectionChapter";
import { DataView } from "@/data";

export type ChapterProps = {};

const Chapter: React.FC<ChapterProps> = ({}) => {
  const { id: TitleManga, chapter } = useParams<{
    id?: string;
    chapter?: string;
  }>();

  const DataForChapter = DataView.filter((data) => data.href === TitleManga);

  return (
    <ChapterStl>
      <ChapterButtons
        DataForChapter={DataForChapter}
        CurrentChapter={Number(chapter)}
      />
      <SectionChapter />
    </ChapterStl>
  );
};

export const ChapterStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: fit-content;
`;

export default Chapter;
