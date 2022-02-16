const db = require("../database/database");

class repository_schedule {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_schedule");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_schedule";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_schedule where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_schedule";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_schedule where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_schedule";
    }
  }

  async add(id_employee, sun, mon, tues, wed, thu, fri, sat) {
    try {
        if(sun === ""){
            sun = null
        }
        if(mon === ""){
            mon = null
        }
        if(tues === ""){
            tues = null
        }
        if(wed === ""){
            wed = null
        }
        if(thu === ""){
            thu = null
        }
        if(fri === ""){
            fri = null
        }
        if(sat === ""){
            sat = null
        }
      const procedure = await db.query(
        "INSERT INTO table_schedule (id, id_employee, sun, mon, tues, wed, thu, fri, sat)" +
          "VALUES (DEFAULT, '"+id_employee+"', '"+sun+"', '"+mon+"', '"+tues+"', '"+wed+"', '"+thu+"', '"+fri+"', '"+sat+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_schedule";
    }
  }

  async update(id, id_employee, sun, mon, tues, wed, thu, fri, sat) {
    try {
      const procedure = await db.query(
        "UPDATE table_schedule" +
          " SET " +

          "id_employee ="+
            "'"+id_employee+"'"+

            ", sun = "+
            "'"+sun+"'"+

            ", mon = "+
            "'"+mon+"'"+

            ", tues = "+
            "'"+tues+"'"+

            ", wed = "+
            "'"+wed+"'"+

            ", thu = "+
            "'"+thu+"'"+

            ", fri = "+
            "'"+fri+"'"+

            ", sat = "+
            "'"+sat+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_schedule";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_schedule WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_schedule";
    }
  }
}

module.exports = repository_schedule;