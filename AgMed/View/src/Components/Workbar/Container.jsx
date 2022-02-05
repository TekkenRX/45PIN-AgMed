import { useState } from "react";
import ExitBtn from "./Exit";
import Option from "./Option";
import "./Workbar.css";

const Workbar = ({ options, handleOptionFocus, handleClick, handleFormClick}) => {

  const [colors] = useState([
    {
      id: 1,
      color: "#313D52",
    },
    {
      id: 2,
      color: "#1B2330",
    },
    {
      id: 3,
      color: "#122835",
    },
    {
      id: 4,
      color: "#98BAF1",
    },
  ]);

  return (
    <>
      <div className="Workbar-left">
        {options.map((option) => (
          <Option
            style={{ backgroundColor: colors[option.id - 1].color }}
            option={option}
            handleOptionFocus={handleOptionFocus}
            handleFormClick={handleFormClick}
          />
        ))}
        <div className="Workbar-right">
          <ExitBtn handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Workbar;

//style={{backgroundColor: colors[option.id].color}}
