const RepositoryClients = require("../repository/repository_clients");
const RepositoryPersons = require("../repository/repository_persons");
const RepositoryExams = require("../repository/repository_exams");
const RepositoryExamsInfo = require("../repository/repository_exams_info");
const RepositoryLogins = require("../repository/repository_logins");
const RepositoryProcedures = require("../repository/repository_procedures");
const RepositoryStaff = require("../repository/repository_staff");
const RepositoryMedicalHistory = require("../repository/repository_medical_history");
const RepositoryDoctors = require("../repository/repository_doctors");
const RepositoryNurses = require("../repository/repository_nurses");
const RepositoryEmployees = require("../repository/repository_employees");
const RepositorySchedule = require("../repository/repository_schedule");

repositoryClients = new RepositoryClients();
repositoryPersons = new RepositoryPersons();
repositoryExams = new RepositoryExams();
repositoryExamsInfo = new RepositoryExamsInfo();
repositoryLogins = new RepositoryLogins();
repositoryProcedures = new RepositoryProcedures();
repositoryStaff = new RepositoryStaff();
repositoryMedicalHistory = new RepositoryMedicalHistory();
repositoryDoctors = new RepositoryDoctors();
repositoryNurses = new RepositoryNurses();
repositoryEmployees = new RepositoryEmployees();
repositorySchedule = new RepositorySchedule();

class authController {
  /* Client 
  //
  // 
  // Referering to Client related code
  */

