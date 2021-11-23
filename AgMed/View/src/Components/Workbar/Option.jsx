import "./Workbar.css";

const Option = ({option, style, handleOptionClick, changeOptionColor}) => {

  return (
    <>
      <p className="Option" style={style} onClick={() => handleOptionClick(option.id)}>
        {option.texto}
      </p>
    </>
  );
};

export default Option;
