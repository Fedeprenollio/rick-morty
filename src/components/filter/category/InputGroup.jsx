import React, { useEffect, useState } from "react";

export const InputGroup = ({ name, changeID, total, allNames }) => {
  //total es el numero total de episodios
  // let apiAllEpisodes = `https://rickandmortyapi.com/api/episode?page=`;

  // const [allEpisodes, setAllEpisodes] = useState([]);

  // useEffect(() => {
  //   (async function () {
  //     for (let index = 1; index <= 3; index++) {
  //       let data = await fetch(`${apiAllEpisodes}${index}`).then((res) =>
  //         res.json()
  //       );
  //       let res = await data.results;
  //       res.forEach((el) => allEpisodes.push(el.id));
  //     }

  //     // setAllEpisodes([...allEpisodes, ]);
  //   })();
  // }, []);

  // console.log("allEpisodes", allEpisodes);
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Selecciona un episodio...</option>
        {/* {[...Array(total).keys()].map((element, index) => {
          return (
            <option value={element + 1}>
              {name} - {element + 1}
            </option>
          );
        })} */}
        {allNames[0]?.map((name) => {
          return (
            <option value={name?.id}>
              {name?.episode && `${name?.episode?.slice(0, 3)} -`}{" "}
              {name?.episode && `${name?.episode?.slice(3)} -`}{" "}
              {name?.type && `${name?.type} -`} {name?.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
