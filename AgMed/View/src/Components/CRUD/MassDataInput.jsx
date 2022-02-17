import Forminput from "./Input";
import "./CRUD.css";

const MassDataInput = ({
  fields,
  state,
  handleMassDataInputRenderClick,
  handleAdditon,
  handleDeletion,
  handleEditing,
}) => {
  if (state.render === "noform") {
    return <></>;
  } else if (state.tag === "confirm") {
    return (
      <div className="inputFileds">
        <p style={{ color: "white" }}>{state.tag}</p>
        {fields.map((field) => (
          <Forminput field={field} id={field}/>
        ))}{" "}
        *
        <div className="inputFiledsButtonsContainer">
          <button
            className="inputFiledsButton"
            onClick={() => {
              handleAdditon(state.formtype);
            }}
          >
            Confirmar
          </button>
          <button
            className="inputFiledsButton"
            onClick={() => {
              handleMassDataInputRenderClick("", "close");
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  } else if (state.tag === "delete") {
    return (
      <div className="inputFileds">
        <div className="inputFiledsButtonsContainer">
          <button
            className="inputFiledsButton"
            onClick={() => {
              // handleDeletion(state.formtype);
              console.log("Not ready")
            }}
          >
            Confirmar
          </button>
          <button
            className="inputFiledsButton"
            onClick={() => {
              handleMassDataInputRenderClick("", "close");
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  } else if (state.tag === "edit") {
    return (
      <div className="inputFileds">
       
        {fields.map((field) => (
          <Forminput field={field} />
        ))}{" "}
        *
        <div className="inputFiledsButtonsContainer">
          <button
            className="inputFiledsButton"
            onClick={() => {
              // handleEditing(state.formtype);
              console.log("Not ready")
            }}
          >
            Confirmar
          </button>
          <button
            className="inputFiledsButton"
            onClick={() => {
              handleMassDataInputRenderClick("", "close");
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }
};

export default MassDataInput;
