import React, { useRef, useState } from "react";
import styled from "styled-components";
import Stepper from "./components/StepperComponent/Stepper";
import { DataViewType } from "@/interface";
import { useMultiStepForm } from "@/hooks/useMultiStepsForm";
import InfoForm from "./components/InfoForm/InfoForm";
import DetailForm from "./components/DetailForm/DetailForm";
import ChaptersForm from "./components/ChaptersForm/ChaptersForm";

const INITIAL_DATA: DataViewType = {
  title: "",
  href: "",
  image: null,
  chapters: [
    {
      chapter: null,
      data: [],
    },
  ],
  detail: [
    {
      alternative: "",
      author: "",
      artist: "",
      genre: [],
      type: "",
      releaser: null,
      status: "",
      description: [],
    },
  ],
};






const genreOptions = [
  "Acción",
  "Adult",
  "Ángeles",
  "Anime",
  "Apocalíptico",
  "Artes Marciales",
  "Aventura",
  "Bucle Temporal",
  "Cartoon",
  "Comedia",
  "Comic",
  "Cooking",
  "Demonios",
  "Deportes",
  "Detective",
  "Doujinshi",
  "Drama",
  "Ecchi",
  "Fantasía",
  "Gender Bender",
  "Harem",
  "Hermes Scans",
  "Histórico",
  "Horror",
  "Josei",
  "Live action",
  "Magia",
  "Mature",
  "Mazmorras",
  "Mecha",
  "Murim",
  "Mystery",
  "One shot",
  "Psicológico",
  "Recomendado",
  "Reencarnación",
  "Regresión",
  "Retornardo",
  "Romance",
  "School Life",
  "Sci-fi",
  "Seinen",
  "Shoujo",
  "Shoujo Ai",
  "Shounen",
  "Shounen Ai",
  "Sistema",
  "Slice of Life",
  "Smut",
  "Soft Yaoi",
  "Soft Yuri",
  "Supernatural",
  "Tragedia",
  "Vida Escolar",

  "Yaoi",
  "Yuri",
];

const TypeSelect = ["Manga", "Manhua", "Manhwa", "Webtoon"];

const StatusSelect = ["Ongoing", "Completed", "Hiatus", "Canceled"];

const FormAdd: React.FC = ({}) => {
  const [data, setData] = useState(INITIAL_DATA);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log("Archivo seleccionado:", file);
    if (file) {
      // Aquí puedes manejar el archivo seleccionado (por ejemplo, subirlo)
      setData({
        ...data,
        image: file,
      });
    }
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Title = e.target.value;
    const Href = Title.replace(/\s/g, "-");
    console.log(Title);

    setData({
      ...data,
      title: Title,
      href: Href,
    });
  };

  const handleDetailChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number
  ) => {
    const { name, value } = e.currentTarget;
    const newDetail = [...data.detail];

    const parsedValue = value !== "" ? parseFloat(value) : null;

    const updatedDetail = {
      ...newDetail[index],
      [name]: name === "releaser" ? parsedValue : value,
    };
    newDetail[index] = updatedDetail;

    setData({
      ...data,
      detail: newDetail,
    });
  };

  const handleAddGenres = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.currentTarget;
    const newDetail = [...data.detail];

    if (!newDetail[index].genre.includes(value)) {
      newDetail[index] = {
        ...newDetail[index],
        genre: [...(newDetail[index].genre || []), value],
      };
      setData({
        ...data,
        detail: newDetail,
      });
    } else {
      return null;
    }
  };

  const handleDeleteGenres = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const value = e.currentTarget.getAttribute("data-value");
    const newDetail = [...data.detail];

    const updatedGenres = newDetail[index].genre.filter(
      (genre) => genre !== value
    );
    newDetail[index] = {
      ...newDetail[index],
      genre: updatedGenres,
    };
    setData({
      ...data,
      detail: newDetail,
    });
  };

  const handleType = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.currentTarget;
    const newDetail = data.detail;

    newDetail[index] = {
      ...newDetail[index],
      type: value,
    };
    setData({
      ...data,
      detail: newDetail,
    });
  };

  const handleStatus = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.currentTarget;
    const newDetail = data.detail;

    newDetail[index] = {
      ...newDetail[index],
      status: value,
    };
    setData({
      ...data,
      detail: newDetail,
    });
  };

  const stepsComponents = [
    {
      name: 'InfoForm',
      component: (
        <InfoForm
          handleFile={handleFileChange}
          handleTitle={handleTitle}
          handleClickFile={handleFileClick}
          title={data.title}
        />
      ),
    },
    {
      name: 'DetailForm',
      component: (
        <DetailForm
          index={0}
          detail={data.detail}
          handleDetailChange={handleDetailChange}
          handleAddGenres={handleAddGenres}
          handleDeleteGenres={handleDeleteGenres}
          genreOptions={genreOptions}
          TypeSelect={TypeSelect}
          StatusSelect={StatusSelect}
          handleType={handleType}
          handleStatus={handleStatus}
        />
      ),
    },
    {
      name: 'ChaptersForm',
      component: <ChaptersForm />,
    },
  ];
  const {
    back,
    currentStepIndex,
    goTo,
    next,
    component,
    steps,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm(stepsComponents);
  return (
    <FormAddStl>
      <div className="container-Stepper">
        <Stepper steps={steps} currentStepIndex={currentStepIndex} />
      </div>
      <div className="container-addForm">
        <form>
          {component}
          <div>
            {isFirstStep && (
            <button type="button" onClick={back}>
              Atras
            </button>
          )}
          <button type="button" onClick={next}>
            {isLastStep ? "Finalizar" : "Siguiente"}
          </button>
          </div>
          
        </form>
      </div>
    </FormAddStl>
  );
};

const FormAddStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .container-Stepper {
    width: 100%;
    height: 5rem;
    border: 1px solid #09cfe9;
  }
  .container-addForm {
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
    border: 1px solid #fff;
  }

  background: #303030d2;
`;

export default FormAdd;
