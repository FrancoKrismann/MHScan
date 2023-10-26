import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchNavbarProps {}

interface SearchContainerProps {
  expanded: boolean;
}

const SearchNavbar: React.FC<SearchNavbarProps> = ({}) => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [query, setQuery] = useState('');

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

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleClickSearch = (): void => {
    setSearchOpen(!searchOpen);
  };


  return (
    <SearchNavbarStl ref={searchRef} expanded={searchOpen}>
      
    </SearchNavbarStl>
  );
};

const SearchNavbarStl = styled.div<SearchContainerProps>`
  position: relative;
  width: 300px; /* Ancho de la barra de búsqueda */
`;



export default SearchNavbar;
