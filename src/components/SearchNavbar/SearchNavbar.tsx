import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { CardSearch } from "./CardSearch";
import { DataView } from "@/data";
import LogoMHSCan from "@/assets/Logo.svg.webp";


interface SearchNavbarProps {}

interface SearchContainerProps {
  expanded: boolean;
}

const SearchNavbar: React.FC<SearchNavbarProps> = ({}) => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [query, setQuery] = useState("");

  const searchRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
  //       setSearchOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // const handleClickSearch = (): void => {
  //   setSearchOpen(!searchOpen);
  // };
  console.log(query);

  const FilterData = () => {
    if (!query.length) return [];
    const DataFilter = DataView.filter((item) =>
      item.title.toUpperCase().includes(query.toUpperCase())
    );
     
    return DataFilter.length > 0 ? DataFilter : null;
  };

  return (
    <ContainerSearchBar expanded={searchOpen}>
      <SearchNavbarStl ref={searchRef}>
        <div className="container-searchHeader">
          <div className="Div-button-close">
            <AiFillCloseCircle size="3em" className="Button-close" />
          </div>
          <div className="Div-search-input">
            <input type="text" value={query} onChange={handleInputChange} />
            <button className="buttonSearch">
              <AiOutlineSearch size="2.5em" className="searchIcon" />
            </button>
          </div>
        </div>
        <div className="Div-resultsSearch">
          <CardContainer>
          
          {query.length > 0 ? (
  FilterData()?.map((item) => (
    <CardSearch
      key={item.id}
      href={item.href}
      id={item.id}
      image={item.image}
      title={item.title}
      chapters={item.chapters}
      detail={item.detail}
    />
  ))
) : (
  
  <div className="Div-nothing">
    <img src={LogoMHSCan} alt="log"/>
  </div>
)}
          </CardContainer>
        </div>
      </SearchNavbarStl>
    </ContainerSearchBar>
  );
};

const ContainerSearchBar = styled.div<SearchContainerProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchNavbarStl = styled.div<SearchNavbarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #262626;
  width: 35rem;
  height: 40rem;
  opacity: 1;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 20px 4px 4px 15px rgba(255, 255, 255, 0.2);
  -webkit-box-shadow: 4px 12px 20px 1px rgba(255, 255, 255, 0.1);
  -moz-box-shadow: 4px 10px 10px 10px rgba(255, 255, 255, 0.16);

  @media (max-width: 1600px) {
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: 1200px) {
    width: 20rem;
    height: 30rem;
  }

  .container-searchHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border:1px solid #fff; */
    box-shadow: 0px 2px 4px rgba(16, 16, 16, 0.5);
    width: 100%;
    padding-bottom: 20px;
  }
  .Div-button-close {
    width: 100%;
    /* border:1px solid #fff; */
    display: flex;
    justify-content: flex-end;
    margin: 10px 0 10px 0;
  }

  .Button-close {
    margin: 10px;
    cursor: pointer;
  }

  .Div-search-input {
    position: relative;
    /* border: 1px solid #fff; */
    display: flex;
    justify-content: center;
    width: 70%;

    input {
      width: 100%;
      height: 2.5rem;
      border-top-left-radius: 0.75rem;
      border-bottom-left-radius: 0.75rem;
      border: transparent;
      font-size: 17px;
    }
    input:focus {
      outline: none;
    }

    .buttonSearch {
      border: none;
      cursor: pointer;
      background-color: #9b51e0;
      border-top-right-radius: 0.75rem;
      border-bottom-right-radius: 0.75rem;
      border-left: 1px solid black;
      height: 100%;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .searchIcon {
        color: #fff;
      }
    }
  }

  .Div-resultsSearch {
    width: 100%;
    height: 100%;
    background: #3c3b3b;
    overflow-y: auto;
    overflow-x: hidden;
    border-bottom-left-radius: 15px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid #e2e0e0; */
  height: 99%;

  .Div-nothing {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    img {
      opacity: 0.3;
      width: 11rem;

      @media (max-width: 1600px) {
    width: 9rem;

  }
    }
  }
`;

export default SearchNavbar;
