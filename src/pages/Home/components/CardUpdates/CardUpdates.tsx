import { Chapters_Item } from "@/interface";
import { LinkStyle } from "@/styled-components";
import React from "react";
import styled from "styled-components";

interface CardUpdatesProps {
  id: string;
  title: string;
  image: string;
  href: string;
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
      <LinkStyle to={`/library/${href}`} className="container-img">
        <img src={image} alt={id} />
      </LinkStyle>
      {/* <div className="div-gradier"></div> */}

      <div className="pointer-events-none absolute-b-left w-full h-2/4 bg-gradient-to-b from-transparent via-gray-800/70 to-gray-800/90 rounded-inherit"></div>
      
      {/* <div className="container-descrp">
        <LinkStyle to={`/library/${href}`}>
          <figcaption>{title}</figcaption>
        </LinkStyle>

        <div className="container-chapters">
          <ul>
            
            {chapters.map(({ chapter, updateTime }, index) => (
              <LinkStyle to={`/library/${href}/${chapter}`} key={index}>
                <div className="div-chapter">
                  <li>
                    Capítulo {chapter} - Hace{" "}
                    {updateTime === 1
                      ? `${updateTime} hora`
                      : `${updateTime} horas`}
                  </li>
                </div>
              </LinkStyle>
            ))}
          </ul>
        </div>
      </div> */}
    </CardUpdatesStl>
  );
};

const CardUpdatesStl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #fff;
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
    width: calc(27% - 2rem);
    height: 26rem;
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
    }
  }

  .div-gradier {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-image: linear-gradient(var(--un-gradient-stops));
  }
  .from-transparent {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
  opacity:0.5;
  background-image: linear-gradient(var(--un-gradient-stops));
}
.bg-gradient-to-b {
    --un-gradient-shape: to bottom;
    --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
    background-image: linear-gradient(var(--un-gradient));
}
.to-gray-800\/90 {
    --un-gradient-to-position: 100%;
    --un-gradient-to: rgba(31,41,55,.9) var(--un-gradient-to-position);
}
  .via-gray-800\/70 {
    --un-gradient-via-position: 12%;
    --un-gradient-to: rgba(31, 41, 55, 0);
    --un-gradient-stops: var(--un-gradient-from),
      rgba(10, 10, 11, 0.7) var(--un-gradient-via-position),
      var(--un-gradient-to);
  }
  .from-transparent {
    --un-gradient-from-position: 0%;
    --un-gradient-from: transparent var(--un-gradient-from-position);
    --un-gradient-to-position: 100%;
    --un-gradient-to: hsla(0, 0%, 100%, 0) var(--un-gradient-to-position);
    --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to);
  }
  .container-descrp {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    word-wrap: break-word;
    /* border: 1px solid #2708d6;  */
    margin: 0 auto;

    figcaption {
      font-weight: 500;
      font-size: 20px;
    }
  }
  .container-chapters {
    /* position: absolute;
    bottom: 0; */
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border: 1px solid #f7df07;
    display: flex;

    .div-chapter {
      border: 1px solid #04d712;

      width: 100%;
      height: auto;
      background-color: #212121;
    }

    li {
      list-style: none;
    }
  }
`;

export default CardUpdates;
