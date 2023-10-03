import React from "react";
import styled from "styled-components";
import { SectionRecommend } from "./SectionRecomend";
import { DataPorts } from "@/data";
import { SectionUpdates } from "./SectionUpdates";


const HomeStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* height: 80vh; */


	

    /* @media screen and (max-width: 1640px) {
    width:95%;
    } */

    /* @media screen and (max-width: 1440px) {
    width:90%;
    }
    @media screen and (max-width: 1240px) {
    width:0%;
    } */

    /* @media screen and (max-width: 900px) {
    width:100%;
} */
  
`;
const Home: React.FC = () => {
  return (
    <HomeStl>
        <SectionRecommend DataPorts={DataPorts} />
        <SectionUpdates DataPorts={DataPorts} />
    </HomeStl>
  );
};

export default Home;
