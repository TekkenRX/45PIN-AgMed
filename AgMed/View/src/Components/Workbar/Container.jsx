import { useState } from "react";
import Option from "./Option";
import "./Workbar.css";

const Workbar = ({options, handleOptionClick}) => {

    const [colors, setColors] = useState([
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
        }
      ]);

      
    

  return (
    <div className="Workbar">
      {options.map((option) => (
        <Option style={{backgroundColor: colors[option.id-1].color}} option={option} handleOptionClick={handleOptionClick}/>
      ))}
    </div>
  );
};

export default Workbar;

//style={{backgroundColor: colors[option.id].color}}
