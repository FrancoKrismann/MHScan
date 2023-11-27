import React from "react";
import styled from "styled-components";
import AsideButtons from "./AsideButtons/SlideButtons";
import { ViewDashboard } from "./ViewDashboard";
import { Outlet } from "react-router-dom";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <DashboardStl>
      <AsideButtons />
      <ViewDashboard>
        <Outlet />
      </ViewDashboard>
    </DashboardStl>
  );
};

const DashboardStl = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default Dashboard;
