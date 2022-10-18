import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../search/Search.module.scss";

export const Search = ({ setSearch, updatePageNumber }) => {
  return (
    <InputGroup className="mb-3">
      {/* <InputGroup.Text id="inputGroup-sizing-default" className={styles.text}>Buscar</InputGroup.Text> */}
      <Form.Control
        className={`${styles.input}`}
        type="search"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={(e) => {
          setSearch(e.target.value);
          updatePageNumber(1);
        }}
        placeholder="Busca tu personaje"
        size="sm"
      />
    </InputGroup>
  );
};
