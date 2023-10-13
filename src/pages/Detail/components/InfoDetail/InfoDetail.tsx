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
} from "@/types";

interface InfoDetailProps {
  alternative: DataInfoAlternative["alternative"];
  author: DataInfoAuthor["author"];
  artist: DataInfoArtist["artist"];
  genre: DataInfoGenre["genre"];
  type: DataInfoType["type"];
  releaser: DataInfoReleaser["releaser"];
  status: DataInfoStatus["status"];
}

const InfoDetail: React.FC<InfoDetailProps> = ({
  alternative,
  author,
  artist,
  genre,
  releaser,
  status,
  type,
}) => {
  const info = [
    "Alternative :",
    "Author(s) :",
    "Artist(s) :",
    "Genre(s) :",
    "Release :",
    "Status :",
    "Type :",
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
    </InfoDetailStl>
  );
};

export const InfoDetailStl = styled.div`
  background: #313030;
  width: 90%;
  height: 40rem;
  border-radius: 15px;

  .container-list-item {
    border: 1px solid #093ff2;
    height:fit-content;
    display: flex;
    flex-wrap: wrap;

    ul {
      margin-block-end: 0;
      margin-block-start: 0;
      display: flex;
      flex-direction: column;
    }

    li {
      font-size: 1em;
      list-style: none;
      margin-top: 12px;
      h4 {
        margin-block-end: 0;
        margin-block-start: 0;
      }

      p {
        margin-block-end: 0;
        margin-block-start: 0;
      }
    }
  }
`;

export default InfoDetail;
