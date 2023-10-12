import { DataUpdateImage } from "@/types";
import React from "react";
import styled from "styled-components";

export interface CardDetailProps {
  id: string;
  image: DataUpdateImage["image"];
}

const CardDetail: React.FC<CardDetailProps> = ({ image, id }) => {
  return (
    <CardDetailStl>
      <img src={image} alt={id} />
    </CardDetailStl>
  );
};

export const CardDetailStl = styled.div`
  width: calc(67% - 2rem);
  border: inherit;
  border-radius: 15px;
  margin: 10px 0 70px 0;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;

    object-fit: cover;
  }
`;

export default CardDetail;
