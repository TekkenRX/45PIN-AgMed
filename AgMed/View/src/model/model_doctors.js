const model_doctors = ([
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
    name: "CRM",
    selector: (row) => row.crm,
  },
  {
    name: "Formação",
    selector: (row) => row.degree,
  },
]);

module.exports = model_doctors;