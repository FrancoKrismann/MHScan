import { Chapters_Item } from "@/interface";
import { LinkStyle } from "@/styled-components";
import { DataUpdateId , DataUpdateTitle, DataUpdateImage, DataUpadteHref} from "@/types";
import React from "react";
import styled from "styled-components";

interface CardUpdatesProps {
  id:DataUpdateId["id"];
  title: DataUpdateTitle["title"];
  image: DataUpdateImage["image"];
  href: DataUpadteHref["href"];
  chapters: Chapters_Item[];
}

const CardUpdates: React.FC<CardUpdatesProps> = ({
  id,
  title,
  chapters,
  image,
  href,
}) => {
  return (
    <CardUpdatesStl key={id}>
      <LinkStyle to={`manga/${href}`} className="container-img">
        <img src={image} alt={id} />
      <div className="div-gradier"></div>
      </LinkStyle>

      <div className="container-descrp">
        <div className="div-title">
          <LinkStyle to={`manga/${href}`}>
            <figcaption>{title}</figcaption>
          </LinkStyle>
        </div>

        <ul className="container-chapters">
          {chapters.map(({ chapter, updateTime }, index) => (
            <LinkStyle to={`manga/${href}/${chapter}`} key={index}>
              <li className="div-chapter">
                <div className="chapter-Number">Capítulo {chapter}</div>
                <div className="updateChapter">
                  Hace{" "}
                  {updateTime === 1
                    ? `${updateTime} hora`
                    : `${updateTime} horas`}
                </div>
              </li>
            </LinkStyle>
          ))}
        </ul>
      </div>
    </CardUpdatesStl>
  );
};

const CardUpdatesStl = styled.div`
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

  width: calc(24% - 2rem);
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
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
    /* flex-direction: column; */
    /* border: 1px solid #f7df07; */
    
    margin-bottom: 5px;

    figcaption {
      /* ... Estilos para figcaption ... */
      font-weight: 600;
      font-size: 22px;
      color: #e8dfdf;
      line-height: 1.75rem;
      margin-bottom: 5px;
      text-transform: none;
      font-family: Cabin, sans-serif;
    }
  }

  .container-chapters {
    /* ... Tus estilos ... */
    width: 100%;
    /* border: 1px solid #bb00ff; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
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

  .updateChapter {
    /* border: 1px solid #fe2f00; */
    display: flex;
    height: 100%;
    font-size: 11px;
    font-weight: 100;
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

export default CardUpdates;
