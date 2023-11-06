import { Chapters_Item } from "@/interface";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface SelectMenuProps {
  Chapters: Chapters_Item[];
  CurrentChapter: number | undefined;
  Href: string | undefined;
}

const SelectMenu: React.FC<SelectMenuProps> = ({
  Chapters,
  CurrentChapter,
  Href,
}) => {
  const navigate = useNavigate();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedChapter: string = e.target.value;
    navigate(`/manga/${Href}/${selectedChapter}`);
  };

  return (
    <SelectMenuStl onChange={handleSelectChange} defaultValue={CurrentChapter}>
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

  padding: 10px 30px 10px 16px;
    border: none;
    -webkit-transition: all ease-in-out .2s;
    -moz-transition: all ease-in-out .2s;
    -o-transition: all ease-in-out .2s;
    transition: all ease-in-out .2s;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    box-sizing: border-box;
    -webkit-box-shadow: none;

    color: #f2f2f2;
    cursor: pointer;
`;

export default SelectMenu;
