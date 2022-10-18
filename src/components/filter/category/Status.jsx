import React from "react";
import { FilterBTN } from "../FilterBTN";

export const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown", ""];
  let estado = ["Vivo", "Muerto", "Desconocido", "Todos"];

  return (
    <div>
      {status.map((statu, index) => {
        return (
          <FilterBTN
            task={updateStatus}
            input={statu}
            updatePageNumber={updatePageNumber}
            key={index}
            name="status"
            index={index}
          >
            {estado[index]}
          </FilterBTN>
        );
      })}
    </div>
  );
};
