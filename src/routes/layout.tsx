import { Footer, Header } from "@/components";
import { LayoutContainer } from "@/styled-components";
import { Outlet } from "react-router-dom";
import {SearchNavbar} from "@/components"


export function Layout() {
  return (
    <>
      {
          //Condicion
          <SearchNavbar/>
        }
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  );
}
