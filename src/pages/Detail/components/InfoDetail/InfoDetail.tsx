import React from "react";
import styled from "styled-components";
import { RaitingStars } from "../RaitingStars";
import {
  DataInfoAlternative,
  DataInfoAuthor,
  DataInfoArtist,
  DataInfoGenre,
  DataInfoType,
  DataInfoReleaser,
  DataInfoStatus,
  DataInfoDescription,
} from "@/types";

interface InfoDetailProps {
  alternative: DataInfoAlternative["alternative"];
  author: DataInfoAuthor["author"];
  artist: DataInfoArtist["artist"];
  genre: DataInfoGenre["genre"];
  type: DataInfoType["type"];
  releaser: DataInfoReleaser["releaser"];
  status: DataInfoStatus["status"];
  description: DataInfoDescription["description"];
}

const InfoDetail: React.FC<InfoDetailProps> = ({
  alternative,
  author,
  artist,
  genre,
  releaser,
  status,
  type,
  description,
}) => {
  // const descriptionHTML = description.join('<br/>');

  const info = [
    "Alternative:",
    "Author(s):",
    "Artist(s):",
    "Genre(s):",
    "Release:",
    "Status:",
    "Type:",
  ];

  const InfoData = [
    alternative,
    author,
    artist,
    genre.join(", "),
    releaser,
    status,
    type,
  ];

  return (
    <InfoDetailStl>
      <RaitingStars />
      <div className="container-list-item">
        <ul>
          {info.map((item, index) => {
            return (
              <li key={index}>
                <h4>{item}</h4>
                <p>{InfoData[index]}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="div-description">
        {/* <p dangerouslySetInnerHTML={{ __html: descriptionHTML }}></p> */}
        <h4>Description:</h4>
        <div className="container-dataDescription">
          {description.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </InfoDetailStl>
  );
};

export const InfoDetailStl = styled.div`
  background: #313030;
  width: 95%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 0 10px 0;

  .container-list-item {
    /* border: 1px solid #093ff2; */
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
  }

  .div-description {
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: column;
    margin: 0px 40px 30px;

    .container-dataDescription {
      margin-top: 10px;
    }

    @media screen and (max-width :  1440px) {
      .container-dataDescription {
        overflow-y: scroll;
        height: 10rem;
      }
    }
  }

  @media screen and (max-width: 880px) {
    width: 80%;
    
  }
  .container-dataDescription::-webkit-scrollbar {
    width: 12px; /* Ancho de la barra de desplazamiento */
  }

  /* Estilo del riel de la barra de desplazamiento */
  .container-dataDescription::-webkit-scrollbar-track {
    background-color: transparent; /* Color del riel */
  }

  /* Estilo del mango de la barra de desplazamiento */
  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color del mango */
    border-radius: 6px; /* Radio de borde del mango */
  }

  /* Estilo del mango al pasar el ratón por encima */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color del mango al pasar el ratón por encima */
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    font-size: 1em;
    list-style: none;
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
  }

`;

export default InfoDetail;
