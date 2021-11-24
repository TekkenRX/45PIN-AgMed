import { Fragment, useState } from "react";
import "./App.css";
import Workbar from "./Components/Workbar/Container";

function App() {

  function handleOptionFocus(ClickedOptionID) {
    console.log(ClickedOptionID);

    if (4 !== ClickedOptionID) {
      options = optionsList;
    }

    const newOption = options.map((option) => {
      if (option.id === ClickedOptionID) {
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
    },
    {
      id: "2",
      texto: "Cadastros",
    },
    {
      id: "3",
      texto: "Horários",
    },
  ]);

  const optionsList = [
    {
      id: "1",
      texto: "Agenda",
    },
    {
      id: "2",
      texto: "Cadastros",
    },
    {
      id: "3",
      texto: "Horários",
    },
  ];

  return (
    <Fragment className="App">
      <Workbar
        options={options}
        handleOptionFocus={handleOptionFocus}
      ></Workbar>
    </Fragment>
  );
}

export default App;
