const express = require("express")
const AuthController = require("../controllers/authController")
const routes = express.Router()

const authController = new AuthController()

// consulta geral
routes.get("/addresses/get/objects", authController.getAddress);
routes.get("/clients/get/objects", authController.getClient);
routes.get("/documents/get/objects", authController.getDocuments);
routes.get("/contacts/get/objects", authController.getContacts);
routes.get("/persons/get/objects", authController.getPersons);
routes.get("/staff/get/objects", authController.getStaff);
routes.get("/schedule/get/objects", authController.getSchedule);
routes.get("/procedures/get/objects", authController.getProcedures);
routes.get("/nurses/get/objects", authController.getNurses);
routes.get("/medicalHistory/get/objects", authController.getMedicalHistory);
routes.get("/logins/get/objects", authController.getLogins);
routes.get("/doctors/get/objects", authController.getDoctors);
routes.get("/exams/get/objects", authController.getExams);
routes.get("/examsInfo/get/objects", authController.getExamsInfo);
routes.get("/employees/get/objects", authController.getEmployees);

// consulta por id

routes.get("/addresses/get/object", authController.getByIDAddress);
routes.get("/clients/get/object", authController.getByIDClient);
routes.get("/documents/get/object", authController.getByIDDocuments);
routes.get("/contacts/get/object", authController.getByIDContacts);
routes.get("/persons/get/object", authController.getByIDPersons);
routes.get("/staff/get/object", authController.getByIDStaff);
routes.get("/schedule/get/object", authController.getByIDSchedule);
routes.get("/procedures/get/object", authController.getByIDProcedures);
routes.get("/nurses/get/object", authController.getByIDNurses);
routes.get("/medicalHistory/get/object", authController.getByIDMedicalHistory);
routes.get("/logins/get/object", authController.getByIDLogins);
routes.get("/doctors/get/object", authController.getByIDDoctors);
routes.get("/exams/get/object", authController.getByIDExams);
routes.get("/examsInfo/get/object", authController.getByIDExamsInfo);
routes.get("/employees/get/object", authController.getByIDEmployees);

// consulta de id

routes.get("/addresses/get/id", authController.getIDAddress);
routes.get("/clients/get/id", authController.getIDClient);
routes.get("/documents/get/id", authController.getIDDocuments);
routes.get("/contacts/get/id", authController.getIDContacts);
routes.get("/persons/get/id", authController.getIDPersons);
routes.get("/staff/get/id", authController.getIDStaff);
routes.get("/schedule/get/id", authController.getIDSchedule);
routes.get("/procedures/get/id", authController.getIDProcedures);
routes.get("/nurses/get/id", authController.getIDNurses);
routes.get("/medicalHistory/get/id", authController.getIDMedicalHistory);
routes.get("/logins/get/id", authController.getIDLogins);
routes.get("/doctors/get/id", authController.getIDDoctors);
routes.get("/exams/get/id", authController.getIDExams);
routes.get("/examsInfo/get/id", authController.getIDExamsInfo);
routes.get("/employees/get/id", authController.getIDEmployees);


// adicionar novos objetos

routes.post("/addresses/post/object", authController.addAddress);
routes.post("/clients/post/object", authController.addClient);
routes.post("/documents/post/object", authController.addDocuments);
routes.post("/contacts/post/object", authController.addContacts);
routes.post("/persons/post/object", authController.addPersons);
routes.post("/persons/post/objectfull", authController.addComposedPersons);
routes.post("/staff/get/object", authController.addStaff);
routes.post("/schedule/get/object", authController.addSchedule);
routes.post("/procedures/get/object", authController.addProcedures);
routes.post("/nurses/get/object", authController.addNurses);
routes.post("/medicalHistory/get/object", authController.addMedicalHistory);
routes.post("/logins/get/object", authController.addLogins);
routes.post("/doctors/get/object", authController.addDoctors);
routes.post("/exams/get/object", authController.addExams);
routes.post("/examsInfo/get/object", authController.addExamsInfo);
routes.post("/employees/get/object", authController.addEmployees);

// remover por id

routes.delete("/addresses/delete/object", authController.removeAddress);
routes.delete("/clients/delete/object", authController.removeClient);
routes.delete("/documents/delete/object", authController.removeDocuments);
routes.delete("/contacts/delete/object", authController.removeContacts);
routes.delete("/persons/delete/object", authController.removePersons);
routes.delete("/staff/get/object", authController.removeStaff);
routes.delete("/schedule/get/object", authController.removeSchedule);
routes.delete("/procedures/get/object", authController.removeProcedures);
routes.delete("/nurses/get/object", authController.removeNurses);
routes.delete("/medicalHistory/get/object", authController.removeMedicalHistory);
routes.delete("/logins/get/object", authController.removeLogins);
routes.delete("/doctors/get/object", authController.removeDoctors);
routes.delete("/exams/get/object", authController.removeExams);
routes.delete("/examsInfo/get/object", authController.removeExamsInfo);
routes.delete("/employees/get/object", authController.removeEmployees);

// atualiremovear

routes.patch("/addresses/patch/object", authController.updateAddress);
routes.patch("/clients/patch/object", authController.updateClient);
routes.patch("/documents/patch/object", authController.updateDocuments);
routes.patch("/contacts/patch/object", authController.updateContacts);
routes.patch("/persons/patch/object", authController.updatePersons);
routes.patch("/staff/get/object", authController.updateStaff);
routes.patch("/schedule/get/object", authController.updateSchedule);
routes.patch("/procedures/get/object", authController.updateProcedures);
routes.patch("/nurses/get/object", authController.updateNurses);
routes.patch("/medicalHistory/get/object", authController.updateMedicalHistory);
routes.patch("/logins/get/object", authController.updateLogins);
routes.patch("/doctors/get/object", authController.updateDoctors);
routes.patch("/exams/get/object", authController.updateExams);
routes.patch("/examsInfo/get/object", authController.updateExamsInfo);
routes.patch("/employees/get/object", authController.updateEmployees);

module.exports = routes;