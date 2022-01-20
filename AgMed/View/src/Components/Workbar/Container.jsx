import { useState } from "react";
import Calendar from "../Calendar/Container";
import Sidebar from "../Sidebar/Container";
import ExitBtn from "./Exit";
import Option from "./Option";
import "./Workbar.css";

const Workbar = ({ options, handleOptionFocus, handleClick }) => {
  const [days] = useState([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 18 },
    { value: 19 },
    { value: 20 },
    { value: 21 },
    { value: 22 },
    { value: 23 },
    { value: 24 },
    { value: 25 },
    { value: 26 },
    { value: 27 },
    { value: 28 },
    { value: 29 },
    { value: 30 },
    { value: 31 },
  ]);

  const [weeks] = useState([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]);

  const [months] = useState([
    { name: "Janeiro", tag: 31 },
    { name: "Fevereiro", tag: 28 },
    { name: "Março", tag: 31 },
    { name: "Abril", tag: 30 },
    { name: "Maio", tag: 31 },
    { name: "Junho", tag: 30 },
    { name: "Julho", tag: 31 },
    { name: "Agosto", tag: 31 },
    { name: "Setembro", tag: 30 },
    { name: "Outubro", tag: 31 },
    { name: "Novembro", tag: 30 },
    { name: "Dezembro", tag: 31 },
  ]);

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
          />
        ))}
        <div className="Workbar-right">
          <ExitBtn handleClick={handleClick} />
        </div>
      </div>
      <div className="diary">
        {months.map((month) => (
          <Calendar day={days} week={weeks} month={month} tag={month.tag} />
        ))}
      </div>
    </>
  );
};

export default Workbar;

//style={{backgroundColor: colors[option.id].color}}
