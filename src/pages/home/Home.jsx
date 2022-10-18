import React, { useState, useEffect } from "react";
import { Cards } from "../../components/card/Cards";
import { Filter } from "../../components/filter/Filter";
import { Pagination } from "../../components/pagination/Pagination";
import { Search } from "../../components/search/Search";

export default function Home() {
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  //--------Filters
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  //-------
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
console.log(search)
  useEffect(() => {
    fetch(api).then((resp) => {
      resp.json().then((resp) => updateFetchedData(resp));
    });
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Personajes</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12 ">
            <div className="row">
              <Cards
                page="/"
                results={results}
                fetchedData={fetchedData}
                updateStatus={updateStatus}
                updateGender={updateGender}
                updateSpecies={updateSpecies}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        />
      </div>
    </div>
  );
}
