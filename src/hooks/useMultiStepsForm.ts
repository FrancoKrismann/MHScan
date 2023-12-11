import { DataViewType, InfoDetail_Item } from "@/interface";
import { useState } from "react";
import axios from "axios";
import { DataViewChapters, DataViewDetails, DataViewHref, DataViewImage, DataViewTitle } from "@/types";
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
        console.log("DATA:", data);

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('href', data.href);
        if (data.image)
            formData.append('image', data.image);
        formData.append('detail', JSON.stringify(data.detail));

        // Agregar capítulos
        data.chapters.forEach((chapter, index) => {
            formData.append(`chapters[${index}].chapter`, chapter.chapter.toString());
            chapter.data.forEach((file, fileIndex) => {
                formData.append(`chaptersImg`, file);
            });
        });

        console.log([...formData]);

        try {
            const response = await axios.post('http://localhost:4000/api/manhuas', formData, {

                headers: {
                    'Content-Type': 'multipart/form-data',

                },

            });

            console.log("Exitoso", response.data);
        } catch (error) {
            console.error(error);
        }
    };


    const goTo = (index: number) => {
        setCurrentStepIndex(index)
    }

    const isLastStep = currentStepIndex === steps.length - 1

    const currentStep = steps[currentStepIndex];



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
        handleSubmit
    }
}