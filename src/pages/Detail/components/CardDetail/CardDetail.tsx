import { DataUpdateImage, DataUpdateTitle } from "@/types";
import React from "react";
import styled from "styled-components";

export interface CardDetailProps {
  id: string;
  title: DataUpdateTitle["title"];
  image: DataUpdateImage["image"];
}

const CardDetail: React.FC<CardDetailProps> = ({ title, image, id }) => {
  return (
    <CardDetailStl>
      <div className="div-img">
        <img src={image} alt={id} />
      </div>
      <div className="div-title">
        <h2>{title}</h2>
      </div>
    </CardDetailStl>
  );
};

export const CardDetailStl = styled.div`
  width: calc(20% - 2rem);
  border: inherit;
  border: 1px solid #fff;

  .div-img {
	width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default CardDetail;
