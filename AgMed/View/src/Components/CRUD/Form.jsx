import { useState } from "react";
import "./CRUD.css";

const Form = ({state}) => {

    console.log(state)

  if (state.render === "noform") {
    return <></>;
  } else {
    return (
      <>
        <div className="Form">{state.formtype}</div>
      </>
    );
  }
};

export default Form;
