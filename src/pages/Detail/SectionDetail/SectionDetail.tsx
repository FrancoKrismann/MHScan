import React from "react";
import styled from "styled-components";
import { CardDetail } from "../components/CardDetail";
import { InfoDetail } from "../components/InfoDetail";
import {
  DataUpdate_Item as DataDetail_Item,
  InfoDetail_Item,
} from "@/interface";

interface SectionDetailProps {
  DataDetail: DataDetail_Item;
  InfoDetail_items: InfoDetail_Item;
}

const SectionDetail: React.FC<SectionDetailProps> = ({
  DataDetail,
  InfoDetail_items,
}) => {
  const { title, image, id } = DataDetail;
  const {
    alternative,
    artist,
    author,
    genre,
    releaser,
    status,
    type,
    description,
  } = InfoDetail_items;

  return (
    <SectionDetailStl>
      <div className="container-visual">
        <div className="div-title">
          <h1>{title}</h1>
        </div>
        <CardDetail image={image} id={id} />
      </div>
      <div className="container-detail">
        <InfoDetail
          alternative={alternative}
          artist={artist}
          author={author}
          genre={genre}
          releaser={releaser}
          status={status}
          type={type}
          description={description}
        />
      </div>
    </SectionDetailStl>
  );
};

export const SectionDetailStl = styled.div`
  width: 95%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  border-radius: 20px;

  margin: 20px 0 20px 0;

  @media screen and (max-width: 1060px) {
    width: 100%;
  }
  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
  .container-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid green; */
    width: 50%;
    h1 {
      font-size: 30px;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  .container-detail {
    display: flex;
    width: 50%;

    @media screen and (max-width: 880px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default SectionDetail;
