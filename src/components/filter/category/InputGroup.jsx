import React, { useEffect, useState } from "react";

export const InputGroup = ({ name, changeID, total, allNames }) => {
  //total es el numero total de episodios

 
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option disabled value="1">Selecciona un episodio...</option>
       
        {allNames[0]?.map((name, index) => {
          return (
            <option key={index} value={name?.id}>
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
