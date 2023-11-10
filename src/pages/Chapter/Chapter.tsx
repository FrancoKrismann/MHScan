import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ChapterButtonsTop } from "./ChapterButtons";
import { SectionChapter } from "./SectionChapter";
import { DataView } from "@/data";
import { MangasChapters } from "@/data/chapters";
import { ChapterButtonsBottom } from "./ChapterButtonsBottom";

export type ChapterProps = {};

const Chapter: React.FC<ChapterProps> = ({}) => {
  const { id: TitleManga, chapter } = useParams<{
    id?: string;
    chapter?: string;
  }>();

  const DataForChapter = DataView.filter((data) => data.href === TitleManga);

  const DataMangaChapter = MangasChapters.filter(
    (data) => data.href === TitleManga
  );

  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll al inicio
  }, []);

  console.log(DataMangaChapter);
  
  return (
    <ChapterStl>
      <ChapterButtonsTop
        DataForChapter={DataForChapter}
        CurrentChapter={Number(chapter)}
      />
      {
        DataMangaChapter.length > 0 ? (
          <SectionChapter
        DataMangaChapter={DataMangaChapter}
        CurrentChapter={Number(chapter)}
      />
        ) : (
          <div className="ErrorData">Error: not found 404</div>
        )
      }
      
      <ChapterButtonsBottom
        CurrentChapter={Number(chapter)}
        DataForChapter={DataForChapter}
      />
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

  .ErrorData {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
  }
`;

export default Chapter;
