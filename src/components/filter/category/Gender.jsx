import React from "react";
import { FilterBTN } from "../FilterBTN";

export const Gender = ({ updatePageNumber, updateGender }) => {
  let genders = ["female", "male", "genderless", "unknown", ""];
  let gendersSpanush = ["Femenino", "Masculino", "Sin gènero", "Desconocido", "Todos"];
  return (
    <div>
      {genders.map((genre, index) => {
        return (
          <FilterBTN
            task={updateGender}
            input={genre}
            updatePageNumber={updatePageNumber}
            key={index}
            name="genre"
            index={index}
          >
            {gendersSpanush[index]}
          </FilterBTN>
        );
      })}
    </div>
  );
};
