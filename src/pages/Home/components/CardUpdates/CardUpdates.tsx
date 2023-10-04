import { Chapters_Item } from "@/interface";
import { LinkStyle } from "@/styled-components";
import React from "react";
import styled from "styled-components";

interface CardUpdatesProps {
  id: string;
  title: string;
  image: string;
  chapters: Chapters_Item[] ;
  key: string;
}

const CardUpdates: React.FC<CardUpdatesProps> = ({ id, title, chapters, image, key }) => {
  return (
    <CardUpdatesStl key={key}>
      <LinkStyle to="" className="container-img">
        <img src={image} alt={id} />
      </LinkStyle>

      <div className="container-title">
        <p>{title}</p>
      </div>
      <div className="container-chapters">
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.chapter}>
            Capítulo {chapter.chapter} - {chapter.updateTime}
          </li>
        ))}
      </ul>
        
       
      </div>
    </CardUpdatesStl>
  );
};

const CardUpdatesStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #fff;
  border-radius: 30px;
  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  overflow: hidden;
  cursor: pointer;

  width: calc(24% - 2rem);
  height: 22rem;

  .container-img {
    display: flex;
    border: 1px solid #b01313;

    width: 11rem;
    height: 100%;
    img {
      border-radius: 20px;

      width: 100%;
      /* height: 100%; */
      object-fit: cover;
    }
  }

  .container-title {
    height: 90px;
    flex-grow: 1; /* Permite que el título ocupe todo el espacio vertical disponible */
  word-wrap: break-word;
  }
`;

export default CardUpdates;
