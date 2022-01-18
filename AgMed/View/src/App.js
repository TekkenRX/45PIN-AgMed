import { useState } from "react";
import "./App.css";
import Workbar from "./Components/Workbar/Container";
import LoginBox from "./Components/LoginAgent/Container";

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

  let [render, setRender] = useState([
    {
      texto: "Login",
    },
  ]);

  function handleClick() {
    setOptions(optionsList);

    let newRender = render.map((walk) => {
      if (render[0].texto === "Login") {
        return { ...walk, texto: "Main" };
      } else {
        return { ...walk, texto: "Login" };
      }
    });

    setRender(newRender);
  }

  return (
    <div className="App">
      {render.map((walk) => {
        if (walk.texto === "Login") {
          return <LoginBox handleClick={handleClick}></LoginBox>;
        } else {
          return (
            <Workbar
              options={options}
              handleOptionFocus={handleOptionFocus}
              handleClick={handleClick}
            ></Workbar>
          );
        }
      })}
    </div>
  );
}

export default App;
