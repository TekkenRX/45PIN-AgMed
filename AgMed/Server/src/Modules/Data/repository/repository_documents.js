const db = require("../database/database");
const modelDocuments = require("../model/model_documents");

class repository_documents {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_documents");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async getModel() {
    try {
      const procedure = modelDocuments;
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_documents where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_documents where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async add(cpf, rg) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_documents (id, cpf, rg) VALUES (DEFAULT, '" + cpf +"', '" + rg + "')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query("DELETE FROM table_documents WHERE id = '"+id+"'");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }
}

module.exports = repository_documents;
