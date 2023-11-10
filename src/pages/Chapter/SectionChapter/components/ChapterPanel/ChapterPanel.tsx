import { ChapterPanel_item } from "@/types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ChapterPanelProps {
  chapters: ChapterPanel_item["chapters"];
  CurrentChapter: number | undefined;
}

const ChapterPanel: React.FC<ChapterPanelProps> = ({
  chapters,
  CurrentChapter,
}) => {
  const [visibleChapters, setVisibleChapters] = useState(6); // Número inicial de paneles visibles
  const [loading, setLoading] = useState(false);

  const totalChapters = chapters.length;
  
  if(CurrentChapter === undefined) return <div>Error</div>

  const currentChapterData = chapters.find((chapter) => chapter.chapterNumber === CurrentChapter);

  if(currentChapterData === undefined) return <div>Error Data</div>

  const DataPanelImg = currentChapterData.images
  
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading) {
      // Simulando una carga de datos (puedes hacer una llamada a una API aquí)
      setTimeout(() => {
        setVisibleChapters((prev) => prev + 3); // Añade más paneles visibles
        setLoading(false);
      }, 500); // Simulando una demora en la carga
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <ChapterPanelStl>
      {DataPanelImg?.slice(0, visibleChapters).map((chapter, index) => (
        <div key={index} className="div-panel">
          <img src={chapter} alt={chapter} />
        </div>
      ))}
      {loading && <div></div>}
      {visibleChapters >= totalChapters && <div></div>}
    </ChapterPanelStl>
  );
};

const ChapterPanelStl = styled.div`
  img {
    margin: 0 auto;
  }

  .div-panel {
  }
`;

export default ChapterPanel;
