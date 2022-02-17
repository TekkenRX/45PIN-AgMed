const model_staff = [
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
];

module.exports = model_staff;
