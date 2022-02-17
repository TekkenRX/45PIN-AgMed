const model_nurses = (
    [
      {
        name: "ID",
        selector: (row) => row.id,
      },
      {
        name: "Nome",
        selector: (row) => row.name,
      },
      {
        name: "Sobrenome",
        selector: (row) => row.surname,
      },
      {
        name: "CPF",
        selector: (row) => row.cpf,
      },
      {
        name: "Endereço",
        selector: (row) => row.address,
      },
      {
        name: "Contatos",
        selector: (row) => row.contact,
      },
      {
        name: "degree",
        selector: (row) => row.degree,
      }
      ]
  );

  module.exports = model_nurses;