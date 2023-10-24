import { LinkStyle } from "@/styled-components";
import {
  DataViewChapters,
  DataViewDetails,
  DataViewHref,
  DataViewId,
  DataViewImage,
  DataViewTitle,
} from "@/types";
import React from "react";
import styled from "styled-components";

interface CardLibraryProps {
  id: DataViewId["id"];
  title: DataViewTitle["title"];
  image: DataViewImage["image"];
  href: DataViewHref["href"];
  chapters: DataViewChapters["chapters"];
  detail: DataViewDetails["detail"];
}

const CardLibrary: React.FC<CardLibraryProps> = ({
  chapters,
  href,
  id,
  image,
  title,
  detail,
}) => {
  const TotalChapters = chapters.length;

  return (
    <CardLibraryStl>
      <LinkStyle to={`/manga/${href}`} className="container-img">
        <img src={image} alt={id} />
        <div className="div-gradier"></div>
      </LinkStyle>
      <div className="container-descrp">
        <div className="div-title">
          <figcaption>{title}</figcaption>
        </div>
        <div className="container-infoDetail">
          <ul>
            <li className="chapter-total">
              {TotalChapters} {TotalChapters > 1 ? "Capitulos" : "Capitulo"}
            </li>
            {detail.map(({ status }) => {
              return <li className="manga-status">{status}</li>;
            })}
          </ul>
        </div>
      </div>
    </CardLibraryStl>
  );
};

export const CardLibraryStl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  border: inherit;
  border-radius: 15px;
  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  overflow: hidden;
  cursor: pointer;

  width: calc(20% - 2rem);
  height: 24rem;
  min-height: 22rem;

  @media screen and (max-width: 1440px) {
    width: calc(26% - 2rem);
  }

  @media screen and (max-width: 1366px) {
    width: calc(24% - 2rem);
    height: 23rem;
  }

  @media screen and (max-width: 1240px) {
    width: calc(30% - 2rem);
  }

  @media screen and (max-width: 1140px) {
    width: calc(36% - 2rem);
    height: 25rem;
  }
  @media screen and (max-width: 1140px) {
    width: calc(40% - 2rem);
    height: 25rem;
  }
  @media screen and (max-width: 748px) {
    width: calc(46% - 2rem);
    height: 25rem;
  }

  .container-img {
    /* display: flex; */
    /* border: 1px solid #b01313; */

    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
  }

  .div-gradier {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80%;
    background-image: linear-gradient(
      to bottom,
      rgba(5, 7, 12, 0),
      rgba(5, 7, 12, 5)
    );
    pointer-events: none;
  }

  .container-infoDetail {
    width: 90%;
    /* border: 1px solid #fff; */
    margin-bottom: 15px;

    ul {
      display: flex;
      justify-content: space-around;
    }

    li {
      list-style-type: none;
    }

    .chapter-total {
      background-color: #94a3b840;
      padding: 8px;
      border-radius: 10px;
      --un-backdrop-blur: blur(10px);
      backdrop-filter: var(--un-backdrop-blur);
    }

    .manga-status {
      text-transform: capitalize;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 8px;
      border-radius: 10px;

      background-color: #34d39940;

      --un-backdrop-blur: blur(10px);
      backdrop-filter: var(--un-backdrop-blur);
    }
  }

  .container-descrp {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #f7df07; */
  }

  .div-title {
    width: 80%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    /* flex-direction: column; */
    /* border: 1px solid #f7df07; */
    pointer-events: none;

    margin-bottom: 5px;

    figcaption {
      /* ... Estilos para figcaption ... */
      font-weight: 500;
      font-size: 18px;
      color: #e8dfdf;
      line-height: 1.75rem;
      margin-bottom: 5px;
      text-transform: none;
      font-family: Cabin, sans-serif;
    }
  }

  .div-chapter {
    /* width: 100%; */
    height: 1.5rem;
    background-color: #242424;
    margin: 0 0 5px 0;
    padding: 8px 20px;
    line-height: 1;
    border-radius: 5px;
    /* ... Estilos para los elementos de la lista ... */
    list-style: none;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .chapter-Number {
    /* border: 1px solid #fcfdfd; */
    display: flex;
    height: 100%;
    font-size: 12px;
    align-items: center;
    padding: 0.25em 0.4em;
  }

  @media screen and (max-width: 1440px) {
    .chapter-Number {
      font-size: 11px;
    }
    .updateChapter {
      font-size: 10px;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export default CardLibrary;
