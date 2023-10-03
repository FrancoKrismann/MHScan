/* eslint-disable no-mixed-spaces-and-tabs */
import { DataPort_Item } from "@/interface";
import React from "react";
import styled from "styled-components";
import { CardUpdates } from "../components/CardUpdates";

interface SectionUpdatesProps {
  DataPorts: DataPort_Item[];
}

const SectionUpdates: React.FC<SectionUpdatesProps> = ({ DataPorts }) => {
  return (
    <SectionUpdatesStl>
      <ContainerCards>
		{
			DataPorts.map(item => (
				<CardUpdates
				id={item.id}
				image={item.image}
				title={item.title}
				key={item.id}
				/>
			))
		}
	  </ContainerCards>
    </SectionUpdatesStl>
  );
};

const ContainerCards = styled.div`
border: 1px solid #df0c0c;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

flex-wrap: wrap;
gap: 20px;

width: 90%;
height: fit-content;
`;

const SectionUpdatesStl = styled.div`
  margin: 10rem 0 10rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 90%;
  /* height: fit-content; */
  height: 50rem;
  background-color: #262626;
  border-radius: 20px;
`;

export default SectionUpdates;
