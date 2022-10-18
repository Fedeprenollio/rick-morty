import React from "react";
import { FilterBTN } from "../FilterBTN";

export const Species = ({ updatePageNumber, updateSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
    "Unknown",
    ""
  ];
  let speciesSpanish = [
    "Humano",
    "Alien",
    "Humanoide",
    "Poopybutthole",
    "Mitológico",
    "Animal",
    "Enfermedad",
    "Robot",
    "Cronenberg",
    "Planeta",
    "Desconocido",
    "Todas"
  ];

  return (
    <div>
      {species.map((specie, index) => {
        return (
          <FilterBTN
            task={updateSpecies}
            input={specie}
            updatePageNumber={updatePageNumber}
            key={index}
            name="specie"
            index={index}
          >
            {speciesSpanish[index]}
          </FilterBTN>
        );
      })}
    </div>
  );
};
