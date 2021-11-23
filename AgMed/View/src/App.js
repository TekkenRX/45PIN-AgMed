import { Fragment, useState } from "react";
import "./App.css";
import Workbar from "./Components/Workbar/Container";
import Option from "./Components/Workbar/Option";

function App() {
  function handleOptionClick(OptionID) {
    console.log(OptionID);

    options = optionsList

    const newOption = options.map((option) => {
      if (option.id === OptionID) {
        return { ...option, id: 4 };
      } else {
        return option;
      }
    });
    
    setOptions(newOption);
  }

  let [options, setOptions] = useState([
    {
      id: "1",
      texto: "Agenda",
      estado: false,
    },
    {
      id: "2",
      texto: "Cadastros",
      estado: false,
    },
    {
      id: "3",
      texto: "Horários",
      estado: false,
    },
  ]);

  const optionsList = [
    {
      id: "1",
      texto: "Agenda",
      estado: false,
    },
    {
      id: "2",
      texto: "Cadastros",
      estado: false,
    },
    {
      id: "3",
      texto: "Horários",
      estado: false,
    },
  ];

  return (
    <Fragment className="App">
      <Workbar
        options={options}
        handleOptionClick={handleOptionClick}
      ></Workbar>
    </Fragment>
  );
}

export default App;
