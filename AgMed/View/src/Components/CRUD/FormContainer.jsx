import DataTable from "react-data-table-component";
import { useState } from "react";
import "./CRUD.css";

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const Form = ({ state }) => {
  const columns = [
    {
      name: "Nome",
      selector: (row) => row.title,
    },
    {
      name: "Endereço",
      selector: (row) => row.title,
    },
    {
      name: "Contato",
      selector: (row) => row.title,
    },
    {
      name: "CPF",
      selector: (row) => row.year,
    },
    {
      name: "Código",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  console.log(state);

  if (state.render === "noform") {
    return <></>;
  } else {
    return (
      <>
        <div className="Form">
          <DataTable
            responsive
            pagination
            highlightOnHover
            pointerOnHover
            onRowDoubleClicked={""}
            columns={columns}
            data={data}
            selectableRows
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          />
        </div>
      </>
    );
  }
};

export default Form;
