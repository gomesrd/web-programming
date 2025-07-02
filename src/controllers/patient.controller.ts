import Patient from "../models/patient";
import PatientRepository from "../repositories/patient.repository";
import {Request, Response, NextFunction} from "express";

async function getPatients(req: Request, res: Response, next: NextFunction) {
  const patients = await PatientRepository.getPatients();
  res.status(200).json(patients);
}

async function getPatientById(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  const patient = await PatientRepository.getPatientById(id);

  if (patient)
    res.status(200).json(patient);
  else
    res.sendStatus(404);
}

async function addPatient(req: Request, res: Response, next: NextFunction) {
  const request = req.body as Patient;
  const patient = await PatientRepository.addPatient(request);

  res.status(201).json(patient);
}

function updatePatient(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  const data = req.body as Patient;


  const patient = PatientRepository.updatePatient(id, data);

  if (patient)
    res.status(200).json(patient);
  else
    res.sendStatus(404);
}

async function deletePatient(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);

  if (await PatientRepository.deletePatient(id))
    res.sendStatus(204);
  else
    res.sendStatus(404);
}

export default {
  getPatients,
  getPatientById,
  addPatient,
  updatePatient,
  deletePatient
}