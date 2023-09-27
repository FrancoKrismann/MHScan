import React from "react";
import styled from "styled-components";
import { DataRecommend } from "./components/DataRecommend";
import { DataPorts } from "@/data";

// Se que queja si esta vacio la interfaz
// interface HomeProps {
// }
const HomeStl = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;

  .container-MangaRecomend {
	margin: 8rem 10px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 90%;
    height: fit-content;
    background-color: #262626;
    border-radius:20px;
    
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
  }
`;
const Home: React.FC = () => {
  return (
    <HomeStl>
      <div className="container-MangaRecomend">
        <DataRecommend DataPorts={DataPorts} />
      </div>
    </HomeStl>
  );
};

export default Home;
