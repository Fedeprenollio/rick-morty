import React, { useState, useEffect } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import "bootstrap/dist/js/bootstrap";
import { Cards } from "./components/card/Cards";
import { Search } from "./components/search/Search";
import { Pagination } from "./components/pagination/Pagination";
import { Filter } from "./components/filter/Filter";
import Home from "./pages/home/Home";
import { Episodes } from "./pages/Episodes";
import { Location } from "./pages/Location";
import { NavBar } from "./pages/navbar/NavBar";
import { CardDetails } from "./components/card/CardDetails";

// function App() {
//   let [fetchedData, updateFetchedData] = useState([]);
//   let { info, results } = fetchedData;

//   let [pageNumber, updatePageNumber] = useState(1);
//   let [search, setSearch] = useState("");

//   //--------Filters
//   let [status, updateStatus] = useState("");
//   console.log("status", status)
//   let [gender, updateGender] = useState("");
//   let [species, updateSpecies] = useState("");
//   //-------
//   let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

//   useEffect(() => {
//     fetch(api).then((resp) => {
//       resp.json().then((resp) => updateFetchedData(resp));
//     });

//     // return () => {
//     //   second
//     // }
//   }, [api]);

//   return (
//     <div className="App">
//       <h1 className="text-center mb-3">Characters</h1>
//       <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
//       <div className="container">
//         <div className="row">
//           <Filter
//             pageNumber={pageNumber}
//             status={status}
//             updateStatus={updateStatus}
//             updateGender={updateGender}
//             updateSpecies={updateSpecies}
//             updatePageNumber={updatePageNumber}
//           />
//           <div className="col-lg-8 col-12 ">
//             <div className="row">
//               <Cards results={results} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Pagination
//           info={info}
//           pageNumber={pageNumber}
//           updatePageNumber={updatePageNumber}
//         />
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      {/* <div className="App">
        <NavBar />
      </div> */}

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="characters" element={<Home />} />
          <Route index element={<Home />} />

          <Route path="episodes" element={<Episodes />} />

          <Route path="location" element={<Location />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
          <Route path="/location/:id" element={<CardDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
