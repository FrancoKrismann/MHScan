import { ReactNode } from "react";
import styled from "styled-components";

interface FormWrapperProps {
    title: string;
    children: ReactNode
}

const FormWrapper:React.FC<FormWrapperProps> = ({title, children}) =>  {
  return (
    <FormWrapperStl>
      <h2>{title}</h2>
      <div>{children}</div>
    </FormWrapperStl>
  )
}

const FormWrapperStl = styled.div`
display: flex;
justify-content: center;
align-items: center;

flex-direction: column;
`

export default FormWrapper