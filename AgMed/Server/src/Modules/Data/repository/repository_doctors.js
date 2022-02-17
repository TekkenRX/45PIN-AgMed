const db = require("../database/database");

class repository_doctors {
  async get() {
    try {
      const procedure = await db.query(
        "Select table_persons.id as id, name, surname, cpf, contact, address, " +
          "degree, role from table_persons, table_employees, table_doctors " +
          "where id_persons = table_persons.id and table_employees.id = table_doctors.id_employee"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_doctors where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_doctors where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async add(name, surname, cpf, contact, address, crm, degree, role) {
    try {
      try {
        const procedurePerson = await db.query(
          "INSERT INTO table_persons (id, name, surname, cpf, contact, address)" +
            "VALUES (DEFAULT, '" +
            name +
            "', '" +
            surname +
            "', '" +
            cpf +
            "', '" +
            contact +
            "', '" +
            address +
            "')"
        );
      } catch {
        console.log("Person already exists or is invalid");
      }
      const id_persons = await db.query(
        "SELECT id FROM table_persons where " + "cpf" + " = '" + cpf + "'"
      );
      try {
        const procedureEmployee = await db.query(
          "INSERT INTO table_employees (id, id_persons, role)" +
            "VALUES (DEFAULT, '" +
            id_persons[0].id +
            "', '" +
            role +
            "')"
        );
      } catch {
        console.log("Employee already exists or is invalid");
      }
      console.log("hi");
      const id_employee = await db.query(
        "SELECT id FROM table_employees where " +
          "id_persons" +
          " = '" +
          id_persons[0].id +
          "'"
      );
      console.log(id_employee[0].id);
      
      const procedure = await db.query(
        "INSERT INTO public.table_doctors (id, crm, degree, id_employee)" +
          "VALUES (DEFAULT, '"+crm+"', '"+degree+"', '"+id_employee[0].id+"')"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async update(id, crm, degree, id_employee) {
    try {
      const procedure = await db.query(
        "UPDATE table_doctors" +
          " SET " +
          "crm =" +
          "'" +
          crm +
          "'" +
          ", degree = " +
          "'" +
          degree +
          "'" +
          ", id_employee = " +
          "'" +
          id_employee +
          "'" +
          " WHERE " +
          "id = " +
          "'" +
          id +
          "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_doctors WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }
}

module.exports = repository_doctors;
