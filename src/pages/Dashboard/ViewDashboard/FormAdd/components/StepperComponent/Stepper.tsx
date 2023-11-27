import React, { useState } from "react";
import styled from "styled-components";

interface Step {
  name: string;
  componentForm: React.ReactElement;
}

interface StepperProps {
  steps: Step[];
  currentStepIndex: number;
}

interface StepNumberProps {
  isActive: boolean;
}

interface StepNameProps {
  isActive: boolean;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStepIndex }) => {

  console.log(currentStepIndex);
  
  // const [activeStep, setActiveStep] = useState<number>(currentStepIndex);


  const progressWidth =
  currentStepIndex === 0
      ? '0%'
      : currentStepIndex === steps.length - 1
      ? '100%'
      : `44%`;  
      const progressColor = currentStepIndex === steps.length - 1 ? "#cc36ff" : "#df6dff";

  return (
    <StepperStl>
      <div className="container-steps">
        <ProgressBar>
        <Progress width={progressWidth} bgColor={progressColor} />
      </ProgressBar>
      {steps.map((step, index) => (
        <StepItem
          key={index}
          className={index === currentStepIndex ? "active-step" : ""}
        >
          <StepNumber isActive={index === currentStepIndex}>{index + 1}</StepNumber>
          <StepName isActive={index === currentStepIndex}>{step.name}</StepName>
        </StepItem>
      ))}
      </div>
      
    </StepperStl>
  );
};

const StepperStl = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
  background: #303030d2;

  .container-steps {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
  }
`;

const StepItem = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

const StepNumber = styled.div<StepNumberProps>`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#df6dff" : "#6a117e")};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  z-index: 1;
`;

const StepName = styled.span<StepNameProps>`
  /* color: ${(props) => (props.isActive ? "#3498db" : "#2ecc71")}; */
  font-size: 17px;
  font-weight: ${(props) => (props.isActive ? "700" : "200")}; /* Tamaño de fuente más grande cuando isActive es true */
  transition: font-size 0.3s ease;
  z-index: 1;
`;

const ProgressBar = styled.div`
  width: 40%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-top: 16px;
  position: absolute;
  bottom: 80px;
  overflow: hidden;
`;

const Progress = styled.div<{ width: string; bgColor: string }>`
position: absolute;
  height: 100%;
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
`;

export default Stepper;
