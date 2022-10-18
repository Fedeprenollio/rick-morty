import React, { useEffect, useState } from "react";

import { Cards } from "../components/card/Cards";
import { InputGroup } from "../components/filter/category/InputGroup";
import { FilterForEpisodeOrLocation } from "../components/filter/filtesForEpisodeOrLocation/FilterForEpisodeOrLocation";

export const Location = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);
  const [allLocations, setAllLocations] = useState([]);

  //filtros
  const [copyResultsForFilter, setCopyResultsForFilter] = useState([]);

  let api = `https://rickandmortyapi.com/api/location/${number}`;
  let arr = [];
  for (let index = 1; index <= 126; index++) {
    arr.push(index);
  }

  let apiAll = `https://rickandmortyapi.com/api/location/${[arr]}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
      setCopyResultsForFilter(a);
    })();
  }, [api]);

  useEffect(() => {
    (async function () {
      let data = await fetch(apiAll).then((res) => res.json());
      setAllLocations([...allLocations, data]);
    })();
  }, []);


  return (
    <div>
      <h1 className="text-center mb-3">
        Location :
        <span className="text-primary">{name === "" ? "Unknown" : name}</span>
      </h1>
      <h5 className="text-center">
        Dimension: {dimension === "" ? "Unknown" : dimension}
      </h5>
      <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Selecciona una ubicación</h4>
          <InputGroup
            name="Location"
            allNames={allLocations}
            changeID={setNumber}
            total={126}
            // episode={number}
          />
        </div>
        <div className="col-lg-8 col-12">
        <FilterForEpisodeOrLocation
            results={results}
            // handleClickFilterStatus={handleClickFilterStatus}
            // handleClickFilterGender={handleClickFilterGender}
            setResults={setResults}
            copyResultsForFilter={copyResultsForFilter}
          />
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};
