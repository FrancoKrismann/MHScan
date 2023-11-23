import React from "react";
import styled from "styled-components";

interface PreviewFormProps {}

const PreviewForm: React.FC<PreviewFormProps> = ({}) => {
  
  return (
    <PreviewFormStl>
		
     <img src="" alt=""/>
    </PreviewFormStl>
  );
};

const PreviewFormStl = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* height: 100%;*/


`;

export default PreviewForm;