  async getClient(req, res) {
    try {
      const response = await repositoryClients.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDClient(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositoryClients.getID(Property, PropertyType);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDClient(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryClients.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addClient(req, res) {
    try {
      const { name, surname, cpf, contact, address } = req.body;

      const response = await repositoryClients.add(
        name,
        surname,
        cpf,
        contact,
        address
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateClient(req, res) {
    try {
      const { id, name, surname, cpf, contact, address } = req.body;

      const response = await repositoryClients.update(
        id,
        name,
        surname,
        cpf,
        contact,
        address
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeClient(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryClients.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  /* Staff 
  //
  // 
  // Referering to Staff related code
  */

  async getStaff(req, res) {
    try {
      const response = await repositoryStaff.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDStaff(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositoryStaff.getID(Property, PropertyType);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDStaff(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryStaff.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addStaff(req, res) {
    try {
      const { id_employee } = req.body;

      const response = await repositoryStaff.add(id_employee);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateStaff(req, res) {
    try {
      const { id, id_employee } = req.body;

      const response = await repositoryStaff.update(id, id_employee);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeStaff(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryStaff.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  /* Schedule 
  //
  // 
  // Referering to Schedule related code
  */

  async getSchedule(req, res) {
    try {
      const response = await repositorySchedule.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDSchedule(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositorySchedule.getID(Property, PropertyType);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDSchedule(req, res) {
    try {
      const { id } = req.body;

      const response = await repositorySchedule.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addSchedule(req, res) {
    try {
      const { id_employee, sun, mon, tues, wed, thu, fri, sat } = req.body;

      const response = await repositorySchedule.add(
        id_employee,
        sun,
        mon,
        tues,
        wed,
        thu,
        fri,
        sat
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateSchedule(req, res) {
    try {
      const { id, id_employee, sun, mon, tues, wed, thu, fri, sat } = req.body;

      const response = await repositorySchedule.update(
        id,
        id_employee,
        sun,
        mon,
        tues,
        wed,
        thu,
        fri,
        sat
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeSchedule(req, res) {
    try {
      const { id } = req.body;

      const response = await repositorySchedule.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  /* Procedures 
  //
  // 
  // Referering to Procedures related code
  */

  async getProcedures(req, res) {
    try {
      const response = await repositoryProcedures.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDProcedures(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositoryProcedures.getID(Property, PropertyType);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDProcedures(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryProcedures.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addProcedures(req, res) {
    try {
      const { desc, price, id_doctor } = req.body;

      const response = await repositoryProcedures.add(desc, price, id_doctor);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateProcedures(req, res) {
    try {
      const { id, desc, price, id_doctor } = req.body;

      const response = await repositoryProcedures.update(
        id,
        desc,
        price,
        id_doctor
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeProcedures(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryProcedures.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  /* Nurses 
  //
  // 
  // Referering to Nurses related code
  */

  async getNurses(req, res) {
    try {
      const response = await repositoryNurses.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDNurses(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositoryNurses.getID(Property, PropertyType);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDNurses(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryNurses.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addNurses(req, res) {
    try {
      const { degree, id_employee } = req.body;

      const response = await repositoryNurses.add(degree, id_employee);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateNurses(req, res) {
    try {
      const { id, degree, id_employee } = req.body;

      const response = await repositoryNurses.update(id, degree, id_employee);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeNurses(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryNurses.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  /* Medical_History 
  //
  // 
  // Referering to Medical_History related code
  */

  async getMedicalHistory(req, res) {
    try {
      const response = await repositoryMedicalHistory.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDMedicalHistory(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositoryMedicalHistory.getID(
        Property,
        PropertyType
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDMedicalHistory(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryMedicalHistory.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addMedicalHistory(req, res) {
    try {
      const { id_client, entry, time } = req.body;

      const response = await repositoryMedicalHistory.add(
        id_client,
        entry,
        time
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateMedicalHistory(req, res) {
    try {
      const { id, id_client, entry, time } = req.body;

      const response = await repositoryMedicalHistory.update(
        id,
        id_client,
        entry,
        time
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeMedicalHistory(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryMedicalHistory.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  /* Logins 
  //
  // 
  // Referering to Logins related code
  */

  async getLogins(req, res) {
    try {
      const response = await repositoryLogins.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDLogins(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositoryLogins.getID(Property, PropertyType);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDLogins(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryLogins.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addLogins(req, res) {
    try {
      const { login, password, token, id_person } = req.body;

      const response = await repositoryLogins.add(
        login,
        password,
        token,
        id_person
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateLogins(req, res) {
    try {
      const { id, login, password, token, id_person } = req.body;

      const response = await repositoryLogins.update(
        id,
        login,
        password,
        token,
        id_person
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeLogins(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryLogins.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  /* exams_info 
  //
  // 
  // Referering to exams_info related code
  */

  async getExamsInfo(req, res) {
    try {
      const response = await repositoryExamsInfo.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDExamsInfo(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositoryExamsInfo.getID(Property, PropertyType);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDExamsInfo(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryExamsInfo.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addExamsInfo(req, res) {
    try {
      const { id_client, id_doctor, id_exam_info } = req.body;

      const response = await repositoryExamsInfo.add(
        id_client,
        id_doctor,
        id_exam_info
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateExamsInfo(req, res) {
    try {
      const { id, id_client, id_doctor, id_exam_info } = req.body;

      const response = await repositoryExamsInfo.update(
        id,
        id_client,
        id_doctor,
        id_exam_info
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeExamsInfo(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryExamsInfo.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  /* doctors
  //
  // 
  // Referering to doctors related code
  */

  async getDoctors(req, res) {
    try {
      const response = await repositoryDoctors.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getIDDoctors(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repositoryDoctors.getID(Property, PropertyType);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByIDDoctors(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryDoctors.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async addDoctors(req, res) {
    try {
      const { name, surname, cpf, contact, address, crm, degree, role } =
        req.body;

      const response = await repositoryDoctors.add(
        name,
        surname,
        cpf,
        contact,
        address,
        crm,
        degree,
        role
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async updateDoctors(req, res) {
    try {
      const { id, crm, degree, id_employee, id_login } = req.body;

      const response = await repositoryDoctors.update(
        id,
        crm,
        degree,
        id_employee,
        id_login
      );

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async removeDoctors(req, res) {
    try {
      const { id } = req.body;

      const response = await repositoryDoctors.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }
}

module.exports = authController;
