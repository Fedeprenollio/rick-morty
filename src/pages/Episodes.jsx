import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Cards } from "../components/card/Cards";
import { InputGroup } from "../components/filter/category/InputGroup";
import { FilterForEpisodeOrLocation } from "../components/filter/filtesForEpisodeOrLocation/FilterForEpisodeOrLocation";

export const Episodes = () => {
  let [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const { air_date, episode, name } = info;
  const [id, setID] = useState(1);
  const [allEpisodes, setAllEpisodes] = useState([]);
  ///-----filtros
  const [copyResultsForFilter, setCopyResultsForFilter] = useState([]);

  //   results = copyResultsForFilter;

  //   if (e.target.value === "Alive") {
  //     const filtered = results.filter((ch) => ch.status === e.target.value);

  //     return setResults(filtered);
  //   }

  //   if (e.target.value === "Dead") {
  //     const filtered = results.filter((ch) => ch.status === "Dead");
  //     return setResults(filtered);
  //   }
  //   if (e.target.value === "unknown") {
  //     const filtered = results.filter((ch) => ch.status === "unknown");
  //     return setResults(filtered);
  //   }
  //   if (e.target.value === "All") {
  //     return setResults(copyResultsForFilter);
  //   }
  // };
  // const handleClickFilterGender = (e) => {
  //   results = copyResultsForFilter;

  //   if (e.target.value === "Male") {
  //     const filtered = results.filter((ch) => ch.gender === e.target.value);

  //     return setResults(filtered);
  //   }

  //   if (e.target.value === "Female") {
  //     const filtered = results.filter((ch) => ch.gender === e.target.value);
  //     return setResults(filtered);
  //   }
  //   if (e.target.value === "Genderless") {
  //     const filtered = results.filter((ch) => ch.gender === e.target.value);
  //     return setResults(filtered);
  //   }
  //   if (e.target.value === "unknown") {
  //     const filtered = results.filter((ch) => ch.gender === e.target.value);
  //     return setResults(filtered);
  //   }
  //   if (e.target.value === "All") {
  //     return setResults(copyResultsForFilter);
  //   }
  // };

  ///-----

  const api = `https://rickandmortyapi.com/api/episode/${id}`;
  const arr = [];
  for (let index = 1; index <= 51; index++) {
    arr.push(index);
  }
  const apiAllEpisodes = `https://rickandmortyapi.com/api/episode/${arr}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
      setCopyResultsForFilter(a);
    })();
  }, [api]);

  useEffect(() => {
    (async function () {
      let data = await fetch(apiAllEpisodes).then((res) => res.json());
      setAllEpisodes([...allEpisodes, data]);
    })();
  }, []);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Nombre del episodio :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Fecha de estreno: {air_date === "" ? "Unknown" : air_date}
        </h5>
        <h5 className="text-center">
          Episodio: {episode === "" ? "Unknown" : episode}
        </h5>
      </div>

      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Selecciona un episodio</h4>
          <InputGroup
            allNames={allEpisodes}
            name="Episode"
            changeID={setID}
            total={51}
            episode={episode}
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
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};
