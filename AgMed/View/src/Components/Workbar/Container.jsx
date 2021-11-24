import { useState } from "react";
import ExitBtn from "./Exit";
import Option from "./Option";
import "./Workbar.css";

const Workbar = ({ options, handleOptionFocus, handleClick }) => {
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
      color: "#4B8BF0",
    },
  ]);

  return (
    <>
      <div className="Workbar-left">
        {options.map((option) => (
          <Option
            style={
              option.id === 4
                ? {
                    backgroundColor: colors[option.id - 1].color,
                    borderLeft: "3px solid #D1D1D1",
                    borderRight: "3px solid #D1D1D1"
                  }
                : { backgroundColor: colors[option.id - 1].color }
            }
            option={option}
            handleOptionFocus={handleOptionFocus}
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
