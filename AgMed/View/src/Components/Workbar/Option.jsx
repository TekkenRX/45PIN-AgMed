import "./Workbar.css";

const Option = ({ option, style, handleOptionFocus, handleFormClick}) => {
  return (
    <>
      <p
        className="Option"
        style={style}
        onClick={() => {
          handleOptionFocus(option.id);
          handleFormClick("none", "doubleclick");
        }}
      >
        {option.texto}
      </p>
    </>
  );
};

export default Option;
