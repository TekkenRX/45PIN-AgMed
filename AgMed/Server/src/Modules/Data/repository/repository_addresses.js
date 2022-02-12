const db = require("../database/database");

class repository_addresses {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_addresses");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_addresses";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_addresses where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_addresses";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_addresses where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_addresses";
    }
  }

  async add(city, uf) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_addresses (id, city, uf)" +
          "VALUES (DEFAULT, '" +
          city +
          "', '" +
          uf +
          "')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_addresses";
    }
  }

  async update(id, city, uf) {
    try {
      const procedure = await db.query(
        "UPDATE table_addresses" +
          " SET " +
          "city =" +
          "'" +
          city +
          "'" +
          ", uf = " +
          "'" +
          uf +
          "'" +
          " WHERE " +
          "id = " +
          "'" +
          id +
          "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_addresses";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_addresses WHERE id = '" + id + "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_addresses";
    }
  }
}

module.exports = repository_addresses;
