const express = require("express")
const AuthController = require("../controllers/authController")
const routes = express.Router()

const authController = new AuthController()

// consulta geral

routes.get("/clients/get/objects", authController.getClient);
routes.get("/staff/get/objects", authController.getStaff);
routes.get("/schedule/get/objects", authController.getSchedule);
routes.get("/procedures/get/objects", authController.getProcedures);
routes.get("/nurses/get/objects", authController.getNurses);
routes.get("/medicalHistory/get/objects", authController.getMedicalHistory);
routes.get("/logins/get/objects", authController.getLogins);
routes.get("/doctors/get/objects", authController.getDoctors);
routes.get("/examsInfo/get/objects", authController.getExamsInfo);


// consulta por id

routes.get("/clients/get/object", authController.getByIDClient);
routes.get("/staff/get/object", authController.getByIDStaff);
routes.get("/schedule/get/object", authController.getByIDSchedule);
routes.get("/procedures/get/object", authController.getByIDProcedures);
routes.get("/nurses/get/object", authController.getByIDNurses);
routes.get("/medicalHistory/get/object", authController.getByIDMedicalHistory);
routes.get("/logins/get/object", authController.getByIDLogins);
routes.get("/doctors/get/object", authController.getByIDDoctors);
routes.get("/examsInfo/get/object", authController.getByIDExamsInfo);
// consulta de id

routes.get("/clients/get/id", authController.getIDClient);
routes.get("/staff/get/id", authController.getIDStaff);
routes.get("/schedule/get/id", authController.getIDSchedule);
routes.get("/procedures/get/id", authController.getIDProcedures);
routes.get("/nurses/get/id", authController.getIDNurses);
routes.get("/medicalHistory/get/id", authController.getIDMedicalHistory);
routes.get("/logins/get/id", authController.getIDLogins);
routes.get("/doctors/get/id", authController.getIDDoctors);
routes.get("/examsInfo/get/id", authController.getIDExamsInfo);


// adicionar novos objetos

routes.post("/clients/post/object", authController.addClient);
routes.post("/staff/post/object", authController.addStaff);
routes.post("/schedule/post/object", authController.addSchedule);
routes.post("/procedures/post/object", authController.addProcedures);
routes.post("/nurses/post/object", authController.addNurses);
routes.post("/medicalHistory/post/object", authController.addMedicalHistory);
routes.post("/logins/post/object", authController.addLogins);
routes.post("/doctors/post/object", authController.addDoctors);
routes.post("/examsInfo/post/object", authController.addExamsInfo);

// remover por id

routes.delete("/clients/delete/object", authController.removeClient);
routes.delete("/staff/delete/object", authController.removeStaff);
routes.delete("/schedule/delete/object", authController.removeSchedule);
routes.delete("/procedures/delete/object", authController.removeProcedures);
routes.delete("/nurses/delete/object", authController.removeNurses);
routes.delete("/medicalHistory/delete/object", authController.removeMedicalHistory);
routes.delete("/logins/delete/object", authController.removeLogins);
routes.delete("/doctors/delete/object", authController.removeDoctors);
routes.delete("/examsInfo/delete/object", authController.removeExamsInfo);

// atualiremovear

routes.patch("/clients/patch/object", authController.updateClient);
routes.patch("/staff/patch/object", authController.updateStaff);
routes.patch("/schedule/patch/object", authController.updateSchedule);
routes.patch("/procedures/patch/object", authController.updateProcedures);
routes.patch("/nurses/patch/object", authController.updateNurses);
routes.patch("/medicalHistory/patch/object", authController.updateMedicalHistory);
routes.patch("/logins/patch/object", authController.updateLogins);
routes.patch("/doctors/patch/object", authController.updateDoctors);
routes.patch("/examsInfo/patch/object", authController.updateExamsInfo);

module.exports = routes;