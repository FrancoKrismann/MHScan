import React from "react";
import styled from "styled-components";
import AsideButtons from "./AsideButtons/SlideButtons";
import { ViewDashboard } from "./ViewDashboard";
import { Outlet } from "react-router-dom";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <DashboardStl>
      <div className="container-Slide">
      <AsideButtons />
      </div>
      <ViewDashboard>
        <Outlet />
      </ViewDashboard>
    </DashboardStl>
  );
};

const DashboardStl = styled.div`
position: relative;
  display: flex;
  width: 100%;

  /* .container-Slide {
    display: flex;
    width: 13.7rem;
    height: 100vh;
  } */

`;

export default Dashboard;
