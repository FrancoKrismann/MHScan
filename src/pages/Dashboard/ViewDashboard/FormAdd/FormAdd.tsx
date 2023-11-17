import React from "react";
import styled from "styled-components";
import { Formulario } from "./components/Formulario";

interface FormAddProps {}

const FormAdd: React.FC<FormAddProps> = ({}) => {
  
  return (
    <FormAddStl>
		<Formulario/>
     
    </FormAddStl>
  );
};

const FormAddStl = styled.div`
display: flex;
height: 100%;
width: 100%;
`;

export default FormAdd;
