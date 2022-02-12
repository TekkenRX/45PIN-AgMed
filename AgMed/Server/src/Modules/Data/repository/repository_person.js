const db = require("../database/database");

class repository_person {
  async get() {
    const procedure = await db.query("SELECT * FROM table_persons");
    return procedure;
  }

  async getById(id) {
    const procedure = await db.query(
      "SELECT * FROM table_persons where id = " + id
    );
    return procedure;
  }

  async addPerson(id_documents, id_address, id_contacts, name, surname) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_persons (id, id_documents, id_address, id_contacts, name, surname)" +
          "VALUES (DEFAULT," +
          id_documents +
          ", " +
          id_address +
          ", " +
          id_contacts +
          ", '" +
          name +
          "', '" +
          surname +
          "');"
      );
      return procedure;
    } catch (QueryResultError) {
      return QueryResultError;
    }
  }

  async getModel() {
    try {
      const procedure = await db.query();
      return procedure;
    } catch (QueryResultError) {
      return QueryResultError;
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query();
      return procedure;
    } catch (QueryResultError) {
      return QueryResultError;
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query();
      return procedure;
    } catch (QueryResultError) {
      return QueryResultError;
    }
  }

  async add() {
    try {
      const procedure = await db.query();
      return procedure;
    } catch (QueryResultError) {
      return QueryResultError;
    }
  }

  async remove() {
    try {
      const procedure = await db.query();
      return procedure;
    } catch (QueryResultError) {
      return QueryResultError;
    }
  }
}

module.exports = repository_person;
