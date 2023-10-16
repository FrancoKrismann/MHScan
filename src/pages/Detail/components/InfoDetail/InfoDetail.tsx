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
  description
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
            {
              description.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            }
      </div>
    </InfoDetailStl>
  );
};

export const InfoDetailStl = styled.div`
  background: #313030;
  width: 92%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap:20px;
  margin:10px 0 10px 0;

  .container-list-item {
    /* border: 1px solid #093ff2; */
    height:fit-content;
    display: flex;
    flex-wrap: wrap;
    }
  

  .div-description {
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: column;
    margin: 0px 40px 15px ;

    @media screen and (max-width: 1060px) {
    overflow-y: scroll;
    height: 10rem;
    
  }
    
  }
  
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
      display: flex;
      flex-wrap: wrap;
    }
      h4 {
        margin-block-end: 0;
        margin-block-start: 0;
      }

      p {
        margin-block-end: 0;
        margin-block-start: 0;
      }
    
`;

export default InfoDetail;
