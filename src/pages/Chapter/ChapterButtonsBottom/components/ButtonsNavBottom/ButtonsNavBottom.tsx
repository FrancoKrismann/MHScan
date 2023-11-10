import { Chapters_Item } from '@/interface';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowSmLeft, HiArrowSmRight, HiArrowSmUp } from "react-icons/hi";


interface ButtonsNavBottomProps {
	Chapters: Chapters_Item[];
	CurrentChapter: number | undefined;
	Href: string | undefined;
  }

const ButtonsNavBottom: React.FC<ButtonsNavBottomProps>  = ({
	Chapters,
	CurrentChapter,
	Href,
}) => {

	const navigate = useNavigate();

  const handlePreviousClick = () => {
    if (CurrentChapter !== undefined && CurrentChapter > 1) {
      const previousChapter = CurrentChapter - 1;
      navigate(`/manga/${Href}/${previousChapter}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (CurrentChapter !== undefined && CurrentChapter < Chapters.length) {
      const nextChapter = CurrentChapter + 1;
      navigate(`/manga/${Href}/${nextChapter}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

	return <ButtonsNavBottomStl>
             <div className="container-previous">
        {CurrentChapter !== undefined && (
          <div className={`nav-previous ${CurrentChapter <= 1 ? 'inactive' : ''}`} onClick={handlePreviousClick}>
            <HiArrowSmLeft size="2.5em" />
          </div>
        )}
      </div>
      <div className='container-navTop'>
        <div className="nav-top" onClick={handleTopClick}>
            <HiArrowSmUp size="2.5em" />
          </div>
      </div>
      
      <div className="container-next">
        {CurrentChapter !== undefined  && (
          <div className={`nav-next ${CurrentChapter >= Chapters.length ? 'inactive' : ''}`} onClick={handleNextClick}>
            <HiArrowSmRight size="2.5em" />
          </div>
        )}
      </div>
	</ButtonsNavBottomStl>;
};

export const ButtonsNavBottomStl = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* border: 1px solid #f50c0c; */

  .container-previous,
  .container-next ,.container-navTop{
    width: 100px;
    height: 40px;
  }
  .nav-previous,
  .nav-next,
  .nav-top {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a0a0a;
    color: #fff;
    border-radius: 4px;
    border: transparent;
    cursor: pointer;
    transition: background-color 0.3s;
    opacity: 1;

    &.inactive {
      opacity: 0.4; 
      pointer-events: none;
    }


    &:hover {
      background-color: #191818;
    }
  }
`;

export default ButtonsNavBottom;
