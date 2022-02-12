const db = require("../database/database");

class repository_clients {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_clients");
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

  async add(id_person) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_clients (id, id_person)" +
          "VALUES (DEFAULT, '"+id_person+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_clients";
    }
  }

  async update(id, id_person) {
    try {
      const procedure = await db.query(
        "UPDATE table_clients" +
          " SET " +

          "id_person ="+
            "'"+id_person+"'"+
 
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
      const procedure = await db.query(
        "DELETE FROM table_clients WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_clients";
    }
  }
}

module.exports = repository_clients;
