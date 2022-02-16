import axios from "axios";
import { useState } from "react";
import Table from "./Table";
import "./CRUD.css";

const TableStarter = ({ state, handleMassDataInputRenderClick, data}) => {


  if (state.render === "noform") {
    return <></>;
  } else {
    return (
      <>
        <div className="tableStarter">
              <Table
                state={state}
                handleMassDataInputRenderClick={handleMassDataInputRenderClick}
                tableDataItems={data}
              ></Table> 
        </div>
      </>
    );
  }
};

export default TableStarter;
