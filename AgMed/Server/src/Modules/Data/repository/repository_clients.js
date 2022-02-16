const db = require("../database/database");

class repository_clients {
  async get() {
    try {
      const procedure = await db.query("Select table_persons.id as id, name"+
      ", surname, cpf, contact, address, id_person from table_persons, "+
      "table_clients where id_person = table_persons.id");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_clients";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_clients where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_clients";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_clients where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_clients";
    }
  }

  async add(name, surname, cpf, contact, address) {
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

      const procedure = await db.query(
        "INSERT INTO table_clients (id, id_person)" +
          "VALUES (DEFAULT, '" +
          id_persons[0].id +
          "')"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_clients";
    }
  }

  async update(id, name, surname, cpf, contact, address) {
    try {
      const procedure = await db.query(
        "UPDATE table_persons" +
          " SET " +

          "name ="+
            "'"+name+"'"+

            ", surname = "+
            "'"+surname+"'"+

            ", cpf = "+
            "'"+cpf+"'"+

            ", contact = "+
            "'"+contact+"'"+

            ", address = "+
            "'"+address+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_clients";
    }
  }

  async remove(id) {
    try {
      const id_person = await db.query(
        "SELECT id_person FROM table_employees where " + "id" + " = '" + id + "'"
      );      
      const procedure = await db.query(
        "DELETE FROM table_clients WHERE id = '" + id + "'"
      );
      const procedurePerson = await db.query(
        "DELETE FROM table_persons WHERE id = '" + id_person[0].id + "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_clients";
    }
  }
}

module.exports = repository_clients;
