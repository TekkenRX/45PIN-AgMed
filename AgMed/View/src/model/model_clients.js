const model_clients = (
    [
      {
        name: "id",
        selector: (row) => row.id,
      },
      {
        name: "id_person",
        selector: (row) => row.id_person,
      },
      
      ]
  );

  module.exports = model_clients;