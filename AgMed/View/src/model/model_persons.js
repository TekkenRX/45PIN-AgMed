const model_persons = (
  [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "surname",
      selector: (row) => row.surname,
    },
    {
      name: "id_contacts",
      selector: (row) => row.id_contacts,
    },
    {
      name: "id_address",
      selector: (row) => row.id_address,
    },
    {
      name: "id_documents",
      selector: (row) => row.id_documents,
    }]
);
