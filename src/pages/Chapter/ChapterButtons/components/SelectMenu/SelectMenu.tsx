import { Chapters_Item } from "@/interface";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface SelectMenuProps {
  Chapters: Chapters_Item[];
  CurrentChapter: string | undefined;
  Href: string | undefined;
}

const SelectMenu: React.FC<SelectMenuProps> = ({
  Chapters,
  CurrentChapter,
  Href,
}) => {
  const navigate = useNavigate();



  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedChapter: string = e.target.value;
    navigate(`/manga/${Href}/${selectedChapter}`);
  };
console.log("current chapter selected:", CurrentChapter);
  return (
    <SelectMenuStl key={CurrentChapter} onChange={handleSelectChange} defaultValue={CurrentChapter}>
      {Chapters.map((item, index) => {
        return (
          <option key={index} value={item.chapter}>
            Capitulo {item.chapter}
          </option>
        );
      })}
    </SelectMenuStl>
  );
};

export const SelectMenuStl = styled.select`
  background-color: rgba(235, 235, 235, 0.2);

  font-family: Arial, sans-serif;
  color: #ffffff;
  height: fit-content;
  border-radius: 4px;
  padding: 8px;
  width: 140px;
  font-size: 17px;

  &:focus {
    border: 1px solid #666;
  }

  option {
    font-family: Arial, sans-serif;
    color: black;
    background-color: #fff;
  }

  option:checked {
    background-color: #c9c3c3;
  }

  &:hover {
    border: 1px solid #666;
  }
  cursor: pointer;
`;

export default SelectMenu;
