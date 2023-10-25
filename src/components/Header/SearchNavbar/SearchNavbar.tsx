import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchNavbarProps {}

interface SearchContainerProps {
  expanded: boolean;
}

const SearchNavbar: React.FC<SearchNavbarProps> = ({}) => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickSearch = (): void => {
    setSearchOpen(!searchOpen);
  };

  return (
    <SearchNavbarStl ref={searchRef} expanded={searchOpen}>
      {searchOpen && (
        <input
          type="text"
          name="search"
          className="SearchInput"
          placeholder="Search..."
        />
      )}
      <div className="div-search">
        <AiOutlineSearch size="2.5em" onClick={handleClickSearch} />
      </div>
    </SearchNavbarStl>
  );
};

export const SearchNavbarStl = styled.div<SearchContainerProps>`
  position: relative;
  display: inline-block;
  transition: width 0.3s ease-in-out; /* Añadimos una transición */
  width: ${(props) => (props.expanded ? "240px" : "40px")};

  .SearchInput {
    /* color: #8707ff; */
	width: calc(100% - 40px);
  padding: 8px;
  box-sizing: border-box;
    /* background: transparent; */
    /* max-width: 200px; */
    padding-left: 10px;

    padding-block: 0px;
    padding-inline: 0px;
  }

  .react-icons {
	position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  }
`;

export default SearchNavbar;
