import "./CRUD.css";

const CXEButton = ({
  buttonsrc,
  tag,
  selectedData,
  handleMassDataInputRenderClick,
}) => {
  if (tag === "confirm") {
    return (
      <>
        <img
          className="functionbuttons"
          src={buttonsrc}
          alt=""
          onClick={() => {
            handleMassDataInputRenderClick("", "open", tag);
          }}
        />
      </>
    );
  } else if (tag === "delete") {
    return (
      <>
        <img
          className="functionbuttons"
          src={buttonsrc}
          alt=""
          onClick={() => {
            handleMassDataInputRenderClick(selectedData, "open", tag);
          }}
        />
      </>
    );
  } else if (tag === "edit") {
    return (
      <>
        <img
          className="functionbuttons"
          src={buttonsrc}
          alt=""
          onClick={() => {
            handleMassDataInputRenderClick(selectedData, "open", tag);
          }}
        />
      </>
    );
  } else {
    return <></>;
  }
};

export default CXEButton;
