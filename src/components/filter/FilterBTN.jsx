import React, { useState } from "react";
import { ToggleButton, ButtonGroup } from "react-bootstrap";

export const FilterBTN = ({
  children,
  task,
  input,
  updatePageNumber,
  name,
  index,
}) => {
 

  return (
    // <ButtonGroup className="m-1">
    //   <ToggleButton

    //     onClick={(e) => {
    //       task(input);
    //       updatePageNumber(1);
    //       // setChecked(!checked)

    //     }}
    //     // key={key}
    //     type="radio"
    //     name={name}
    //     variant={"outline-primary"}
    //     id={`${name}-${index}`}
    //     value={input}
    //     // checked={ checked}
    //     // onChange={(e) => {setChecked(e.currentTarget.checked) ; setRadioValue(e.currentTarget.checked) }}
    //   >
    //     {children}
    //   </ToggleButton>
    // </ButtonGroup>
    <div>
      <style jsx={true}>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {children}
        </label>
      </div>
    </div>
  );
};
