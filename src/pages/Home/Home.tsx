import React, { useEffect } from "react";
import styled from "styled-components";
import { SectionRecommend } from "./SectionRecomend";
import { DataView} from "@/data";
import { SectionUpdates } from "./SectionUpdates";


const HomeStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
`;
const Home: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll al inicio
  }, []);

  return (
    <HomeStl>
        <SectionRecommend DataView={DataView} />
        <SectionUpdates DataView={DataView} />
    </HomeStl>
  );
};

export default Home;
