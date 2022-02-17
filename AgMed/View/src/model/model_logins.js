const model_logins = [
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
    name: "Login",
    selector: (row) => row.login,
  },
  {
    name: "password",
    selector: (row) => row.password,
    omit: true,
  },
  {
    name: "token",
    selector: (row) => row.token,
    omit: true,
  },
];

module.exports = model_logins;
