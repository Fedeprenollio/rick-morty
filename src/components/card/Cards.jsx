import React, { useEffect, useState } from "react";
import styles from "../card/Card.module.scss";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "sweetalert2/src/sweetalert2.scss";

export const Cards =  ({
  page,
  results,
  setSearch,
  search,
  fetchedData,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let display

useEffect(() => {
  if (fetchedData?.error === "There is nothing here" && search?.length > 0) {
    const length = search.length;
    const input = document.getElementById("searchId");
    input.setAttribute("maxlength", length);

    // document.getElementById("searchId").value = search.slice(0, -1);
  } else {
    const input = document.getElementById("searchId");
    input?.removeAttribute("maxlength");
  }
}, [fetchedData?.error,search?.length, search])


  

;

  useEffect(() => {
    if (fetchedData?.error) {
      updateStatus("");
      updateGender("");
      updateSpecies("");
      // setSearch("");

      const btn = document.getElementsByClassName("form-check-input x");
      for (let i = 0; i < btn.length; i++) {
        btn[i].checked = false;
      }
    }
  }, [fetchedData]);

  if (results) {
    display = results.map((res, index) => {
      let { id, image, name, status, location, species, origin } = res;

      const showStatus = () => {
        if (status === "Dead") {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-danger`}
            >
              {status}
            </div>
          );
        } else if (status === "Alive") {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-success`}
            >
              {status}
            </div>
          );
        } else {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-secondary`}
            >
              {status}
            </div>
          );
        }
      };

      return (
        <Card
          key={index}
          className={`${styles.card} `}
          style={{ width: "18rem" }}
        >
          <Link to={`${page}${id}`}>
            <Card.Img variant="top" src={image} className={`${styles.img} `} />
          </Link>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <b> Especie:</b> {species} {<br />} <b> Origen:</b> {origin.name}{" "}
              {<br />} <b>Última ubicación:</b> {location.name}
            </Card.Text>
          </Card.Body>{" "}
          {showStatus()}
        </Card>
      );
    });
  } else {
    if (fetchedData.error === "There is nothing here") {
      //   const length = search.length;
      //   const input = document.getElementById("searchId");
      //   input.setAttribute("maxlength", length);
      //   setError(false)
      //   console.log(input)
      //   console.log("add",fetchedData.error);
      // }else  {
      //   console.log("remove",fetchedData.error);
      //   const input = document.getElementById("searchId");
      //   input?.removeAttribute("maxlength");
      // }
    }
    display = "Sin personajes que mostrar...";
    return (
      // navigate("/characters")
      <h1>{display}</h1>
    );
  }

  return <>{display}</>;
};
