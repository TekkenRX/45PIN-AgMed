const db = require("../database/database");

class repository_nurses {
  async get() {
    try {
      const procedure = await db.query(
        "Select table_persons.id as id, name, surname, cpf, contact, address, " +
      "degree, role from table_persons, table_employees, table_nurses " +
      "where id_persons = table_persons.id and table_employees.id = table_nurses.id_employee");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_nurses where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_nurses where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async add(name, surname, cpf, contact, address, degree, role) {
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
      } catch {console.log("Employee already exists or is invalid");}

      const id_employee = await db.query(
        "SELECT id FROM table_employees where " +
          "id_persons" +
          " = '" +
          id_persons[0].id +
          "'"
      );
      const procedure = await db.query(
        "INSERT INTO table_nurses (id, degree, id_employee)" +
          "VALUES (DEFAULT, '"+degree+"', '"+id_employee[0].id+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async update(id, degree, id_employee) {
    try {
      const procedure = await db.query(
        "UPDATE table_nurses" +
          " SET " +

          "degree ="+
            "'"+degree+"'"+

            ", id_employee = "+
            "'"+id_employee+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_nurses WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }
}

module.exports = repository_nurses;
