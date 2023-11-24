import {useState} from "react";

interface Step {
    name: string;
    component: React.ReactElement;
  }

export function useMultiStepForm(steps: Step[]){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const next = () => {
        setCurrentStepIndex( i => {
            if(i >= steps.length - 1) return i
            return i + 1
        })
    }
    

    const back = () => {
        setCurrentStepIndex(i => {
            if(i <= 0) return i
            return i - 1
        })
    }

    const goTo = (index:number) => {
       setCurrentStepIndex(index)
    }

    const currentStep = steps[currentStepIndex];
    const { name, component } = currentStep;
    console.log(steps);
    

    return {
        name,
        component,
        currentStepIndex,
        step: steps[currentStepIndex],
        isFirstStep: currentStepIndex !== 0,
        isLastStep: currentStepIndex === steps.length - 1,
        steps,
        next,
        back,
        goTo
    }
}