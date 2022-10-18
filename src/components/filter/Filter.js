import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {Gender} from "./category/Gender";
import { Species } from "./category/Species";
import { Status } from "./category/Status";
import { FilterBTN } from "./FilterBTN";

export const Filter = ({
  pageNumber,
  status,
  updateStatus,
  updateGender,
  updateSpecies,
  updatePageNumber,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    const btn = document.getElementsByClassName("form-check-input x")
    for (let i = 0; i < btn.length; i++) {
      btn[i].checked = false
      
    }
  };
  

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filtrar</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        {" "}
        Limpiar filtros{" "}
      </div>

      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Estado</Accordion.Header>
          <Accordion.Body>
            <Status
              updatePageNumber={updatePageNumber}
              updateStatus={updateStatus}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Especie</Accordion.Header>
          <Accordion.Body>
            <Species
              updatePageNumber={updatePageNumber}
              updateSpecies={updateSpecies}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Genero</Accordion.Header>
          <Accordion.Body>
            <Gender
              updatePageNumber={updatePageNumber}
              updateGender={updateGender}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
