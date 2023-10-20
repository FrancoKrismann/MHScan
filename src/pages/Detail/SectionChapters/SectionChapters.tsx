import React, { useState } from "react";
import styled from "styled-components";
import { Chapters } from "../components/Chapters";
import { DataUpdate_Item as DataDetail_Item } from "@/interface";
import { BiSort } from "react-icons/bi";

interface SectionChaptersProps {
  DataDetail: DataDetail_Item;
}

const SectionChapters: React.FC<SectionChaptersProps> = ({ DataDetail }) => {
  const { chapters } = DataDetail;

  const chaptersCount = chapters.length;
  const [isSortedDescending, setIsSortedDescending] = useState(true);

  const [sortedChapters, setSortedChapters] = useState(
    [...chapters].sort((a, b) =>
      isSortedDescending ? b.chapter - a.chapter : a.chapter - b.chapter
    )
  );
  const [visibleChapters, setVisibleChapters] = useState(9);
  const [chaptersToShow, setChaptersToShow] = useState(
    sortedChapters.slice(0, visibleChapters)
  );

  const sortChapters = () => {
    setIsSortedDescending((prev) => !prev);
    setSortedChapters([...sortedChapters].reverse());
    setChaptersToShow([...sortedChapters].reverse().slice(0, visibleChapters));
  };

  const loadMoreChapters = () => {
    setVisibleChapters((prev) => prev + 9);
    setChaptersToShow(sortedChapters.slice(0, visibleChapters + 9));
  };

  return (
    <SectionChaptersStl>
      <div className="container-titleSection">
        <h2>{chaptersCount} Capitulos en total</h2>

        <BiSort
          size="2.5em"
          onClick={sortChapters}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="container-border"></div>

      <div className="container-chapters">
        {chaptersToShow.map(({ chapter, updateTime }, index) => {
          return (
            <Chapters key={index} chapter={chapter} updateTime={updateTime} />
          );
        })}
        {chaptersToShow.length < chapters.length && (
          <div className="div-degrad"></div>
        )}
      </div>

      <div className="div-moreChapters">
        {chaptersToShow.length < chapters.length && (
          <button onClick={loadMoreChapters} className="animated-button">
            <span>Cargar más capítulos</span>
            <span></span>
          </button>
        )}
      </div>
    </SectionChaptersStl>
  );
};

const SectionChaptersStl = styled.div`
  
  width: 70%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  border-radius: 20px;

  margin: 30px 0 10px 0;

  /* border: 1px solid yellow; */

  @media screen and (max-width: 1660px) {
    width: 80%;
  }

  @media screen and (max-width: 1440px) {
    width: 90%;
  }

  @media screen and (max-width: 1160px) {
    width: 100%;
  }

  .container-chapters {
    width: 75%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 19px;
    justify-items: center; /* Alinea las tarjetas hacia el inicio (izquierda) */

    /* border: 1px solid #fff; */
    margin-bottom: 10px;
    transition: max-height 0.5s ease;

    @media screen and (max-width: 1160px) {
      width: 95%;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 10px;
    }
  }

  .div-degrad {
    position: absolute;
    bottom: 0;

    width: 100%;
    padding: 0 0px 0 8px;
    height: 3rem;
    /* border: 1px solid #fff; */
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background: linear-gradient(to top, #1e1d1d, rgba(0, 0, 0, 0));
    pointer-events: none;
  }
  .div-moreChapters {
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: 1px solid #fff; */
    margin: 6px 0 20px 0;

    .animated-button {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  background-color: inherit;
  border-radius: 100px;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0 0 0 2px #ffffff20;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}


.animated-button span:first-child {
  position: relative;
  z-index: 1;
}

.animated-button:hover {
  box-shadow: 0 0 0 5px #a0a0a05f;
  color: #ffffff;
}

.animated-button:active {
  scale: 0.95;
}

.animated-button:hover span:last-child {
  width: 150px;
  height: 150px;
  opacity: 1;
}
  }
  .container-titleSection {
    width: 80%;
    display: flex;
    flex-direction: row;

    align-items: center;
    /* justify-content: space-between; */
    gap: 60px;

    /* border: 1px solid blue; */
    h2 {
      /* text-decoration-line: underline; */
      font-size: 30px;
    }

    @media screen and (max-width: 1160px) {
      h2 {
        font-size: 20px;
      }
    }
  }

  .container-border {
    border: 1px solid #fff;
    opacity: 0.5;
    width: 80%;
    margin: 5px 0 30px 0;
  }
`;

export default SectionChapters;
