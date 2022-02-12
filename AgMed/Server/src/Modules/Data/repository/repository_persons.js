const db = require("../database/database");

class repository_persons {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_persons");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_persons";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_persons where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_persons";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_persons where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_persons";
    }
  }

  async add(id_documents, id_address, id_contacts, name, surname) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_persons (id, id_documents, id_address, id_contacts, name, surname)" +
          "VALUES (DEFAULT, '"+id_documents+"', '"+id_address+"', '"+id_contacts+"', '"+name+"', '"+surname+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_persons";
    }
  }

  async update(id, id_documents, id_address, id_contacts, name, surname) {
    try {
      const procedure = await db.query(
        "UPDATE table_persons" +
          " SET " +

          "id_documents ="+
            "'"+id_documents+"'"+

            ", id_address = "+
            "'"+id_address+"'"+

            ", id_contacts = "+
            "'"+id_contacts+"'"+

            ", name = "+
            "'"+name+"'"+

            ", surname = "+
            "'"+surname+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_persons";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_persons WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_persons";
    }
  }
}

module.exports = repository_persons;
