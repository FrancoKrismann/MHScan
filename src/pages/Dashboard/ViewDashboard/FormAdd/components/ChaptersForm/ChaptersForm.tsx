import React from "react";
import FormWrapper from "../../FormWrapper";

const ChaptersForm: React.FC = () => {
  return (
    <FormWrapper title="Capitulos">
      <div>
        <input type="file" />
      </div>
    </FormWrapper>
  );
};

export default ChaptersForm;
