import React from "react";
import { Button } from "react-bootstrap";
import "./FilterForEpisodeOrLocation.css";
export const FilterForEpisodeOrLocation = ({
  results,
  setResults,
  copyResultsForFilter,
}) => {
  //filtro por especie
  const allSpecies = results.map((el) => el.species);
  let speciesForFilter = new Set(allSpecies);
  const arrSpeciesForFIlter = Array.from(speciesForFilter);

  const handleClickfilterForSpecies = (e) => {
    results = copyResultsForFilter;
    if (e.target.value === "All") {
      return setResults(copyResultsForFilter);
    }
    const filter = results.filter(
      (character) => character.species === e.target.value
    );
    setResults(filter);
  };

  //filtro por estado
  const allStatus = results.map((el) => el.status);
  let statusForFilter = new Set(allStatus);
  const arrStatusForFIlter = Array.from(statusForFilter);

  const handleClickFilterStatus = (e) => {
    // let element;
    // if (e.target.value !== "All") {
    //   element = document.getElementById(`filter-${e.target.value}`);
    //   console.log(element);
    //   element?.classList.add("act");
    //   console.log(element);
    // }

    results = copyResultsForFilter;
    if (e.target.value === "All") {
      // element?.classList.remove("act");
      // console.log(element);
      return setResults(copyResultsForFilter);
    }
    const filter = results.filter(
      (character) => character.status === e.target.value
    );

    setResults(filter);
  };

  //----filtro por genero
  const allGenres = results.map((el) => el.gender);
  let genresForFilter = new Set(allGenres);
  const arrGenresForFIlter = Array.from(genresForFilter);

  const handleClickFilterGender = (e) => {
    results = copyResultsForFilter;
    if (e.target.value === "All") {
      return setResults(copyResultsForFilter);
    }
    const filter = results.filter(
      (character) => character.gender === e.target.value
    );
    setResults(filter);
  };

 

  return (
    <>
      <div>
        <style jsx={true}>
          {` .btna:hover{
            transform: scale(0.98)
            color: black
          }
          
          
          `}
        </style>
        <p>Filtrar por estado</p>
        {arrStatusForFIlter?.map((status, index) => {
          return (
            <Button
              id={`filter-${status}`}
              key={index}
              className="m-1 "
              onClick={handleClickFilterStatus}
              value={status}
            >
              {status}
            </Button>
          );
        })}
        <Button
          id={`filter-All`}
          className="m-1 btna"
          onClick={handleClickFilterStatus}
          value="All"
        >
          Todos
        </Button>
      </div>
      <div>
        <p>Filtrar por género</p>
        {arrGenresForFIlter?.map((gender, index) => {
          return (
            <Button
              key={index}
              className="m-1"
              onClick={handleClickFilterGender}
              value={gender}
            >
              {gender}
            </Button>
          );
        })}
        <Button
          className="m-1"
          onClick={handleClickfilterForSpecies}
          value="All"
        >
          Todos
        </Button>
      </div>
      <div>
        <p>Filtrar por especie</p>
        {arrSpeciesForFIlter?.map((specie, index) => {
          return (
            <Button
              key={index}
              className="m-1"
              onClick={handleClickfilterForSpecies}
              value={specie}
            >
              {specie}
            </Button>
          );
        })}
        <Button
          className="m-1"
          onClick={handleClickfilterForSpecies}
          value="All"
        >
          Todos
        </Button>
      </div>
    </>
  );
};
