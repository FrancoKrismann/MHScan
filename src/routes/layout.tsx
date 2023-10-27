import { Footer, Header } from "@/components";
import { LayoutContainer } from "@/styled-components";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
    
      <Header />
      <LayoutContainer>
       
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  );
}
