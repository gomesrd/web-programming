import Patient from "../models/patient";
import patientRepository from "../repositories/patientRepository";
import {Request, Response, NextFunction} from "express";

async function getPatients(req: Request, res: Response, next: NextFunction) {
  const patients = await patientRepository.getPatients();
  res.status(200).json(patients);
}

async function getPatientById(req: Request, res: Response, next: NextFunction) {
  const patient = await patientRepository.getPatientById(Number(req.params.id));
  res.status(200).json(patient);
}

async function addPatient(req: Request, res: Response, next: NextFunction) {
  const request = req.body as Patient;
  const patient = await patientRepository.addPatient(request);

  res.status(201).json(patient);
}

function updatePatient(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id);
  const request = req.body as Patient;


  const patient = patientRepository.updatePatient(id, request);

  if (patient)
    res.json(patient);
  else
    res.sendStatus(404);
}

export default {
  getPatients,
  getPatientById,
  addPatient,
  updatePatient
}