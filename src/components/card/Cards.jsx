import React, { useEffect } from "react";
import styles from "../card/Card.module.scss";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "sweetalert2/src/sweetalert2.scss";

export const Cards = ({ page, results, fetchedData,updateStatus,updateGender,updateSpecies }) => {


  // let navigate = useNavigate();
  let display;

useEffect(() => {  
  if (fetchedData?.error) {
   
    updateStatus("")
    updateGender("")
    updateSpecies("")
   const btn = document.getElementsByClassName("form-check-input x")
  for (let i = 0; i < btn.length; i++) {
    btn[i].checked = false
    
  }
 


  }

  
}, [fetchedData])


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
    if (fetchedData?.error) {
      Swal.fire({
        title: "Error!",
        text: "No hay personajes con esos criterios de filtrado",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    display = "Sin personajes que mostrar...";
    return (
      // navigate("/characters")
      <h1>{display}</h1>
      
    );
  }

  return <>{display}</>;
};
