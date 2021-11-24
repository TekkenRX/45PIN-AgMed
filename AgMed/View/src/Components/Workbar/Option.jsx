import "./Workbar.css"

const Option = ({option, style, handleOptionFocus}) => {

  return (
    <>
      <p className="Option" style={style} onClick={() => handleOptionFocus(option.id)}>
        {option.texto}
      </p>
    </>
  )
}

export default Option;
