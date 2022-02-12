const db = require("../database/database");


class repository_documents {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_documents");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_documents";
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
      return "QueryResultError FROM table_documents";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_documents where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_documents";
    }
  }

  async add(cpf, rg) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_documents (id, cpf, rg) VALUES (DEFAULT, '" + cpf +"', '" + rg + "')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_documents";
    }
  }

  async update(id, cpf, rg) {
    try {
      const procedure = await db.query(
        "UPDATE table_documents SET cpf = '"+cpf+"', rg  = '"+rg+"' WHERE id = '"+id+"'");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_documents";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query("DELETE FROM table_documents WHERE id = '"+id+"'");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_documents";
    }
  }
}

module.exports = repository_documents;
