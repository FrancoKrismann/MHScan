import { Footer, Header } from "@/components";
import { LayoutContainer } from "@/styled-components";
import { Outlet } from "react-router-dom";
import {SearchNavbar} from "@/components"
import { Suspense, useState } from "react";


export function Layout() {

const [searchComponent , setSearchComponent] = useState(false)

const handleSearchClick = (boolValue: boolean):void => {
  console.log("click");
  
  setSearchComponent(boolValue);
};

  return (
    <>
      {
          searchComponent && 
          <SearchNavbar handleSearchClick={handleSearchClick}/>
        }
      <Header handleSearchClick={handleSearchClick}/>
      <LayoutContainer>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
        </Suspense>
      </LayoutContainer>
      <Footer />
    </>
  );
}
