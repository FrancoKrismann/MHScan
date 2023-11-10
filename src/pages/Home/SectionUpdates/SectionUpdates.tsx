/* eslint-disable no-mixed-spaces-and-tabs */
import { DataViewType } from "@/interface";
import React from "react";
import styled from "styled-components";
import { CardUpdates } from "../components/CardUpdates";

interface SectionUpdatesProps {
  DataView: DataViewType[];
}

const SectionUpdates: React.FC<SectionUpdatesProps> = ({ DataView }) => {

const DataSlice = DataView.reverse().slice(-8)

  return (
    <SectionUpdatesStl>
      <div className="section-h2">
        <h2>ACTUALIZACIONES</h2>
      </div>
      <ContainerCards>
        {DataSlice.map((item) => (
          <CardUpdates
            id={item.id}
            image={item.image}
            title={item.title}
            chapters={item.chapters}
            href={item.href}
            key={item.id}
          />
        ))}
      </ContainerCards>
    </SectionUpdatesStl>
  );
};

const ContainerCards = styled.div`
  /* border: 1px solid #df0c0c; */

  display: flex;

  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;

  width: 90%;

  

  @media screen and (max-width: 1440px) {
    width: 95%;
  }

  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

const SectionUpdatesStl = styled.div`
  margin: 10rem 0 10rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 90%;
  /* height: fit-content; */
  /* height: 50rem; */
  background-color: #262626;
  border-radius: 20px;

  .section-h2 {
    width: 100%;
    h2 {
      margin: 0.83em 0 0.83em 2em;
      text-decoration-line: underline;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 100%;
  }

  /* @media screen and (max-width: 840px) {
    width: 100%;
  } */
`;

export default SectionUpdates;
