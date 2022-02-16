const model_entrys = (
    [
      {
        name: "id",
        selector: (row) => row.id,
      },
      {
        name: "id_client",
        selector: (row) => row.id_client,
      },
      {
        name: "entry",
        selector: (row) => row.entry,
      },
      {
        name: "time",
        selector: (row) => row.time,
      },
      ]
  );

  module.exports = model_entrys;