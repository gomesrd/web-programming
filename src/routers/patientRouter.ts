import express from "express";
import PatientController from "../controllers/patientController";

const router = express.Router();

router.get("/", PatientController.getPatients);
router.get("/:id", PatientController.getPatientById)
router.post("/", PatientController.addPatient);
router.put("/:id", PatientController.updatePatient)

export default router;