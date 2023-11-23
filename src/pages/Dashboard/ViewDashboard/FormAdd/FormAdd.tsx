import React from "react";
import styled from "styled-components";
import { Formulario } from "./components/Formulario";
import PreviewForm from "./components/PreviewForm/PreviewForm";
import Stepper from "./components/StepperComponent/Stepper";

interface FormAddProps {}

const FormAdd: React.FC<FormAddProps> = ({}) => {

  const steps = ['Paso 1', 'Paso 2', 'Paso 3'];

  return (
    <FormAddStl>
      <div className="container-addForm">
       <div className="container-Stepper">
          <Stepper steps={steps}/>
        </div>
        <Formulario />
        <PreviewForm  />
      </div>
    </FormAddStl>
  );
};

const FormAddStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .container-addForm {
    height: 90%;
    width: 100%;
    border: 1px solid #fff;

    .container-Stepper {
      width: 100%;
      height: 5rem;
      border: 1px solid #09cfe9;
    }
  }

  background: #303030d2;
`;

export default FormAdd;
