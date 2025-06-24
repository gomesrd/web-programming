import express from "express";
import PatientController from "../controllers/PatientController";

const router = express.Router();

router.get("/", PatientController.getPatients);
router.post("/", PatientController.addPatient);
router.put("/:id", PatientController.updatePatient)

export default router;