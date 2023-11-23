import React, { useState } from "react";
import styled from "styled-components";

interface StepperProps {
    steps: string[];
}

const Stepper: React.FC<StepperProps> = ({steps}) => {

    const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <StepperStl>
         <div>
        Paso actual: {activeStep + 1} de {steps.length}
      </div>
      <div>{steps[activeStep]}</div>
      <div>
        <button disabled={activeStep === 0} onClick={handleBack}>
          Atrás
        </button>
        <button
          onClick={() => {
            if (activeStep === steps.length - 1) {
              // Lógica para finalizar el stepper
              console.log('Stepper completado');
            } else {
              handleNext();
            }
          }}
        >
          {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>

    </StepperStl>
  );
};

const StepperStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;


  background: #303030d2;
`;

export default Stepper;