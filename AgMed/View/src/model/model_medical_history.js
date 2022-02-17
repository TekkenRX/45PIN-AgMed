const model_entrys = (
    [
      {
        name: "ID",
        selector: (row) => row.id,
      },
      {
        name: "Entrada",
        selector: (row) => row.entry,
      },
      {
        name: "Dia",
        selector: (row) => row.time,
      },
      ]
  );

  module.exports = model_entrys;