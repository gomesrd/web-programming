import express from "express";
import PatientController from "../controllers/patient.controller";

const router = express.Router();

router.get("/", PatientController.getPatients);
router.get("/:id", PatientController.getPatientById)
router.post("/", PatientController.addPatient);
router.patch("/:id", PatientController.updatePatient);
router.delete("/:id", PatientController.deletePatient);


export default router;