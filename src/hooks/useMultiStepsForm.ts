import { DataViewType, InfoDetail_Item } from "@/interface";
import { useState } from "react";
import axios from "axios";
interface Step {
    name: string;
    componentForm: React.ReactElement;
    componentPreview: React.ReactElement;
}

export function useMultiStepForm(steps: Step[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const next = () => {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })
    }


    const back = () => {
        setCurrentStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    const handleSubmit = async (data: DataViewType) => {

        // /* The code is creating a new instance of the FormData class, which is used to construct and
        // const formData = new FormData();
        // formData.append('title', data.title);
        // formData.append('href', data.href);
        // if (data.image) {
        //     formData.append('image', data.image);
        // }
        // formData.append('chapters', JSON.stringify(data.chapters || []));
        
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('href', data.href);
        if (data.image) {
            formData.append('image', data.image);
        }
        if(data.detail) {
            formData.append('detail', JSON.stringify(data.detail));
        }
        formData.append('chapters', JSON.stringify(data.chapters));
        

        try {
            const result = await axios.post('http://localhost:4000/api/manhuas', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            // Manejo de éxito
            console.log("Éxito:", result.data);
        } catch (error) {
            // Manejo de error
            console.error("Error al enviar los datos:", error);
        }
        // await fetch('http://localhost:4000/api/manhuas', {
        //     method: 'POST', // Método HTTP que deseas usar (POST, PUT, etc.)
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: , // Convierte los datos del formulario a JSON para enviarlos al backend
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // Maneja la respuesta del backend si es necesario
        //         console.log('Respuesta del servidor:', data);
        //     })
        //     .catch((error) => {
        //         // Maneja cualquier error que ocurra durante la solicitud
        //         console.error('Error al enviar datos:', error);
        //     });
    }


    const goTo = (index: number) => {
        setCurrentStepIndex(index)
    }

    const isLastStep = currentStepIndex === steps.length - 1

    const currentStep = steps[currentStepIndex];

    const handleNextOrFinish = (data: DataViewType): React.MouseEventHandler<HTMLButtonElement> => {
        const handler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
            event.preventDefault();
            if (isLastStep) {
                // Si es el último paso, realiza la acción de "Finalizar"
                handleSubmit(data);
            } else {
                // Si no es el último paso, realiza la acción de "Siguiente" para avanzar al siguiente paso
                next();
            }
        };

        return handler;
    };

    const { name, componentForm, componentPreview } = currentStep;


    return {
        name,
        componentForm,
        componentPreview,
        currentStepIndex,
        step: steps[currentStepIndex],
        isFirstStep: currentStepIndex !== 0,
        isLastStep,
        steps,
        next,
        back,
        goTo,
        handleNextOrFinish
    }
}