import ElementsContainer from "./ElementsContainer";
import FilterContainer from "./FiltersContainer";
import "./Sidebar.css";
import filter from "./filter.svg";
import filterback from "./filterback.svg";
import plus from "./plus.svg";
import cross from "./cross.svg";
import { useState } from "react";

const Sidebar = ({ elements }) => {
  let [states] = useState([
    { state: "collapsed" },
    { state: "expanded" },
    { state: "filtering" },
    { state: "filter-expanded" },
  ]);

  let [render, setRender] = useState([
    { state: "collapsed" },
    { state: "expanded" },
    { state: "filtering" },
    { state: "filter-expanded" },
  ]);

  function handleplusClick() {
    setRender(states);

    let newRender = render.map((walk) => {
      if (render[0].state === "collapsed") {
        return { ...walk, state: "expanded" };
      } else {
        return { ...walk, state: "collapsed" };
      }
    });

    setRender(newRender);
  }

  function handleplusfltClick() {
    setRender(states);

    let newRender = render.map((walk) => {
      if (render[0].state === "filtering") {
        return { ...walk, state: "filter-expanded" };
      } else {
        return { ...walk, state: "collapsed" };
      }
    });

    setRender(newRender);
  }

  function handlefilterClick() {
    setRender(states);

    let newRender = render.map((walk) => {
      if (render[0].state === "collapsed") {
        return { ...walk, state: "filtering" };
      } else {
        return { ...walk, state: "collapsed" };
      }
    });

    setRender(newRender);
  }

  function handlefilterexpClick() {
    setRender(states);

    let newRender = render.map((walk) => {
      if (render[0].state === "expanded") {
        return { ...walk, state: "filter-expanded" };
      } else {
        return { ...walk, state: "expanded" };
      }
    });

    setRender(newRender);
  }

  function handlecrossexpClick() {
    setRender(states);

    let newRender = render.map((walk) => {
      if (render[0].state === "filter-expanded") {
        return { ...walk, state: "filtering" };
      } else {
        return { ...walk, state: "filter-expanded" };
      }
    });

    setRender(newRender);
  }

  function handlecrossClick() {
    setRender(states);

    let newRender = render.map((walk) => {
      if (render[0].state === "expanded") {
        return { ...walk, state: "collapsed" };
      } else {
        return { ...walk, state: "expanded" };
      }
    });

    setRender(newRender);
  }

  if (render[0].state === "collapsed") {
    return (
      <>
        <div className="container">
          <img src={plus} alt="+" className="icons" onClick={handleplusClick} />
          <img
            src={filter}
            alt="^"
            className="icons"
            onClick={handlefilterClick}
          />
        </div>
      </>
    );
  }
  if (render[0].state === "expanded") {
    return (
      <>
        <div className="container-expanded">
          <ElementsContainer elements={elements} />
        </div>
        <div className="icons-container">
          <img
            src={cross}
            alt="*"
            className="icons"
            onClick={handlecrossClick}
          />
          <img
            src={filter}
            alt="^"
            className="icons"
            onClick={handlefilterexpClick}
          />
        </div>
      </>
    );
  }
  if (render[0].state === "filtering") {
    return (
      <>
        <div className="filter-tab">
          <FilterContainer></FilterContainer>
        </div>
        <div className="icons-container">
          <img
            src={plus}
            alt="*"
            className="icons"
            onClick={handleplusfltClick}
          />
          <img
            src={filter}
            alt="^"
            className="icons"
            onClick={handlefilterClick}
          />
        </div>
      </>
    );
  }
  if (render[0].state === "filter-expanded") {
    return (
      <>
        <div className="container-expanded">
          <ElementsContainer elements={elements} />

          <div className="icons-container-filter">
            <img
              src={cross}
              alt="*"
              className="icons"
              onClick={handlecrossexpClick}
            />
            <img
              src={filterback}
              alt="^"
              className="icons"
              onClick={handlefilterexpClick}
            />
          </div>
        </div>
        <div className="filter">
          <FilterContainer></FilterContainer>
        </div>
      </>
    );
  }
};

export default Sidebar;
